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
  StakePeriodType,
  stakePeriodTypeBeet,
} from '../types/StakePeriodType.js'
import { StakeStatus, stakeStatusBeet } from '../types/StakeStatus.js'
import { NftStakeRecord, nftStakeRecordBeet } from '../types/NftStakeRecord.js'

/**
 * Arguments used to create {@link StakeConfig}
 * @category Accounts
 * @category generated
 */
export type StakeConfigArgs = {
  clubData: web3.PublicKey
  capAmount: beet.bignum
  raisedAmount: beet.bignum
  stakePeriodType: StakePeriodType
  stakePeriodEnd: beet.COption<beet.bignum>
  name: string
  rewardPercentage: number
  status: StakeStatus
  nftStakeRecord: beet.COption<NftStakeRecord>
  stakeIndex: number
}

export const stakeConfigDiscriminator = [238, 151, 43, 3, 11, 151, 63, 176]
/**
 * Holds the data for the {@link StakeConfig} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class StakeConfig implements StakeConfigArgs {
  private constructor(
    readonly clubData: web3.PublicKey,
    readonly capAmount: beet.bignum,
    readonly raisedAmount: beet.bignum,
    readonly stakePeriodType: StakePeriodType,
    readonly stakePeriodEnd: beet.COption<beet.bignum>,
    readonly name: string,
    readonly rewardPercentage: number,
    readonly status: StakeStatus,
    readonly nftStakeRecord: beet.COption<NftStakeRecord>,
    readonly stakeIndex: number,
  ) {}

  /**
   * Creates a {@link StakeConfig} instance from the provided args.
   */
  static fromArgs(args: StakeConfigArgs) {
    return new StakeConfig(
      args.clubData,
      args.capAmount,
      args.raisedAmount,
      args.stakePeriodType,
      args.stakePeriodEnd,
      args.name,
      args.rewardPercentage,
      args.status,
      args.nftStakeRecord,
      args.stakeIndex,
    )
  }

  /**
   * Deserializes the {@link StakeConfig} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [StakeConfig, number] {
    return StakeConfig.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link StakeConfig} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<StakeConfig> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find StakeConfig account at ${address}`)
    }
    return StakeConfig.fromAccountInfo(accountInfo, 0)[0]
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
    return beetSolana.GpaBuilder.fromStruct(programId, stakeConfigBeet)
  }

  /**
   * Deserializes the {@link StakeConfig} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [StakeConfig, number] {
    return stakeConfigBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link StakeConfig} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return stakeConfigBeet.serialize({
      accountDiscriminator: stakeConfigDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link StakeConfig} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: StakeConfigArgs) {
    const instance = StakeConfig.fromArgs(args)
    return stakeConfigBeet.toFixedFromValue({
      accountDiscriminator: stakeConfigDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link StakeConfig} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: StakeConfigArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      StakeConfig.byteSize(args),
      commitment,
    )
  }

  /**
   * Returns a readable version of {@link StakeConfig} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      clubData: this.clubData.toBase58(),
      capAmount: (() => {
        const x = <{ toNumber: () => number }>this.capAmount
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      raisedAmount: (() => {
        const x = <{ toNumber: () => number }>this.raisedAmount
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      stakePeriodType:
        'StakePeriodType.' + StakePeriodType[this.stakePeriodType],
      stakePeriodEnd: this.stakePeriodEnd,
      name: this.name,
      rewardPercentage: this.rewardPercentage,
      status: 'StakeStatus.' + StakeStatus[this.status],
      nftStakeRecord: this.nftStakeRecord,
      stakeIndex: this.stakeIndex,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const stakeConfigBeet = new beet.FixableBeetStruct<
  StakeConfig,
  StakeConfigArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['clubData', beetSolana.publicKey],
    ['capAmount', beet.u64],
    ['raisedAmount', beet.u64],
    ['stakePeriodType', stakePeriodTypeBeet],
    ['stakePeriodEnd', beet.coption(beet.i64)],
    ['name', beet.utf8String],
    ['rewardPercentage', beet.u32],
    ['status', stakeStatusBeet],
    ['nftStakeRecord', beet.coption(nftStakeRecordBeet)],
    ['stakeIndex', beet.u32],
  ],
  StakeConfig.fromArgs,
  'StakeConfig',
)