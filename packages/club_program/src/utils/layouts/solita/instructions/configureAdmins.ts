/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { AdminConfig, adminConfigBeet } from '../types/AdminConfig.js'
import {
  FundraiseFeeConfig,
  fundraiseFeeConfigBeet,
} from '../types/FundraiseFeeConfig.js'
import { OtcFeeConfig, otcFeeConfigBeet } from '../types/OtcFeeConfig.js'

/**
 * @category Instructions
 * @category ConfigureAdmins
 * @category generated
 */
export type ConfigureAdminsInstructionArgs = {
  admins: beet.COption<AdminConfig[]>
  feeWallet: beet.COption<web3.PublicKey>
  feePercentage: beet.COption<number>
  fundraiseFeeConfigs: beet.COption<FundraiseFeeConfig[]>
  otcFeeConfigs: beet.COption<OtcFeeConfig[]>
}
/**
 * @category Instructions
 * @category ConfigureAdmins
 * @category generated
 */
export const configureAdminsStruct = new beet.FixableBeetArgsStruct<
  ConfigureAdminsInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['admins', beet.coption(beet.array(adminConfigBeet))],
    ['feeWallet', beet.coption(beetSolana.publicKey)],
    ['feePercentage', beet.coption(beet.u32)],
    ['fundraiseFeeConfigs', beet.coption(beet.array(fundraiseFeeConfigBeet))],
    ['otcFeeConfigs', beet.coption(beet.array(otcFeeConfigBeet))],
  ],
  'ConfigureAdminsInstructionArgs',
)
/**
 * Accounts required by the _configureAdmins_ instruction
 *
 * @property [_writable_] admins
 * @property [_writable_, **signer**] payer
 * @category Instructions
 * @category ConfigureAdmins
 * @category generated
 */
export type ConfigureAdminsInstructionAccounts = {
  admins: web3.PublicKey
  payer: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const configureAdminsInstructionDiscriminator = [
  63, 5, 44, 92, 80, 109, 255, 164,
]

/**
 * Creates a _ConfigureAdmins_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category ConfigureAdmins
 * @category generated
 */
export function createConfigureAdminsInstruction(
  accounts: ConfigureAdminsInstructionAccounts,
  args: ConfigureAdminsInstructionArgs,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = configureAdminsStruct.serialize({
    instructionDiscriminator: configureAdminsInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.admins,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
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