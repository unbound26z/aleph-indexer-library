/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import { CustomAllocation, customAllocationBeet } from './CustomAllocation.js'
export type Allocation = {
  equal: beet.COption<beet.bignum>
  custom: beet.COption<CustomAllocation[]>
}

/**
 * @category userTypes
 * @category generated
 */
export const allocationBeet = new beet.FixableBeetArgsStruct<Allocation>(
  [
    ['equal', beet.coption(beet.u64)],
    ['custom', beet.coption(beet.array(customAllocationBeet))],
  ],
  'Allocation',
)