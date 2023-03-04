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
 * @category DeleteAsset
 * @category generated
 */
export const deleteAssetStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number[] /* size: 8 */
}>(
  [['instructionDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  'DeleteAssetInstructionArgs',
)
/**
 * Accounts required by the _deleteAsset_ instruction
 *
 * @property [_writable_, **signer**] authority
 * @property [_writable_] asset
 * @category Instructions
 * @category DeleteAsset
 * @category generated
 */
export type DeleteAssetInstructionAccounts = {
  authority: web3.PublicKey
  asset: web3.PublicKey
  anchorRemainingAccounts?: web3.AccountMeta[]
}

export const deleteAssetInstructionDiscriminator = [
  72, 146, 219, 26, 48, 171, 78, 33,
]

/**
 * Creates a _DeleteAsset_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category DeleteAsset
 * @category generated
 */
export function createDeleteAssetInstruction(
  accounts: DeleteAssetInstructionAccounts,
  programId = new web3.PublicKey(
    '84KfPcJAZhNSLMmSzgx3kDx3FfKfS3WK5u8FF8zks18S',
  ),
) {
  const [data] = deleteAssetStruct.serialize({
    instructionDiscriminator: deleteAssetInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
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
