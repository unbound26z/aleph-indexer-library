import {
  SolanaParsedInstructionContext,
  SolanaParsedEvent,
} from '@aleph-indexer/solana'
import { AccountDomain } from '../domain/account.js'

import {
  ParsedEvents,
  ParsedEventsInfo,
  InstructionType,
  CreateAssetEvent,
  EditAssetPriceEvent,
  BuyAssetEvent,
  ShareAssetEvent,
  WithdrawFundsEvent,
  RefundEvent,
  UseAssetEvent,
  DeleteAssetEvent,
  UseAssetInfo,
  AssetArgs,
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

    const baseEvent = {
      ...parsed.info,
      id,
      timestamp,
      type: parsed.type,
      account: txContext.parserContext.account,
      signer: txContext.tx.parsed.message.accountKeys[0].pubkey,
    }

    if (parsed.type == InstructionType.UseAsset) {
      const assetAddress = 
      const signer = (accounts[assetAddress].info.data as AssetArgs).authority

      return baseEvent as UseAssetEvent
    } else {
      return baseEvent as ParsedEvents
    }
  }
}

export const eventParser = new EventParser()
export default eventParser
