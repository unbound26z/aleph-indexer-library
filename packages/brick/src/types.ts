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
    info: CreateAppEventData & {
      systemProgram?: string
      rent?: string
      authority: string
      app: string
    }
    type: InstructionType.CreateApp
  }
}

export type BrickCreateToken = BrickEventBase & {
  parsed: {
    info: CreateTokenEventData & {
      metadataProgram: string
      systemProgram?: string
      tokenProgram?: string
      rent?: string
      authority: string
      app: string
      tokenMint: string
      token: string
      acceptedMint: string
      tokenMetadata: string
    }
    type: InstructionType.CreateToken
  }
}

export type BrickEditTokenPrice = BrickEventBase & {
  parsed: {
    info: EditTokenPriceEventData & {
      authority: string
      token: string
    }
    type: InstructionType.EditTokenPrice
  }
}

export type BrickBuyToken = BrickEventBase & {
  parsed: {
    info: BuyTokenEventData & {
      systemProgram?: string
      tokenProgram?: string
      associatedTokenProgram: string
      rent?: string
      clock: string
      authority: string
      token: string
      tokenMint: string
      buyerTransferVault: string
      acceptedMint: string
      payment: string
      paymentVault: string
      buyerTokenVault: string
    }
    type: InstructionType.BuyToken
  }
}

export type BrickShareToken = BrickEventBase & {
  parsed: {
    info: ShareTokenEventData & {
      systemProgram?: string
      tokenProgram?: string
      associatedTokenProgram: string
      rent?: string
      authority: string
      token: string
      tokenMint: string
      receiverVault: string
    }
    type: InstructionType.ShareToken
  }
}

export type BrickWithdrawFunds = BrickEventBase & {
  parsed: {
    info: {
      tokenProgram?: string
      authority: string
      app: string
      appCreatorVault: string
      token: string
      tokenMint: string
      receiverVault: string
      buyer: string
      payment: string
      paymentVault: string
    }
    type: InstructionType.WithdrawFunds
  }
}

export type BrickUseToken = BrickEventBase & {
  parsed: {
    info: {    
      systemProgram?: string
      tokenProgram?: string
      associatedTokenProgram: string
      rent?: string
      authority: string
      token: string
      tokenMint: string
      buyerTokenVault: string
    }
    type: InstructionType.UseToken
  }
}

export type BrickDeleteToken = BrickEventBase & {
  parsed: {
    info: {
      authority: string
      token: string
    }
    type: InstructionType.Deletetoken
  }
}

export type BrickRawEvent = BrickCreateApp | BrickCreateToken | BrickEditTokenPrice | BrickBuyToken | BrickShareToken | BrickUseToken | BrickDeleteToken

export type BrickCreateAppEvent = EventBase<InstructionType> & {
  info: CreateAppEventData & {
    systemProgram?: string
    rent?: string
    authority: string
    app: string
  }
  signer: string
  account: string
}

export type BrickCreateTokenEvent = EventBase<InstructionType> & {
  info: CreateTokenEventData & {
    metadataProgram: string
    systemProgram?: string
    tokenProgram?: string
    rent?: string
    authority: string
    app: string
    tokenMint: string
    token: string
    acceptedMint: string
    tokenMetadata: string
  }
  signer: string
  account: string
}
export type BrickEditTokenPriceEvent = EventBase<InstructionType> & {
  info: EditTokenPriceEventData & {
    authority: string
    token: string
  }
  signer: string
  account: string
}

export type BrickBuyTokenEvent = EventBase<InstructionType> & {
  info: BuyTokenEventData & {
    systemProgram?: string
    tokenProgram?: string
    associatedTokenProgram: string
    rent?: string
    clock: string
    authority: string
    token: string
    tokenMint: string
    buyerTransferVault: string
    acceptedMint: string
    payment: string
    paymentVault: string
    buyerTokenVault: string
  }
  signer: string
  account: string
}

export type BrickShareTokenEvent = EventBase<InstructionType> & {
  info: ShareTokenEventData & {
    systemProgram?: string
    tokenProgram?: string
    associatedTokenProgram: string
    rent?: string
    authority: string
    token: string
    tokenMint: string
    receiverVault: string
  }
  signer: string
  account: string
}

export type BrickWithdrawFundsEvent = EventBase<InstructionType> & {
  info: {
    tokenProgram?: string
    authority: string
    app: string
    appCreatorVault: string
    token: string
    tokenMint: string
    receiverVault: string
    buyer: string
    payment: string
    paymentVault: string
  }
  signer: string
  account: string
}

export type BrickUseTokenEvent = EventBase<InstructionType> & {
  info: {    
    systemProgram?: string
    tokenProgram?: string
    associatedTokenProgram: string
    rent?: string
    authority: string
    token: string
    tokenMint: string
    buyerTokenVault: string
  }
  signer: string
  account: string
}

export type BrickDeleteTokenEvent = EventBase<InstructionType> & {
  info: {
    authority: string
    token: string
  }
  signer: string
  account: string
}

export type BrickEvent = BrickCreateAppEvent | BrickCreateTokenEvent | BrickEditTokenPriceEvent | BrickBuyTokenEvent | BrickShareTokenEvent | BrickWithdrawFundsEvent | BrickUseTokenEvent | BrickDeleteTokenEvent