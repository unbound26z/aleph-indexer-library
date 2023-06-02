/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import {
  VoterWeightAction,
  voterWeightActionBeet,
} from '../types/VoterWeightAction.js'

/**
 * Arguments used to create {@link VoterWeightRecord}
 * @category Accounts
 * @category generated
 */
export type VoterWeightRecordArgs = {
  realm: web3.PublicKey
  governingTokenMint: web3.PublicKey
  governingTokenOwner: web3.PublicKey
  voterWeight: beet.bignum
  voterWeightExpiry: beet.COption<beet.bignum>
  weightAction: beet.COption<VoterWeightAction>
  weightActionTarget: beet.COption<web3.PublicKey>
  reserved: number[] /* size: 8 */
}

export const voterWeightRecordDiscriminator = [
  46, 249, 155, 75, 153, 248, 116, 9,
]
/**
 * Holds the data for the {@link VoterWeightRecord} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class VoterWeightRecord implements VoterWeightRecordArgs {
  private constructor(
    readonly realm: web3.PublicKey,
    readonly governingTokenMint: web3.PublicKey,
    readonly governingTokenOwner: web3.PublicKey,
    readonly voterWeight: beet.bignum,
    readonly voterWeightExpiry: beet.COption<beet.bignum>,
    readonly weightAction: beet.COption<VoterWeightAction>,
    readonly weightActionTarget: beet.COption<web3.PublicKey>,
    readonly reserved: number[] /* size: 8 */,
  ) {}

  /**
   * Creates a {@link VoterWeightRecord} instance from the provided args.
   */
  static fromArgs(args: VoterWeightRecordArgs) {
    return new VoterWeightRecord(
      args.realm,
      args.governingTokenMint,
      args.governingTokenOwner,
      args.voterWeight,
      args.voterWeightExpiry,
      args.weightAction,
      args.weightActionTarget,
      args.reserved,
    )
  }

  /**
   * Deserializes the {@link VoterWeightRecord} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [VoterWeightRecord, number] {
    return VoterWeightRecord.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link VoterWeightRecord} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<VoterWeightRecord> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find VoterWeightRecord account at ${address}`)
    }
    return VoterWeightRecord.fromAccountInfo(accountInfo, 0)[0]
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
    return beetSolana.GpaBuilder.fromStruct(programId, voterWeightRecordBeet)
  }

  /**
   * Deserializes the {@link VoterWeightRecord} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [VoterWeightRecord, number] {
    return voterWeightRecordBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link VoterWeightRecord} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return voterWeightRecordBeet.serialize({
      accountDiscriminator: voterWeightRecordDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link VoterWeightRecord} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: VoterWeightRecordArgs) {
    const instance = VoterWeightRecord.fromArgs(args)
    return voterWeightRecordBeet.toFixedFromValue({
      accountDiscriminator: voterWeightRecordDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link VoterWeightRecord} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: VoterWeightRecordArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      VoterWeightRecord.byteSize(args),
      commitment,
    )
  }

  /**
   * Returns a readable version of {@link VoterWeightRecord} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      realm: this.realm.toBase58(),
      governingTokenMint: this.governingTokenMint.toBase58(),
      governingTokenOwner: this.governingTokenOwner.toBase58(),
      voterWeight: (() => {
        const x = <{ toNumber: () => number }>this.voterWeight
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      voterWeightExpiry: this.voterWeightExpiry,
      weightAction: this.weightAction,
      weightActionTarget: this.weightActionTarget,
      reserved: this.reserved,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const voterWeightRecordBeet = new beet.FixableBeetStruct<
  VoterWeightRecord,
  VoterWeightRecordArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['realm', beetSolana.publicKey],
    ['governingTokenMint', beetSolana.publicKey],
    ['governingTokenOwner', beetSolana.publicKey],
    ['voterWeight', beet.u64],
    ['voterWeightExpiry', beet.coption(beet.u64)],
    ['weightAction', beet.coption(voterWeightActionBeet)],
    ['weightActionTarget', beet.coption(beetSolana.publicKey)],
    ['reserved', beet.uniformFixedSizeArray(beet.u8, 8)],
  ],
  VoterWeightRecord.fromArgs,
  'VoterWeightRecord',
)