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
 * @category ExecuteTransferProposal
 * @category generated
 */
export const executeTransferProposalStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'ExecuteTransferProposalInstructionArgs',
)
/**
 * Accounts required by the _executeTransferProposal_ instruction
 *
 * @property [_writable_] governance
 * @property [_writable_] realm
 * @property [_writable_] realmConfig
 * @property [_writable_] proposal
 * @property [] proposalMetadata
 * @property [] splGovernanceProgram
 * @property [_writable_, **signer**] payer
 * @property [_writable_] treasury
 * @property [_writable_] treasuryToken
 * @property [] treasuryData
 * @property [_writable_] proposalTransaction
 * @property [] clubData
 * @property [_writable_] offer
 * @property [_writable_] tokenLedger
 * @property [_writable_] ledgerEntry
 * @property [_writable_] destination
 * @property [] escrowProgram
 * @category Instructions
 * @category ExecuteTransferProposal
 * @category generated
 */
export type ExecuteTransferProposalInstructionAccounts = {
  governance: web3.PublicKey
  realm: web3.PublicKey
  realmConfig: web3.PublicKey
  proposal: web3.PublicKey
  proposalMetadata: web3.PublicKey
  splGovernanceProgram: web3.PublicKey
  payer: web3.PublicKey
  treasury: web3.PublicKey
  treasuryToken: web3.PublicKey
  treasuryData: web3.PublicKey
  proposalTransaction: web3.PublicKey
  clubData: web3.PublicKey
  offer: web3.PublicKey
  tokenLedger: web3.PublicKey
  ledgerEntry: web3.PublicKey
  destination: web3.PublicKey
  escrowProgram: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const executeTransferProposalInstructionDiscriminator = [
  79, 194, 167, 9, 27, 235, 49, 208,
]

/**
 * Creates a _ExecuteTransferProposal_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category ExecuteTransferProposal
 * @category generated
 */
export function createExecuteTransferProposalInstruction(
  accounts: ExecuteTransferProposalInstructionAccounts,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = executeTransferProposalStruct.serialize({
    instructionDiscriminator: executeTransferProposalInstructionDiscriminator,
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
      pubkey: accounts.realmConfig,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.proposal,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.proposalMetadata,
      isWritable: false,
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
      pubkey: accounts.treasury,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.treasuryToken,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.treasuryData,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.proposalTransaction,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.clubData,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.offer,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenLedger,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.ledgerEntry,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.destination,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.escrowProgram,
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
