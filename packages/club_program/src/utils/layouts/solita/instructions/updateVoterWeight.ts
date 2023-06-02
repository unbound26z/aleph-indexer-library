/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import { ClubAction, clubActionBeet } from '../types/ClubAction.js'

/**
 * @category Instructions
 * @category UpdateVoterWeight
 * @category generated
 */
export type UpdateVoterWeightInstructionArgs = {
  action: ClubAction
}
/**
 * @category Instructions
 * @category UpdateVoterWeight
 * @category generated
 */
export const updateVoterWeightStruct = new beet.BeetArgsStruct<
  UpdateVoterWeightInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['action', clubActionBeet],
  ],
  'UpdateVoterWeightInstructionArgs',
)
/**
 * Accounts required by the _updateVoterWeight_ instruction
 *
 * @property [] realm
 * @property [_writable_] treasuryData
 * @property [_writable_] voterWeightRecord
 * @property [] memberData
 * @property [] clubData
 * @property [_writable_, **signer**] payer
 * @category Instructions
 * @category UpdateVoterWeight
 * @category generated
 */
export type UpdateVoterWeightInstructionAccounts = {
  realm: web3.PublicKey
  treasuryData: web3.PublicKey
  voterWeightRecord: web3.PublicKey
  memberData: web3.PublicKey
  clubData: web3.PublicKey
  payer: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const updateVoterWeightInstructionDiscriminator = [
  92, 35, 133, 94, 230, 70, 14, 157,
]

/**
 * Creates a _UpdateVoterWeight_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category UpdateVoterWeight
 * @category generated
 */
export function createUpdateVoterWeightInstruction(
  accounts: UpdateVoterWeightInstructionAccounts,
  args: UpdateVoterWeightInstructionArgs,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = updateVoterWeightStruct.serialize({
    instructionDiscriminator: updateVoterWeightInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.realm,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.treasuryData,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.voterWeightRecord,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.memberData,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.clubData,
      isWritable: false,
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
