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
 * @category InitializeStaking
 * @category generated
 */
export type InitializeStakingInstructionArgs = {
  stakeName: string
  capAmount: beet.bignum
  stakePeriod: number
}
/**
 * @category Instructions
 * @category InitializeStaking
 * @category generated
 */
export const initializeStakingStruct = new beet.FixableBeetArgsStruct<
  InitializeStakingInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['stakeName', beet.utf8String],
    ['capAmount', beet.u64],
    ['stakePeriod', beet.u8],
  ],
  'InitializeStakingInstructionArgs',
)
/**
 * Accounts required by the _initializeStaking_ instruction
 *
 * @property [_writable_] clubData
 * @property [] memberData
 * @property [_writable_, **signer**] payer
 * @property [_writable_] stakedTokens
 * @property [_writable_] stakeConfig
 * @property [] unqMint
 * @category Instructions
 * @category InitializeStaking
 * @category generated
 */
export type InitializeStakingInstructionAccounts = {
  clubData: web3.PublicKey
  memberData: web3.PublicKey
  payer: web3.PublicKey
  stakedTokens: web3.PublicKey
  stakeConfig: web3.PublicKey
  unqMint: web3.PublicKey
  rent?: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const initializeStakingInstructionDiscriminator = [
  184, 41, 251, 154, 146, 145, 197, 77,
]

/**
 * Creates a _InitializeStaking_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category InitializeStaking
 * @category generated
 */
export function createInitializeStakingInstruction(
  accounts: InitializeStakingInstructionAccounts,
  args: InitializeStakingInstructionArgs,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = initializeStakingStruct.serialize({
    instructionDiscriminator: initializeStakingInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.clubData,
      isWritable: true,
      isSigner: false,
    },
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
      pubkey: accounts.stakedTokens,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.stakeConfig,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.unqMint,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.rent ?? web3.SYSVAR_RENT_PUBKEY,
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
