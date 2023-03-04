import {
  assetDiscriminator,
  assetBeet,
  paymentDiscriminator,
  paymentBeet,
} from './solita/index.js'

export enum AccountType {
  Asset = 'Asset',
  Payment = 'Payment',
}

export const ACCOUNT_DISCRIMINATOR: Record<AccountType, Buffer> = {
  [AccountType.Asset]: Buffer.from(assetDiscriminator),
  [AccountType.Payment]: Buffer.from(paymentDiscriminator),
}

export const ACCOUNTS_DATA_LAYOUT: Record<AccountType, any> = {
  [AccountType.Asset]: assetBeet,
  [AccountType.Payment]: paymentBeet,
}
