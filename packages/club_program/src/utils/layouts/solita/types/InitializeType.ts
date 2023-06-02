/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
/**
 * This type is used to derive the {@link InitializeType} type as well as the de/serializer.
 * However don't refer to it in your code but use the {@link InitializeType} type instead.
 *
 * @category userTypes
 * @category enums
 * @category generated
 * @private
 */
export type InitializeTypeRecord = {
  MagicEdenSell: { fields: [Uint8Array] }
  MagicEdenBuy: { fields: [Uint8Array[]] }
  RegularBuySell: {
    fields: [beet.bignum, beet.bignum, beet.COption<web3.PublicKey>]
  }
  Solsea: { fields: [beet.bignum, beet.bignum, number] }
}

/**
 * Union type respresenting the InitializeType data enum defined in Rust.
 *
 * NOTE: that it includes a `__kind` property which allows to narrow types in
 * switch/if statements.
 * Additionally `isInitializeType*` type guards are exposed below to narrow to a specific variant.
 *
 * @category userTypes
 * @category enums
 * @category generated
 */
export type InitializeType = beet.DataEnumKeyAsKind<InitializeTypeRecord>

export const isInitializeTypeMagicEdenSell = (
  x: InitializeType,
): x is InitializeType & { __kind: 'MagicEdenSell' } =>
  x.__kind === 'MagicEdenSell'
export const isInitializeTypeMagicEdenBuy = (
  x: InitializeType,
): x is InitializeType & { __kind: 'MagicEdenBuy' } =>
  x.__kind === 'MagicEdenBuy'
export const isInitializeTypeRegularBuySell = (
  x: InitializeType,
): x is InitializeType & { __kind: 'RegularBuySell' } =>
  x.__kind === 'RegularBuySell'
export const isInitializeTypeSolsea = (
  x: InitializeType,
): x is InitializeType & { __kind: 'Solsea' } => x.__kind === 'Solsea'

/**
 * @category userTypes
 * @category generated
 */
export const initializeTypeBeet = beet.dataEnum<InitializeTypeRecord>([
  [
    'MagicEdenSell',
    new beet.FixableBeetArgsStruct<InitializeTypeRecord['MagicEdenSell']>(
      [['fields', beet.tuple([beet.bytes])]],
      'InitializeTypeRecord["MagicEdenSell"]',
    ),
  ],
  [
    'MagicEdenBuy',
    new beet.FixableBeetArgsStruct<InitializeTypeRecord['MagicEdenBuy']>(
      [['fields', beet.tuple([beet.array(beet.bytes)])]],
      'InitializeTypeRecord["MagicEdenBuy"]',
    ),
  ],
  [
    'RegularBuySell',
    new beet.FixableBeetArgsStruct<InitializeTypeRecord['RegularBuySell']>(
      [
        [
          'fields',
          beet.tuple([beet.u64, beet.u64, beet.coption(beetSolana.publicKey)]),
        ],
      ],
      'InitializeTypeRecord["RegularBuySell"]',
    ),
  ],
  [
    'Solsea',
    new beet.BeetArgsStruct<InitializeTypeRecord['Solsea']>(
      [['fields', beet.fixedSizeTuple([beet.u64, beet.u64, beet.u16])]],
      'InitializeTypeRecord["Solsea"]',
    ),
  ],
]) as beet.FixableBeet<InitializeType, InitializeType>
