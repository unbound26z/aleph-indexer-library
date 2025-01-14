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
 * Arguments used to create {@link FinancialRecordDepricated}
 * @category Accounts
 * @category generated
 */
export type FinancialRecordDepricatedArgs = {
  authority: web3.PublicKey
  treasury: web3.PublicKey
  financialRight: beet.bignum
  latestFundraiseIndex: number
  validFromIndex: beet.COption<number>
  sellOffersCount: number
  listedFinancialAmount: beet.bignum
}

export const financialRecordDepricatedDiscriminator = [
  104, 206, 235, 83, 16, 2, 246, 151,
]
/**
 * Holds the data for the {@link FinancialRecordDepricated} Account and provides de/serialization
 * functionality for that data
 *
 * @category Accounts
 * @category generated
 */
export class FinancialRecordDepricated
  implements FinancialRecordDepricatedArgs
{
  private constructor(
    readonly authority: web3.PublicKey,
    readonly treasury: web3.PublicKey,
    readonly financialRight: beet.bignum,
    readonly latestFundraiseIndex: number,
    readonly validFromIndex: beet.COption<number>,
    readonly sellOffersCount: number,
    readonly listedFinancialAmount: beet.bignum,
  ) {}

  /**
   * Creates a {@link FinancialRecordDepricated} instance from the provided args.
   */
  static fromArgs(args: FinancialRecordDepricatedArgs) {
    return new FinancialRecordDepricated(
      args.authority,
      args.treasury,
      args.financialRight,
      args.latestFundraiseIndex,
      args.validFromIndex,
      args.sellOffersCount,
      args.listedFinancialAmount,
    )
  }

  /**
   * Deserializes the {@link FinancialRecordDepricated} from the data of the provided {@link web3.AccountInfo}.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static fromAccountInfo(
    accountInfo: web3.AccountInfo<Buffer>,
    offset = 0,
  ): [FinancialRecordDepricated, number] {
    return FinancialRecordDepricated.deserialize(accountInfo.data, offset)
  }

  /**
   * Retrieves the account info from the provided address and deserializes
   * the {@link FinancialRecordDepricated} from its data.
   *
   * @throws Error if no account info is found at the address or if deserialization fails
   */
  static async fromAccountAddress(
    connection: web3.Connection,
    address: web3.PublicKey,
    commitmentOrConfig?: web3.Commitment | web3.GetAccountInfoConfig,
  ): Promise<FinancialRecordDepricated> {
    const accountInfo = await connection.getAccountInfo(
      address,
      commitmentOrConfig,
    )
    if (accountInfo == null) {
      throw new Error(
        `Unable to find FinancialRecordDepricated account at ${address}`,
      )
    }
    return FinancialRecordDepricated.fromAccountInfo(accountInfo, 0)[0]
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
    return beetSolana.GpaBuilder.fromStruct(
      programId,
      financialRecordDepricatedBeet,
    )
  }

  /**
   * Deserializes the {@link FinancialRecordDepricated} from the provided data Buffer.
   * @returns a tuple of the account data and the offset up to which the buffer was read to obtain it.
   */
  static deserialize(
    buf: Buffer,
    offset = 0,
  ): [FinancialRecordDepricated, number] {
    return financialRecordDepricatedBeet.deserialize(buf, offset)
  }

  /**
   * Serializes the {@link FinancialRecordDepricated} into a Buffer.
   * @returns a tuple of the created Buffer and the offset up to which the buffer was written to store it.
   */
  serialize(): [Buffer, number] {
    return financialRecordDepricatedBeet.serialize({
      accountDiscriminator: financialRecordDepricatedDiscriminator,
      ...this,
    })
  }

  /**
   * Returns the byteSize of a {@link Buffer} holding the serialized data of
   * {@link FinancialRecordDepricated} for the provided args.
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   */
  static byteSize(args: FinancialRecordDepricatedArgs) {
    const instance = FinancialRecordDepricated.fromArgs(args)
    return financialRecordDepricatedBeet.toFixedFromValue({
      accountDiscriminator: financialRecordDepricatedDiscriminator,
      ...instance,
    }).byteSize
  }

  /**
   * Fetches the minimum balance needed to exempt an account holding
   * {@link FinancialRecordDepricated} data from rent
   *
   * @param args need to be provided since the byte size for this account
   * depends on them
   * @param connection used to retrieve the rent exemption information
   */
  static async getMinimumBalanceForRentExemption(
    args: FinancialRecordDepricatedArgs,
    connection: web3.Connection,
    commitment?: web3.Commitment,
  ): Promise<number> {
    return connection.getMinimumBalanceForRentExemption(
      FinancialRecordDepricated.byteSize(args),
      commitment,
    )
  }

  /**
   * Returns a readable version of {@link FinancialRecordDepricated} properties
   * and can be used to convert to JSON and/or logging
   */
  pretty() {
    return {
      authority: this.authority.toBase58(),
      treasury: this.treasury.toBase58(),
      financialRight: (() => {
        const x = <{ toNumber: () => number }>this.financialRight
        if (typeof x.toNumber === 'function') {
          try {
            return x.toNumber()
          } catch (_) {
            return x
          }
        }
        return x
      })(),
      latestFundraiseIndex: this.latestFundraiseIndex,
      validFromIndex: this.validFromIndex,
      sellOffersCount: this.sellOffersCount,
      listedFinancialAmount: (() => {
        const x = <{ toNumber: () => number }>this.listedFinancialAmount
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
export const financialRecordDepricatedBeet = new beet.FixableBeetStruct<
  FinancialRecordDepricated,
  FinancialRecordDepricatedArgs & {
    accountDiscriminator: number[] /* size: 8 */
  }
>(
  [
    ['accountDiscriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['authority', beetSolana.publicKey],
    ['treasury', beetSolana.publicKey],
    ['financialRight', beet.u64],
    ['latestFundraiseIndex', beet.u32],
    ['validFromIndex', beet.coption(beet.u32)],
    ['sellOffersCount', beet.u32],
    ['listedFinancialAmount', beet.u64],
  ],
  FinancialRecordDepricated.fromArgs,
  'FinancialRecordDepricated',
)
