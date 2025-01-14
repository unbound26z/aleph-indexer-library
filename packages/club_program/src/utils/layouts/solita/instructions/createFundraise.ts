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
 * @category CreateFundraise
 * @category generated
 */
export type CreateFundraiseInstructionArgs = {
  amount: beet.bignum
}
/**
 * @category Instructions
 * @category CreateFundraise
 * @category generated
 */
export const createFundraiseStruct = new beet.BeetArgsStruct<
  CreateFundraiseInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['amount', beet.u64],
  ],
  'CreateFundraiseInstructionArgs',
)
/**
 * Accounts required by the _createFundraise_ instruction
 *
 * @property [] memberData
 * @property [_writable_] treasuryData
 * @property [_writable_] treasury
 * @property [_writable_] fundraiseConfig
 * @property [_writable_, **signer**] payer
 * @property [] clubData
 * @category Instructions
 * @category CreateFundraise
 * @category generated
 */
export type CreateFundraiseInstructionAccounts = {
  memberData: web3.PublicKey
  treasuryData: web3.PublicKey
  treasury: web3.PublicKey
  fundraiseConfig: web3.PublicKey
  payer: web3.PublicKey
  clubData: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const createFundraiseInstructionDiscriminator = [
  131, 84, 228, 72, 48, 100, 238, 108,
]

/**
 * Creates a _CreateFundraise_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CreateFundraise
 * @category generated
 */
export function createCreateFundraiseInstruction(
  accounts: CreateFundraiseInstructionAccounts,
  args: CreateFundraiseInstructionArgs,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = createFundraiseStruct.serialize({
    instructionDiscriminator: createFundraiseInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.memberData,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.treasuryData,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.treasury,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.fundraiseConfig,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.clubData,
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
