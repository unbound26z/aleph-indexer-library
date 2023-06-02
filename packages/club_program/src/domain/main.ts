import { StorageStream } from '@aleph-indexer/core'
import {
  IndexerMainDomain,
  IndexerMainDomainWithDiscovery,
  IndexerMainDomainWithStats,
  AccountIndexerConfigWithMeta,
  IndexerMainDomainContext,
  AccountStats,
  Blockchain,
} from '@aleph-indexer/framework'
import { AccountType, ParsedEvents } from '../utils/layouts/index.js'
import {
  GlobalClubProgramStats,
  ClubProgramAccountStats,
  ClubProgramAccountData,
  ClubProgramAccountInfo,
} from '../types.js'
import ClubProgramDiscoverer from './discoverer/club_program.js'

export default class MainDomain
  extends IndexerMainDomain
  implements IndexerMainDomainWithDiscovery, IndexerMainDomainWithStats
{
  protected stats!: GlobalClubProgramStats

  constructor(
    protected context: IndexerMainDomainContext,
    protected discoverer: ClubProgramDiscoverer = new ClubProgramDiscoverer(),
  ) {
    super(context, {
      discoveryInterval: 1000 * 60 * 60 * 1,
      stats: 1000 * 60 * 1,
    })
  }

  async discoverAccounts(): Promise<
    AccountIndexerConfigWithMeta<ClubProgramAccountInfo>[]
  > {
    const accounts = await this.discoverer.loadAccounts()

    return accounts.map((meta) => {
      return {
        blockchainId: Blockchain.Solana,
        account: meta.address,
        meta,
        index: {
          transactions: {
            chunkDelay: 0,
            chunkTimeframe: 1000 * 60 * 60 * 24,
          },
          content: false,
        },
      }
    })
  }

  async getAccounts(
    includeStats?: boolean,
  ): Promise<Record<string, ClubProgramAccountData>> {
    const accounts: Record<string, ClubProgramAccountData> = {}

    await Promise.all(
      Array.from(this.accounts.solana || []).map(async (account) => {
        const actual = await this.getAccount(account, includeStats)
        accounts[account] = actual as ClubProgramAccountData
      }),
    )

    return accounts
  }

  async getAccount(
    account: string,
    includeStats?: boolean,
  ): Promise<ClubProgramAccountData> {
    const info = (await this.context.apiClient
      .useBlockchain(Blockchain.Solana)
      .invokeDomainMethod({
        account,
        method: 'getAccountInfo',
      })) as ClubProgramAccountInfo

    if (!includeStats) return { info }

    const { stats } = (await this.context.apiClient
      .useBlockchain(Blockchain.Solana)
      .invokeDomainMethod({
        account,
        method: 'getClubProgramStats',
      })) as AccountStats<ClubProgramAccountStats>

    return { info, stats }
  }

  async getAccountEventsByTime(
    account: string,
    startDate: number,
    endDate: number,
    opts: any,
  ): Promise<StorageStream<string, ParsedEvents>> {
    const stream = await this.context.apiClient
      .useBlockchain(Blockchain.Solana)
      .invokeDomainMethod({
        account,
        method: 'getAccountEventsByTime',
        args: [startDate, endDate, opts],
      })

    return stream as StorageStream<string, ParsedEvents>
  }

  async updateStats(now: number): Promise<void> {
    this.stats = await this.computeGlobalStats()
  }

  async getGlobalStats(addresses?: string[]): Promise<GlobalClubProgramStats> {
    if (!addresses || addresses.length === 0) {
      if (!this.stats) {
        await this.updateStats(Date.now())
      }

      return this.stats
    }

    return this.computeGlobalStats(addresses)
  }

  async computeGlobalStats(
    accountAddresses?: string[],
  ): Promise<GlobalClubProgramStats> {
    console.log(
      `📊 computing global stats for ${accountAddresses?.length} accounts`,
    )
    const accountsStats = await this.getAccountStats<ClubProgramAccountStats>(
      Blockchain.Solana,
      accountAddresses,
    )
    const globalStats: GlobalClubProgramStats = this.getNewGlobalStats()

    for (const accountStats of accountsStats) {
      if (!accountStats.stats) continue

      const { accesses, accessesByProgramId, startTimestamp, endTimestamp } =
        accountStats.stats.total

      console.log(
        `📊 computing global stats for ${accountStats.account} with ${accesses} accesses`,
      )

      const type = this.discoverer.getAccountType(accountStats.account)

      globalStats.totalAccounts[type]++
      globalStats.totalAccesses += accesses || 0
      if (accessesByProgramId) {
        Object.entries(accessesByProgramId).forEach(([programId, accesses]) => {
          globalStats.totalAccessesByProgramId[programId] =
            (globalStats.totalAccessesByProgramId[programId] || 0) + accesses
        })
      }
      globalStats.startTimestamp = Math.min(
        globalStats.startTimestamp || Number.MAX_SAFE_INTEGER,
        startTimestamp || Number.MAX_SAFE_INTEGER,
      )
      globalStats.endTimestamp = Math.max(
        globalStats.endTimestamp || 0,
        endTimestamp || 0,
      )
    }
    return globalStats
  }

  getNewGlobalStats(): GlobalClubProgramStats {
    return {
      totalAccesses: 0,
      totalAccounts: {
        [AccountType.ClubData]: 0,
        [AccountType.WhitelistingData]: 0,
        [AccountType.Admins]: 0,
        [AccountType.ClubVault]: 0,
        [AccountType.ClubVaultData]: 0,
        [AccountType.Withdrawal]: 0,
        [AccountType.WithdrawalData]: 0,
        [AccountType.FundraiseConfig]: 0,
        [AccountType.FinancialRecord]: 0,
        [AccountType.FinancialRecordOffer]: 0,
        [AccountType.MaxVoterWeightRecord]: 0,
        [AccountType.VoterWeightRecord]: 0,
        [AccountType.AllowedMemberData]: 0,
        [AccountType.NftVoteRecord]: 0,
        [AccountType.ProposalMetadata]: 0,
        [AccountType.StakeConfig]: 0,
        [AccountType.StakeRecord]: 0,
        [AccountType.TreasuryData]: 0,
        [AccountType.UniverseMetadata]: 0,
      },
      totalAccessesByProgramId: {},
      startTimestamp: undefined,
      endTimestamp: undefined,
    }
  }
}
