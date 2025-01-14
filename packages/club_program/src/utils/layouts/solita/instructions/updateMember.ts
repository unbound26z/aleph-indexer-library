/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import {
  UpdateMemberDto,
  updateMemberDtoBeet,
} from '../types/UpdateMemberDto.js'

/**
 * @category Instructions
 * @category UpdateMember
 * @category generated
 */
export type UpdateMemberInstructionArgs = {
  data: UpdateMemberDto
}
/**
 * @category Instructions
 * @category UpdateMember
 * @category generated
 */
export const updateMemberStruct = new beet.FixableBeetArgsStruct<
  UpdateMemberInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['data', updateMemberDtoBeet],
  ],
  'UpdateMemberInstructionArgs',
)
/**
 * Accounts required by the _updateMember_ instruction
 *
 * @property [_writable_] realm
 * @property [_writable_] clubData
 * @property [_writable_] memberData
 * @property [_writable_] memberAddress
 * @property [_writable_] memberVoterWeightRecord
 * @property [_writable_] updaterMemberData
 * @property [_writable_, **signer**] payer
 * @category Instructions
 * @category UpdateMember
 * @category generated
 */
export type UpdateMemberInstructionAccounts = {
  realm: web3.PublicKey
  clubData: web3.PublicKey
  memberData: web3.PublicKey
  memberAddress: web3.PublicKey
  memberVoterWeightRecord: web3.PublicKey
  updaterMemberData: web3.PublicKey
  payer: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const updateMemberInstructionDiscriminator = [
  46, 229, 3, 194, 47, 105, 211, 28,
]

/**
 * Creates a _UpdateMember_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateMember
 * @category generated
 */
export function createUpdateMemberInstruction(
  accounts: UpdateMemberInstructionAccounts,
  args: UpdateMemberInstructionArgs,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = updateMemberStruct.serialize({
    instructionDiscriminator: updateMemberInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.realm,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.clubData,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.memberData,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.memberAddress,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.memberVoterWeightRecord,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.updaterMemberData,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
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
