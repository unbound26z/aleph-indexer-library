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
 * @category CancelEscrow
 * @category generated
 */
export type CancelEscrowInstructionArgs = {
  chainId: string
  action: number
  treasuryIndex: number
}
/**
 * @category Instructions
 * @category CancelEscrow
 * @category generated
 */
export const cancelEscrowStruct = new beet.FixableBeetArgsStruct<
  CancelEscrowInstructionArgs & {
    instructionDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['chainId', beet.utf8String],
    ['action', beet.u8],
    ['treasuryIndex', beet.u32],
  ],
  'CancelEscrowInstructionArgs',
)
/**
 * Accounts required by the _cancelEscrow_ instruction
 *
 * @property [] realm
 * @property [_writable_, **signer**] payer
 * @property [] memberData
 * @property [_writable_] offer
 * @property [_writable_] makerOfferedTokens
 * @property [_writable_] maker
 * @property [_writable_] escrowedWantedTokens
 * @property [_writable_] escrowedOfferedTokens
 * @property [] escrowProgram
 * @property [_writable_] treasury
 * @property [] clubData
 * @property [_writable_] proposal
 * @category Instructions
 * @category CancelEscrow
 * @category generated
 */
export type CancelEscrowInstructionAccounts = {
  realm: web3.PublicKey
  payer: web3.PublicKey
  memberData: web3.PublicKey
  offer: web3.PublicKey
  makerOfferedTokens: web3.PublicKey
  maker: web3.PublicKey
  escrowedWantedTokens: web3.PublicKey
  escrowedOfferedTokens: web3.PublicKey
  escrowProgram: web3.PublicKey
  treasury: web3.PublicKey
  clubData: web3.PublicKey
  proposal: web3.PublicKey
  tokenProgram?: web3.PublicKey
  systemProgram?: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const cancelEscrowInstructionDiscriminator = [
  156, 203, 54, 179, 38, 72, 33, 21,
]

/**
 * Creates a _CancelEscrow_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @param args to provide as instruction data to the program
 *
 * @category Instructions
 * @category CancelEscrow
 * @category generated
 */
export function createCancelEscrowInstruction(
  accounts: CancelEscrowInstructionAccounts,
  args: CancelEscrowInstructionArgs,
  programId = new web3.PublicKey('UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'),
) {
  const [data] = cancelEscrowStruct.serialize({
    instructionDiscriminator: cancelEscrowInstructionDiscriminator,
    ...args,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.realm,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.payer,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.memberData,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.offer,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.makerOfferedTokens,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.maker,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.escrowedWantedTokens,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.escrowedOfferedTokens,
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
      pubkey: accounts.clubData,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.proposal,
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
