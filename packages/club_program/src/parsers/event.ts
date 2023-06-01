import {
  SolanaParsedInstructionContext,
  SolanaParsedEvent,
} from '@aleph-indexer/solana'

import {
  ParsedEvents,
  ParsedEventsInfo,
  InstructionType,
  CreateClubEvent,
  CreateClubVaultEvent,
  CreateTreasuryGovernanceEvent,
  AddSellPermissionEvent,
  SupportClubEvent,
  LeaveClubEvent,
  CreateClubProposalEvent,
  AllowMemberEvent,
  UpdateMemberEvent,
  AcceptMembershipEvent,
  CancelInvitationEvent,
  CreateFundraiseEvent,
  FinishFundraiseEvent,
  UpdateVoterWeightEvent,
  ExecuteTransactionEvent,
  CancelEscrowEvent,
  CreateProposalMetadataEvent,
  CreateWithdrawalProposalEvent,
  ExecuteWithdrawalTransactionEvent,
  UpdateVoterWeightForGovernanceEvent,
  DistributeEvent,
  TransferProfitEvent,
  CreateWithdrawalGovernanceEvent,
  CastNftVoteEvent,
  InitializeStakingEvent,
  StakeTokensEvent,
  ClaimStakedTokensEvent,
  UnstakeTokensEvent,
  FinishStakingEvent,
  StartStakingEvent,
  InitializeStakingRewardEvent,
  UpdateProposalDescriptionEvent,
  CreateMeBuyNowProposalEvent,
  CreateMeSellProposalEvent,
  ExecuteMeBuyNowTransactionEvent,
  ExecuteMeSellTransactionEvent,
  ExecuteMeBuyNowEvent,
  ExecuteMeSellEvent,
  ExecuteMeSellCancelEvent,
  CreateFinancialOfferEvent,
  CancelFinancialOfferEvent,
  AcceptFinancialOfferEvent,
  CreateTransferProposalEvent,
  ExecuteTransferProposalEvent,
  CreateTransferGovernanceEvent,
  UpdateGovernanceConfigEvent,
  ExecuteUpdateGovernanceConfigEvent,
  CreateUpdateRoleProposalEvent,
  ExecuteUpdateRoleEvent,
  CreateChangeClubConfigGovernanceEvent,
  CreateSolseaProposalEvent,
  ExecuteSolseaTransactionEvent,
  CancelSolseaOfferEvent,
  ReserveRightsEvent,
  UpdateAllocationEvent,
  CreateAddSellPermissionProposalEvent,
  ExecuteSellPermissionTransactionEvent,
  AddStakeConfigToStakeRecordEvent,
  AddCanLeaveActionEvent,
} from '../utils/layouts/index.js'

export class EventParser {
  parse(ixCtx: SolanaParsedInstructionContext): ParsedEvents {
    const { instruction, parentTransaction, parentInstruction } = ixCtx
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
        case InstructionType.CreateClubVault:
          return {
            ...baseEvent,
          } as CreateClubVaultEvent
        case InstructionType.CreateTreasuryGovernance:
          return {
            ...baseEvent,
          } as CreateTreasuryGovernanceEvent
        case InstructionType.AddSellPermission:
          return {
            ...baseEvent,
          } as AddSellPermissionEvent
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
        case InstructionType.CreateFundraise:
          return {
            ...baseEvent,
          } as CreateFundraiseEvent
        case InstructionType.FinishFundraise:
          return {
            ...baseEvent,
          } as FinishFundraiseEvent
        case InstructionType.UpdateVoterWeight:
          return {
            ...baseEvent,
          } as UpdateVoterWeightEvent
        case InstructionType.ExecuteTransaction:
          return {
            ...baseEvent,
          } as ExecuteTransactionEvent
        case InstructionType.CancelEscrow:
          return {
            ...baseEvent,
          } as CancelEscrowEvent
        case InstructionType.CreateProposalMetadata:
          return {
            ...baseEvent,
          } as CreateProposalMetadataEvent
        case InstructionType.CreateWithdrawalProposal:
          return {
            ...baseEvent,
          } as CreateWithdrawalProposalEvent
        case InstructionType.ExecuteWithdrawalTransaction:
          return {
            ...baseEvent,
          } as ExecuteWithdrawalTransactionEvent
        case InstructionType.UpdateVoterWeightForGovernance:
          return {
            ...baseEvent,
          } as UpdateVoterWeightForGovernanceEvent
        case InstructionType.Distribute:
          return {
            ...baseEvent,
          } as DistributeEvent
        case InstructionType.TransferProfit:
          return {
            ...baseEvent,
          } as TransferProfitEvent
        case InstructionType.CreateWithdrawalGovernance:
          return {
            ...baseEvent,
          } as CreateWithdrawalGovernanceEvent
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
        case InstructionType.UpdateProposalDescription:
          return {
            ...baseEvent,
          } as UpdateProposalDescriptionEvent
        case InstructionType.CreateMeBuyNowProposal:
          return {
            ...baseEvent,
          } as CreateMeBuyNowProposalEvent
        case InstructionType.CreateMeSellProposal:
          return {
            ...baseEvent,
          } as CreateMeSellProposalEvent
        case InstructionType.ExecuteMeBuyNowTransaction:
          return {
            ...baseEvent,
          } as ExecuteMeBuyNowTransactionEvent
        case InstructionType.ExecuteMeSellTransaction:
          return {
            ...baseEvent,
          } as ExecuteMeSellTransactionEvent
        case InstructionType.ExecuteMeBuyNow:
          return {
            ...baseEvent,
          } as ExecuteMeBuyNowEvent
        case InstructionType.ExecuteMeSell:
          return {
            ...baseEvent,
          } as ExecuteMeSellEvent
        case InstructionType.ExecuteMeSellCancel:
          return {
            ...baseEvent,
          } as ExecuteMeSellCancelEvent
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
        case InstructionType.CreateTransferProposal:
          return {
            ...baseEvent,
          } as CreateTransferProposalEvent
        case InstructionType.ExecuteTransferProposal:
          return {
            ...baseEvent,
          } as ExecuteTransferProposalEvent
        case InstructionType.CreateTransferGovernance:
          return {
            ...baseEvent,
          } as CreateTransferGovernanceEvent
        case InstructionType.UpdateGovernanceConfig:
          return {
            ...baseEvent,
          } as UpdateGovernanceConfigEvent
        case InstructionType.ExecuteUpdateGovernanceConfig:
          return {
            ...baseEvent,
          } as ExecuteUpdateGovernanceConfigEvent
        case InstructionType.CreateUpdateRoleProposal:
          return {
            ...baseEvent,
          } as CreateUpdateRoleProposalEvent
        case InstructionType.ExecuteUpdateRole:
          return {
            ...baseEvent,
          } as ExecuteUpdateRoleEvent
        case InstructionType.CreateChangeClubConfigGovernance:
          return {
            ...baseEvent,
          } as CreateChangeClubConfigGovernanceEvent
        case InstructionType.CreateSolseaProposal:
          return {
            ...baseEvent,
          } as CreateSolseaProposalEvent
        case InstructionType.ExecuteSolseaTransaction:
          return {
            ...baseEvent,
          } as ExecuteSolseaTransactionEvent
        case InstructionType.CancelSolseaOffer:
          return {
            ...baseEvent,
          } as CancelSolseaOfferEvent
        case InstructionType.ReserveRights:
          return {
            ...baseEvent,
          } as ReserveRightsEvent
        case InstructionType.UpdateAllocation:
          return {
            ...baseEvent,
          } as UpdateAllocationEvent
        case InstructionType.CreateAddSellPermissionProposal:
          return {
            ...baseEvent,
          } as CreateAddSellPermissionProposalEvent
        case InstructionType.ExecuteSellPermissionTransaction:
          return {
            ...baseEvent,
          } as ExecuteSellPermissionTransactionEvent
        case InstructionType.AddStakeConfigToStakeRecord:
          return {
            ...baseEvent,
          } as AddStakeConfigToStakeRecordEvent
        case InstructionType.AddCanLeaveAction:
          return {
            ...baseEvent,
          } as AddCanLeaveActionEvent

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
