import { AccountMeta, PublicKey } from '@solana/web3.js'
export * from './accounts/index.js'
export * from './instructions/index.js'

import { Asset, AssetArgs, Payment, PaymentArgs } from './accounts/index.js'

export type CreateAssetInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateAssetAccounts = [
  'metadataProgram',
  'systemProgram',
  'tokenProgram',
  'rent',
  'authority',
  'assetMint',
  'asset',
  'acceptedMint',
  'tokenMetadata',
]

export type EditAssetPriceInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const EditAssetPriceAccounts = ['authority', 'asset']

export type BuyAssetInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const BuyAssetAccounts = [
  'systemProgram',
  'tokenProgram',
  'associatedTokenProgram',
  'rent',
  'clock',
  'authority',
  'asset',
  'assetMint',
  'buyerTransferVault',
  'acceptedMint',
  'payment',
  'paymentVault',
  'buyerMintedTokenVault',
]

export type ShareAssetInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ShareAssetAccounts = [
  'systemProgram',
  'tokenProgram',
  'associatedTokenProgram',
  'rent',
  'authority',
  'asset',
  'assetMint',
  'receiverMintedTokenVault',
]

export type WithdrawFundsInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const WithdrawFundsAccounts = [
  'tokenProgram',
  'authority',
  'asset',
  'assetMint',
  'receiverVault',
  'buyer',
  'payment',
  'paymentVault',
]

export type RefundInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const RefundAccounts = [
  'tokenProgram',
  'authority',
  'asset',
  'assetMint',
  'receiverVault',
  'payment',
  'paymentVault',
  'buyerMintedTokenVault',
]

export type UseAssetInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const UseAssetAccounts = [
  'systemProgram',
  'tokenProgram',
  'associatedTokenProgram',
  'rent',
  'authority',
  'asset',
  'assetMint',
  'buyerMintedTokenVault',
]

export type DeleteAssetInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const DeleteAssetAccounts = ['authority', 'asset']

export type ParsedInstructions =
  | CreateAssetInstruction
  | EditAssetPriceInstruction
  | BuyAssetInstruction
  | ShareAssetInstruction
  | WithdrawFundsInstruction
  | RefundInstruction
  | UseAssetInstruction
  | DeleteAssetInstruction
export type ParsedAccounts = Asset | Payment

export type ParsedAccountsData = AssetArgs | PaymentArgs
