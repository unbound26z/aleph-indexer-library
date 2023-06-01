import { EventBase } from '@aleph-indexer/framework'
import * as solita from './solita/index.js'
import { PublicKey } from '@solana/web3.js'
import BN from 'bn.js'

export enum InstructionType {
  CreateClub = 'CreateClubEvent',
  CreateClubVault = 'CreateClubVaultEvent',
  CreateTreasuryGovernance = 'CreateTreasuryGovernanceEvent',
  AddSellPermission = 'AddSellPermissionEvent',
  SupportClub = 'SupportClubEvent',
  LeaveClub = 'LeaveClubEvent',
  CreateClubProposal = 'CreateClubProposalEvent',
  AllowMember = 'AllowMemberEvent',
  UpdateMember = 'UpdateMemberEvent',
  AcceptMembership = 'AcceptMembershipEvent',
  CancelInvitation = 'CancelInvitationEvent',
  CreateFundraise = 'CreateFundraiseEvent',
  FinishFundraise = 'FinishFundraiseEvent',
  UpdateVoterWeight = 'UpdateVoterWeightEvent',
  ExecuteTransaction = 'ExecuteTransactionEvent',
  CancelEscrow = 'CancelEscrowEvent',
  CreateProposalMetadata = 'CreateProposalMetadataEvent',
  CreateWithdrawalProposal = 'CreateWithdrawalProposalEvent',
  ExecuteWithdrawalTransaction = 'ExecuteWithdrawalTransactionEvent',
  UpdateVoterWeightForGovernance = 'UpdateVoterWeightForGovernanceEvent',
  Distribute = 'DistributeEvent',
  TransferProfit = 'TransferProfitEvent',
  CreateWithdrawalGovernance = 'CreateWithdrawalGovernanceEvent',
  CastNftVote = 'CastNftVoteEvent',
  InitializeStaking = 'InitializeStakingEvent',
  StakeTokens = 'StakeTokensEvent',
  ClaimStakedTokens = 'ClaimStakedTokensEvent',
  UnstakeTokens = 'UnstakeTokensEvent',
  FinishStaking = 'FinishStakingEvent',
  StartStaking = 'StartStakingEvent',
  InitializeStakingReward = 'InitializeStakingRewardEvent',
  UpdateProposalDescription = 'UpdateProposalDescriptionEvent',
  CreateMeBuyNowProposal = 'CreateMeBuyNowProposalEvent',
  CreateMeSellProposal = 'CreateMeSellProposalEvent',
  ExecuteMeBuyNowTransaction = 'ExecuteMeBuyNowTransactionEvent',
  ExecuteMeSellTransaction = 'ExecuteMeSellTransactionEvent',
  ExecuteMeBuyNow = 'ExecuteMeBuyNowEvent',
  ExecuteMeSell = 'ExecuteMeSellEvent',
  ExecuteMeSellCancel = 'ExecuteMeSellCancelEvent',
  CreateFinancialOffer = 'CreateFinancialOfferEvent',
  CancelFinancialOffer = 'CancelFinancialOfferEvent',
  AcceptFinancialOffer = 'AcceptFinancialOfferEvent',
  CreateTransferProposal = 'CreateTransferProposalEvent',
  ExecuteTransferProposal = 'ExecuteTransferProposalEvent',
  CreateTransferGovernance = 'CreateTransferGovernanceEvent',
  UpdateGovernanceConfig = 'UpdateGovernanceConfigEvent',
  ExecuteUpdateGovernanceConfig = 'ExecuteUpdateGovernanceConfigEvent',
  CreateUpdateRoleProposal = 'CreateUpdateRoleProposalEvent',
  ExecuteUpdateRole = 'ExecuteUpdateRoleEvent',
  CreateChangeClubConfigGovernance = 'CreateChangeClubConfigGovernanceEvent',
  CreateSolseaProposal = 'CreateSolseaProposalEvent',
  ExecuteSolseaTransaction = 'ExecuteSolseaTransactionEvent',
  CancelSolseaOffer = 'CancelSolseaOfferEvent',
  ReserveRights = 'ReserveRightsEvent',
  UpdateAllocation = 'UpdateAllocationEvent',
  CreateAddSellPermissionProposal = 'CreateAddSellPermissionProposalEvent',
  ExecuteSellPermissionTransaction = 'ExecuteSellPermissionTransactionEvent',
  AddStakeConfigToStakeRecord = 'AddStakeConfigToStakeRecordEvent',
  AddCanLeaveAction = 'AddCanLeaveActionEvent',
}

export type InstructionBase = EventBase<InstructionType> & {
  programId: string
  signer: string
  account: string
}

/*-----------------------* CUSTOM EVENTS TYPES *-----------------------*/

export type CreateClubEventData = {
  clubName: string
  clubType: number
  roles: Buffer
  ownerRole: string
  defaultRole: string
  kycConfig: solita.KycConfig
}

export type CreateClubInfo = {
  data: CreateClubEventData
  accounts: solita.CreateClubInstructionAccounts
}

export type CreateClubEvent = InstructionBase &
  CreateClubInfo & {
    type: InstructionType.CreateClub
  }

/*----------------------------------------------------------------------*/

export type CreateClubVaultEventData = {
  chainId: string
}

export type CreateClubVaultInfo = {
  data: CreateClubVaultEventData
  accounts: solita.CreateClubVaultInstructionAccounts
}

export type CreateClubVaultEvent = InstructionBase &
  CreateClubVaultInfo & {
    type: InstructionType.CreateClubVault
  }

/*----------------------------------------------------------------------*/

export type CreateTreasuryGovernanceInfo = {
  data: solita.CreateTreasuryGovernanceInstructionArgs
  accounts: solita.CreateTreasuryGovernanceInstructionAccounts
}

export type CreateTreasuryGovernanceEvent = InstructionBase &
  CreateTreasuryGovernanceInfo & {
    type: InstructionType.CreateTreasuryGovernance
  }

/*----------------------------------------------------------------------*/

export type AddSellPermissionInfo = {
  data: solita.AddSellPermissionInstructionArgs
  accounts: solita.AddSellPermissionInstructionAccounts
}

export type AddSellPermissionEvent = InstructionBase &
  AddSellPermissionInfo & {
    type: InstructionType.AddSellPermission
  }

/*----------------------------------------------------------------------*/

export type SupportClubEventData = {
  depositAmount: BN
  supportType: number
}

export type SupportClubInfo = {
  data: SupportClubEventData
  accounts: solita.SupportClubInstructionAccounts
}

export type SupportClubEvent = InstructionBase &
  SupportClubInfo & {
    type: InstructionType.SupportClub
  }

/*----------------------------------------------------------------------*/

export type LeaveClubInfo = {
  accounts: solita.LeaveClubInstructionAccounts
}

export type LeaveClubEvent = InstructionBase &
  LeaveClubInfo & {
    type: InstructionType.LeaveClub
  }

/*----------------------------------------------------------------------*/

export type CreateClubProposalEventData = {
  chainId: string
  useDeny: boolean
  offeredAmount: BN
  wantedAmount: BN
  action: number
  dedicatedTaker: PublicKey
}

export type CreateClubProposalInfo = {
  data: CreateClubProposalEventData
  accounts: solita.CreateClubProposalInstructionAccounts
}

export type CreateClubProposalEvent = InstructionBase &
  CreateClubProposalInfo & {
    type: InstructionType.CreateClubProposal
  }

/*----------------------------------------------------------------------*/

export type AllowMemberEventData = {
  roles: string
}

export type AllowMemberInfo = {
  data: AllowMemberEventData
  accounts: solita.AllowMemberInstructionAccounts
}

export type AllowMemberEvent = InstructionBase &
  AllowMemberInfo & {
    type: InstructionType.AllowMember
  }

/*----------------------------------------------------------------------*/

export type UpdateMemberInfo = {
  data: solita.UpdateMemberDto
  accounts: solita.UpdateMemberInstructionAccounts
}

export type UpdateMemberEvent = InstructionBase &
  UpdateMemberInfo & {
    type: InstructionType.UpdateMember
  }

/*----------------------------------------------------------------------*/

export type AcceptMembershipInfo = {
  accounts: solita.AcceptMembershipInstructionAccounts
}

export type AcceptMembershipEvent = InstructionBase &
  AcceptMembershipInfo & {
    type: InstructionType.AcceptMembership
  }

/*----------------------------------------------------------------------*/

export type CancelInvitationInfo = {
  accounts: solita.CancelInvitationInstructionAccounts
}

export type CancelInvitationEvent = InstructionBase &
  CancelInvitationInfo & {
    type: InstructionType.CancelInvitation
  }

/*----------------------------------------------------------------------*/

export type CreateFundraiseEventData = {
  amount: BN
}

export type CreateFundraiseInfo = {
  data: CreateFundraiseEventData
  accounts: solita.CreateFundraiseInstructionAccounts
}

export type CreateFundraiseEvent = InstructionBase &
  CreateFundraiseInfo & {
    type: InstructionType.CreateFundraise
  }

/*----------------------------------------------------------------------*/

export type FinishFundraiseInfo = {
  accounts: solita.FinishFundraiseInstructionAccounts
}

export type FinishFundraiseEvent = InstructionBase &
  FinishFundraiseInfo & {
    type: InstructionType.FinishFundraise
  }

/*----------------------------------------------------------------------*/

export type UpdateVoterWeightEventData = {
  action: number
}

export type UpdateVoterWeightInfo = {
  data: UpdateVoterWeightEventData
  accounts: solita.UpdateVoterWeightInstructionAccounts
}

export type UpdateVoterWeightEvent = InstructionBase &
  UpdateVoterWeightInfo & {
    type: InstructionType.UpdateVoterWeight
  }

/*----------------------------------------------------------------------*/

export type ExecuteTransactionEventData = {
  chainId: string
  action: number
  treasuryIndex: number
}

export type ExecuteTransactionInfo = {
  data: ExecuteTransactionEventData
  accounts: solita.ExecuteTransactionInstructionAccounts
}

export type ExecuteTransactionEvent = InstructionBase &
  ExecuteTransactionInfo & {
    type: InstructionType.ExecuteTransaction
  }

/*----------------------------------------------------------------------*/

export type CancelEscrowEventData = {
  chainId: string
  action: number
  treasuryIndex: number
}

export type CancelEscrowInfo = {
  data: CancelEscrowEventData
  accounts: solita.CancelEscrowInstructionAccounts
}

export type CancelEscrowEvent = InstructionBase &
  CancelEscrowInfo & {
    type: InstructionType.CancelEscrow
  }

/*----------------------------------------------------------------------*/

export type CreateProposalMetadataEventData = {
  proposalType: number
  data1: Buffer
  data2: Buffer
  data3: Buffer
}

export type CreateProposalMetadataInfo = {
  data: CreateProposalMetadataEventData
  accounts: solita.CreateProposalMetadataInstructionAccounts
}

export type CreateProposalMetadataEvent = InstructionBase &
  CreateProposalMetadataInfo & {
    type: InstructionType.CreateProposalMetadata
  }

/*----------------------------------------------------------------------*/

export type CreateWithdrawalProposalEventData = {
  useDeny: boolean
  withdrawalAmount: BN
}

export type CreateWithdrawalProposalInfo = {
  data: CreateWithdrawalProposalEventData
  accounts: solita.CreateWithdrawalProposalInstructionAccounts
}

export type CreateWithdrawalProposalEvent = InstructionBase &
  CreateWithdrawalProposalInfo & {
    type: InstructionType.CreateWithdrawalProposal
  }

/*----------------------------------------------------------------------*/

export type ExecuteWithdrawalTransactionInfo = {
  accounts: solita.ExecuteWithdrawalTransactionInstructionAccounts
}

export type ExecuteWithdrawalTransactionEvent = InstructionBase &
  ExecuteWithdrawalTransactionInfo & {
    type: InstructionType.ExecuteWithdrawalTransaction
  }

/*----------------------------------------------------------------------*/

export type UpdateVoterWeightForGovernanceInfo = {
  accounts: solita.UpdateVoterWeightForGovernanceInstructionAccounts
}

export type UpdateVoterWeightForGovernanceEvent = InstructionBase &
  UpdateVoterWeightForGovernanceInfo & {
    type: InstructionType.UpdateVoterWeightForGovernance
  }

/*----------------------------------------------------------------------*/

export type DistributeEventData = {
  treasuryIndex: number
  chainId: string
}

export type DistributeInfo = {
  data: DistributeEventData
  accounts: solita.DistributeInstructionAccounts
}

export type DistributeEvent = InstructionBase &
  DistributeInfo & {
    type: InstructionType.Distribute
  }

/*----------------------------------------------------------------------*/

export type TransferProfitEventData = {
  withdrawalAmount: BN
}

export type TransferProfitInfo = {
  data: TransferProfitEventData
  accounts: solita.TransferProfitInstructionAccounts
}

export type TransferProfitEvent = InstructionBase &
  TransferProfitInfo & {
    type: InstructionType.TransferProfit
  }

/*----------------------------------------------------------------------*/

export type CreateWithdrawalGovernanceEventData = {
  treasuryIndex: number
  maxVotingTime: number
  voteThresholdPercentage: number
}

export type CreateWithdrawalGovernanceInfo = {
  data: CreateWithdrawalGovernanceEventData
  accounts: solita.CreateWithdrawalGovernanceInstructionAccounts
}

export type CreateWithdrawalGovernanceEvent = InstructionBase &
  CreateWithdrawalGovernanceInfo & {
    type: InstructionType.CreateWithdrawalGovernance
  }

/*----------------------------------------------------------------------*/

export type CastNftVoteInfo = {
  accounts: solita.CastNftVoteInstructionAccounts
}

export type CastNftVoteEvent = InstructionBase &
  CastNftVoteInfo & {
    type: InstructionType.CastNftVote
  }

/*----------------------------------------------------------------------*/

export type InitializeStakingEventData = {
  stakeName: string
  capAmount: BN
  stakePeriod: number
}

export type InitializeStakingInfo = {
  data: InitializeStakingEventData
  accounts: solita.InitializeStakingInstructionAccounts
}

export type InitializeStakingEvent = InstructionBase &
  InitializeStakingInfo & {
    type: InstructionType.InitializeStaking
  }

/*----------------------------------------------------------------------*/

export type StakeTokensEventData = {
  stakeIndex: number
  amount: BN
  stakeOption: number
}

export type StakeTokensInfo = {
  data: StakeTokensEventData
  accounts: solita.StakeTokensInstructionAccounts
}

export type StakeTokensEvent = InstructionBase &
  StakeTokensInfo & {
    type: InstructionType.StakeTokens
  }

/*----------------------------------------------------------------------*/

export type ClaimStakedTokensEventData = {
  stakeIndex: number
  stakeOption: number
}

export type ClaimStakedTokensInfo = {
  data: ClaimStakedTokensEventData
  accounts: solita.ClaimStakedTokensInstructionAccounts
}

export type ClaimStakedTokensEvent = InstructionBase &
  ClaimStakedTokensInfo & {
    type: InstructionType.ClaimStakedTokens
  }

/*----------------------------------------------------------------------*/

export type UnstakeTokensEventData = {
  stakeIndex: number
  stakeOption: number
}

export type UnstakeTokensInfo = {
  data: UnstakeTokensEventData
  accounts: solita.UnstakeTokensInstructionAccounts
}

export type UnstakeTokensEvent = InstructionBase &
  UnstakeTokensInfo & {
    type: InstructionType.UnstakeTokens
  }

/*----------------------------------------------------------------------*/

export type FinishStakingEventData = {
  stakeIndex: number
}

export type FinishStakingInfo = {
  data: FinishStakingEventData
  accounts: solita.FinishStakingInstructionAccounts
}

export type FinishStakingEvent = InstructionBase &
  FinishStakingInfo & {
    type: InstructionType.FinishStaking
  }

/*----------------------------------------------------------------------*/

export type StartStakingEventData = {
  stakeIndex: number
}

export type StartStakingInfo = {
  data: StartStakingEventData
  accounts: solita.StartStakingInstructionAccounts
}

export type StartStakingEvent = InstructionBase &
  StartStakingInfo & {
    type: InstructionType.StartStaking
  }

/*----------------------------------------------------------------------*/

export type InitializeStakingRewardInfo = {
  accounts: solita.InitializeStakingRewardInstructionAccounts
}

export type InitializeStakingRewardEvent = InstructionBase &
  InitializeStakingRewardInfo & {
    type: InstructionType.InitializeStakingReward
  }

/*----------------------------------------------------------------------*/

export type UpdateProposalDescriptionEventData = {
  descriptionBuffer: string
  name: string
  options: string
  discussionLink: string
}

export type UpdateProposalDescriptionInfo = {
  data: UpdateProposalDescriptionEventData
  accounts: solita.UpdateProposalDescriptionInstructionAccounts
}

export type UpdateProposalDescriptionEvent = InstructionBase &
  UpdateProposalDescriptionInfo & {
    type: InstructionType.UpdateProposalDescription
  }

/*----------------------------------------------------------------------*/

export type CreateMeBuyNowProposalEventData = {
  useDeny: boolean
}

export type CreateMeBuyNowProposalInfo = {
  data: CreateMeBuyNowProposalEventData
  accounts: solita.CreateMeBuyNowProposalInstructionAccounts
}

export type CreateMeBuyNowProposalEvent = InstructionBase &
  CreateMeBuyNowProposalInfo & {
    type: InstructionType.CreateMeBuyNowProposal
  }

/*----------------------------------------------------------------------*/

export type CreateMeSellProposalEventData = {
  useDeny: boolean
}

export type CreateMeSellProposalInfo = {
  data: CreateMeSellProposalEventData
  accounts: solita.CreateMeSellProposalInstructionAccounts
}

export type CreateMeSellProposalEvent = InstructionBase &
  CreateMeSellProposalInfo & {
    type: InstructionType.CreateMeSellProposal
  }

/*----------------------------------------------------------------------*/

export type ExecuteMeBuyNowTransactionInfo = {
  accounts: solita.ExecuteMeBuyNowTransactionInstructionAccounts
}

export type ExecuteMeBuyNowTransactionEvent = InstructionBase &
  ExecuteMeBuyNowTransactionInfo & {
    type: InstructionType.ExecuteMeBuyNowTransaction
  }

/*----------------------------------------------------------------------*/

export type ExecuteMeSellTransactionInfo = {
  accounts: solita.ExecuteMeSellTransactionInstructionAccounts
}

export type ExecuteMeSellTransactionEvent = InstructionBase &
  ExecuteMeSellTransactionInfo & {
    type: InstructionType.ExecuteMeSellTransaction
  }

/*----------------------------------------------------------------------*/

export type ExecuteMeBuyNowEventData = {
  data1: Buffer
  data2: Buffer
  data3: Buffer
}

export type ExecuteMeBuyNowInfo = {
  data: ExecuteMeBuyNowEventData
  accounts: solita.ExecuteMeBuyNowInstructionAccounts
}

export type ExecuteMeBuyNowEvent = InstructionBase &
  ExecuteMeBuyNowInfo & {
    type: InstructionType.ExecuteMeBuyNow
  }

/*----------------------------------------------------------------------*/

export type ExecuteMeSellEventData = {
  data: Buffer
}

export type ExecuteMeSellInfo = {
  data: ExecuteMeSellEventData
  accounts: solita.ExecuteMeSellInstructionAccounts
}

export type ExecuteMeSellEvent = InstructionBase &
  ExecuteMeSellInfo & {
    type: InstructionType.ExecuteMeSell
  }

/*----------------------------------------------------------------------*/

export type ExecuteMeSellCancelEventData = {
  data: Buffer
}

export type ExecuteMeSellCancelInfo = {
  data: ExecuteMeSellCancelEventData
  accounts: solita.ExecuteMeSellCancelInstructionAccounts
}

export type ExecuteMeSellCancelEvent = InstructionBase &
  ExecuteMeSellCancelInfo & {
    type: InstructionType.ExecuteMeSellCancel
  }

/*----------------------------------------------------------------------*/

export type CreateFinancialOfferEventData = {
  amountOfRights: BN
  price: BN
  buyer: PublicKey
}

export type CreateFinancialOfferInfo = {
  data: CreateFinancialOfferEventData
  accounts: solita.CreateFinancialOfferInstructionAccounts
}

export type CreateFinancialOfferEvent = InstructionBase &
  CreateFinancialOfferInfo & {
    type: InstructionType.CreateFinancialOffer
  }

/*----------------------------------------------------------------------*/

export type CancelFinancialOfferInfo = {
  accounts: solita.CancelFinancialOfferInstructionAccounts
}

export type CancelFinancialOfferEvent = InstructionBase &
  CancelFinancialOfferInfo & {
    type: InstructionType.CancelFinancialOffer
  }

/*----------------------------------------------------------------------*/

export type AcceptFinancialOfferEventData = {
  amountToBuy: BN
}

export type AcceptFinancialOfferInfo = {
  data: AcceptFinancialOfferEventData
  accounts: solita.AcceptFinancialOfferInstructionAccounts
}

export type AcceptFinancialOfferEvent = InstructionBase &
  AcceptFinancialOfferInfo & {
    type: InstructionType.AcceptFinancialOffer
  }

/*----------------------------------------------------------------------*/

export type CreateTransferProposalEventData = {
  useDeny: boolean
  transferAmount: BN
}

export type CreateTransferProposalInfo = {
  data: CreateTransferProposalEventData
  accounts: solita.CreateTransferProposalInstructionAccounts
}

export type CreateTransferProposalEvent = InstructionBase &
  CreateTransferProposalInfo & {
    type: InstructionType.CreateTransferProposal
  }

/*----------------------------------------------------------------------*/

export type ExecuteTransferProposalInfo = {
  accounts: solita.ExecuteTransferProposalInstructionAccounts
}

export type ExecuteTransferProposalEvent = InstructionBase &
  ExecuteTransferProposalInfo & {
    type: InstructionType.ExecuteTransferProposal
  }

/*----------------------------------------------------------------------*/

export type CreateTransferGovernanceEventData = {
  maxVotingTime: number
  voteThresholdPercentage: number
}

export type CreateTransferGovernanceInfo = {
  data: CreateTransferGovernanceEventData
  accounts: solita.CreateTransferGovernanceInstructionAccounts
}

export type CreateTransferGovernanceEvent = InstructionBase &
  CreateTransferGovernanceInfo & {
    type: InstructionType.CreateTransferGovernance
  }

/*----------------------------------------------------------------------*/

export type UpdateGovernanceConfigEventData = {
  newQuorum: Buffer
  seeds: Buffer
  newVotingTime: number
}

export type UpdateGovernanceConfigInfo = {
  data: UpdateGovernanceConfigEventData
  accounts: solita.UpdateGovernanceConfigInstructionAccounts
}

export type UpdateGovernanceConfigEvent = InstructionBase &
  UpdateGovernanceConfigInfo & {
    type: InstructionType.UpdateGovernanceConfig
  }

/*----------------------------------------------------------------------*/

export type ExecuteUpdateGovernanceConfigInfo = {
  accounts: solita.ExecuteUpdateGovernanceConfigInstructionAccounts
}

export type ExecuteUpdateGovernanceConfigEvent = InstructionBase &
  ExecuteUpdateGovernanceConfigInfo & {
    type: InstructionType.ExecuteUpdateGovernanceConfig
  }

/*----------------------------------------------------------------------*/

export type CreateUpdateRoleProposalEventData = {
  roleWeigthConfig: solita.UpdateRoleWeight
}

export type CreateUpdateRoleProposalInfo = {
  data: CreateUpdateRoleProposalEventData
  accounts: solita.CreateUpdateRoleProposalInstructionAccounts
}

export type CreateUpdateRoleProposalEvent = InstructionBase &
  CreateUpdateRoleProposalInfo & {
    type: InstructionType.CreateUpdateRoleProposal
  }

/*----------------------------------------------------------------------*/

export type ExecuteUpdateRoleInfo = {
  accounts: solita.ExecuteUpdateRoleInstructionAccounts
}

export type ExecuteUpdateRoleEvent = InstructionBase &
  ExecuteUpdateRoleInfo & {
    type: InstructionType.ExecuteUpdateRole
  }

/*----------------------------------------------------------------------*/

export type CreateChangeClubConfigGovernanceEventData = {
  voteThreshold: number
  maxVotingTime: number
}

export type CreateChangeClubConfigGovernanceInfo = {
  data: CreateChangeClubConfigGovernanceEventData
  accounts: solita.CreateChangeClubConfigGovernanceInstructionAccounts
}

export type CreateChangeClubConfigGovernanceEvent = InstructionBase &
  CreateChangeClubConfigGovernanceInfo & {
    type: InstructionType.CreateChangeClubConfigGovernance
  }

/*----------------------------------------------------------------------*/

export type CreateSolseaProposalEventData = {
  treasuryIndex: number
  chainId: string
  offeredAmount: BN
  wantedAmount: BN
  sellerFeeBps: number
  useDeny: boolean
  action: number
}

export type CreateSolseaProposalInfo = {
  data: CreateSolseaProposalEventData
  accounts: solita.CreateSolseaProposalInstructionAccounts
}

export type CreateSolseaProposalEvent = InstructionBase &
  CreateSolseaProposalInfo & {
    type: InstructionType.CreateSolseaProposal
  }

/*----------------------------------------------------------------------*/

export type ExecuteSolseaTransactionEventData = {
  action: number
  treasuryIndex: number
  chainId: string
  authorityBump: number
  creatorsCount: number
  sellerFeeBps: number
  royalties: string
}

export type ExecuteSolseaTransactionInfo = {
  data: ExecuteSolseaTransactionEventData
  accounts: solita.ExecuteSolseaTransactionInstructionAccounts
}

export type ExecuteSolseaTransactionEvent = InstructionBase &
  ExecuteSolseaTransactionInfo & {
    type: InstructionType.ExecuteSolseaTransaction
  }

/*----------------------------------------------------------------------*/

export type CancelSolseaOfferEventData = {
  chainId: string
}

export type CancelSolseaOfferInfo = {
  data: CancelSolseaOfferEventData
  accounts: solita.CancelSolseaOfferInstructionAccounts
}

export type CancelSolseaOfferEvent = InstructionBase &
  CancelSolseaOfferInfo & {
    type: InstructionType.CancelSolseaOffer
  }

/*----------------------------------------------------------------------*/

export type ReserveRightsInfo = {
  data: solita.ReservedRights
  accounts: solita.ReserveRightsInstructionAccounts
}

export type ReserveRightsEvent = InstructionBase &
  ReserveRightsInfo & {
    type: InstructionType.ReserveRights
  }

/*----------------------------------------------------------------------*/

export type UpdateAllocationEventData = {
  equal: BN
  customAllocations: solita.CustomAllocation
  removeAllocation: solita.CustomAllocation
  newCap: BN
}

export type UpdateAllocationInfo = {
  data: UpdateAllocationEventData
  accounts: solita.UpdateAllocationInstructionAccounts
}

export type UpdateAllocationEvent = InstructionBase &
  UpdateAllocationInfo & {
    type: InstructionType.UpdateAllocation
  }

/*----------------------------------------------------------------------*/

export type CreateAddSellPermissionProposalInfo = {
  data: solita.CreateAddSellPermissionProposalInstructionArgs
  accounts: solita.CreateAddSellPermissionProposalInstructionAccounts
}

export type CreateAddSellPermissionProposalEvent = InstructionBase &
  CreateAddSellPermissionProposalInfo & {
    type: InstructionType.CreateAddSellPermissionProposal
  }

/*----------------------------------------------------------------------*/

export type ExecuteSellPermissionTransactionInfo = {
  accounts: solita.ExecuteSellPermissionTransactionInstructionAccounts
}

export type ExecuteSellPermissionTransactionEvent = InstructionBase &
  ExecuteSellPermissionTransactionInfo & {
    type: InstructionType.ExecuteSellPermissionTransaction
  }

/*----------------------------------------------------------------------*/

export type AddStakeConfigToStakeRecordInfo = {
  accounts: solita.AddStakeConfigToStakeRecordInstructionAccounts
}

export type AddStakeConfigToStakeRecordEvent = InstructionBase &
  AddStakeConfigToStakeRecordInfo & {
    type: InstructionType.AddStakeConfigToStakeRecord
  }

/*----------------------------------------------------------------------*/

export type AddCanLeaveActionInfo = {
  accounts: solita.AddCanLeaveActionInstructionAccounts
}

export type AddCanLeaveActionEvent = InstructionBase &
  AddCanLeaveActionInfo & {
    type: InstructionType.AddCanLeaveAction
  }

/*----------------------------------------------------------------------*/

export function getInstructionType(data: Buffer): InstructionType | undefined {
  const discriminator = data.slice(0, 8)
  return IX_METHOD_CODE.get(discriminator.toString('ascii'))
}

export const IX_METHOD_CODE: Map<string, InstructionType | undefined> = new Map<
  string,
  InstructionType | undefined
>([
  [
    Buffer.from(solita.createClubInstructionDiscriminator).toString('ascii'),
    InstructionType.CreateClub,
  ],
  [
    Buffer.from(solita.createClubVaultInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CreateClubVault,
  ],
  [
    Buffer.from(
      solita.createTreasuryGovernanceInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.CreateTreasuryGovernance,
  ],
  [
    Buffer.from(solita.addSellPermissionInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.AddSellPermission,
  ],
  [
    Buffer.from(solita.supportClubInstructionDiscriminator).toString('ascii'),
    InstructionType.SupportClub,
  ],
  [
    Buffer.from(solita.leaveClubInstructionDiscriminator).toString('ascii'),
    InstructionType.LeaveClub,
  ],
  [
    Buffer.from(solita.createClubProposalInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CreateClubProposal,
  ],
  [
    Buffer.from(solita.allowMemberInstructionDiscriminator).toString('ascii'),
    InstructionType.AllowMember,
  ],
  [
    Buffer.from(solita.updateMemberInstructionDiscriminator).toString('ascii'),
    InstructionType.UpdateMember,
  ],
  [
    Buffer.from(solita.acceptMembershipInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.AcceptMembership,
  ],
  [
    Buffer.from(solita.cancelInvitationInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CancelInvitation,
  ],
  [
    Buffer.from(solita.createFundraiseInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CreateFundraise,
  ],
  [
    Buffer.from(solita.finishFundraiseInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.FinishFundraise,
  ],
  [
    Buffer.from(solita.updateVoterWeightInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.UpdateVoterWeight,
  ],
  [
    Buffer.from(solita.executeTransactionInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.ExecuteTransaction,
  ],
  [
    Buffer.from(solita.cancelEscrowInstructionDiscriminator).toString('ascii'),
    InstructionType.CancelEscrow,
  ],
  [
    Buffer.from(solita.createProposalMetadataInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CreateProposalMetadata,
  ],
  [
    Buffer.from(
      solita.createWithdrawalProposalInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.CreateWithdrawalProposal,
  ],
  [
    Buffer.from(
      solita.executeWithdrawalTransactionInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.ExecuteWithdrawalTransaction,
  ],
  [
    Buffer.from(
      solita.updateVoterWeightForGovernanceInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.UpdateVoterWeightForGovernance,
  ],
  [
    Buffer.from(solita.distributeInstructionDiscriminator).toString('ascii'),
    InstructionType.Distribute,
  ],
  [
    Buffer.from(solita.transferProfitInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.TransferProfit,
  ],
  [
    Buffer.from(
      solita.createWithdrawalGovernanceInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.CreateWithdrawalGovernance,
  ],
  [
    Buffer.from(solita.castNftVoteInstructionDiscriminator).toString('ascii'),
    InstructionType.CastNftVote,
  ],
  [
    Buffer.from(solita.initializeStakingInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.InitializeStaking,
  ],
  [
    Buffer.from(solita.stakeTokensInstructionDiscriminator).toString('ascii'),
    InstructionType.StakeTokens,
  ],
  [
    Buffer.from(solita.claimStakedTokensInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.ClaimStakedTokens,
  ],
  [
    Buffer.from(solita.unstakeTokensInstructionDiscriminator).toString('ascii'),
    InstructionType.UnstakeTokens,
  ],
  [
    Buffer.from(solita.finishStakingInstructionDiscriminator).toString('ascii'),
    InstructionType.FinishStaking,
  ],
  [
    Buffer.from(solita.startStakingInstructionDiscriminator).toString('ascii'),
    InstructionType.StartStaking,
  ],
  [
    Buffer.from(
      solita.initializeStakingRewardInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.InitializeStakingReward,
  ],
  [
    Buffer.from(
      solita.updateProposalDescriptionInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.UpdateProposalDescription,
  ],
  [
    Buffer.from(solita.createMeBuyNowProposalInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CreateMeBuyNowProposal,
  ],
  [
    Buffer.from(solita.createMeSellProposalInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CreateMeSellProposal,
  ],
  [
    Buffer.from(
      solita.executeMeBuyNowTransactionInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.ExecuteMeBuyNowTransaction,
  ],
  [
    Buffer.from(
      solita.executeMeSellTransactionInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.ExecuteMeSellTransaction,
  ],
  [
    Buffer.from(solita.executeMeBuyNowInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.ExecuteMeBuyNow,
  ],
  [
    Buffer.from(solita.executeMeSellInstructionDiscriminator).toString('ascii'),
    InstructionType.ExecuteMeSell,
  ],
  [
    Buffer.from(solita.executeMeSellCancelInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.ExecuteMeSellCancel,
  ],
  [
    Buffer.from(solita.createFinancialOfferInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CreateFinancialOffer,
  ],
  [
    Buffer.from(solita.cancelFinancialOfferInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CancelFinancialOffer,
  ],
  [
    Buffer.from(solita.acceptFinancialOfferInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.AcceptFinancialOffer,
  ],
  [
    Buffer.from(solita.createTransferProposalInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CreateTransferProposal,
  ],
  [
    Buffer.from(
      solita.executeTransferProposalInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.ExecuteTransferProposal,
  ],
  [
    Buffer.from(
      solita.createTransferGovernanceInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.CreateTransferGovernance,
  ],
  [
    Buffer.from(solita.updateGovernanceConfigInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.UpdateGovernanceConfig,
  ],
  [
    Buffer.from(
      solita.executeUpdateGovernanceConfigInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.ExecuteUpdateGovernanceConfig,
  ],
  [
    Buffer.from(
      solita.createUpdateRoleProposalInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.CreateUpdateRoleProposal,
  ],
  [
    Buffer.from(solita.executeUpdateRoleInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.ExecuteUpdateRole,
  ],
  [
    Buffer.from(
      solita.createChangeClubConfigGovernanceInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.CreateChangeClubConfigGovernance,
  ],
  [
    Buffer.from(solita.createSolseaProposalInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CreateSolseaProposal,
  ],
  [
    Buffer.from(
      solita.executeSolseaTransactionInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.ExecuteSolseaTransaction,
  ],
  [
    Buffer.from(solita.cancelSolseaOfferInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CancelSolseaOffer,
  ],
  [
    Buffer.from(solita.reserveRightsInstructionDiscriminator).toString('ascii'),
    InstructionType.ReserveRights,
  ],
  [
    Buffer.from(solita.updateAllocationInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.UpdateAllocation,
  ],
  [
    Buffer.from(
      solita.createAddSellPermissionProposalInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.CreateAddSellPermissionProposal,
  ],
  [
    Buffer.from(
      solita.executeSellPermissionTransactionInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.ExecuteSellPermissionTransaction,
  ],
  [
    Buffer.from(
      solita.addStakeConfigToStakeRecordInstructionDiscriminator,
    ).toString('ascii'),
    InstructionType.AddStakeConfigToStakeRecord,
  ],
  [
    Buffer.from(solita.addCanLeaveActionInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.AddCanLeaveAction,
  ],
])
export const IX_DATA_LAYOUT: Partial<Record<InstructionType, any>> = {
  [InstructionType.CreateClub]: solita.createClubStruct,
  [InstructionType.CreateClubVault]: solita.createClubVaultStruct,
  [InstructionType.CreateTreasuryGovernance]:
    solita.createTreasuryGovernanceStruct,
  [InstructionType.AddSellPermission]: solita.addSellPermissionStruct,
  [InstructionType.SupportClub]: solita.supportClubStruct,
  [InstructionType.LeaveClub]: solita.leaveClubStruct,
  [InstructionType.CreateClubProposal]: solita.createClubProposalStruct,
  [InstructionType.AllowMember]: solita.allowMemberStruct,
  [InstructionType.UpdateMember]: solita.updateMemberStruct,
  [InstructionType.AcceptMembership]: solita.acceptMembershipStruct,
  [InstructionType.CancelInvitation]: solita.cancelInvitationStruct,
  [InstructionType.CreateFundraise]: solita.createFundraiseStruct,
  [InstructionType.FinishFundraise]: solita.finishFundraiseStruct,
  [InstructionType.UpdateVoterWeight]: solita.updateVoterWeightStruct,
  [InstructionType.ExecuteTransaction]: solita.executeTransactionStruct,
  [InstructionType.CancelEscrow]: solita.cancelEscrowStruct,
  [InstructionType.CreateProposalMetadata]: solita.createProposalMetadataStruct,
  [InstructionType.CreateWithdrawalProposal]:
    solita.createWithdrawalProposalStruct,
  [InstructionType.ExecuteWithdrawalTransaction]:
    solita.executeWithdrawalTransactionStruct,
  [InstructionType.UpdateVoterWeightForGovernance]:
    solita.updateVoterWeightForGovernanceStruct,
  [InstructionType.Distribute]: solita.distributeStruct,
  [InstructionType.TransferProfit]: solita.transferProfitStruct,
  [InstructionType.CreateWithdrawalGovernance]:
    solita.createWithdrawalGovernanceStruct,
  [InstructionType.CastNftVote]: solita.castNftVoteStruct,
  [InstructionType.InitializeStaking]: solita.initializeStakingStruct,
  [InstructionType.StakeTokens]: solita.stakeTokensStruct,
  [InstructionType.ClaimStakedTokens]: solita.claimStakedTokensStruct,
  [InstructionType.UnstakeTokens]: solita.unstakeTokensStruct,
  [InstructionType.FinishStaking]: solita.finishStakingStruct,
  [InstructionType.StartStaking]: solita.startStakingStruct,
  [InstructionType.InitializeStakingReward]:
    solita.initializeStakingRewardStruct,
  [InstructionType.UpdateProposalDescription]:
    solita.updateProposalDescriptionStruct,
  [InstructionType.CreateMeBuyNowProposal]: solita.createMeBuyNowProposalStruct,
  [InstructionType.CreateMeSellProposal]: solita.createMeSellProposalStruct,
  [InstructionType.ExecuteMeBuyNowTransaction]:
    solita.executeMeBuyNowTransactionStruct,
  [InstructionType.ExecuteMeSellTransaction]:
    solita.executeMeSellTransactionStruct,
  [InstructionType.ExecuteMeBuyNow]: solita.executeMeBuyNowStruct,
  [InstructionType.ExecuteMeSell]: solita.executeMeSellStruct,
  [InstructionType.ExecuteMeSellCancel]: solita.executeMeSellCancelStruct,
  [InstructionType.CreateFinancialOffer]: solita.createFinancialOfferStruct,
  [InstructionType.CancelFinancialOffer]: solita.cancelFinancialOfferStruct,
  [InstructionType.AcceptFinancialOffer]: solita.acceptFinancialOfferStruct,
  [InstructionType.CreateTransferProposal]: solita.createTransferProposalStruct,
  [InstructionType.ExecuteTransferProposal]:
    solita.executeTransferProposalStruct,
  [InstructionType.CreateTransferGovernance]:
    solita.createTransferGovernanceStruct,
  [InstructionType.UpdateGovernanceConfig]: solita.updateGovernanceConfigStruct,
  [InstructionType.ExecuteUpdateGovernanceConfig]:
    solita.executeUpdateGovernanceConfigStruct,
  [InstructionType.CreateUpdateRoleProposal]:
    solita.createUpdateRoleProposalStruct,
  [InstructionType.ExecuteUpdateRole]: solita.executeUpdateRoleStruct,
  [InstructionType.CreateChangeClubConfigGovernance]:
    solita.createChangeClubConfigGovernanceStruct,
  [InstructionType.CreateSolseaProposal]: solita.createSolseaProposalStruct,
  [InstructionType.ExecuteSolseaTransaction]:
    solita.executeSolseaTransactionStruct,
  [InstructionType.CancelSolseaOffer]: solita.cancelSolseaOfferStruct,
  [InstructionType.ReserveRights]: solita.reserveRightsStruct,
  [InstructionType.UpdateAllocation]: solita.updateAllocationStruct,
  [InstructionType.CreateAddSellPermissionProposal]:
    solita.createAddSellPermissionProposalStruct,
  [InstructionType.ExecuteSellPermissionTransaction]:
    solita.executeSellPermissionTransactionStruct,
  [InstructionType.AddStakeConfigToStakeRecord]:
    solita.addStakeConfigToStakeRecordStruct,
  [InstructionType.AddCanLeaveAction]: solita.addCanLeaveActionStruct,
}

export const IX_ACCOUNTS_LAYOUT: Partial<Record<InstructionType, any>> = {
  [InstructionType.CreateClub]: solita.CreateClubAccounts,
  [InstructionType.CreateClubVault]: solita.CreateClubVaultAccounts,
  [InstructionType.CreateTreasuryGovernance]:
    solita.CreateTreasuryGovernanceAccounts,
  [InstructionType.AddSellPermission]: solita.AddSellPermissionAccounts,
  [InstructionType.SupportClub]: solita.SupportClubAccounts,
  [InstructionType.LeaveClub]: solita.LeaveClubAccounts,
  [InstructionType.CreateClubProposal]: solita.CreateClubProposalAccounts,
  [InstructionType.AllowMember]: solita.AllowMemberAccounts,
  [InstructionType.UpdateMember]: solita.UpdateMemberAccounts,
  [InstructionType.AcceptMembership]: solita.AcceptMembershipAccounts,
  [InstructionType.CancelInvitation]: solita.CancelInvitationAccounts,
  [InstructionType.CreateFundraise]: solita.CreateFundraiseAccounts,
  [InstructionType.FinishFundraise]: solita.FinishFundraiseAccounts,
  [InstructionType.UpdateVoterWeight]: solita.UpdateVoterWeightAccounts,
  [InstructionType.ExecuteTransaction]: solita.ExecuteTransactionAccounts,
  [InstructionType.CancelEscrow]: solita.CancelEscrowAccounts,
  [InstructionType.CreateProposalMetadata]:
    solita.CreateProposalMetadataAccounts,
  [InstructionType.CreateWithdrawalProposal]:
    solita.CreateWithdrawalProposalAccounts,
  [InstructionType.ExecuteWithdrawalTransaction]:
    solita.ExecuteWithdrawalTransactionAccounts,
  [InstructionType.UpdateVoterWeightForGovernance]:
    solita.UpdateVoterWeightForGovernanceAccounts,
  [InstructionType.Distribute]: solita.DistributeAccounts,
  [InstructionType.TransferProfit]: solita.TransferProfitAccounts,
  [InstructionType.CreateWithdrawalGovernance]:
    solita.CreateWithdrawalGovernanceAccounts,
  [InstructionType.CastNftVote]: solita.CastNftVoteAccounts,
  [InstructionType.InitializeStaking]: solita.InitializeStakingAccounts,
  [InstructionType.StakeTokens]: solita.StakeTokensAccounts,
  [InstructionType.ClaimStakedTokens]: solita.ClaimStakedTokensAccounts,
  [InstructionType.UnstakeTokens]: solita.UnstakeTokensAccounts,
  [InstructionType.FinishStaking]: solita.FinishStakingAccounts,
  [InstructionType.StartStaking]: solita.StartStakingAccounts,
  [InstructionType.InitializeStakingReward]:
    solita.InitializeStakingRewardAccounts,
  [InstructionType.UpdateProposalDescription]:
    solita.UpdateProposalDescriptionAccounts,
  [InstructionType.CreateMeBuyNowProposal]:
    solita.CreateMeBuyNowProposalAccounts,
  [InstructionType.CreateMeSellProposal]: solita.CreateMeSellProposalAccounts,
  [InstructionType.ExecuteMeBuyNowTransaction]:
    solita.ExecuteMeBuyNowTransactionAccounts,
  [InstructionType.ExecuteMeSellTransaction]:
    solita.ExecuteMeSellTransactionAccounts,
  [InstructionType.ExecuteMeBuyNow]: solita.ExecuteMeBuyNowAccounts,
  [InstructionType.ExecuteMeSell]: solita.ExecuteMeSellAccounts,
  [InstructionType.ExecuteMeSellCancel]: solita.ExecuteMeSellCancelAccounts,
  [InstructionType.CreateFinancialOffer]: solita.CreateFinancialOfferAccounts,
  [InstructionType.CancelFinancialOffer]: solita.CancelFinancialOfferAccounts,
  [InstructionType.AcceptFinancialOffer]: solita.AcceptFinancialOfferAccounts,
  [InstructionType.CreateTransferProposal]:
    solita.CreateTransferProposalAccounts,
  [InstructionType.ExecuteTransferProposal]:
    solita.ExecuteTransferProposalAccounts,
  [InstructionType.CreateTransferGovernance]:
    solita.CreateTransferGovernanceAccounts,
  [InstructionType.UpdateGovernanceConfig]:
    solita.UpdateGovernanceConfigAccounts,
  [InstructionType.ExecuteUpdateGovernanceConfig]:
    solita.ExecuteUpdateGovernanceConfigAccounts,
  [InstructionType.CreateUpdateRoleProposal]:
    solita.CreateUpdateRoleProposalAccounts,
  [InstructionType.ExecuteUpdateRole]: solita.ExecuteUpdateRoleAccounts,
  [InstructionType.CreateChangeClubConfigGovernance]:
    solita.CreateChangeClubConfigGovernanceAccounts,
  [InstructionType.CreateSolseaProposal]: solita.CreateSolseaProposalAccounts,
  [InstructionType.ExecuteSolseaTransaction]:
    solita.ExecuteSolseaTransactionAccounts,
  [InstructionType.CancelSolseaOffer]: solita.CancelSolseaOfferAccounts,
  [InstructionType.ReserveRights]: solita.ReserveRightsAccounts,
  [InstructionType.UpdateAllocation]: solita.UpdateAllocationAccounts,
  [InstructionType.CreateAddSellPermissionProposal]:
    solita.CreateAddSellPermissionProposalAccounts,
  [InstructionType.ExecuteSellPermissionTransaction]:
    solita.ExecuteSellPermissionTransactionAccounts,
  [InstructionType.AddStakeConfigToStakeRecord]:
    solita.AddStakeConfigToStakeRecordAccounts,
  [InstructionType.AddCanLeaveAction]: solita.AddCanLeaveActionAccounts,
}

export type ParsedEventsInfo =
  | CreateClubInfo
  | CreateClubVaultInfo
  | CreateTreasuryGovernanceInfo
  | AddSellPermissionInfo
  | SupportClubInfo
  | LeaveClubInfo
  | CreateClubProposalInfo
  | AllowMemberInfo
  | UpdateMemberInfo
  | AcceptMembershipInfo
  | CancelInvitationInfo
  | CreateFundraiseInfo
  | FinishFundraiseInfo
  | UpdateVoterWeightInfo
  | ExecuteTransactionInfo
  | CancelEscrowInfo
  | CreateProposalMetadataInfo
  | CreateWithdrawalProposalInfo
  | ExecuteWithdrawalTransactionInfo
  | UpdateVoterWeightForGovernanceInfo
  | DistributeInfo
  | TransferProfitInfo
  | CreateWithdrawalGovernanceInfo
  | CastNftVoteInfo
  | InitializeStakingInfo
  | StakeTokensInfo
  | ClaimStakedTokensInfo
  | UnstakeTokensInfo
  | FinishStakingInfo
  | StartStakingInfo
  | InitializeStakingRewardInfo
  | UpdateProposalDescriptionInfo
  | CreateMeBuyNowProposalInfo
  | CreateMeSellProposalInfo
  | ExecuteMeBuyNowTransactionInfo
  | ExecuteMeSellTransactionInfo
  | ExecuteMeBuyNowInfo
  | ExecuteMeSellInfo
  | ExecuteMeSellCancelInfo
  | CreateFinancialOfferInfo
  | CancelFinancialOfferInfo
  | AcceptFinancialOfferInfo
  | CreateTransferProposalInfo
  | ExecuteTransferProposalInfo
  | CreateTransferGovernanceInfo
  | UpdateGovernanceConfigInfo
  | ExecuteUpdateGovernanceConfigInfo
  | CreateUpdateRoleProposalInfo
  | ExecuteUpdateRoleInfo
  | CreateChangeClubConfigGovernanceInfo
  | CreateSolseaProposalInfo
  | ExecuteSolseaTransactionInfo
  | CancelSolseaOfferInfo
  | ReserveRightsInfo
  | UpdateAllocationInfo
  | CreateAddSellPermissionProposalInfo
  | ExecuteSellPermissionTransactionInfo
  | AddStakeConfigToStakeRecordInfo
  | AddCanLeaveActionInfo

export type ParsedEvents =
  | CreateClubEvent
  | CreateClubVaultEvent
  | CreateTreasuryGovernanceEvent
  | AddSellPermissionEvent
  | SupportClubEvent
  | LeaveClubEvent
  | CreateClubProposalEvent
  | AllowMemberEvent
  | UpdateMemberEvent
  | AcceptMembershipEvent
  | CancelInvitationEvent
  | CreateFundraiseEvent
  | FinishFundraiseEvent
  | UpdateVoterWeightEvent
  | ExecuteTransactionEvent
  | CancelEscrowEvent
  | CreateProposalMetadataEvent
  | CreateWithdrawalProposalEvent
  | ExecuteWithdrawalTransactionEvent
  | UpdateVoterWeightForGovernanceEvent
  | DistributeEvent
  | TransferProfitEvent
  | CreateWithdrawalGovernanceEvent
  | CastNftVoteEvent
  | InitializeStakingEvent
  | StakeTokensEvent
  | ClaimStakedTokensEvent
  | UnstakeTokensEvent
  | FinishStakingEvent
  | StartStakingEvent
  | InitializeStakingRewardEvent
  | UpdateProposalDescriptionEvent
  | CreateMeBuyNowProposalEvent
  | CreateMeSellProposalEvent
  | ExecuteMeBuyNowTransactionEvent
  | ExecuteMeSellTransactionEvent
  | ExecuteMeBuyNowEvent
  | ExecuteMeSellEvent
  | ExecuteMeSellCancelEvent
  | CreateFinancialOfferEvent
  | CancelFinancialOfferEvent
  | AcceptFinancialOfferEvent
  | CreateTransferProposalEvent
  | ExecuteTransferProposalEvent
  | CreateTransferGovernanceEvent
  | UpdateGovernanceConfigEvent
  | ExecuteUpdateGovernanceConfigEvent
  | CreateUpdateRoleProposalEvent
  | ExecuteUpdateRoleEvent
  | CreateChangeClubConfigGovernanceEvent
  | CreateSolseaProposalEvent
  | ExecuteSolseaTransactionEvent
  | CancelSolseaOfferEvent
  | ReserveRightsEvent
  | UpdateAllocationEvent
  | CreateAddSellPermissionProposalEvent
  | ExecuteSellPermissionTransactionEvent
  | AddStakeConfigToStakeRecordEvent
  | AddCanLeaveActionEvent
