import {
  SolanaParsedInstructionContext,
  SolanaParsedEvent,
} from '@aleph-indexer/solana'
import { AccountDomain } from '../domain/account.js'
import {
  ParsedEvents,
  ParsedEventsInfo,
  InstructionType,
  UseTokenEvent,
  TokenMetadataArgs,
  UseTokenInfo,
  UseTokenInstructionAccounts,
} from '../utils/layouts/index.js'
import { Publish } from "aleph-sdk-ts/dist/messages/post"
import { ItemType } from "aleph-sdk-ts/dist/messages/message";
import { ImportAccountFromPrivateKey } from 'aleph-sdk-ts/dist/accounts/solana'
import dotenv from 'dotenv'
dotenv.config()

export class EventParser {
  protected account = ImportAccountFromPrivateKey(Uint8Array.from(process.env.MESSAGES_KEY.slice(0, 32)))
  
  async parse(ixCtx: SolanaParsedInstructionContext, accounts: Record<string, AccountDomain>): Promise<ParsedEvents> {
    const { instruction, parentTransaction, parentInstruction } = ixCtx
    const parsed = (instruction as SolanaParsedEvent<InstructionType, ParsedEventsInfo>)
      .parsed

    const id = `${parentTransaction.signature}${
      parentInstruction ? ` :${parentInstruction.index.toString().padStart(2, '0')}` : ''
    }:${instruction.index.toString().padStart(2, '0')}`

    const timestamp = parentTransaction.blockTime
      ? parentTransaction.blockTime * 1000
      : parentTransaction.slot

    if (parsed.type == InstructionType.UseToken) {
      const tokenAccount = (parsed.info.accounts as UseTokenInstructionAccounts).token.toString()
      const signer = (accounts[tokenAccount].info.data as TokenMetadataArgs).authority.toString()

      await Publish({
        account: this.account,
        postType: 'Permission',
        content: {
          offChainId: (accounts[tokenAccount].info.data as TokenMetadataArgs).offChainId.toString(), 
          tokenAccount: tokenAccount,
          signer: signer,
        },
        channel: 'Brick',
        APIServer: 'https://api2.aleph.im',
        inlineRequested: true,
        storageEngine: ItemType.inline
      })

      return {
        id,
        timestamp,
        type: parsed.type,
        account: tokenAccount,
        signer: signer,
        ...parsed.info as UseTokenInfo,
      } as UseTokenEvent
    } else {
      return {
        id,
        timestamp,
        type: parsed.type,
        ...parsed.info,
      } as ParsedEvents
    }
  }
}

export const eventParser = new EventParser()
export default eventParser
