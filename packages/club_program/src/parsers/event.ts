import {
  SolanaParsedInstructionContext,
  SolanaParsedEvent,
} from '@aleph-indexer/solana'

import {
  ParsedEvents,
  ParsedEventsInfo,
  InstructionType,
  CreateClubEvent,
  CreateGovernanceEvent,
  CreateTreasuryEvent,
  SupportClubEvent,
  LeaveClubEvent,
  CreateClubProposalEvent,
  AllowMemberEvent,
  UpdateMemberEvent,
  AcceptMembershipEvent,
  CancelInvitationEvent,
  UpdateVoterWeightEvent,
  ExecuteProposalEvent,
  DistributeEvent,
  CastNftVoteEvent,
  InitializeStakingEvent,
  StakeTokensEvent,
  ClaimStakedTokensEvent,
  UnstakeTokensEvent,
  FinishStakingEvent,
  StartStakingEvent,
  InitializeStakingRewardEvent,
  UpdateProposalMetadataEvent,
  CreateFinancialOfferEvent,
  CancelFinancialOfferEvent,
  AcceptFinancialOfferEvent,
  ReserveRightsEvent,
  UpdateAllocationEvent,
  ConfigureWhitelistingsEvent,
  ConfigureAdminsEvent,
  MigrateFinancialsEvent,
  InsertTransactionEvent,
  FundraiseEvent,
  CancelProposalEvent,
} from '../utils/layouts/index.js'

export class EventParser {
  parse(ixCtx: SolanaParsedInstructionContext): ParsedEvents {
    const { instruction, parentInstruction, parentTransaction } = ixCtx
    const parsed = (
      instruction as SolanaParsedEvent<InstructionType, ParsedEventsInfo>
    ).parsed

    const id = `${parentTransaction.signature}${
      parentInstruction
        ? ` :${parentInstruction.index.toString().padStart(2, '0')}`
        : ''
    }:${instruction.index.toString().padStart(2, '0')}`

    const timestamp = parentTransaction.blockTime
      ? parentTransaction.blockTime * 1000
      : parentTransaction.slot

    const baseEvent = {
      ...parsed.info,
      id,
      timestamp,
      type: parsed.type,
      signer: parentTransaction.parsed.message.accountKeys[0].pubkey,
    }

    try {
      switch (parsed.type) {
        case InstructionType.CreateClub:
          return {
            ...baseEvent,
          } as CreateClubEvent
        case InstructionType.CreateGovernance:
          return {
            ...baseEvent,
          } as CreateGovernanceEvent
        case InstructionType.CreateTreasury:
          return {
            ...baseEvent,
          } as CreateTreasuryEvent
        case InstructionType.SupportClub:
          return {
            ...baseEvent,
          } as SupportClubEvent
        case InstructionType.LeaveClub:
          return {
            ...baseEvent,
          } as LeaveClubEvent
        case InstructionType.CreateClubProposal:
          return {
            ...baseEvent,
          } as CreateClubProposalEvent
        case InstructionType.AllowMember:
          return {
            ...baseEvent,
          } as AllowMemberEvent
        case InstructionType.UpdateMember:
          return {
            ...baseEvent,
          } as UpdateMemberEvent
        case InstructionType.AcceptMembership:
          return {
            ...baseEvent,
          } as AcceptMembershipEvent
        case InstructionType.CancelInvitation:
          return {
            ...baseEvent,
          } as CancelInvitationEvent
        case InstructionType.UpdateVoterWeight:
          return {
            ...baseEvent,
          } as UpdateVoterWeightEvent
        case InstructionType.ExecuteProposal:
          return {
            ...baseEvent,
          } as ExecuteProposalEvent
        case InstructionType.Distribute:
          return {
            ...baseEvent,
          } as DistributeEvent
        case InstructionType.CastNftVote:
          return {
            ...baseEvent,
          } as CastNftVoteEvent
        case InstructionType.InitializeStaking:
          return {
            ...baseEvent,
          } as InitializeStakingEvent
        case InstructionType.StakeTokens:
          return {
            ...baseEvent,
          } as StakeTokensEvent
        case InstructionType.ClaimStakedTokens:
          return {
            ...baseEvent,
          } as ClaimStakedTokensEvent
        case InstructionType.UnstakeTokens:
          return {
            ...baseEvent,
          } as UnstakeTokensEvent
        case InstructionType.FinishStaking:
          return {
            ...baseEvent,
          } as FinishStakingEvent
        case InstructionType.StartStaking:
          return {
            ...baseEvent,
          } as StartStakingEvent
        case InstructionType.InitializeStakingReward:
          return {
            ...baseEvent,
          } as InitializeStakingRewardEvent
        case InstructionType.UpdateProposalMetadata:
          return {
            ...baseEvent,
          } as UpdateProposalMetadataEvent
        case InstructionType.CreateFinancialOffer:
          return {
            ...baseEvent,
          } as CreateFinancialOfferEvent
        case InstructionType.CancelFinancialOffer:
          return {
            ...baseEvent,
          } as CancelFinancialOfferEvent
        case InstructionType.AcceptFinancialOffer:
          return {
            ...baseEvent,
          } as AcceptFinancialOfferEvent
        case InstructionType.ReserveRights:
          return {
            ...baseEvent,
          } as ReserveRightsEvent
        case InstructionType.UpdateAllocation:
          return {
            ...baseEvent,
          } as UpdateAllocationEvent
        case InstructionType.ConfigureWhitelistings:
          return {
            ...baseEvent,
          } as ConfigureWhitelistingsEvent
        case InstructionType.ConfigureAdmins:
          return {
            ...baseEvent,
          } as ConfigureAdminsEvent
        case InstructionType.MigrateFinancials:
          return {
            ...baseEvent,
          } as MigrateFinancialsEvent
        case InstructionType.InsertTransaction:
          return {
            ...baseEvent,
          } as InsertTransactionEvent
        case InstructionType.Fundraise:
          return {
            ...baseEvent,
          } as FundraiseEvent
        case InstructionType.CancelProposal:
          return {
            ...baseEvent,
          } as CancelProposalEvent

        default: {
          console.log('default -> ', parsed.type, id)
          return baseEvent as ParsedEvents
        }
      }
    } catch (e) {
      console.log('error -> ', parsed.type, id, e)
      throw e
    }
  }
}

export const eventParser = new EventParser()
export default eventParser
