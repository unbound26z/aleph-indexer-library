import { GraphQLBoolean, GraphQLInt } from 'graphql'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInterfaceType,
  GraphQLUnionType,
} from 'graphql'
import { GraphQLBigNumber, GraphQLLong, GraphQLJSON } from '@aleph-indexer/core'
import { InstructionType } from '../utils/layouts/index.js'

// ------------------- TYPES ---------------------------

// ------------------- STATS ---------------------------

export const AccessTimeStats = new GraphQLObjectType({
  name: 'MarinadeFinanceInfo',
  fields: {
    accesses: { type: new GraphQLNonNull(GraphQLInt) },
    accessesByProgramId: { type: new GraphQLNonNull(GraphQLJSON) },
    startTimestamp: { type: new GraphQLNonNull(GraphQLLong) },
    endTimestamp: { type: new GraphQLNonNull(GraphQLLong) },
  },
})

export const TotalAccounts = new GraphQLObjectType({
  name: 'TotalAccounts',
  fields: {
    Asset: { type: new GraphQLNonNull(GraphQLInt) },
    Payment: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const GlobalBrickStats = new GraphQLObjectType({
  name: 'GlobalBrickStats',
  fields: {
    totalAccounts: { type: new GraphQLNonNull(TotalAccounts) },
    totalAccesses: { type: new GraphQLNonNull(GraphQLInt) },
    totalAccessesByProgramId: { type: new GraphQLNonNull(GraphQLJSON) },
    startTimestamp: { type: new GraphQLNonNull(GraphQLLong) },
    endTimestamp: { type: new GraphQLNonNull(GraphQLLong) },
  },
})

export const BrickStats = new GraphQLObjectType({
  name: 'BrickStats',
  fields: {
    last1h: { type: AccessTimeStats },
    last24h: { type: AccessTimeStats },
    last7d: { type: AccessTimeStats },
    total: { type: AccessTimeStats },
  },
})

// ------------------- ACCOUNTS ---------------------------

export const AccountsEnum = new GraphQLEnumType({
  name: 'AccountsEnum',
  values: {
    Asset: { value: 'Asset' },
    Payment: { value: 'Payment' },
  },
})

export const Asset = new GraphQLObjectType({
  name: 'Asset',
  fields: {
    appName: { type: new GraphQLNonNull(GraphQLString) },
    hashId: { type: new GraphQLNonNull(GraphQLString) },
    itemHash: { type: new GraphQLNonNull(GraphQLString) },
    acceptedMint: { type: new GraphQLNonNull(GraphQLString) },
    assetMint: { type: new GraphQLNonNull(GraphQLString) },
    authority: { type: new GraphQLNonNull(GraphQLString) },
    timestampFundsVault: { type: new GraphQLNonNull(GraphQLBigNumber) },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    sold: { type: new GraphQLNonNull(GraphQLInt) },
    used: { type: new GraphQLNonNull(GraphQLInt) },
    shared: { type: new GraphQLNonNull(GraphQLInt) },
    refunded: { type: new GraphQLNonNull(GraphQLInt) },
    exemplars: { type: new GraphQLNonNull(GraphQLInt) },
    quantityPerExemplars: { type: new GraphQLNonNull(GraphQLInt) },
    bump: { type: new GraphQLNonNull(GraphQLInt) },
    mintBump: { type: new GraphQLNonNull(GraphQLInt) },
    metadataBump: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const Payment = new GraphQLObjectType({
  name: 'Payment',
  fields: {
    assetMint: { type: new GraphQLNonNull(GraphQLString) },
    seller: { type: new GraphQLNonNull(GraphQLString) },
    buyer: { type: new GraphQLNonNull(GraphQLString) },
    exemplars: { type: new GraphQLNonNull(GraphQLInt) },
    price: { type: new GraphQLNonNull(GraphQLInt) },
    totalAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    paymentTimestamp: { type: new GraphQLNonNull(GraphQLBigNumber) },
    sellerReceiveFundsTimestamp: { type: new GraphQLNonNull(GraphQLBigNumber) },
    bump: { type: new GraphQLNonNull(GraphQLInt) },
    bumpVault: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const ParsedAccountsData = new GraphQLUnionType({
  name: 'ParsedAccountsData',
  types: [Asset, Payment],
  resolveType: (obj) => {
    // here is selected a unique property of each account to discriminate between types
    if (obj.metadataBump) {
      return 'Asset'
    }
    if (obj.bumpVault) {
      return 'Payment'
    }
  },
})

const commonAccountInfoFields = {
  name: { type: new GraphQLNonNull(GraphQLString) },
  programId: { type: new GraphQLNonNull(GraphQLString) },
  address: { type: new GraphQLNonNull(GraphQLString) },
  type: { type: new GraphQLNonNull(AccountsEnum) },
}

const Account = new GraphQLInterfaceType({
  name: 'Account',
  fields: {
    ...commonAccountInfoFields,
  },
})

export const BrickAccountsInfo = new GraphQLObjectType({
  name: 'BrickAccountsInfo',
  interfaces: [Account],
  fields: {
    ...commonAccountInfoFields,
    data: { type: new GraphQLNonNull(ParsedAccountsData) },
  },
})

export const AccountsInfo = new GraphQLList(BrickAccountsInfo)

// ------------------- EVENTS --------------------------

export const ParsedEvents = new GraphQLEnumType({
  name: 'ParsedEvents',
  values: {
    CreateAssetEvent: { value: 'CreateAssetEvent' },
    EditAssetPriceEvent: { value: 'EditAssetPriceEvent' },
    BuyAssetEvent: { value: 'BuyAssetEvent' },
    ShareAssetEvent: { value: 'ShareAssetEvent' },
    WithdrawFundsEvent: { value: 'WithdrawFundsEvent' },
    RefundEvent: { value: 'RefundEvent' },
    UseAssetEvent: { value: 'UseAssetEvent' },
    DeleteAssetEvent: { value: 'DeleteAssetEvent' },
  },
})

const commonEventFields = {
  id: { type: new GraphQLNonNull(GraphQLString) },
  timestamp: { type: GraphQLLong },
  type: { type: new GraphQLNonNull(ParsedEvents) },
  account: { type: new GraphQLNonNull(GraphQLString) },
  signer: { type: new GraphQLNonNull(GraphQLString) },
}

const Event = new GraphQLInterfaceType({
  name: 'Event',
  fields: {
    ...commonEventFields,
  },
})

/*-----------------------* CUSTOM EVENTS TYPES *-----------------------*/

export const CreateAssetEventAccounts = new GraphQLObjectType({
  name: 'CreateAssetEventAccounts',
  fields: {
    metadataProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    authority: { type: new GraphQLNonNull(GraphQLString) },
    assetMint: { type: new GraphQLNonNull(GraphQLString) },
    asset: { type: new GraphQLNonNull(GraphQLString) },
    acceptedMint: { type: new GraphQLNonNull(GraphQLString) },
    tokenMetadata: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateAssetEventData = new GraphQLObjectType({
  name: 'CreateAssetEventData',
  fields: {
    hashId: { type: new GraphQLNonNull(GraphQLString) },
    appName: { type: new GraphQLNonNull(GraphQLString) },
    itemHash: { type: new GraphQLNonNull(GraphQLString) },
    timestampFundsVault: { type: new GraphQLNonNull(GraphQLBigNumber) },
    tokenPrice: { type: new GraphQLNonNull(GraphQLInt) },
    exemplars: { type: new GraphQLNonNull(GraphQLInt) },
    quantityPerExemplars: { type: new GraphQLNonNull(GraphQLInt) },
    tokenName: { type: new GraphQLNonNull(GraphQLString) },
    tokenSymbol: { type: new GraphQLNonNull(GraphQLString) },
    tokenUri: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateAssetEvent = new GraphQLObjectType({
  name: 'CreateAssetEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateAsset,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateAssetEventData) },
    accounts: { type: new GraphQLNonNull(CreateAssetEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const EditAssetPriceEventAccounts = new GraphQLObjectType({
  name: 'EditAssetPriceEventAccounts',
  fields: {
    authority: { type: new GraphQLNonNull(GraphQLString) },
    asset: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const EditAssetPriceEventData = new GraphQLObjectType({
  name: 'EditAssetPriceEventData',
  fields: {
    tokenPrice: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const EditAssetPriceEvent = new GraphQLObjectType({
  name: 'EditAssetPriceEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.EditAssetPrice,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(EditAssetPriceEventData) },
    accounts: { type: new GraphQLNonNull(EditAssetPriceEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const BuyAssetEventAccounts = new GraphQLObjectType({
  name: 'BuyAssetEventAccounts',
  fields: {
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    associatedTokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    clock: { type: new GraphQLNonNull(GraphQLString) },
    authority: { type: new GraphQLNonNull(GraphQLString) },
    asset: { type: new GraphQLNonNull(GraphQLString) },
    assetMint: { type: new GraphQLNonNull(GraphQLString) },
    buyerTransferVault: { type: new GraphQLNonNull(GraphQLString) },
    acceptedMint: { type: new GraphQLNonNull(GraphQLString) },
    payment: { type: new GraphQLNonNull(GraphQLString) },
    paymentVault: { type: new GraphQLNonNull(GraphQLString) },
    buyerMintedTokenVault: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const BuyAssetEventData = new GraphQLObjectType({
  name: 'BuyAssetEventData',
  fields: {
    timestamp: { type: new GraphQLNonNull(GraphQLBigNumber) },
    exemplars: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const BuyAssetEvent = new GraphQLObjectType({
  name: 'BuyAssetEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.BuyAsset,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(BuyAssetEventData) },
    accounts: { type: new GraphQLNonNull(BuyAssetEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const ShareAssetEventAccounts = new GraphQLObjectType({
  name: 'ShareAssetEventAccounts',
  fields: {
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    associatedTokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    authority: { type: new GraphQLNonNull(GraphQLString) },
    asset: { type: new GraphQLNonNull(GraphQLString) },
    assetMint: { type: new GraphQLNonNull(GraphQLString) },
    receiverMintedTokenVault: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ShareAssetEventData = new GraphQLObjectType({
  name: 'ShareAssetEventData',
  fields: {
    exemplars: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const ShareAssetEvent = new GraphQLObjectType({
  name: 'ShareAssetEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ShareAsset,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(ShareAssetEventData) },
    accounts: { type: new GraphQLNonNull(ShareAssetEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const WithdrawFundsEventAccounts = new GraphQLObjectType({
  name: 'WithdrawFundsEventAccounts',
  fields: {
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    authority: { type: new GraphQLNonNull(GraphQLString) },
    asset: { type: new GraphQLNonNull(GraphQLString) },
    assetMint: { type: new GraphQLNonNull(GraphQLString) },
    receiverVault: { type: new GraphQLNonNull(GraphQLString) },
    buyer: { type: new GraphQLNonNull(GraphQLString) },
    payment: { type: new GraphQLNonNull(GraphQLString) },
    paymentVault: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const WithdrawFundsEvent = new GraphQLObjectType({
  name: 'WithdrawFundsEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.WithdrawFunds,
  fields: {
    ...commonEventFields,
    accounts: { type: new GraphQLNonNull(WithdrawFundsEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const RefundEventAccounts = new GraphQLObjectType({
  name: 'RefundEventAccounts',
  fields: {
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    authority: { type: new GraphQLNonNull(GraphQLString) },
    asset: { type: new GraphQLNonNull(GraphQLString) },
    assetMint: { type: new GraphQLNonNull(GraphQLString) },
    receiverVault: { type: new GraphQLNonNull(GraphQLString) },
    payment: { type: new GraphQLNonNull(GraphQLString) },
    paymentVault: { type: new GraphQLNonNull(GraphQLString) },
    buyerMintedTokenVault: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const RefundEvent = new GraphQLObjectType({
  name: 'RefundEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.Refund,
  fields: {
    ...commonEventFields,
    accounts: { type: new GraphQLNonNull(RefundEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const UseAssetEventAccounts = new GraphQLObjectType({
  name: 'UseAssetEventAccounts',
  fields: {
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    associatedTokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    authority: { type: new GraphQLNonNull(GraphQLString) },
    asset: { type: new GraphQLNonNull(GraphQLString) },
    assetMint: { type: new GraphQLNonNull(GraphQLString) },
    buyerMintedTokenVault: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const UseAssetEventData = new GraphQLObjectType({
  name: 'UseAssetEventData',
  fields: {
    exemplars: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const UseAssetEvent = new GraphQLObjectType({
  name: 'UseAssetEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.UseAsset,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(UseAssetEventData) },
    accounts: { type: new GraphQLNonNull(UseAssetEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const DeleteAssetEventAccounts = new GraphQLObjectType({
  name: 'DeleteAssetEventAccounts',
  fields: {
    authority: { type: new GraphQLNonNull(GraphQLString) },
    asset: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const DeleteAssetEvent = new GraphQLObjectType({
  name: 'DeleteAssetEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.DeleteAsset,
  fields: {
    ...commonEventFields,
    accounts: { type: new GraphQLNonNull(DeleteAssetEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const Events = new GraphQLList(Event)

export const types = [
  CreateAssetEvent,
  EditAssetPriceEvent,
  BuyAssetEvent,
  ShareAssetEvent,
  WithdrawFundsEvent,
  RefundEvent,
  UseAssetEvent,
  DeleteAssetEvent,
]
