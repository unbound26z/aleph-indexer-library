/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
/**
 * @category enums
 * @category generated
 */
export enum StakeStatus {
  Funding,
  InProgress,
  Finished,
  Canceled,
}

/**
 * @category userTypes
 * @category generated
 */
export const stakeStatusBeet = beet.fixedScalarEnum(
  StakeStatus,
) as beet.FixedSizeBeet<StakeStatus, StakeStatus>