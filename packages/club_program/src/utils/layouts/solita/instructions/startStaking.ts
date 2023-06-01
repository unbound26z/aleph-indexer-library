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
 * @category StartStaking
 * @category generated
 */
export type StartStakingInstructionArgs = {
  stakeIndex: number
}
/**
 * @category Instructions
 * @category StartStaking
 * @category generated
 */
export const startStakingStruct = new beet.BeetArgsStruct<
  StartStakingInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['stakeIndex', beet.u32],
  ],
  'StartStakingInstructionArgs',
)
/**
 * Accounts required by the _startStaking_ instruction
 *
 * @property [] clubData
 * @property [] memberData
 * @property [_writable_, **signer**] payer
 * @property [] stakedTokens
 * @property [_writable_] stakeConfig
 * @property [] unqMint
 * @category Instructions
 * @category StartStaking
 * @category generated
 */
export type StartStakingInstructionAccounts = {
  clubData: web3.PublicKey
  memberData: web3.PublicKey
  payer: web3.PublicKey
  stakedTokens: web3.PublicKey
  stakeConfig: web3.PublicKey
  unqMint: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const startStakingInstructionDiscriminator = [
  47, 110, 191, 160, 36, 50, 193, 159,
]

/**
 * Creates a _StartStaking_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category StartStaking
 * @category generated
 */
export function createStartStakingInstruction(
  accounts: StartStakingInstructionAccounts,
  args: StartStakingInstructionArgs,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = startStakingStruct.serialize({
    instructionDiscriminator: startStakingInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.clubData,
      isWritable: false,
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
      isWritable: false,
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
