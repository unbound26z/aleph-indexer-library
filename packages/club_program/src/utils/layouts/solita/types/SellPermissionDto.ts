/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
export type SellPermissionDto = {
  from: beet.bignum
  to: beet.bignum
  quorumMinimum: number
  decimal: number
}

/**
 * @category userTypes
 * @category generated
 */
export const sellPermissionDtoBeet = new beet.BeetArgsStruct<SellPermissionDto>(
  [
    ['from', beet.u64],
    ['to', beet.u64],
    ['quorumMinimum', beet.u8],
    ['decimal', beet.u16],
  ],
  'SellPermissionDto',
)