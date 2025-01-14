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
 * Arguments used to create {@link UniverseMetadata}
 * @category Accounts
 * @category generated
 */
export type UniverseMetadataArgs = {
  discriminator: number[] /* size: 8 */
  authority: web3.PublicKey
  candyMachine: web3.PublicKey
  mint: web3.PublicKey
  mintingEpoch: beet.bignum
  currentUniverseLevel: number
  status: number
  rarity: number
  evolutionPoints: beet.bignum
}

export const universeMetadataDiscriminator = [
  79, 168, 151, 86, 231, 125, 44, 182,
]
/**
 * Holds the data for the {@link UniverseMetadata} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class UniverseMetadata implements UniverseMetadataArgs {
  private constructor(
    readonly discriminator: number[] /* size: 8 */,
    readonly authority: web3.PublicKey,
    readonly candyMachine: web3.PublicKey,
    readonly mint: web3.PublicKey,
    readonly mintingEpoch: beet.bignum,
    readonly currentUniverseLevel: number,
    readonly status: number,
    readonly rarity: number,
    readonly evolutionPoints: beet.bignum,
  ) {}

  /**
   * Creates a {@link UniverseMetadata} instance from the provided args.
   */
  static fromArgs(args: UniverseMetadataArgs) {
    return new UniverseMetadata(
      args.discriminator,
      args.authority,
      args.candyMachine,
      args.mint,
      args.mintingEpoch,
      args.currentUniverseLevel,
      args.status,
      args.rarity,
      args.evolutionPoints,
    )
  }

  /**
   * Deserializes the {@link UniverseMetadata} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [UniverseMetadata, number] {
    return UniverseMetadata.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link UniverseMetadata} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<UniverseMetadata> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find UniverseMetadata account at ${address}`)
    }
    return UniverseMetadata.fromAccountInfo(accountInfo, 0)[0]
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
    return beetSolana.GpaBuilder.fromStruct(programId, universeMetadataBeet)
  }

  /**
   * Deserializes the {@link UniverseMetadata} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [UniverseMetadata, number] {
    return universeMetadataBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link UniverseMetadata} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return universeMetadataBeet.serialize({
      accountDiscriminator: universeMetadataDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link UniverseMetadata}
   */
  static get byteSize() {
    return universeMetadataBeet.byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link UniverseMetadata} data from rent
   *
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      UniverseMetadata.byteSize,
      commitment,
    )
  }

  /**
   * Determines if the provided {@link Buffer} has the correct byte size to
   * hold {@link UniverseMetadata} data.
   */
  static hasCorrectByteSize(buf: Buffer, offset = 0) {
    return buf.byteLength - offset === UniverseMetadata.byteSize
  }

  /**
   * Returns a readable version of {@link UniverseMetadata} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      discriminator: this.discriminator,
      authority: this.authority.toBase58(),
      candyMachine: this.candyMachine.toBase58(),
      mint: this.mint.toBase58(),
      mintingEpoch: (() => {
        const x = <{ toNumber: () => number }>this.mintingEpoch
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      currentUniverseLevel: this.currentUniverseLevel,
      status: this.status,
      rarity: this.rarity,
      evolutionPoints: (() => {
        const x = <{ toNumber: () => number }>this.evolutionPoints
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const universeMetadataBeet = new beet.BeetStruct<
  UniverseMetadata,
  UniverseMetadataArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['discriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['authority', beetSolana.publicKey],
    ['candyMachine', beetSolana.publicKey],
    ['mint', beetSolana.publicKey],
    ['mintingEpoch', beet.u64],
    ['currentUniverseLevel', beet.u32],
    ['status', beet.u8],
    ['rarity', beet.u8],
    ['evolutionPoints', beet.u64],
  ],
  UniverseMetadata.fromArgs,
  'UniverseMetadata',
)
