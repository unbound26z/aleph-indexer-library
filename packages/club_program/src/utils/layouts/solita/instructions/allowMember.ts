/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { AllowType, allowTypeBeet } from '../types/AllowType.js'

/**
 * @category Instructions
 * @category AllowMember
 * @category generated
 */
export type AllowMemberInstructionArgs = {
  roles: string[]
  allowType: AllowType
}
/**
 * @category Instructions
 * @category AllowMember
 * @category generated
 */
export const allowMemberStruct = new beet.FixableBeetArgsStruct<
  AllowMemberInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['roles', beet.array(beet.utf8String)],
    ['allowType', allowTypeBeet],
  ],
  'AllowMemberInstructionArgs',
)
/**
 * Accounts required by the _allowMember_ instruction
 *
 * @property [] memberData
 * @property [_writable_, **signer**] payer
 * @property [_writable_] clubData
 * @property [] realm
 * @category Instructions
 * @category AllowMember
 * @category generated
 */
export type AllowMemberInstructionAccounts = {
  memberData: web3.PublicKey
  payer: web3.PublicKey
  clubData: web3.PublicKey
  realm: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const allowMemberInstructionDiscriminator = [
  197, 214, 209, 24, 5, 44, 178, 157,
]

/**
 * Creates a _AllowMember_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category AllowMember
 * @category generated
 */
export function createAllowMemberInstruction(
  accounts: AllowMemberInstructionAccounts,
  args: AllowMemberInstructionArgs,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = allowMemberStruct.serialize({
    instructionDiscriminator: allowMemberInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.memberData,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.clubData,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.realm,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
  ]

  if (accounts.anchorRemainingAccounts != null) {
    for (const acc of accounts.anchorRemainingAccounts) {
      keys.push(acc)
    }
  }

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}
