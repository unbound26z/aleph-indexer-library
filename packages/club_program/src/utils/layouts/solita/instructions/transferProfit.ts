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
 * @category TransferProfit
 * @category generated
 */
export type TransferProfitInstructionArgs = {
  withdrawalAmount: beet.bignum
}
/**
 * @category Instructions
 * @category TransferProfit
 * @category generated
 */
export const transferProfitStruct = new beet.BeetArgsStruct<
  TransferProfitInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['withdrawalAmount', beet.u64],
  ],
  'TransferProfitInstructionArgs',
)
/**
 * Accounts required by the _transferProfit_ instruction
 *
 * @property [] clubData
 * @property [_writable_, **signer**] payer
 * @property [_writable_] treasury
 * @property [_writable_] treasuryToken
 * @property [] treasuryData
 * @property [_writable_] profit
 * @property [_writable_] transferProfit
 * @property [_writable_] proposal
 * @property [_writable_] profitToken
 * @property [] memberData
 * @category Instructions
 * @category TransferProfit
 * @category generated
 */
export type TransferProfitInstructionAccounts = {
  clubData: web3.PublicKey
  payer: web3.PublicKey
  treasury: web3.PublicKey
  treasuryToken: web3.PublicKey
  treasuryData: web3.PublicKey
  profit: web3.PublicKey
  transferProfit: web3.PublicKey
  proposal: web3.PublicKey
  profitToken: web3.PublicKey
  memberData: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const transferProfitInstructionDiscriminator = [
  114, 174, 195, 197, 231, 160, 36, 1,
]

/**
 * Creates a _TransferProfit_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category TransferProfit
 * @category generated
 */
export function createTransferProfitInstruction(
  accounts: TransferProfitInstructionAccounts,
  args: TransferProfitInstructionArgs,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = transferProfitStruct.serialize({
    instructionDiscriminator: transferProfitInstructionDiscriminator,
    ...args,
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
      pubkey: accounts.profit,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.transferProfit,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.proposal,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.profitToken,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.memberData,
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
