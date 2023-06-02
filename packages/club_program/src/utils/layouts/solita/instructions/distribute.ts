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
 * @category Distribute
 * @category generated
 */
export type DistributeInstructionArgs = {
  treasuryIndex: number
  chainId: string
}
/**
 * @category Instructions
 * @category Distribute
 * @category generated
 */
export const distributeStruct = new beet.FixableBeetArgsStruct<
  DistributeInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['treasuryIndex', beet.u32],
    ['chainId', beet.utf8String],
  ],
  'DistributeInstructionArgs',
)
/**
 * Accounts required by the _distribute_ instruction
 *
 * @property [_writable_] clubData
 * @property [_writable_] proposal
 * @property [_writable_, **signer**] payer
 * @property [_writable_] offer
 * @property [] escrowProgram
 * @property [_writable_] treasury
 * @property [_writable_] tokenLedger
 * @property [_writable_] profit
 * @property [_writable_] vault
 * @property [_writable_] profitToken
 * @property [_writable_] escrowedWantedToken
 * @property [_writable_] makerWantedToken
 * @category Instructions
 * @category Distribute
 * @category generated
 */
export type DistributeInstructionAccounts = {
  clubData: web3.PublicKey
  proposal: web3.PublicKey
  payer: web3.PublicKey
  offer: web3.PublicKey
  escrowProgram: web3.PublicKey
  treasury: web3.PublicKey
  tokenLedger: web3.PublicKey
  profit: web3.PublicKey
  vault: web3.PublicKey
  profitToken: web3.PublicKey
  escrowedWantedToken: web3.PublicKey
  makerWantedToken: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  rent?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const distributeInstructionDiscriminator = [
  191, 44, 223, 207, 164, 236, 126, 61,
]

/**
 * Creates a _Distribute_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category Distribute
 * @category generated
 */
export function createDistributeInstruction(
  accounts: DistributeInstructionAccounts,
  args: DistributeInstructionArgs,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = distributeStruct.serialize({
    instructionDiscriminator: distributeInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.clubData,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.proposal,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.offer,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.escrowProgram,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.treasury,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.tokenLedger,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.profit,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.vault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.profitToken,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.escrowedWantedToken,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.makerWantedToken,
      isWritable: true,
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