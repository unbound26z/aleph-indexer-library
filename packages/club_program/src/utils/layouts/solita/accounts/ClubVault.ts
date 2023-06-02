/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'

/**
 * Arguments used to create {@link ClubVault}
 * @category Accounts
 * @category generated
 */
export type ClubVaultArgs = {}

export const clubVaultDiscriminator = [158, 33, 190, 30, 209, 175, 21, 147]
/**
 * Holds the data for the {@link ClubVault} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class ClubVault implements ClubVaultArgs {
  private constructor() {}

  /**
   * Creates a {@link ClubVault} instance from the provided args.
   */
  static fromArgs(args: ClubVaultArgs) {
    return new ClubVault()
  }

  /**
   * Deserializes the {@link ClubVault} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [ClubVault, number] {
    return ClubVault.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link ClubVault} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<ClubVault> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find ClubVault account at ${address}`)
    }
    return ClubVault.fromAccountInfo(accountInfo, 0)[0]
  }

  /**
   * Provides a {@link web3.Connection.getProgramAccounts} config builder,
   * to fetch accounts matching filters that can be specified via that builder.
   *
   * @param programId - the program that owns the accounts we are filtering
   */
  static gpaBuilder(
    programId: web3.PublicKey = new web3.PublicKey(
      'UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe',
    ),
  ) {
    return beetSolana.GpaBuilder.fromStruct(programId, clubVaultBeet)
  }

  /**
   * Deserializes the {@link ClubVault} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [ClubVault, number] {
    return clubVaultBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link ClubVault} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return clubVaultBeet.serialize({
      accountDiscriminator: clubVaultDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link ClubVault}
   */
  static get byteSize() {
    return clubVaultBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link ClubVault} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      ClubVault.byteSize,
      commitment,
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link ClubVault} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === ClubVault.byteSize
  }

  /**
   * Returns a readable version of {@link ClubVault} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {}
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const clubVaultBeet = new beet.BeetStruct<
  ClubVault,
  { accountDiscriminator: number[] /* size: 8 */ }
>(
  [['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)]],
  ClubVault.fromArgs,
  'ClubVault',
)