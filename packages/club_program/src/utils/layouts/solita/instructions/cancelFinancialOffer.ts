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
 * @category CancelFinancialOffer
 * @category generated
 */
export const cancelFinancialOfferStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'CancelFinancialOfferInstructionArgs',
)
/**
 * Accounts required by the _cancelFinancialOffer_ instruction
 *
 * @property [] clubData
 * @property [_writable_, **signer**] payer
 * @property [_writable_] treasuryData
 * @property [] treasury
 * @property [_writable_] financialRecord
 * @property [_writable_] financialOffer
 * @category Instructions
 * @category CancelFinancialOffer
 * @category generated
 */
export type CancelFinancialOfferInstructionAccounts = {
  clubData: web3.PublicKey
  payer: web3.PublicKey
  treasuryData: web3.PublicKey
  treasury: web3.PublicKey
  financialRecord: web3.PublicKey
  financialOffer: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const cancelFinancialOfferInstructionDiscriminator = [
  222, 104, 72, 43, 251, 109, 26, 70,
]

/**
 * Creates a _CancelFinancialOffer_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category CancelFinancialOffer
 * @category generated
 */
export function createCancelFinancialOfferInstruction(
  accounts: CancelFinancialOfferInstructionAccounts,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = cancelFinancialOfferStruct.serialize({
    instructionDiscriminator: cancelFinancialOfferInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
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
      pubkey: accounts.treasuryData,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.treasury,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.financialRecord,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.financialOffer,
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
