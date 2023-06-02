import { EventBase } from '@aleph-indexer/framework'
import { PublicKey } from '@solana/web3.js'
import * as solita from './solita/index.js'
import BN from 'bn.js'

export enum InstructionType {
  CreateClub = 'CreateClubEvent',
  CreateGovernance = 'CreateGovernanceEvent',
  CreateTreasury = 'CreateTreasuryEvent',
  SupportClub = 'SupportClubEvent',
  LeaveClub = 'LeaveClubEvent',
  CreateClubProposal = 'CreateClubProposalEvent',
  AllowMember = 'AllowMemberEvent',
  UpdateMember = 'UpdateMemberEvent',
  AcceptMembership = 'AcceptMembershipEvent',
  CancelInvitation = 'CancelInvitationEvent',
  UpdateVoterWeight = 'UpdateVoterWeightEvent',
  ExecuteProposal = 'ExecuteProposalEvent',
  Distribute = 'DistributeEvent',
  CastNftVote = 'CastNftVoteEvent',
  InitializeStaking = 'InitializeStakingEvent',
  StakeTokens = 'StakeTokensEvent',
  ClaimStakedTokens = 'ClaimStakedTokensEvent',
  UnstakeTokens = 'UnstakeTokensEvent',
  FinishStaking = 'FinishStakingEvent',
  StartStaking = 'StartStakingEvent',
  InitializeStakingReward = 'InitializeStakingRewardEvent',
  UpdateProposalMetadata = 'UpdateProposalMetadataEvent',
  CreateFinancialOffer = 'CreateFinancialOfferEvent',
  CancelFinancialOffer = 'CancelFinancialOfferEvent',
  AcceptFinancialOffer = 'AcceptFinancialOfferEvent',
  ReserveRights = 'ReserveRightsEvent',
  UpdateAllocation = 'UpdateAllocationEvent',
  ConfigureWhitelistings = 'ConfigureWhitelistingsEvent',
  ConfigureAdmins = 'ConfigureAdminsEvent',
  MigrateFinancials = 'MigrateFinancialsEvent',
  InsertTransaction = 'InsertTransactionEvent',
  Fundraise = 'FundraiseEvent',
  CancelProposal = 'CancelProposalEvent',
}

export type InstructionBase = EventBase<InstructionType> & {
  programId: string
  signer: string
  account: string
}

/*-----------------------* CUSTOM EVENTS TYPES *-----------------------*/

export type CreateClubInfo = {
  data: solita.CreateClubInstructionArgs
  accounts: solita.CreateClubInstructionAccounts
}

export type CreateClubEvent = InstructionBase &
  CreateClubInfo & {
    type: InstructionType.CreateClub
  }

/*----------------------------------------------------------------------*/

export type CreateGovernanceEventData = {
  governanceDtos: solita.GovernanceDto
}

export type CreateGovernanceInfo = {
  data: CreateGovernanceEventData
  accounts: solita.CreateGovernanceInstructionAccounts
}

export type CreateGovernanceEvent = InstructionBase &
  CreateGovernanceInfo & {
    type: InstructionType.CreateGovernance
  }

/*----------------------------------------------------------------------*/

export type CreateTreasuryEventData = {
  name: string
  chainId: string
  nftMaxVoterWeight: BN
  roleDtos: solita.TreasuryRolesDto
}

export type CreateTreasuryInfo = {
  data: CreateTreasuryEventData
  accounts: solita.CreateTreasuryInstructionAccounts
}

export type CreateTreasuryEvent = InstructionBase &
  CreateTreasuryInfo & {
    type: InstructionType.CreateTreasury
  }

/*----------------------------------------------------------------------*/

export type SupportClubInfo = {
  data: solita.SupportType
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

export type CreateClubProposalInfo = {
  data: solita.CreateClubProposalInstructionArgs
  accounts: solita.CreateClubProposalInstructionAccounts
}

export type CreateClubProposalEvent = InstructionBase &
  CreateClubProposalInfo & {
    type: InstructionType.CreateClubProposal
  }

/*----------------------------------------------------------------------*/

export type AllowMemberInfo = {
  data: solita.AllowMemberInstructionArgs
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

export type UpdateVoterWeightInfo = {
  data: solita.ClubAction
  accounts: solita.UpdateVoterWeightInstructionAccounts
}

export type UpdateVoterWeightEvent = InstructionBase &
  UpdateVoterWeightInfo & {
    type: InstructionType.UpdateVoterWeight
  }

/*----------------------------------------------------------------------*/

export type ExecuteProposalInfo = {
  accounts: solita.ExecuteProposalInstructionAccounts
}

export type ExecuteProposalEvent = InstructionBase &
  ExecuteProposalInfo & {
    type: InstructionType.ExecuteProposal
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

export type CastNftVoteInfo = {
  accounts: solita.CastNftVoteInstructionAccounts
}

export type CastNftVoteEvent = InstructionBase &
  CastNftVoteInfo & {
    type: InstructionType.CastNftVote
  }

/*----------------------------------------------------------------------*/

export type InitializeStakingInfo = {
  data: solita.InitializeStakingInstructionArgs
  accounts: solita.InitializeStakingInstructionAccounts
}

export type InitializeStakingEvent = InstructionBase &
  InitializeStakingInfo & {
    type: InstructionType.InitializeStaking
  }

/*----------------------------------------------------------------------*/

export type StakeTokensInfo = {
  data: solita.StakeTokensInstructionArgs
  accounts: solita.StakeTokensInstructionAccounts
}

export type StakeTokensEvent = InstructionBase &
  StakeTokensInfo & {
    type: InstructionType.StakeTokens
  }

/*----------------------------------------------------------------------*/

export type ClaimStakedTokensInfo = {
  data: solita.StakeOption
  accounts: solita.ClaimStakedTokensInstructionAccounts
}

export type ClaimStakedTokensEvent = InstructionBase &
  ClaimStakedTokensInfo & {
    type: InstructionType.ClaimStakedTokens
  }

/*----------------------------------------------------------------------*/

export type UnstakeTokensInfo = {
  data: solita.StakeOption
  accounts: solita.UnstakeTokensInstructionAccounts
}

export type UnstakeTokensEvent = InstructionBase &
  UnstakeTokensInfo & {
    type: InstructionType.UnstakeTokens
  }

/*----------------------------------------------------------------------*/

export type FinishStakingInfo = {
  accounts: solita.FinishStakingInstructionAccounts
}

export type FinishStakingEvent = InstructionBase &
  FinishStakingInfo & {
    type: InstructionType.FinishStaking
  }

/*----------------------------------------------------------------------*/

export type StartStakingInfo = {
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

export type UpdateProposalMetadataEventData = {
  description: string
  name: string
  options: string
  discussionLink: string
}

export type UpdateProposalMetadataInfo = {
  data: UpdateProposalMetadataEventData
  accounts: solita.UpdateProposalMetadataInstructionAccounts
}

export type UpdateProposalMetadataEvent = InstructionBase &
  UpdateProposalMetadataInfo & {
    type: InstructionType.UpdateProposalMetadata
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

export type ConfigureWhitelistingsInfo = {
  data: solita.ConfigureWhitelistingsInstructionArgs
  accounts: solita.ConfigureWhitelistingsInstructionAccounts
}

export type ConfigureWhitelistingsEvent = InstructionBase &
  ConfigureWhitelistingsInfo & {
    type: InstructionType.ConfigureWhitelistings
  }

/*----------------------------------------------------------------------*/

export type ConfigureAdminsEventData = {
  admins: solita.AdminConfig
  feeWallet: PublicKey
  feePercentage: number
  fundraiseFeeConfigs: solita.FundraiseFeeConfig
  otcFeeConfigs: solita.OtcFeeConfig
}

export type ConfigureAdminsInfo = {
  data: ConfigureAdminsEventData
  accounts: solita.ConfigureAdminsInstructionAccounts
}

export type ConfigureAdminsEvent = InstructionBase &
  ConfigureAdminsInfo & {
    type: InstructionType.ConfigureAdmins
  }

/*----------------------------------------------------------------------*/

export type MigrateFinancialsEventData = {
  usdcAmount: BN
}

export type MigrateFinancialsInfo = {
  data: MigrateFinancialsEventData
  accounts: solita.MigrateFinancialsInstructionAccounts
}

export type MigrateFinancialsEvent = InstructionBase &
  MigrateFinancialsInfo & {
    type: InstructionType.MigrateFinancials
  }

/*----------------------------------------------------------------------*/

export type InsertTransactionEventData = {
  data: Buffer
  signerIndexes: number
}

export type InsertTransactionInfo = {
  data: InsertTransactionEventData
  accounts: solita.InsertTransactionInstructionAccounts
}

export type InsertTransactionEvent = InstructionBase &
  InsertTransactionInfo & {
    type: InstructionType.InsertTransaction
  }

/*----------------------------------------------------------------------*/

export type FundraiseInfo = {
  data: solita.FundraiseAction
  accounts: solita.FundraiseInstructionAccounts
}

export type FundraiseEvent = InstructionBase &
  FundraiseInfo & {
    type: InstructionType.Fundraise
  }

/*----------------------------------------------------------------------*/

export type CancelProposalInfo = {
  data: solita.CancelProposalInstructionArgs
  accounts: solita.CancelProposalInstructionAccounts
}

export type CancelProposalEvent = InstructionBase &
  CancelProposalInfo & {
    type: InstructionType.CancelProposal
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
    Buffer.from(solita.createGovernanceInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CreateGovernance,
  ],
  [
    Buffer.from(solita.createTreasuryInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CreateTreasury,
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
    Buffer.from(solita.updateVoterWeightInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.UpdateVoterWeight,
  ],
  [
    Buffer.from(solita.executeProposalInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.ExecuteProposal,
  ],
  [
    Buffer.from(solita.distributeInstructionDiscriminator).toString('ascii'),
    InstructionType.Distribute,
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
    Buffer.from(solita.updateProposalMetadataInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.UpdateProposalMetadata,
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
    Buffer.from(solita.configureWhitelistingsInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.ConfigureWhitelistings,
  ],
  [
    Buffer.from(solita.configureAdminsInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.ConfigureAdmins,
  ],
  [
    Buffer.from(solita.migrateFinancialsInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.MigrateFinancials,
  ],
  [
    Buffer.from(solita.insertTransactionInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.InsertTransaction,
  ],
  [
    Buffer.from(solita.fundraiseInstructionDiscriminator).toString('ascii'),
    InstructionType.Fundraise,
  ],
  [
    Buffer.from(solita.cancelProposalInstructionDiscriminator).toString(
      'ascii',
    ),
    InstructionType.CancelProposal,
  ],
])
export const IX_DATA_LAYOUT: Partial<Record<InstructionType, any>> = {
  [InstructionType.CreateClub]: solita.createClubStruct,
  [InstructionType.CreateGovernance]: solita.createGovernanceStruct,
  [InstructionType.CreateTreasury]: solita.createTreasuryStruct,
  [InstructionType.SupportClub]: solita.supportClubStruct,
  [InstructionType.LeaveClub]: solita.leaveClubStruct,
  [InstructionType.CreateClubProposal]: solita.createClubProposalStruct,
  [InstructionType.AllowMember]: solita.allowMemberStruct,
  [InstructionType.UpdateMember]: solita.updateMemberStruct,
  [InstructionType.AcceptMembership]: solita.acceptMembershipStruct,
  [InstructionType.CancelInvitation]: solita.cancelInvitationStruct,
  [InstructionType.UpdateVoterWeight]: solita.updateVoterWeightStruct,
  [InstructionType.ExecuteProposal]: solita.executeProposalStruct,
  [InstructionType.Distribute]: solita.distributeStruct,
  [InstructionType.CastNftVote]: solita.castNftVoteStruct,
  [InstructionType.InitializeStaking]: solita.initializeStakingStruct,
  [InstructionType.StakeTokens]: solita.stakeTokensStruct,
  [InstructionType.ClaimStakedTokens]: solita.claimStakedTokensStruct,
  [InstructionType.UnstakeTokens]: solita.unstakeTokensStruct,
  [InstructionType.FinishStaking]: solita.finishStakingStruct,
  [InstructionType.StartStaking]: solita.startStakingStruct,
  [InstructionType.InitializeStakingReward]:
    solita.initializeStakingRewardStruct,
  [InstructionType.UpdateProposalMetadata]: solita.updateProposalMetadataStruct,
  [InstructionType.CreateFinancialOffer]: solita.createFinancialOfferStruct,
  [InstructionType.CancelFinancialOffer]: solita.cancelFinancialOfferStruct,
  [InstructionType.AcceptFinancialOffer]: solita.acceptFinancialOfferStruct,
  [InstructionType.ReserveRights]: solita.reserveRightsStruct,
  [InstructionType.UpdateAllocation]: solita.updateAllocationStruct,
  [InstructionType.ConfigureWhitelistings]: solita.configureWhitelistingsStruct,
  [InstructionType.ConfigureAdmins]: solita.configureAdminsStruct,
  [InstructionType.MigrateFinancials]: solita.migrateFinancialsStruct,
  [InstructionType.InsertTransaction]: solita.insertTransactionStruct,
  [InstructionType.Fundraise]: solita.fundraiseStruct,
  [InstructionType.CancelProposal]: solita.cancelProposalStruct,
}

export const IX_ACCOUNTS_LAYOUT: Partial<Record<InstructionType, any>> = {
  [InstructionType.CreateClub]: solita.CreateClubAccounts,
  [InstructionType.CreateGovernance]: solita.CreateGovernanceAccounts,
  [InstructionType.CreateTreasury]: solita.CreateTreasuryAccounts,
  [InstructionType.SupportClub]: solita.SupportClubAccounts,
  [InstructionType.LeaveClub]: solita.LeaveClubAccounts,
  [InstructionType.CreateClubProposal]: solita.CreateClubProposalAccounts,
  [InstructionType.AllowMember]: solita.AllowMemberAccounts,
  [InstructionType.UpdateMember]: solita.UpdateMemberAccounts,
  [InstructionType.AcceptMembership]: solita.AcceptMembershipAccounts,
  [InstructionType.CancelInvitation]: solita.CancelInvitationAccounts,
  [InstructionType.UpdateVoterWeight]: solita.UpdateVoterWeightAccounts,
  [InstructionType.ExecuteProposal]: solita.ExecuteProposalAccounts,
  [InstructionType.Distribute]: solita.DistributeAccounts,
  [InstructionType.CastNftVote]: solita.CastNftVoteAccounts,
  [InstructionType.InitializeStaking]: solita.InitializeStakingAccounts,
  [InstructionType.StakeTokens]: solita.StakeTokensAccounts,
  [InstructionType.ClaimStakedTokens]: solita.ClaimStakedTokensAccounts,
  [InstructionType.UnstakeTokens]: solita.UnstakeTokensAccounts,
  [InstructionType.FinishStaking]: solita.FinishStakingAccounts,
  [InstructionType.StartStaking]: solita.StartStakingAccounts,
  [InstructionType.InitializeStakingReward]:
    solita.InitializeStakingRewardAccounts,
  [InstructionType.UpdateProposalMetadata]:
    solita.UpdateProposalMetadataAccounts,
  [InstructionType.CreateFinancialOffer]: solita.CreateFinancialOfferAccounts,
  [InstructionType.CancelFinancialOffer]: solita.CancelFinancialOfferAccounts,
  [InstructionType.AcceptFinancialOffer]: solita.AcceptFinancialOfferAccounts,
  [InstructionType.ReserveRights]: solita.ReserveRightsAccounts,
  [InstructionType.UpdateAllocation]: solita.UpdateAllocationAccounts,
  [InstructionType.ConfigureWhitelistings]:
    solita.ConfigureWhitelistingsAccounts,
  [InstructionType.ConfigureAdmins]: solita.ConfigureAdminsAccounts,
  [InstructionType.MigrateFinancials]: solita.MigrateFinancialsAccounts,
  [InstructionType.InsertTransaction]: solita.InsertTransactionAccounts,
  [InstructionType.Fundraise]: solita.FundraiseAccounts,
  [InstructionType.CancelProposal]: solita.CancelProposalAccounts,
}

export type ParsedEventsInfo =
  | CreateClubInfo
  | CreateGovernanceInfo
  | CreateTreasuryInfo
  | SupportClubInfo
  | LeaveClubInfo
  | CreateClubProposalInfo
  | AllowMemberInfo
  | UpdateMemberInfo
  | AcceptMembershipInfo
  | CancelInvitationInfo
  | UpdateVoterWeightInfo
  | ExecuteProposalInfo
  | DistributeInfo
  | CastNftVoteInfo
  | InitializeStakingInfo
  | StakeTokensInfo
  | ClaimStakedTokensInfo
  | UnstakeTokensInfo
  | FinishStakingInfo
  | StartStakingInfo
  | InitializeStakingRewardInfo
  | UpdateProposalMetadataInfo
  | CreateFinancialOfferInfo
  | CancelFinancialOfferInfo
  | AcceptFinancialOfferInfo
  | ReserveRightsInfo
  | UpdateAllocationInfo
  | ConfigureWhitelistingsInfo
  | ConfigureAdminsInfo
  | MigrateFinancialsInfo
  | InsertTransactionInfo
  | FundraiseInfo
  | CancelProposalInfo

export type ParsedEvents =
  | CreateClubEvent
  | CreateGovernanceEvent
  | CreateTreasuryEvent
  | SupportClubEvent
  | LeaveClubEvent
  | CreateClubProposalEvent
  | AllowMemberEvent
  | UpdateMemberEvent
  | AcceptMembershipEvent
  | CancelInvitationEvent
  | UpdateVoterWeightEvent
  | ExecuteProposalEvent
  | DistributeEvent
  | CastNftVoteEvent
  | InitializeStakingEvent
  | StakeTokensEvent
  | ClaimStakedTokensEvent
  | UnstakeTokensEvent
  | FinishStakingEvent
  | StartStakingEvent
  | InitializeStakingRewardEvent
  | UpdateProposalMetadataEvent
  | CreateFinancialOfferEvent
  | CancelFinancialOfferEvent
  | AcceptFinancialOfferEvent
  | ReserveRightsEvent
  | UpdateAllocationEvent
  | ConfigureWhitelistingsEvent
  | ConfigureAdminsEvent
  | MigrateFinancialsEvent
  | InsertTransactionEvent
  | FundraiseEvent
  | CancelProposalEvent
