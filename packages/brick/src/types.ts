import { EventBase } from '@aleph-indexer/framework';
import {
  AccountType,
  ParsedEvents,
  ParsedAccountsData,
  InstructionType,
  CreateAppInstructionArgs,
  CreateAppInstructionAccounts,
  CreateAppEventData,
  CreateTokenInstructionAccounts,
  CreateTokenEventData,
  BuyTokenEventData,
  BuyTokenInstructionAccounts,
  DeletetokenInstructionAccounts,
  ShareTokenEventData,
  ShareTokenInstructionAccounts,
  UseTokenInstructionAccounts,
  WithdrawFundsInstructionAccounts,
  EditTokenPriceEventData,
  EditTokenPriceInstructionAccounts,
  ParsedEventsInfo,
} from './utils/layouts/index.js'

export type AlephDataSetContent = {
  name:              string;
  owner:             string;
  desc:              string;
  available:         boolean;
  ownsAllTimeseries: boolean;
  timeseriesIDs:     string[];
  views:             string[];
}

export type BrickAccountInfo = {
  name: string
  programId: string
  address: string
  type: AccountType
  data: ParsedAccountsData
}

// -------------------------- STATS --------------------------

export type AccessTimeStats = {
  /**
   * Total number of times the account was accessed
   */
  accesses: number
  /**
   * Number of times accessed, grouped by program ID
   */
  accessesByProgramId: {
    [programId: string]: number
  }
  /**
   * First access time in milliseconds digested in the stats
   */
  startTimestamp?: number
  /**
   * Last access time in milliseconds digested in the stats
   */
  endTimestamp?: number
}

export type TimeStats = AccessTimeStats //@note: Add more types of time stats here

export type BrickAccountStats = {
  requestsStatsByHour: Record<string, AccessTimeStats>
  last1h: AccessTimeStats
  last24h: AccessTimeStats
  last7d: AccessTimeStats
  total: AccessTimeStats
  accessingPrograms: Set<string>
  lastRequest?: BrickEvent
}

export type HourlyStats = {
  stats: AccessTimeStats[]
  statsMap: Record<string, AccessTimeStats>
}

export type GlobalBrickStats = {
  totalAccounts: Record<AccountType, number>
  totalAccesses: number
  totalAccessesByProgramId: {
    [programId: string]: number
  }
  startTimestamp?: number
  endTimestamp?: number
}

export type BrickAccountData = {
  info: BrickAccountInfo
  stats?: BrickAccountStats
}


// ------------------
export type BrickEventBase = {
  parsed: unknown
  program: string
  programId: string
}

export type BrickCreateApp = BrickEventBase & {
  parsed: {
    info: CreateAppEventData & CreateAppInstructionAccounts
    type: InstructionType.CreateApp
  }
}

export type BrickCreateToken = BrickEventBase & {
  parsed: {
    info: CreateTokenEventData & CreateTokenInstructionAccounts
    type: InstructionType.CreateToken
  }
}

export type BrickEditTokenPrice = BrickEventBase & {
  parsed: {
    info: EditTokenPriceEventData & EditTokenPriceInstructionAccounts
    type: InstructionType.EditTokenPrice
  }
}

export type BrickBuyToken = BrickEventBase & {
  parsed: {
    info: BuyTokenEventData & BuyTokenInstructionAccounts
    type: InstructionType.BuyToken
  }
}

export type BrickShareToken = BrickEventBase & {
  parsed: {
    info: ShareTokenEventData & ShareTokenInstructionAccounts
    type: InstructionType.ShareToken
  }
}

export type BrickWithdrawFunds = BrickEventBase & {
  parsed: {
    info: WithdrawFundsInstructionAccounts
    type: InstructionType.WithdrawFunds
  }
}

export type BrickUseToken = BrickEventBase & {
  parsed: {
    info: UseTokenInstructionAccounts
    type: InstructionType.UseToken
  }
}

export type BrickDeleteToken = BrickEventBase & {
  parsed: {
    info: DeletetokenInstructionAccounts
    type: InstructionType.Deletetoken
  }
}

export type BrickRawEvent = BrickCreateApp | BrickCreateToken | BrickEditTokenPrice | BrickBuyToken | BrickShareToken | BrickUseToken | BrickDeleteToken

export type BrickCreateAppEvent = EventBase<InstructionType> & {
  info: CreateAppEventData & CreateAppInstructionAccounts
  signer: string
  account: string
}

export type BrickCreateTokenEvent = EventBase<InstructionType> & {
  info: CreateTokenEventData & CreateTokenInstructionAccounts
  signer: string
  account: string
}

export type BrickEditTokenPriceEvent = EventBase<InstructionType> & {
  info: EditTokenPriceEventData & EditTokenPriceInstructionAccounts
  signer: string
  account: string
}

export type BrickBuyTokenEvent = EventBase<InstructionType> & {
  info: BuyTokenEventData & BuyTokenInstructionAccounts
  signer: string
  account: string
}

export type BrickShareTokenEvent = EventBase<InstructionType> & {
  info: ShareTokenEventData & ShareTokenInstructionAccounts
  signer: string
  account: string
}

export type BrickWithdrawFundsEvent = EventBase<InstructionType> & {
  info: WithdrawFundsInstructionAccounts
  signer: string
  account: string
}

export type BrickUseTokenEvent = EventBase<InstructionType> & {
  info: UseTokenInstructionAccounts
  signer: string
  account: string
}

export type BrickDeleteTokenEvent = EventBase<InstructionType> & {
  info: DeletetokenInstructionAccounts
  signer: string
  account: string
}

export type BrickEvent = BrickCreateAppEvent