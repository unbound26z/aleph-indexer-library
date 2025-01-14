import {
  getTokenBalance,
  SolanaParsedInstructionContext,
  solanaPrivateRPCRoundRobin,
} from '@aleph-indexer/solana'
import { ParsedAccountData, PublicKey } from '@solana/web3.js'
import { SLPTokenRawEvent, SPLTokenEvent, SPLTokenEventType } from '../types.js'
import { getMintAndOwnerFromEvent } from '../utils/utils.js'
import { FetchMintStorage } from '../dal/fetchMint.js'
import { EventDALIndex, EventStorage } from '../dal/event.js'

export type MintOwner = {
  mint: string
  owner: string
}

export class EventParser {
  constructor(
    protected fetchMintDAL: FetchMintStorage,
    protected eventDAL: EventStorage,
  ) {}

  async parse(
    ixCtx: SolanaParsedInstructionContext,
  ): Promise<SPLTokenEvent | undefined> {
    const { instruction, parentInstruction, parentTransaction } = ixCtx
    const parsed = (instruction as SLPTokenRawEvent).parsed

    const id = `${parentTransaction.signature}${
      parentInstruction
        ? `:${parentInstruction.index.toString().padStart(2, '0')}`
        : ''
    }:${instruction.index.toString().padStart(2, '0')}`

    const timestamp = parentTransaction.blockTime
      ? parentTransaction.blockTime * 1000
      : parentTransaction.slot
    const type = parsed.type

    switch (type) {
      case SPLTokenEventType.MintTo: {
        const account = parsed.info.account
        const balance = getTokenBalance(parentTransaction, account) as string
        const { mint, owner } = await this.getMintAndOwner(account)

        return {
          id,
          timestamp,
          type,
          amount: parsed.info.amount,
          balance,
          account,
          mint,
          owner,
        }
      }
      case SPLTokenEventType.MintToChecked: {
        const { account, tokenAmount } = parsed.info
        const balance = getTokenBalance(parentTransaction, account) as string
        const { mint, owner } = await this.getMintAndOwner(account)

        return {
          id,
          timestamp,
          type: SPLTokenEventType.MintTo,
          amount: tokenAmount.amount,
          balance,
          account,
          mint,
          owner,
        }
      }
      case SPLTokenEventType.Burn: {
        const { account, amount } = parsed.info
        const balance = getTokenBalance(parentTransaction, account) as string
        const { mint, owner } = await this.getMintAndOwner(account)

        return {
          id,
          timestamp,
          type,
          amount,
          balance,
          account,
          mint,
          owner,
        }
      }
      case SPLTokenEventType.BurnChecked: {
        const { account, tokenAmount } = parsed.info
        const balance = getTokenBalance(parentTransaction, account) as string
        const { mint, owner } = await this.getMintAndOwner(account)

        return {
          id,
          timestamp,
          type: SPLTokenEventType.Burn,
          amount: tokenAmount.amount,
          balance,
          account,
          mint,
          owner,
        }
      }
      case SPLTokenEventType.InitializeAccount:
      case SPLTokenEventType.InitializeAccount2:
      case SPLTokenEventType.InitializeAccount3: {
        const { account, owner, mint } = parsed.info
        const balance = getTokenBalance(parentTransaction, account) as string

        return {
          id,
          timestamp,
          type: SPLTokenEventType.InitializeAccount,
          balance,
          account,
          mint,
          owner,
        }
      }
      case SPLTokenEventType.CloseAccount: {
        const { account, destination } = parsed.info
        const owner =
          'owner' in parsed.info ? parsed.info.owner : parsed.info.multisigOwner

        const balance = getTokenBalance(parentTransaction, account) as string
        const { mint } = await this.getMintAndOwner(account)

        return {
          id,
          timestamp,
          type,
          balance,
          account,
          mint,
          owner,
          toAccount: destination,
        }
      }
      case SPLTokenEventType.Transfer: {
        const account = parsed.info.source
        const balance = getTokenBalance(parentTransaction, account) as string

        const toAccount = parsed.info.destination
        const toBalance = getTokenBalance(
          parentTransaction,
          toAccount,
        ) as string

        const { mint } = await this.getMintAndOwner(account)
        const { owner: toOwner } = await this.getMintAndOwner(toAccount)

        const owner =
          'authority' in parsed.info
            ? parsed.info.authority
            : parsed.info.multisigAuthority

        return {
          id,
          timestamp,
          type,
          amount: parsed.info.amount,
          balance,
          account,
          owner,
          toBalance,
          toAccount,
          toOwner,
          mint,
        }
      }
      case SPLTokenEventType.TransferChecked: {
        const account = parsed.info.source
        const balance = getTokenBalance(parentTransaction, account) as string

        const toAccount = parsed.info.destination
        const toBalance = getTokenBalance(
          parentTransaction,
          toAccount,
        ) as string

        const { mint } = await this.getMintAndOwner(account)
        const { owner: toOwner } = await this.getMintAndOwner(toAccount)

        return {
          id,
          timestamp,
          type: SPLTokenEventType.Transfer,
          amount: parsed.info.tokenAmount.amount,
          balance,
          account,
          owner: parsed.info.authority,
          toBalance,
          toAccount,
          toOwner,
          mint,
        }
      }
      case SPLTokenEventType.SetAuthority: {
        const { account, authority, authorityType, newAuthority } = parsed.info
        const balance = getTokenBalance(parentTransaction, account) as string
        const { mint, owner } = await this.getMintAndOwner(account)

        return {
          id,
          timestamp,
          type,
          balance,
          account,
          owner,
          newOwner: newAuthority,
          authorityType,
          mint,
        }
      }
      case SPLTokenEventType.Approve: {
        const { source: account, owner, delegate, amount } = parsed.info
        const balance = getTokenBalance(parentTransaction, account) as string
        const { mint } = await this.getMintAndOwner(account)

        return {
          id,
          timestamp,
          type,
          amount,
          balance,
          account,
          owner,
          delegate,
          mint,
        }
      }
      case SPLTokenEventType.ApproveChecked: {
        const { source: account, owner, delegate, tokenAmount } = parsed.info
        const balance = getTokenBalance(parentTransaction, account) as string
        const { mint } = await this.getMintAndOwner(account)

        return {
          id,
          timestamp,
          type: SPLTokenEventType.Approve,
          amount: tokenAmount.amount,
          balance,
          account,
          owner,
          delegate,
          mint,
        }
      }
      case SPLTokenEventType.Revoke: {
        const { source: account, owner } = parsed.info
        const balance = getTokenBalance(parentTransaction, account) as string
        const { mint } = await this.getMintAndOwner(account)

        return {
          id,
          timestamp,
          type,
          balance,
          account,
          owner,
          mint,
        }
      }
      case SPLTokenEventType.SyncNative: {
        const { account } = parsed.info
        const balance = getTokenBalance(parentTransaction, account) as string
        const { mint, owner } = await this.getMintAndOwner(account)

        return {
          id,
          timestamp,
          type,
          balance,
          account,
          owner,
          mint,
        }
      }

      default: {
        console.log('NOT PARSED IX TYPE', (parsed as any).type)
        console.log(id)
        return
      }
    }
  }

  protected async getMintAndOwner(account: string): Promise<MintOwner> {
    const dbEvent = await this.fetchMintDAL.getFirstValueFromTo(
      [account],
      [account],
      { atomic: true },
    )
    if (!dbEvent) {
      return await this.getMintAndOwnerFromEvents(account)
    }

    const event = dbEvent.payload.event
    const data = getMintAndOwnerFromEvent(event, account)

    return {
      mint: data.mint,
      owner: data.owner || '',
    }
  }

  protected async getMintAndOwnerFromEvents(
    account: string,
  ): Promise<MintOwner> {
    const dbEvent = await this.eventDAL
      .useIndex(EventDALIndex.AccountTimestamp)
      .getFirstValueFromTo([account], [account], { atomic: true })

    if (!dbEvent) {
      return await this.getMintAndOwnerFromAccount(account)
    }

    const data = getMintAndOwnerFromEvent(dbEvent, account)

    return {
      mint: data.mint,
      owner: data.owner || '',
    }
  }

  protected async getMintAndOwnerFromAccount(
    account: string,
  ): Promise<MintOwner> {
    // TODO: Improve this way to get the mint and owner of an account
    try {
      const connection = solanaPrivateRPCRoundRobin.getClient()
      const res = await connection
        .getConnection()
        .getParsedAccountInfo(new PublicKey(account))

      const data = (res?.value?.data as ParsedAccountData)?.parsed?.info

      return {
        mint: data.mint,
        owner: data.owner,
      }
    } catch (e) {
      console.log('Error checking info for account ' + account)
    }

    return {
      mint: '',
      owner: '',
    }
  }
}

export function createEventParser(
  fetchDAL: FetchMintStorage,
  eventDAL: EventStorage,
): EventParser {
  return new EventParser(fetchDAL, eventDAL)
}
