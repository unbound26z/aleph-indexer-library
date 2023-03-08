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

export class EventParser {
  parse(ixCtx: SolanaParsedInstructionContext, accounts: Record<string, AccountDomain>): ParsedEvents {
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
      return {
        id,
        timestamp,
        type: parsed.type,
        account: tokenAccount,
        signer: (accounts[tokenAccount].info.data as TokenMetadataArgs).authority.toString(),
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
