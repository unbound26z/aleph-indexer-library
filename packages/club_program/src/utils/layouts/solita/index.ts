import { AccountMeta, PublicKey } from '@solana/web3.js'
export * from './accounts/index.js'
export * from './instructions/index.js'
export * from './types/index.js'

import {
  ClubData,
  ClubDataArgs,
  WhitelistingData,
  WhitelistingDataArgs,
  Admins,
  AdminsArgs,
  ClubVault,
  ClubVaultArgs,
  ClubVaultData,
  ClubVaultDataArgs,
  Withdrawal,
  WithdrawalArgs,
  WithdrawalData,
  WithdrawalDataArgs,
  FundraiseConfig,
  FundraiseConfigArgs,
  FinancialRecord,
  FinancialRecordArgs,
  FinancialRecordOffer,
  FinancialRecordOfferArgs,
  MaxVoterWeightRecord,
  MaxVoterWeightRecordArgs,
  VoterWeightRecord,
  VoterWeightRecordArgs,
  AllowedMemberData,
  AllowedMemberDataArgs,
  NftVoteRecord,
  NftVoteRecordArgs,
  ProposalMetadata,
  ProposalMetadataArgs,
  StakeConfig,
  StakeConfigArgs,
  StakeRecord,
  StakeRecordArgs,
  TreasuryData,
  TreasuryDataArgs,
  UniverseMetadata,
  UniverseMetadataArgs,
} from './accounts/index.js'

import {
  RoleConfig,
  KycConfig,
  RolesDto,
  UpdateRoleWeight,
  AdminConfig,
  FundraiseFeeConfig,
  OtcFeeConfig,
  Offer,
  CustomAllocation,
  Allocation,
  TradedRight,
  DepositRecord,
  SellPermission,
  UpdateGovernanceConfigInput,
  GovernanceConfig,
  UpdateMemberDto,
  NftStakeRecord,
  IndividualRight,
  ReservedRights,
  GovernanceDto,
  SellPermissionDto,
  TreasuryRoleConfig,
  TreasuryRolesDto,
  SetGovCfgDto,
  KycError,
  KycLocation,
  ClubType,
  ClubVoterWeightAction,
  UpdateMembersForRole,
  ClubAction,
  SupportType,
  WhitelistingAction,
  AdminPermission,
  AdminStatus,
  OfferStatus,
  OfferType,
  InitializeType,
  TradedRightType,
  UpdateAllocationAction,
  FundraiseAction,
  GovernanceType,
  VoteThresholdPercentage,
  VoteTipping,
  MemberStatus,
  ProposalType,
  ProposalStatus,
  ProposalAction,
  ProposalUpdateStatus,
  StakePeriodType,
  StakeStatus,
  StakeOption,
  UNQNftRarity,
  TreasuryAction,
  AllowType,
  Rarity,
  VoterWeightAction,
} from './types/index.js'

export type CreateClubInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateClubAccounts = [
  'realm',
  'realmConfig',
  'tokenOwnerRecord',
  'clubData',
  'memberData',
  'payer',
  'tokenProgram',
  'rent',
  'systemProgram',
]

export type CreateGovernanceInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateGovernanceAccounts = [
  'splGovernanceProgram',
  'realm',
  'realmConfig',
  'tokenOwnerRecord',
  'voterWeightRecord',
  'payer',
  'memberData',
  'clubData',
  'treasuryData',
  'systemProgram',
]

export type CreateTreasuryInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateTreasuryAccounts = [
  'payer',
  'treasury',
  'treasuryData',
  'profit',
  'memberData',
  'clubData',
  'vaultData',
  'vault',
  'financialRecord',
  'realm',
  'splGovernance',
  'tokenOwnerRecord',
  'tokenProgram',
  'systemProgram',
]

export type SupportClubInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const SupportClubAccounts = [
  'memberData',
  'fundraiseConfig',
  'treasuryData',
  'clubData',
  'treasury',
  'financialRecord',
  'payer',
  'tokenOwnerRecord',
  'tokenProgram',
  'systemProgram',
]

export type LeaveClubInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const LeaveClubAccounts = [
  'realm',
  'clubData',
  'memberData',
  'recipientMemberData',
  'recipient',
  'voterWeightRecord',
  'payer',
  'systemProgram',
]

export type CreateClubProposalInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateClubProposalAccounts = [
  'governance',
  'realm',
  'governanceAuthority',
  'realmConfig',
  'proposal',
  'tokenOwnerRecord',
  'splGovernanceProgram',
  'communityTokenMint',
  'payer',
  'voterWeightRecord',
  'maxVoterWeightRecord',
  'treasuryData',
  'proposalMetadata',
  'clubData',
  'memberData',
  'systemProgram',
  'rent',
]

export type AllowMemberInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const AllowMemberAccounts = [
  'memberData',
  'payer',
  'clubData',
  'realm',
  'systemProgram',
]

export type UpdateMemberInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const UpdateMemberAccounts = [
  'realm',
  'clubData',
  'memberData',
  'memberAddress',
  'memberVoterWeightRecord',
  'updaterMemberData',
  'payer',
  'systemProgram',
]

export type AcceptMembershipInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const AcceptMembershipAccounts = [
  'realm',
  'memberData',
  'payer',
  'tokenOwnerRecord',
  'clubData',
  'systemProgram',
]

export type CancelInvitationInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CancelInvitationAccounts = [
  'payer',
  'memberData',
  'memberAddress',
  'clubData',
  'recipient',
  'systemProgram',
]

export type UpdateVoterWeightInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const UpdateVoterWeightAccounts = [
  'realm',
  'treasuryData',
  'voterWeightRecord',
  'memberData',
  'clubData',
  'payer',
  'systemProgram',
]

export type ExecuteProposalInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ExecuteProposalAccounts = [
  'governance',
  'proposal',
  'proposalTransaction',
  'splGovernanceProgram',
  'payer',
  'proposalMetadata',
  'treasury',
  'treasuryData',
  'clubData',
  'tokenProgram',
  'systemProgram',
]

export type DistributeInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const DistributeAccounts = [
  'clubData',
  'proposal',
  'payer',
  'offer',
  'escrowProgram',
  'treasury',
  'tokenLedger',
  'profit',
  'vault',
  'profitToken',
  'escrowedWantedToken',
  'makerWantedToken',
  'tokenProgram',
  'systemProgram',
  'rent',
]

export type CastNftVoteInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CastNftVoteAccounts = [
  'realm',
  'voterWeightRecord',
  'memberData',
  'treasuryData',
  'payer',
  'proposal',
  'systemProgram',
]

export type InitializeStakingInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const InitializeStakingAccounts = [
  'clubData',
  'memberData',
  'payer',
  'stakedTokens',
  'stakeConfig',
  'unqMint',
  'rent',
  'tokenProgram',
  'systemProgram',
]

export type StakeTokensInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const StakeTokensAccounts = [
  'clubData',
  'memberData',
  'stakeConfig',
  'payer',
  'tokenProgram',
  'systemProgram',
]

export type ClaimStakedTokensInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ClaimStakedTokensAccounts = [
  'clubData',
  'memberData',
  'stakeConfig',
  'stakedTokens',
  'payer',
  'memberTokens',
  'tokenProgram',
  'systemProgram',
]

export type UnstakeTokensInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const UnstakeTokensAccounts = [
  'clubData',
  'memberData',
  'stakeConfig',
  'payer',
  'systemProgram',
]

export type FinishStakingInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const FinishStakingAccounts = [
  'clubData',
  'memberData',
  'payer',
  'stakedTokens',
  'stakeConfig',
  'clubUnqTokens',
  'tokenProgram',
  'systemProgram',
]

export type StartStakingInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const StartStakingAccounts = [
  'clubData',
  'memberData',
  'payer',
  'stakedTokens',
  'stakeConfig',
  'unqMint',
  'tokenProgram',
  'systemProgram',
]

export type InitializeStakingRewardInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const InitializeStakingRewardAccounts = [
  'clubUnqTokens',
  'unqMint',
  'payer',
  'rent',
  'tokenProgram',
  'systemProgram',
]

export type UpdateProposalMetadataInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const UpdateProposalMetadataAccounts = [
  'proposalMetadata',
  'payer',
  'systemProgram',
]

export type CreateFinancialOfferInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateFinancialOfferAccounts = [
  'clubData',
  'memberData',
  'payer',
  'financialOffer',
  'financialRecord',
  'treasuryData',
  'treasury',
  'systemProgram',
]

export type CancelFinancialOfferInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CancelFinancialOfferAccounts = [
  'clubData',
  'payer',
  'treasuryData',
  'treasury',
  'financialRecord',
  'financialOffer',
  'systemProgram',
]

export type AcceptFinancialOfferInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const AcceptFinancialOfferAccounts = [
  'clubData',
  'memberData',
  'payer',
  'seller',
  'financialOffer',
  'treasuryData',
  'treasury',
  'buyerFinancialRecord',
  'sellerFinancialRecord',
  'buyerTokenOwnerRecord',
  'systemProgram',
]

export type ReserveRightsInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ReserveRightsAccounts = [
  'clubData',
  'treasuryData',
  'memberData',
  'payer',
  'systemProgram',
]

export type UpdateAllocationInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const UpdateAllocationAccounts = [
  'clubData',
  'treasuryData',
  'memberData',
  'fundraiseConfig',
  'payer',
  'systemProgram',
]

export type ConfigureWhitelistingsInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ConfigureWhitelistingsAccounts = [
  'payer',
  'whitelistingData',
  'adminsData',
  'systemProgram',
]

export type ConfigureAdminsInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ConfigureAdminsAccounts = ['admins', 'payer', 'systemProgram']

export type MigrateFinancialsInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const MigrateFinancialsAccounts = [
  'clubData',
  'payer',
  'payerMemberData',
  'treasuryData',
  'member',
  'memberData',
  'financialRecord',
  'fundraiseConfig',
  'splGovernance',
  'realm',
  'governingTokenMint',
  'tokenOwnerRecord',
  'systemProgram',
]

export type InsertTransactionInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const InsertTransactionAccounts = [
  'splGovernanceProgram',
  'governance',
  'proposal',
  'proposalMetadata',
  'treasuryData',
  'proposalTransaction',
  'tokenOwnerRecord',
  'communityTokenMint',
  'payer',
  'rent',
  'systemProgram',
]

export type FundraiseInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const FundraiseAccounts = [
  'memberData',
  'treasuryData',
  'treasury',
  'fundraiseConfig',
  'payer',
  'clubData',
  'systemProgram',
]

export type CancelProposalInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CancelProposalAccounts = [
  'clubData',
  'memberData',
  'offer',
  'proposalMetadata',
  'vault',
  'treasury',
  'treasuryData',
  'makerOfferedTokens',
  'payer',
  'escrowProgram',
  'tokenProgram',
  'systemProgram',
]

export type ParsedInstructions =
  | CreateClubInstruction
  | CreateGovernanceInstruction
  | CreateTreasuryInstruction
  | SupportClubInstruction
  | LeaveClubInstruction
  | CreateClubProposalInstruction
  | AllowMemberInstruction
  | UpdateMemberInstruction
  | AcceptMembershipInstruction
  | CancelInvitationInstruction
  | UpdateVoterWeightInstruction
  | ExecuteProposalInstruction
  | DistributeInstruction
  | CastNftVoteInstruction
  | InitializeStakingInstruction
  | StakeTokensInstruction
  | ClaimStakedTokensInstruction
  | UnstakeTokensInstruction
  | FinishStakingInstruction
  | StartStakingInstruction
  | InitializeStakingRewardInstruction
  | UpdateProposalMetadataInstruction
  | CreateFinancialOfferInstruction
  | CancelFinancialOfferInstruction
  | AcceptFinancialOfferInstruction
  | ReserveRightsInstruction
  | UpdateAllocationInstruction
  | ConfigureWhitelistingsInstruction
  | ConfigureAdminsInstruction
  | MigrateFinancialsInstruction
  | InsertTransactionInstruction
  | FundraiseInstruction
  | CancelProposalInstruction
export type ParsedAccounts =
  | ClubData
  | WhitelistingData
  | Admins
  | ClubVault
  | ClubVaultData
  | Withdrawal
  | WithdrawalData
  | FundraiseConfig
  | FinancialRecord
  | FinancialRecordOffer
  | MaxVoterWeightRecord
  | VoterWeightRecord
  | AllowedMemberData
  | NftVoteRecord
  | ProposalMetadata
  | StakeConfig
  | StakeRecord
  | TreasuryData
  | UniverseMetadata

export type ParsedAccountsData =
  | ClubDataArgs
  | WhitelistingDataArgs
  | AdminsArgs
  | ClubVaultArgs
  | ClubVaultDataArgs
  | WithdrawalArgs
  | WithdrawalDataArgs
  | FundraiseConfigArgs
  | FinancialRecordArgs
  | FinancialRecordOfferArgs
  | MaxVoterWeightRecordArgs
  | VoterWeightRecordArgs
  | AllowedMemberDataArgs
  | NftVoteRecordArgs
  | ProposalMetadataArgs
  | StakeConfigArgs
  | StakeRecordArgs
  | TreasuryDataArgs
  | UniverseMetadataArgs

export type ParsedTypes =
  | KycError
  | KycLocation
  | ClubType
  | ClubVoterWeightAction
  | UpdateMembersForRole
  | ClubAction
  | SupportType
  | WhitelistingAction
  | AdminPermission
  | AdminStatus
  | OfferStatus
  | OfferType
  | InitializeType
  | TradedRightType
  | UpdateAllocationAction
  | FundraiseAction
  | GovernanceType
  | VoteThresholdPercentage
  | VoteTipping
  | MemberStatus
  | ProposalType
  | ProposalStatus
  | ProposalAction
  | ProposalUpdateStatus
  | StakePeriodType
  | StakeStatus
  | StakeOption
  | UNQNftRarity
  | TreasuryAction
  | AllowType
  | Rarity
  | VoterWeightAction
  | RoleConfig
  | KycConfig
  | RolesDto
  | UpdateRoleWeight
  | AdminConfig
  | FundraiseFeeConfig
  | OtcFeeConfig
  | Offer
  | CustomAllocation
  | Allocation
  | TradedRight
  | DepositRecord
  | SellPermission
  | UpdateGovernanceConfigInput
  | GovernanceConfig
  | UpdateMemberDto
  | NftStakeRecord
  | IndividualRight
  | ReservedRights
  | GovernanceDto
  | SellPermissionDto
  | TreasuryRoleConfig
  | TreasuryRolesDto
  | SetGovCfgDto
