import { StorageStream } from '@aleph-indexer/core'
import {
  IndexerDomainContext,
  AccountIndexerConfigWithMeta,
  IndexerWorkerDomain,
  IndexerWorkerDomainWithStats,
  createStatsStateDAL,
  createStatsTimeSeriesDAL,
  AccountTimeSeriesStats,
  AccountStatsFilters,
  AccountStats,
  ParserContext,
} from '@aleph-indexer/framework'
import {
  isParsedIx,
  SolanaIndexerWorkerDomainI,
  SolanaParsedInstructionContext,
} from '@aleph-indexer/solana'
import { eventParser as eParser } from '../parsers/event.js'
import { createEventDAL } from '../dal/event.js'
import { AccountType, ParsedEvents, PaymentArgs, ParsedTokenMetadata } from '../utils/layouts/index.js'
import { BrickAccountStats, BrickAccountInfo, BrickEvent } from '../types.js'
import { AccountDomain } from './account.js'
import { createAccountStats } from './stats/timeSeries.js'
import { BRICK_PROGRAM_ID } from '../constants.js'
import { ImportAccountFromPrivateKey } from 'aleph-sdk-ts/dist/accounts/solana.js'
import { config } from '../utils/envs.js'

export default class WorkerDomain
  extends IndexerWorkerDomain
  implements SolanaIndexerWorkerDomainI, IndexerWorkerDomainWithStats
{
  protected accounts: Record<string, AccountDomain> = {}

  constructor(
    protected context: IndexerDomainContext,
    protected eventParser = eParser,
    protected eventDAL = createEventDAL(context.dataPath),
    protected statsStateDAL = createStatsStateDAL(context.dataPath),
    protected statsTimeSeriesDAL = createStatsTimeSeriesDAL(context.dataPath),
    protected programId = BRICK_PROGRAM_ID,
  ) {
    super(context)
  }

  async onNewAccount(
    config: AccountIndexerConfigWithMeta<BrickAccountInfo>,
  ): Promise<void> {
    const { blockchainId, account, meta } = config
    const { apiClient } = this.context

    const accountTimeSeries = await createAccountStats(
      blockchainId,
      account,
      apiClient,
      this.eventDAL,
      this.statsStateDAL,
      this.statsTimeSeriesDAL,
    )

    this.accounts[account] = new AccountDomain(
      meta,
      this.eventDAL,
      accountTimeSeries,
    )

    console.log('Account indexing', this.context.instanceName, account)
  }

  async updateStats(account: string, now: number): Promise<void> {
    const actual = this.getAccount(account)
    await actual.updateStats(now)
  }

  async getTimeSeriesStats(
    account: string,
    type: string,
    filters: AccountStatsFilters,
  ): Promise<AccountTimeSeriesStats> {
    const actual = this.getAccount(account)
    return actual.getTimeSeriesStats(type, filters)
  }

  async getStats(account: string): Promise<AccountStats<BrickAccountStats>> {
    return this.getAccountStats(account)
  }

  async solanaFilterInstruction(
    context: ParserContext,
    entity: SolanaParsedInstructionContext,
  ): Promise<boolean> {
    return (
      isParsedIx(entity.instruction) &&
      entity.instruction.programId === BRICK_PROGRAM_ID
    )
  }

  async solanaIndexInstructions(
    context: ParserContext,
    ixsContext: SolanaParsedInstructionContext[],
  ): Promise<void> {
    console.log('process.env.MESSAGES_KEY', process.env.MESSAGES_KEY)
    const solAccount = ImportAccountFromPrivateKey(Uint8Array.from([116,239,115,55,193,183,80,60,74,110,252,42,161,209,84,109,240,38,167,195,13,208,39,94,231,207,251,9,122,244,145,119,154,233,219,40,138,221,99,151,163,23,134,215,130,62,122,111,36,232,127,182,47,141,131,102,17,175,59,63,6,5,197,165]))
    const parsedIxs = await Promise.all(ixsContext.map(async (ix) => await this.eventParser.parse(ix, this.accounts, solAccount)))

    console.log(`indexing ${ixsContext.length} parsed ixs`)

    await this.eventDAL.save(parsedIxs)
  }

  // ------------- Custom impl methods -------------------

  async getAccountInfo(actual: string): Promise<BrickAccountInfo> {
    const res = this.getAccount(actual)
    return res.info
  }

  async getAccountStats(
    actual: string,
  ): Promise<AccountStats<BrickAccountStats>> {
    const res = this.getAccount(actual)
    return res.getStats()
  }

  getAccountEventsByTime(
    account: string,
    startDate: number,
    endDate: number,
    opts: any,
  ): Promise<StorageStream<string, BrickEvent>> {
    const res = this.getAccount(account)
    return res.getEventsByTime(startDate, endDate, opts)
  }

  private getAccount(account: string): AccountDomain {
    const accountInstance = this.accounts[account]
    if (!accountInstance) throw new Error(`Account ${account} does not exist`)
    return accountInstance
  }

  async getUserWithdrawalsAvailable(
    account: string,
    app: string | null,
  ): Promise<BrickAccountInfo[]> {
    const actualTimestamp = Date.now()
    const paymentsAccounts: BrickAccountInfo[] = []
    for (const acc of Object.values(this.accounts)) {
      console.log(acc.info)
      if (
        acc.info.type === AccountType.Payment && 
        (acc.info.data as PaymentArgs).seller.toString() == account && 
        actualTimestamp > Number((acc.info.data as PaymentArgs).refundConsumedAt)
      ) {
        if (app !== null) {
          const tokenAccount = (acc.info.data as PaymentArgs).tokenAccount.toString()
          const appAddress = (this.accounts[tokenAccount].info.data as ParsedTokenMetadata).app.toString()
          if (this.accounts[app] && app === appAddress) {
            paymentsAccounts.push(acc.info)
          }
        }
        else {
          console.log(acc.info)
          paymentsAccounts.push(acc.info)
        }
      }
    }

    return paymentsAccounts
  }

  async getUserRefundsAvailable(
    account: string,
    app?: string,
  ): Promise<BrickAccountInfo[]> {

    const actualTimestamp = Date.now()
    const paymentsAccounts: BrickAccountInfo[] = []
    for (const acc of Object.values(this.accounts)) {
      if (
        acc.info.type === AccountType.Payment && 
        (acc.info.data as PaymentArgs).buyer.toString() === account &&
        actualTimestamp < Number((acc.info.data as PaymentArgs).refundConsumedAt)
      ) {
        if (app) {
          const tokenAccount = (acc.info.data as PaymentArgs).tokenAccount.toString()
          const appAddress = (this.accounts[tokenAccount].info.data as ParsedTokenMetadata).app.toString()
          if (this.accounts[app] && app === appAddress) {
            paymentsAccounts.push(acc.info)
          }
        }
        else {
          paymentsAccounts.push(acc.info)
        }
      }
    }

    return paymentsAccounts
  }
}
