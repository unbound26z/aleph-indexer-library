/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import { KycLocation, kycLocationBeet } from './KycLocation.js'
export type KycConfig = {
  required: boolean
  location: KycLocation
}

/**
 * @category userTypes
 * @category generated
 */
export const kycConfigBeet = new beet.BeetArgsStruct<KycConfig>(
  [
    ['required', beet.bool],
    ['location', kycLocationBeet],
  ],
  'KycConfig',
)