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
 * @category Refund
 * @category generated
 */
export const refundStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'RefundInstructionArgs',
)
/**
 * Accounts required by the _refund_ instruction
 *
 * @property [_writable_, **signer**] authority
 * @property [_writable_] asset
 * @property [_writable_] assetMint
 * @property [_writable_] receiverVault
 * @property [_writable_] payment
 * @property [_writable_] paymentVault
 * @property [_writable_] buyerMintedTokenVault
 * @category Instructions
 * @category Refund
 * @category generated
 */
export type RefundInstructionAccounts = {
  tokenProgram?: web3.PublicKey
  authority: web3.PublicKey
  asset: web3.PublicKey
  assetMint: web3.PublicKey
  receiverVault: web3.PublicKey
  payment: web3.PublicKey
  paymentVault: web3.PublicKey
  buyerMintedTokenVault: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const refundInstructionDiscriminator = [2, 96, 183, 251, 63, 208, 46, 46]

/**
 * Creates a _Refund_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category Refund
 * @category generated
 */
export function createRefundInstruction(
  accounts: RefundInstructionAccounts,
  programId = new web3.PublicKey(
    '84KfPcJAZhNSLMmSzgx3kDx3FfKfS3WK5u8FF8zks18S',
  ),
) {
  const [data] = refundStruct.serialize({
    instructionDiscriminator: refundInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.tokenProgram ?? splToken.TOKEN_PROGRAM_ID,
      isWritable: false,
      isSigner: false,
    },
    {
      pubkey: accounts.authority,
      isWritable: true,
      isSigner: true,
    },
    {
      pubkey: accounts.asset,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.assetMint,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.receiverVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.payment,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.paymentVault,
      isWritable: true,
      isSigner: false,
    },
    {
      pubkey: accounts.buyerMintedTokenVault,
      isWritable: true,
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
