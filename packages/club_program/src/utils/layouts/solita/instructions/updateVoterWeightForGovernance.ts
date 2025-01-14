/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category UpdateVoterWeightForGovernance
 * @category generated
 */
export const updateVoterWeightForGovernanceStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'UpdateVoterWeightForGovernanceInstructionArgs',
)
/**
 * Accounts required by the _updateVoterWeightForGovernance_ instruction
 *
 * @property [] realm
 * @property [_writable_] voterWeightRecord
 * @property [] memberData
 * @property [] clubData
 * @property [_writable_, **signer**] payer
 * @category Instructions
 * @category UpdateVoterWeightForGovernance
 * @category generated
 */
export type UpdateVoterWeightForGovernanceInstructionAccounts = {
  realm: web3.PublicKey
  voterWeightRecord: web3.PublicKey
  memberData: web3.PublicKey
  clubData: web3.PublicKey
  payer: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const updateVoterWeightForGovernanceInstructionDiscriminator = [
  8, 48, 251, 124, 124, 118, 225, 55,
]

/**
 * Creates a _UpdateVoterWeightForGovernance_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category UpdateVoterWeightForGovernance
 * @category generated
 */
export function createUpdateVoterWeightForGovernanceInstruction(
  accounts: UpdateVoterWeightForGovernanceInstructionAccounts,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = updateVoterWeightForGovernanceStruct.serialize({
    instructionDiscriminator:
      updateVoterWeightForGovernanceInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.realm,
      isWritable: false,
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
