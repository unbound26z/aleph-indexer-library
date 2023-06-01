import { PublicKey } from '@solana/web3.js'
import { config } from '@aleph-indexer/core'

export enum ProgramName {
  ClubProgram = 'club_program',
}

const DAY = 1000 * 60 * 60 * 24
const START_DATE = Date.now()
const SINCE_DATE = START_DATE - 7 * DAY
export const DOMAIN_CACHE_START_DATE = config.INDEX_START_DATE
  ? Number(config.INDEX_START_DATE)
  : SINCE_DATE

export const CLUB_PROGRAM_PROGRAM_ID =
  'UNQc364EDzKQqfSW1Fnhfam2fvsFGVdVqg77kpBqRSe'
export const CLUB_PROGRAM_PROGRAM_ID_PK = new PublicKey(CLUB_PROGRAM_PROGRAM_ID)
