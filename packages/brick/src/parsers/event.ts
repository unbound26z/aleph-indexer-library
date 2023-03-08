import {
  SolanaParsedInstructionContext,
  SolanaParsedEvent,
} from '@aleph-indexer/solana'
import { AccountDomain } from '../domain/account.js'
import {
  ParsedEvents,
  ParsedEventsInfo,
  InstructionType,
  UseAssetEvent,
  AssetArgs,
  UseAssetInfo,
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

    if (parsed.type == InstructionType.UseAsset) {
      return {
        id,
        timestamp,
        type: parsed.type,
        account: parsed.info.accounts.asset.toString(),
        signer: (accounts[parsed.info.accounts.asset.toString()].info.data as AssetArgs).authority.toString(),
        ...parsed.info as UseAssetInfo,
      } as UseAssetEvent
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
