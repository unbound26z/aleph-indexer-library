import {
  SolanaParsedEvent,
  SolanaParsedInstructionContext,
} from '@aleph-indexer/solana'
import { SOLAccount } from 'aleph-sdk-ts/dist/accounts/solana.js'
import { ItemType } from 'aleph-sdk-ts/dist/messages/message.js'
import { Publish, Get } from "aleph-sdk-ts/dist/messages/post/index.js"
import { AccountDomain } from '../domain/account.js'
import { AlephDataSetContent } from '../types.js'
import {
  ParsedEvents,
  ParsedEventsInfo,
  InstructionType,
  CreateAppEvent,
  CreateAppInstructionAccounts,
  CreateTokenInstructionAccounts,
  TokenMetadata,
  ParsedTokenMetadata,
} from '../utils/layouts/index.js'

export class EventParser {
  async parse(ixCtx: SolanaParsedInstructionContext, accounts: Record<string, AccountDomain>, account: SOLAccount): Promise<ParsedEvents> {
    const { instruction, parentTransaction, parentInstruction } = ixCtx
    const parsed = (instruction as SolanaParsedEvent<InstructionType, ParsedEventsInfo>)
      .parsed

    const id = `${parentTransaction.signature}${
      parentInstruction ? ` :${parentInstruction.index.toString().padStart(2, '0')}` : ''
    }:${instruction.index.toString().padStart(2, '0')}`

    const timestamp = parentTransaction.blockTime
      ? parentTransaction.blockTime * 1000
      : parentTransaction.slot

    const baseEvent = {
      ...parsed.info,
      id,
      timestamp,
      type: parsed.type,
      signer: parsed.info.accounts.authority.toString(),
    }
    console.log('baseEvent', baseEvent)

    if (parsed.type === InstructionType.CreateApp) {
      return {
        account: (parsed.info.accounts as CreateAppInstructionAccounts).app.toString(),
        ...baseEvent,
      } as CreateAppEvent
    }
    else {
      const tokenAccount = (parsed.info.accounts as CreateTokenInstructionAccounts).token.toString()
      const appAddress = (accounts[tokenAccount].info.data as ParsedTokenMetadata).app.toString()
      const seller = (accounts[tokenAccount].info.data as ParsedTokenMetadata).authority.toString()
      if (parsed.type === InstructionType.UseToken && appAddress === '3zDf4PEpshwWuv5EL9NVwZ6wE5tKSqT6Erbr46zpeVuz') {
        const hash1 = (accounts[tokenAccount].info.data as ParsedTokenMetadata).offChainId.toString()
        const hash2 = (accounts[tokenAccount].info.data as ParsedTokenMetadata).offChainId2.toString()
        const dataSet = await Get<AlephDataSetContent>({
          types: 'Dataset',
          pagination: 1,
          page: 1,
          hashes: [hash1 + hash2],
          APIServer: "https://api2.aleph.im",
        })
        const timeseriesIds = dataSet.posts[0].content.timeseriesIDs
        for (const id of timeseriesIds) {
          await Publish({
            account: account,
            postType: 'Permission',
            content: {
              timeseriesID: id,
              autorizer: seller, // solana account that lists the token
              status: "GRANTED",
              executionCount: 0,
              maxExecutionCount: -1,
              requestor: parsed.info.accounts.authority.toString(), // solana address that burns the token
            },
            channel: 'FISHNET_TEST_V1', // need the gud channel
            APIServer: 'https://api2.aleph.im',
            inlineRequested: true,
            storageEngine: ItemType.inline
          })
        }
        
      }
      return {
        account: (parsed.info.accounts as CreateTokenInstructionAccounts).token.toString(),
        ...baseEvent,
      } as ParsedEvents
    }
  }
}

export const eventParser = new EventParser()
export default eventParser

