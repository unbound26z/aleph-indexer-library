/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import { ClubAction, clubActionBeet } from './ClubAction.js'
export type RoleConfig = {
  name: string
  clubActions: ClubAction[]
  membersCount: number
}

/**
 * @category userTypes
 * @category generated
 */
export const roleConfigBeet = new beet.FixableBeetArgsStruct<RoleConfig>(
  [
    ['name', beet.utf8String],
    ['clubActions', beet.array(clubActionBeet)],
    ['membersCount', beet.u32],
  ],
  'RoleConfig',
)
