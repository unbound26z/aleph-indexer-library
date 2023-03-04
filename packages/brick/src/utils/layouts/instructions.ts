import { EventBase } from '@aleph-indexer/framework'
import * as solita from './solita/index.js'
import { PublicKey } from '@solana/web3.js'

export enum InstructionType {
  CreateAsset = 'CreateAssetEvent',
  EditAssetPrice = 'EditAssetPriceEvent',
  BuyAsset = 'BuyAssetEvent',
  ShareAsset = 'ShareAssetEvent',
  WithdrawFunds = 'WithdrawFundsEvent',
  Refund = 'RefundEvent',
  UseAsset = 'UseAssetEvent',
  DeleteAsset = 'DeleteAssetEvent',
}

export type InstructionBase = EventBase<InstructionType> & {
  programId: string
  signer: string
  account: string
}

/*-----------------------* CUSTOM EVENTS TYPES *-----------------------*/

export type CreateAssetEventData = {
  hashId: string
  appName: string
  itemHash: string
  timestampFundsVault: BN
  tokenPrice: number
  exemplars: number
  quantityPerExemplars: number
  tokenName: string
  tokenSymbol: string
  tokenUri: string
}

export type CreateAssetInfo = {
  data: CreateAssetEventData
  accounts: solita.CreateAssetInstructionAccounts
}

export type CreateAssetEvent = InstructionBase &
  CreateAssetInfo & {
    type: InstructionType.CreateAsset
  }

/*----------------------------------------------------------------------*/

export type EditAssetPriceEventData = {
  tokenPrice: number
}

export type EditAssetPriceInfo = {
  data: EditAssetPriceEventData
  accounts: solita.EditAssetPriceInstructionAccounts
}

export type EditAssetPriceEvent = InstructionBase &
  EditAssetPriceInfo & {
    type: InstructionType.EditAssetPrice
  }

/*----------------------------------------------------------------------*/

export type BuyAssetEventData = {
  timestamp: BN
  exemplars: number
}

export type BuyAssetInfo = {
  data: BuyAssetEventData
  accounts: solita.BuyAssetInstructionAccounts
}

export type BuyAssetEvent = InstructionBase &
  BuyAssetInfo & {
    type: InstructionType.BuyAsset
  }

/*----------------------------------------------------------------------*/

export type ShareAssetEventData = {
  exemplars: number
}

export type ShareAssetInfo = {
  data: ShareAssetEventData
  accounts: solita.ShareAssetInstructionAccounts
}

export type ShareAssetEvent = InstructionBase &
  ShareAssetInfo & {
    type: InstructionType.ShareAsset
  }

/*----------------------------------------------------------------------*/

export type WithdrawFundsInfo = {
  accounts: solita.WithdrawFundsInstructionAccounts
}

export type WithdrawFundsEvent = InstructionBase &
  WithdrawFundsInfo & {
    type: InstructionType.WithdrawFunds
  }

/*----------------------------------------------------------------------*/

export type RefundInfo = {
  accounts: solita.RefundInstructionAccounts
}

export type RefundEvent = InstructionBase &
  RefundInfo & {
    type: InstructionType.Refund
  }

/*----------------------------------------------------------------------*/

export type UseAssetEventData = {
  exemplars: number
}

export type UseAssetInfo = {
  data: UseAssetEventData
  accounts: solita.UseAssetInstructionAccounts
}

export type UseAssetEvent = InstructionBase &
  UseAssetInfo & {
    type: InstructionType.UseAsset
  }

/*----------------------------------------------------------------------*/

export type DeleteAssetInfo = {
  accounts: solita.DeleteAssetInstructionAccounts
}

export type DeleteAssetEvent = InstructionBase &
  DeleteAssetInfo & {
    type: InstructionType.DeleteAsset
  }

/*----------------------------------------------------------------------*/

export function getInstructionType(data: Buffer): InstructionType | undefined {
  const discriminator = data.slice(0, 8)
  return IX_METHOD_CODE.get(discriminator.toString('ascii'))
}

export const IX_METHOD_CODE: Map<string, InstructionType | undefined> = new Map<
  string,
  InstructionType | undefined
>([
  [
    Buffer.from(solita.createAssetInstructionDiscriminator).toString('ascii'),
    InstructionType.CreateAsset,
  ],
  [
    Buffer.from(solita.editAssetPriceInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.EditAssetPrice,
  ],
  [
    Buffer.from(solita.buyAssetInstructionDiscriminator).toString('ascii'),
    InstructionType.BuyAsset,
  ],
  [
    Buffer.from(solita.shareAssetInstructionDiscriminator).toString('ascii'),
    InstructionType.ShareAsset,
  ],
  [
    Buffer.from(solita.withdrawFundsInstructionDiscriminator).toString('ascii'),
    InstructionType.WithdrawFunds,
  ],
  [
    Buffer.from(solita.refundInstructionDiscriminator).toString('ascii'),
    InstructionType.Refund,
  ],
  [
    Buffer.from(solita.useAssetInstructionDiscriminator).toString('ascii'),
    InstructionType.UseAsset,
  ],
  [
    Buffer.from(solita.deleteAssetInstructionDiscriminator).toString('ascii'),
    InstructionType.DeleteAsset,
  ],
])
export const IX_DATA_LAYOUT: Partial<Record<InstructionType, any>> = {
  [InstructionType.CreateAsset]: solita.createAssetStruct,
  [InstructionType.EditAssetPrice]: solita.editAssetPriceStruct,
  [InstructionType.BuyAsset]: solita.buyAssetStruct,
  [InstructionType.ShareAsset]: solita.shareAssetStruct,
  [InstructionType.WithdrawFunds]: solita.withdrawFundsStruct,
  [InstructionType.Refund]: solita.refundStruct,
  [InstructionType.UseAsset]: solita.useAssetStruct,
  [InstructionType.DeleteAsset]: solita.deleteAssetStruct,
}

export const IX_ACCOUNTS_LAYOUT: Partial<Record<InstructionType, any>> = {
  [InstructionType.CreateAsset]: solita.CreateAssetAccounts,
  [InstructionType.EditAssetPrice]: solita.EditAssetPriceAccounts,
  [InstructionType.BuyAsset]: solita.BuyAssetAccounts,
  [InstructionType.ShareAsset]: solita.ShareAssetAccounts,
  [InstructionType.WithdrawFunds]: solita.WithdrawFundsAccounts,
  [InstructionType.Refund]: solita.RefundAccounts,
  [InstructionType.UseAsset]: solita.UseAssetAccounts,
  [InstructionType.DeleteAsset]: solita.DeleteAssetAccounts,
}

export type ParsedEventsInfo =
  | CreateAssetInfo
  | EditAssetPriceInfo
  | BuyAssetInfo
  | ShareAssetInfo
  | WithdrawFundsInfo
  | RefundInfo
  | UseAssetInfo
  | DeleteAssetInfo

export type ParsedEvents =
  | CreateAssetEvent
  | EditAssetPriceEvent
  | BuyAssetEvent
  | ShareAssetEvent
  | WithdrawFundsEvent
  | RefundEvent
  | UseAssetEvent
  | DeleteAssetEvent
