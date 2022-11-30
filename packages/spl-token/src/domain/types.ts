import { SPLTokenEvent } from '../types.js'

export type MintEventsFilters = {
  account?: string
  startDate?: number
  endDate?: number
  types?: string[]
  limit?: number
  reverse?: boolean
  skip?: number
}

export type AccountEventsFilters = {
  startDate?: number
  endDate?: number
  types?: string[]
  limit?: number
  reverse?: boolean
  skip?: number
}

export type AccountHoldingsFilters = {
  account?: string
  startDate?: number
  endDate?: number
  gte?: string
  lte?: string
}

export type AccountHoldingsOptions = {
  startDate?: number
  endDate?: number
  reverse?: boolean
  limit?: number
  skip?: number
}

export type MintAccount = {
  mint: string
  timestamp: number
  event: SPLTokenEvent
}