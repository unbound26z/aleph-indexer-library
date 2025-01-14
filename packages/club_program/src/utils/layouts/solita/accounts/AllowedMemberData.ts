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
 * Arguments used to create {@link AllowedMemberData}
 * @category Accounts
 * @category generated
 */
export type AllowedMemberDataArgs = {
  clubData: web3.PublicKey
  memberPubkey: web3.PublicKey
  isMember: boolean
  status: number
  role: string
  joinedAt: beet.bignum
  joinedAtSlot: beet.bignum
}

export const allowedMemberDataDiscriminator = [39, 21, 80, 170, 35, 12, 48, 131]
/**
 * Holds the data for the {@link AllowedMemberData} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class AllowedMemberData implements AllowedMemberDataArgs {
  private constructor(
    readonly clubData: web3.PublicKey,
    readonly memberPubkey: web3.PublicKey,
    readonly isMember: boolean,
    readonly status: number,
    readonly role: string,
    readonly joinedAt: beet.bignum,
    readonly joinedAtSlot: beet.bignum,
  ) {}

  /**
   * Creates a {@link AllowedMemberData} instance from the provided args.
   */
  static fromArgs(args: AllowedMemberDataArgs) {
    return new AllowedMemberData(
      args.clubData,
      args.memberPubkey,
      args.isMember,
      args.status,
      args.role,
      args.joinedAt,
      args.joinedAtSlot,
    )
  }

  /**
   * Deserializes the {@link AllowedMemberData} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [AllowedMemberData, number] {
    return AllowedMemberData.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link AllowedMemberData} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<AllowedMemberData> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find AllowedMemberData account at ${address}`)
    }
    return AllowedMemberData.fromAccountInfo(accountInfo, 0)[0]
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
    return beetSolana.GpaBuilder.fromStruct(programId, allowedMemberDataBeet)
  }

  /**
   * Deserializes the {@link AllowedMemberData} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [AllowedMemberData, number] {
    return allowedMemberDataBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link AllowedMemberData} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return allowedMemberDataBeet.serialize({
      accountDiscriminator: allowedMemberDataDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link AllowedMemberData} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: AllowedMemberDataArgs) {
    const instance = AllowedMemberData.fromArgs(args)
    return allowedMemberDataBeet.toFixedFromValue({
      accountDiscriminator: allowedMemberDataDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link AllowedMemberData} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: AllowedMemberDataArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      AllowedMemberData.byteSize(args),
      commitment,
    )
  }

  /**
   * Returns a readable version of {@link AllowedMemberData} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      clubData: this.clubData.toBase58(),
      memberPubkey: this.memberPubkey.toBase58(),
      isMember: this.isMember,
      status: this.status,
      role: this.role,
      joinedAt: (() => {
        const x = <{ toNumber: () => number }>this.joinedAt
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      joinedAtSlot: (() => {
        const x = <{ toNumber: () => number }>this.joinedAtSlot
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
export const allowedMemberDataBeet = new beet.FixableBeetStruct<
  AllowedMemberData,
  AllowedMemberDataArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['clubData', beetSolana.publicKey],
    ['memberPubkey', beetSolana.publicKey],
    ['isMember', beet.bool],
    ['status', beet.u8],
    ['role', beet.utf8String],
    ['joinedAt', beet.i64],
    ['joinedAtSlot', beet.u64],
  ],
  AllowedMemberData.fromArgs,
  'AllowedMemberData',
)
