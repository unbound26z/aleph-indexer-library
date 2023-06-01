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
 * @category CancelInvitation
 * @category generated
 */
export const cancelInvitationStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'CancelInvitationInstructionArgs',
)
/**
 * Accounts required by the _cancelInvitation_ instruction
 *
 * @property [_writable_, **signer**] payer
 * @property [_writable_] memberData
 * @property [] memberAddress
 * @property [] clubData
 * @property [_writable_] recipient
 * @category Instructions
 * @category CancelInvitation
 * @category generated
 */
export type CancelInvitationInstructionAccounts = {
  payer: web3.PublicKey
  memberData: web3.PublicKey
  memberAddress: web3.PublicKey
  clubData: web3.PublicKey
  recipient: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const cancelInvitationInstructionDiscriminator = [
  66, 176, 192, 19, 81, 150, 184, 154,
]

/**
 * Creates a _CancelInvitation_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CancelInvitation
 * @category generated
 */
export function createCancelInvitationInstruction(
  accounts: CancelInvitationInstructionAccounts,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = cancelInvitationStruct.serialize({
    instructionDiscriminator: cancelInvitationInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.memberData,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.memberAddress,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.clubData,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.recipient,
      isWritable: true,
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
