/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as splToken from '@solana/spl-token'
import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category ExecuteMeBuyNowTransaction
 * @category generated
 */
export const executeMeBuyNowTransactionStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'ExecuteMeBuyNowTransactionInstructionArgs',
)
/**
 * Accounts required by the _executeMeBuyNowTransaction_ instruction
 *
 * @property [_writable_] governance
 * @property [_writable_] realm
 * @property [_writable_] proposal
 * @property [_writable_] proposalTransaction
 * @property [] splGovernanceProgram
 * @property [_writable_, **signer**] payer
 * @property [] escrowProgram
 * @property [_writable_] proposalMetadata
 * @property [] clubData
 * @property [_writable_] treasury
 * @property [_writable_] offer
 * @property [_writable_] unqEscrowTokens
 * @property [] magicEdenEscrowedTokenMint
 * @category Instructions
 * @category ExecuteMeBuyNowTransaction
 * @category generated
 */
export type ExecuteMeBuyNowTransactionInstructionAccounts = {
  governance: web3.PublicKey
  realm: web3.PublicKey
  proposal: web3.PublicKey
  proposalTransaction: web3.PublicKey
  splGovernanceProgram: web3.PublicKey
  payer: web3.PublicKey
  escrowProgram: web3.PublicKey
  proposalMetadata: web3.PublicKey
  clubData: web3.PublicKey
  treasury: web3.PublicKey
  offer: web3.PublicKey
  unqEscrowTokens: web3.PublicKey
  magicEdenEscrowedTokenMint: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const executeMeBuyNowTransactionInstructionDiscriminator = [
  148, 205, 208, 109, 147, 177, 155, 31,
]

/**
 * Creates a _ExecuteMeBuyNowTransaction_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category ExecuteMeBuyNowTransaction
 * @category generated
 */
export function createExecuteMeBuyNowTransactionInstruction(
  accounts: ExecuteMeBuyNowTransactionInstructionAccounts,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = executeMeBuyNowTransactionStruct.serialize({
    instructionDiscriminator:
      executeMeBuyNowTransactionInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.governance,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.realm,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.proposal,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.proposalTransaction,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.splGovernanceProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.escrowProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.proposalMetadata,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.clubData,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.treasury,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.offer,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.unqEscrowTokens,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.magicEdenEscrowedTokenMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.systemProgram ?? web3.SystemProgram.programId,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
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
