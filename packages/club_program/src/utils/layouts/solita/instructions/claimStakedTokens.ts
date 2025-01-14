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
 * @category ClaimStakedTokens
 * @category generated
 */
export type ClaimStakedTokensInstructionArgs = {
  stakeIndex: number
  stakeOption: number
}
/**
 * @category Instructions
 * @category ClaimStakedTokens
 * @category generated
 */
export const claimStakedTokensStruct = new beet.BeetArgsStruct<
  ClaimStakedTokensInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['stakeIndex', beet.u32],
    ['stakeOption', beet.u8],
  ],
  'ClaimStakedTokensInstructionArgs',
)
/**
 * Accounts required by the _claimStakedTokens_ instruction
 *
 * @property [_writable_] clubData
 * @property [] memberData
 * @property [_writable_] stakeConfig
 * @property [_writable_] stakedTokens
 * @property [_writable_, **signer**] payer
 * @property [_writable_] memberTokens
 * @category Instructions
 * @category ClaimStakedTokens
 * @category generated
 */
export type ClaimStakedTokensInstructionAccounts = {
  clubData: web3.PublicKey
  memberData: web3.PublicKey
  stakeConfig: web3.PublicKey
  stakedTokens: web3.PublicKey
  payer: web3.PublicKey
  memberTokens: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const claimStakedTokensInstructionDiscriminator = [
  132, 188, 181, 80, 192, 214, 163, 155,
]

/**
 * Creates a _ClaimStakedTokens_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ClaimStakedTokens
 * @category generated
 */
export function createClaimStakedTokensInstruction(
  accounts: ClaimStakedTokensInstructionAccounts,
  args: ClaimStakedTokensInstructionArgs,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = claimStakedTokensStruct.serialize({
    instructionDiscriminator: claimStakedTokensInstructionDiscriminator,
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
      pubkey: accounts.stakeConfig,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.stakedTokens,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.memberTokens,
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
