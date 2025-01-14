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
 * @category StakeTokens
 * @category generated
 */
export type StakeTokensInstructionArgs = {
  stakeIndex: number
  amount: beet.bignum
  stakeOption: number
}
/**
 * @category Instructions
 * @category StakeTokens
 * @category generated
 */
export const stakeTokensStruct = new beet.BeetArgsStruct<
  StakeTokensInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['stakeIndex', beet.u32],
    ['amount', beet.u64],
    ['stakeOption', beet.u8],
  ],
  'StakeTokensInstructionArgs',
)
/**
 * Accounts required by the _stakeTokens_ instruction
 *
 * @property [] clubData
 * @property [] memberData
 * @property [_writable_] stakeConfig
 * @property [_writable_, **signer**] payer
 * @category Instructions
 * @category StakeTokens
 * @category generated
 */
export type StakeTokensInstructionAccounts = {
  clubData: web3.PublicKey
  memberData: web3.PublicKey
  stakeConfig: web3.PublicKey
  payer: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const stakeTokensInstructionDiscriminator = [
  136, 126, 91, 162, 40, 131, 13, 127,
]

/**
 * Creates a _StakeTokens_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category StakeTokens
 * @category generated
 */
export function createStakeTokensInstruction(
  accounts: StakeTokensInstructionAccounts,
  args: StakeTokensInstructionArgs,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = stakeTokensStruct.serialize({
    instructionDiscriminator: stakeTokensInstructionDiscriminator,
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
      pubkey: accounts.stakeConfig,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
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
