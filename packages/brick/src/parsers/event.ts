import {
  SolanaInstructionContext,
  SolanaParsedEvent,
} from '@aleph-indexer/solana'

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
} from '../utils/layouts/index.js'

export class EventParser {
  parse(ixCtx: SolanaInstructionContext): ParsedEvents {
    const { ix, parentIx, txContext } = ixCtx
    const parsed = (ix as SolanaParsedEvent<InstructionType, ParsedEventsInfo>)
      .parsed

    const id = `${txContext.tx.signature}${
      parentIx ? ` :${parentIx.index.toString().padStart(2, '0')}` : ''
    }:${ix.index.toString().padStart(2, '0')}`

    const timestamp = txContext.tx.blockTime
      ? txContext.tx.blockTime * 1000
      : txContext.tx.slot

    const baseEvent = {
      ...parsed.info,
      id,
      timestamp,
      type: parsed.type,
      account: txContext.parserContext.account,
      signer: txContext.tx.parsed.message.accountKeys[0].pubkey,
    }

    try {
      switch (parsed.type) {
        case InstructionType.CreateAsset:
          return {
            ...baseEvent,
          } as CreateAssetEvent
        case InstructionType.EditAssetPrice:
          return {
            ...baseEvent,
          } as EditAssetPriceEvent
        case InstructionType.BuyAsset:
          return {
            ...baseEvent,
          } as BuyAssetEvent
        case InstructionType.ShareAsset:
          return {
            ...baseEvent,
          } as ShareAssetEvent
        case InstructionType.WithdrawFunds:
          return {
            ...baseEvent,
          } as WithdrawFundsEvent
        case InstructionType.Refund:
          return {
            ...baseEvent,
          } as RefundEvent
        case InstructionType.UseAsset:
          return {
            ...baseEvent,
          } as UseAssetEvent
        case InstructionType.DeleteAsset:
          return {
            ...baseEvent,
          } as DeleteAssetEvent

        default: {
          console.log('default -> ', parsed.type, id)
          return baseEvent as ParsedEvents
        }
      }
    } catch (e) {
      console.log('error -> ', parsed.type, id, e)
      throw e
    }
  }
}

export const eventParser = new EventParser()
export default eventParser
