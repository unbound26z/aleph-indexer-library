/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { DepositRecord, depositRecordBeet } from '../types/DepositRecord.js'

/**
 * Arguments used to create {@link FinancialRecord}
 * @category Accounts
 * @category generated
 */
export type FinancialRecordArgs = {
  authority: web3.PublicKey
  treasury: web3.PublicKey
  sellOffersCount: number
  listedFinancialRights: beet.bignum
  depositRecords: DepositRecord[]
}

export const financialRecordDiscriminator = [
  112, 4, 153, 219, 195, 155, 106, 67,
]
/**
 * Holds the data for the {@link FinancialRecord} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class FinancialRecord implements FinancialRecordArgs {
  private constructor(
    readonly authority: web3.PublicKey,
    readonly treasury: web3.PublicKey,
    readonly sellOffersCount: number,
    readonly listedFinancialRights: beet.bignum,
    readonly depositRecords: DepositRecord[],
  ) {}

  /**
   * Creates a {@link FinancialRecord} instance from the provided args.
   */
  static fromArgs(args: FinancialRecordArgs) {
    return new FinancialRecord(
      args.authority,
      args.treasury,
      args.sellOffersCount,
      args.listedFinancialRights,
      args.depositRecords,
    )
  }

  /**
   * Deserializes the {@link FinancialRecord} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [FinancialRecord, number] {
    return FinancialRecord.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link FinancialRecord} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<FinancialRecord> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    )
    if (accountInfo == null) {
      throw new Error(`Unable to find FinancialRecord account at ${address}`)
    }
    return FinancialRecord.fromAccountInfo(accountInfo, 0)[0]
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
    return beetSolana.GpaBuilder.fromStruct(programId, financialRecordBeet)
  }

  /**
   * Deserializes the {@link FinancialRecord} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(buf: Buffer, offset = 0): [FinancialRecord, number] {
    return financialRecordBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link FinancialRecord} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return financialRecordBeet.serialize({
      accountDiscriminator: financialRecordDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link FinancialRecord} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: FinancialRecordArgs) {
    const instance = FinancialRecord.fromArgs(args)
    return financialRecordBeet.toFixedFromValue({
      accountDiscriminator: financialRecordDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link FinancialRecord} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: FinancialRecordArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      FinancialRecord.byteSize(args),
      commitment,
    )
  }

  /**
   * Returns a readable version of {@link FinancialRecord} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      authority: this.authority.toBase58(),
      treasury: this.treasury.toBase58(),
      sellOffersCount: this.sellOffersCount,
      listedFinancialRights: (() => {
        const x = <{ toNumber: () => number }>this.listedFinancialRights
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      depositRecords: this.depositRecords,
    }
  }
}

/**
 * @category Accounts
 * @category generated
 */
export const financialRecordBeet = new beet.FixableBeetStruct<
  FinancialRecord,
  FinancialRecordArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['authority', beetSolana.publicKey],
    ['treasury', beetSolana.publicKey],
    ['sellOffersCount', beet.u32],
    ['listedFinancialRights', beet.u64],
    ['depositRecords', beet.array(depositRecordBeet)],
  ],
  FinancialRecord.fromArgs,
  'FinancialRecord',
)
