import { AccountMeta, PublicKey } from '@solana/web3.js'
export * from './accounts/index.js'
export * from './instructions/index.js'
export * from './types/index.js'

import {
  ClubData,
  ClubDataArgs,
  ClubVaultData,
  ClubVaultDataArgs,
  FundraiseConfig,
  FundraiseConfigArgs,
  FinancialRecord,
  FinancialRecordArgs,
  FinancialRecordOffer,
  FinancialRecordOfferArgs,
  FinancialRecordDepricated,
  FinancialRecordDepricatedArgs,
  MagicEdenData,
  MagicEdenDataArgs,
  MaxVoterWeightRecord,
  MaxVoterWeightRecordArgs,
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
  TransferProfitData,
  TransferProfitDataArgs,
  TreasuryData,
  TreasuryDataArgs,
  UniverseMetadata,
  UniverseMetadataArgs,
  VoterWeightRecord,
  VoterWeightRecordArgs,
  WithdrawalData,
  WithdrawalDataArgs,
} from './accounts/index.js'

import {
  RoleConfig,
  KycConfig,
  RolesDto,
  UpdateRoleWeight,
  CustomAllocation,
  Allocation,
  TradedRight,
  DepositRecord,
  Order,
  UpdateMemberDto,
  Offer,
  SellPermissionDto,
  NftStakeRecord,
  GovernanceConfig,
  IndividualRight,
  ReservedRights,
  SellPermission,
  AddSpcInstructionData,
  SetGovCfgDto,
  KycError,
  KycLocation,
  ClubType,
  ClubVoterWeightAction,
  UpdateMembersForRole,
  ClubAction,
  SupportType,
  TradedRightType,
  ProfitType,
  UpdateAllocationAction,
  MagicEdenInstruction,
  MemberStatus,
  OfferStatus,
  OfferType,
  ProposalAction,
  ProposalType,
  ProposalStatus,
  StakePeriodType,
  StakeStatus,
  StakeOption,
  UNQNftRarity,
  VoteThresholdPercentage,
  VoteTipping,
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
  'ogRealm',
  'realmAuthority',
  'communityTokenHoldingAddress',
  'realmConfig',
  'tokenOwnerRecord',
  'splGovernanceProgram',
  'voterWeightProgram',
  'communityTokenMint',
  'clubData',
  'memberData',
  'payer',
  'tokenProgram',
  'rent',
  'systemProgram',
]

export type CreateClubVaultInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateClubVaultAccounts = [
  'clubData',
  'memberData',
  'splGovernanceProgram',
  'payer',
  'vaultData',
  'vault',
  'treasury',
  'systemProgram',
]

export type CreateTreasuryGovernanceInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateTreasuryGovernanceAccounts = [
  'splGovernanceProgram',
  'realm',
  'realmConfig',
  'realmAuthority',
  'payer',
  'tokenOwnerRecord',
  'governance',
  'voterWeightRecord',
  'treasury',
  'profit',
  'treasuryData',
  'memberData',
  'clubData',
  'tokenProgram',
  'systemProgram',
  'rent',
]

export type AddSellPermissionInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const AddSellPermissionAccounts = [
  'splGovernanceProgram',
  'realm',
  'realmConfig',
  'realmAuthority',
  'payer',
  'tokenOwnerRecord',
  'governance',
  'governedSpc',
  'voterWeightRecord',
  'treasury',
  'treasuryData',
  'memberData',
  'clubData',
  'tokenProgram',
  'systemProgram',
]

export type SupportClubInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const SupportClubAccounts = [
  'realm',
  'memberData',
  'fundraiseConfig',
  'financialRecord',
  'treasuryData',
  'clubData',
  'treasury',
  'payer',
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
  'proposalTransactionAddress',
  'tokenOwnerRecord',
  'splGovernanceProgram',
  'communityTokenMint',
  'payer',
  'voterWeightRecord',
  'offer',
  'makerOfferedTokens',
  'escrowedWantedTokens',
  'makerWantedAuthority',
  'makerOfferedAuthority',
  'treasuryData',
  'proposalMetadata',
  'clubData',
  'wantedTokensMint',
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
  'memberData',
  'payer',
  'realm',
  'communityTokenMint',
  'splGovernanceProgram',
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

export type CreateFundraiseInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateFundraiseAccounts = [
  'memberData',
  'treasuryData',
  'treasury',
  'fundraiseConfig',
  'payer',
  'clubData',
  'systemProgram',
]

export type FinishFundraiseInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const FinishFundraiseAccounts = [
  'memberData',
  'treasuryData',
  'treasury',
  'fundraiseConfig',
  'clubData',
  'payer',
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
  'maxVoterWeightRecord',
  'proposalMetadata',
  'proposal',
  'systemProgram',
]

export type ExecuteTransactionInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ExecuteTransactionAccounts = [
  'governance',
  'realm',
  'proposal',
  'proposalTransaction',
  'splGovernanceProgram',
  'payer',
  'proposalMetadata',
  'offer',
  'makerOfferedTokens',
  'escrowedWantedTokenAccount',
  'maker',
  'escrowedOfferedTokens',
  'offeredTokensMint',
  'wantedTokensMint',
  'escrowProgram',
  'treasury',
  'clubData',
  'tokenProgram',
  'systemProgram',
  'rent',
]

export type CancelEscrowInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CancelEscrowAccounts = [
  'realm',
  'payer',
  'memberData',
  'offer',
  'makerOfferedTokens',
  'maker',
  'escrowedWantedTokens',
  'escrowedOfferedTokens',
  'escrowProgram',
  'treasury',
  'clubData',
  'proposal',
  'tokenProgram',
  'systemProgram',
]

export type CreateProposalMetadataInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateProposalMetadataAccounts = [
  'realm',
  'clubData',
  'proposal',
  'proposalMetadata',
  'memberData',
  'governance',
  'payer',
  'treasuryData',
  'systemProgram',
]

export type CreateWithdrawalProposalInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateWithdrawalProposalAccounts = [
  'governance',
  'realm',
  'realmConfig',
  'proposal',
  'proposalTransactionAddress',
  'tokenOwnerRecord',
  'splGovernanceProgram',
  'communityTokenMint',
  'payer',
  'voterWeightRecord',
  'treasury',
  'treasuryData',
  'treasuryToken',
  'withdrawal',
  'withdrawalData',
  'withdrawalMint',
  'proposalMetadata',
  'clubData',
  'systemProgram',
  'rent',
  'tokenProgram',
]

export type ExecuteWithdrawalTransactionInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ExecuteWithdrawalTransactionAccounts = [
  'governance',
  'realm',
  'realmConfig',
  'proposal',
  'proposalMetadata',
  'splGovernanceProgram',
  'payer',
  'treasury',
  'treasuryToken',
  'treasuryData',
  'withdrawal',
  'withdrawalData',
  'withdrawalMint',
  'proposalTransaction',
  'transferProfitData',
  'clubData',
  'escrowProgram',
  'systemProgram',
  'tokenProgram',
  'rent',
]

export type UpdateVoterWeightForGovernanceInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const UpdateVoterWeightForGovernanceAccounts = [
  'realm',
  'voterWeightRecord',
  'memberData',
  'clubData',
  'payer',
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
  'ledgerEntry',
  'profit',
  'vault',
  'profitToken',
  'escrowedWantedToken',
  'makerWantedToken',
  'tokenProgram',
  'systemProgram',
  'rent',
]

export type TransferProfitInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const TransferProfitAccounts = [
  'clubData',
  'payer',
  'treasury',
  'treasuryToken',
  'treasuryData',
  'profit',
  'transferProfit',
  'proposal',
  'profitToken',
  'memberData',
  'tokenProgram',
  'systemProgram',
]

export type CreateWithdrawalGovernanceInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateWithdrawalGovernanceAccounts = [
  'splGovernanceProgram',
  'realm',
  'realmConfig',
  'realmAuthority',
  'payer',
  'tokenOwnerRecord',
  'governance',
  'voterWeightRecord',
  'treasury',
  'treasuryData',
  'memberData',
  'clubData',
  'vault',
  'tokenProgram',
  'systemProgram',
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
  'clubData',
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

export type UpdateProposalDescriptionInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const UpdateProposalDescriptionAccounts = [
  'proposal',
  'proposalMetadata',
  'payer',
]

export type CreateMeBuyNowProposalInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateMeBuyNowProposalAccounts = [
  'governance',
  'realm',
  'realmConfig',
  'proposal',
  'proposalTransactionAddress',
  'tokenOwnerRecord',
  'splGovernanceProgram',
  'communityTokenMint',
  'payer',
  'voterWeightRecord',
  'treasuryData',
  'proposalMetadata',
  'magicEdenData',
  'systemProgram',
  'rent',
]

export type CreateMeSellProposalInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateMeSellProposalAccounts = [
  'governance',
  'realm',
  'realmConfig',
  'proposal',
  'proposalTransactionAddress',
  'tokenOwnerRecord',
  'splGovernanceProgram',
  'communityTokenMint',
  'payer',
  'voterWeightRecord',
  'clubData',
  'treasuryData',
  'treasury',
  'vault',
  'proposalMetadata',
  'magicEdenData',
  'systemProgram',
  'rent',
]

export type ExecuteMeBuyNowTransactionInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ExecuteMeBuyNowTransactionAccounts = [
  'governance',
  'realm',
  'proposal',
  'proposalTransaction',
  'splGovernanceProgram',
  'payer',
  'escrowProgram',
  'proposalMetadata',
  'clubData',
  'treasury',
  'offer',
  'unqEscrowTokens',
  'magicEdenEscrowedTokenMint',
  'tokenProgram',
  'systemProgram',
  'rent',
]

export type ExecuteMeSellTransactionInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ExecuteMeSellTransactionAccounts = [
  'governance',
  'realm',
  'proposal',
  'proposalTransaction',
  'splGovernanceProgram',
  'payer',
  'escrowProgram',
  'clubData',
  'treasury',
  'proposalMetadata',
  'vault',
  'offer',
  'nativeMint',
  'makerWantedToken',
  'unqEscrowTokens',
  'magicEdenEscrowedTokenMint',
  'tokenProgram',
  'systemProgram',
  'rent',
]

export type ExecuteMeBuyNowInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ExecuteMeBuyNowAccounts = [
  'payer',
  'clubData',
  'treasury',
  'treasuryData',
  'escrowProgram',
  'offer',
  'magicEdenAccountsHolder',
  'sellersWallet',
  'magicEdenExerchina',
  'magicEdenEscrowedToken',
  'magicEdenEscrowedTokenMint',
  'magicEdenEscrowedTokenMetadata',
  'magicEdenState1',
  'escrowedWantedToken',
  'autExer',
  'e8cExer',
  'expoitExer',
  'magicEdenState2',
  'magicEdenState3',
  'onebwExer',
  'tokenProgram',
  'associatedTokenProgram',
  'systemProgram',
  'rent',
  'magicEden',
  'unqEscrowToken',
  'account13',
  'account15',
]

export type ExecuteMeSellInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ExecuteMeSellAccounts = [
  'payer',
  'clubData',
  'treasury',
  'treasuryData',
  'escrowProgram',
  'vault',
  'offer',
  'meState0',
  'offeredNftToken',
  'nftMint',
  'nftMetadata',
  'magicEdenExerchina',
  'autExer',
  'e8cExer',
  'magicEdenState1',
  'magicEdenState2',
  'onebwExer',
  'tokenProgram',
  'associatedTokenProgram',
  'systemProgram',
  'rent',
  'magicEden',
]

export type ExecuteMeSellCancelInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ExecuteMeSellCancelAccounts = [
  'payer',
  'clubData',
  'treasury',
  'vault',
  'offer',
  'offeredNftToken',
  'nftMint',
  'escrowProgram',
  'magicEdenExerchina',
  'autExer',
  'e8cExer',
  'magicEdenState1',
  'magicEdenState2',
  'onebwExer',
  'tokenProgram',
  'systemProgram',
  'magicEden',
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
  'systemProgram',
]

export type CreateTransferProposalInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateTransferProposalAccounts = [
  'governance',
  'realm',
  'realmConfig',
  'proposal',
  'proposalTransactionAddress',
  'tokenOwnerRecord',
  'splGovernanceProgram',
  'communityTokenMint',
  'payer',
  'voterWeightRecord',
  'treasury',
  'treasuryData',
  'proposalMetadata',
  'clubData',
  'offer',
  'destination',
  'treasuryToken',
  'tokenProgram',
  'systemProgram',
  'rent',
]

export type ExecuteTransferProposalInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ExecuteTransferProposalAccounts = [
  'governance',
  'realm',
  'realmConfig',
  'proposal',
  'proposalMetadata',
  'splGovernanceProgram',
  'payer',
  'treasury',
  'treasuryToken',
  'treasuryData',
  'proposalTransaction',
  'clubData',
  'offer',
  'tokenLedger',
  'ledgerEntry',
  'destination',
  'escrowProgram',
  'tokenProgram',
  'systemProgram',
  'rent',
]

export type CreateTransferGovernanceInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateTransferGovernanceAccounts = [
  'splGovernanceProgram',
  'realm',
  'realmConfig',
  'realmAuthority',
  'payer',
  'tokenOwnerRecord',
  'governance',
  'voterWeightRecord',
  'treasury',
  'treasuryData',
  'memberData',
  'clubData',
  'governedAccount',
  'tokenProgram',
  'systemProgram',
]

export type UpdateGovernanceConfigInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const UpdateGovernanceConfigAccounts = [
  'realm',
  'governance',
  'payer',
  'clubData',
  'memberData',
  'treasury',
  'treasuryData',
  'realmConfig',
  'proposal',
  'tokenOwnerRecord',
  'proposalMetadata',
  'proposalTransaction',
  'communityTokenMint',
  'voterWeightRecord',
  'splGovernance',
  'systemProgram',
  'rent',
]

export type ExecuteUpdateGovernanceConfigInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ExecuteUpdateGovernanceConfigAccounts = [
  'clubData',
  'realm',
  'governance',
  'proposal',
  'proposalMetadata',
  'treasury',
  'treasuryData',
  'proposalTransaction',
  'splGovernanceProgram',
]

export type CreateUpdateRoleProposalInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateUpdateRoleProposalAccounts = [
  'realm',
  'clubData',
  'proposal',
  'proposalTransaction',
  'treasury',
  'treasuryData',
  'memberData',
  'communityMint',
  'tokenOwnerRecord',
  'payer',
  'voterWeightRecord',
  'governance',
  'realmConfig',
  'proposalMetadata',
  'escrowProgram',
  'splGovernanceProgram',
  'systemProgram',
  'rent',
]

export type ExecuteUpdateRoleInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ExecuteUpdateRoleAccounts = [
  'clubData',
  'realm',
  'proposal',
  'treasuryData',
  'proposalTransaction',
  'proposalMetadata',
  'governance',
  'escrowProgram',
  'splGovernanceProgram',
]

export type CreateChangeClubConfigGovernanceInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateChangeClubConfigGovernanceAccounts = [
  'realm',
  'clubData',
  'payer',
  'memberData',
  'treasury',
  'treasuryData',
  'governance',
  'realmConfig',
  'realmAuthority',
  'voterWeightRecord',
  'tokenOwnerRecord',
  'goverenedAccount',
  'splGovernanceProgram',
  'systemProgram',
  'tokenProgram',
]

export type CreateSolseaProposalInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateSolseaProposalAccounts = [
  'realm',
  'proposal',
  'proposalTransaction',
  'offer',
  'escrowWantedToken',
  'realmConfig',
  'makerWantedToken',
  'offeredTokenMint',
  'wantedTokenMint',
  'governance',
  'clubData',
  'proposalMetadata',
  'payer',
  'memberData',
  'communityTokenMint',
  'treasury',
  'treasuryData',
  'tokenOwnerRecord',
  'escrowProgram',
  'voterWeightRecord',
  'splGovernance',
  'systemProgram',
  'tokenProgram',
  'rent',
]

export type ExecuteSolseaTransactionInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ExecuteSolseaTransactionAccounts = [
  'clubData',
  'offer',
  'solseaEscrow',
  'authorityAccount',
  'solseaProfitAccount',
  'solseaEscrowTokens',
  'proposalMetadata',
  'treasury',
  'maker',
  'proposal',
  'proposalTransaction',
  'memberData',
  'solseaProgram',
  'wantedTokenMint',
  'offeredTokenMint',
  'escrowWantedToken',
  'makerWantedToken',
  'makerOfferedToken',
  'payer',
  'splGovernance',
  'governance',
  'profitAccount',
  'escrowProgram',
  'systemProgram',
  'tokenProgram',
  'rent',
]

export type CancelSolseaOfferInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CancelSolseaOfferAccounts = [
  'clubData',
  'solseaEscrow',
  'solseaEscrowTokens',
  'offeredTokenMint',
  'solseaAuthority',
  'proposal',
  'treasury',
  'offer',
  'vault',
  'makerOfferedTokens',
  'payer',
  'memberData',
  'escrowProgram',
  'solseaProgram',
  'systemProgram',
  'tokenProgram',
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

export type CreateAddSellPermissionProposalInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const CreateAddSellPermissionProposalAccounts = [
  'governance',
  'realm',
  'governanceAuthority',
  'realmConfig',
  'proposal',
  'proposalTransactionAddress',
  'tokenOwnerRecord',
  'splGovernanceProgram',
  'communityTokenMint',
  'payer',
  'voterWeightRecord',
  'treasuryData',
  'proposalMetadata',
  'clubData',
  'rent',
  'systemProgram',
]

export type ExecuteSellPermissionTransactionInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const ExecuteSellPermissionTransactionAccounts = [
  'governance',
  'realm',
  'realmConfig',
  'proposal',
  'proposalTransaction',
  'splGovernanceProgram',
  'tokenOwnerRecord',
  'voterWeightRecord',
  'payer',
  'proposalMetadata',
  'clubData',
  'treasuryData',
  'memberData',
  'clubProgram',
  'spcGovernance',
  'spcGovernedAccount',
  'systemProgram',
]

export type AddStakeConfigToStakeRecordInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const AddStakeConfigToStakeRecordAccounts = [
  'payer',
  'stakeRecord',
  'stakeConfig',
  'systemProgram',
]

export type AddCanLeaveActionInstruction = {
  programId: PublicKey
  keys: AccountMeta[]
  data: Buffer
}

export const AddCanLeaveActionAccounts = ['payer', 'clubData', 'systemProgram']

export type ParsedInstructions =
  | CreateClubInstruction
  | CreateClubVaultInstruction
  | CreateTreasuryGovernanceInstruction
  | AddSellPermissionInstruction
  | SupportClubInstruction
  | LeaveClubInstruction
  | CreateClubProposalInstruction
  | AllowMemberInstruction
  | UpdateMemberInstruction
  | AcceptMembershipInstruction
  | CancelInvitationInstruction
  | CreateFundraiseInstruction
  | FinishFundraiseInstruction
  | UpdateVoterWeightInstruction
  | ExecuteTransactionInstruction
  | CancelEscrowInstruction
  | CreateProposalMetadataInstruction
  | CreateWithdrawalProposalInstruction
  | ExecuteWithdrawalTransactionInstruction
  | UpdateVoterWeightForGovernanceInstruction
  | DistributeInstruction
  | TransferProfitInstruction
  | CreateWithdrawalGovernanceInstruction
  | CastNftVoteInstruction
  | InitializeStakingInstruction
  | StakeTokensInstruction
  | ClaimStakedTokensInstruction
  | UnstakeTokensInstruction
  | FinishStakingInstruction
  | StartStakingInstruction
  | InitializeStakingRewardInstruction
  | UpdateProposalDescriptionInstruction
  | CreateMeBuyNowProposalInstruction
  | CreateMeSellProposalInstruction
  | ExecuteMeBuyNowTransactionInstruction
  | ExecuteMeSellTransactionInstruction
  | ExecuteMeBuyNowInstruction
  | ExecuteMeSellInstruction
  | ExecuteMeSellCancelInstruction
  | CreateFinancialOfferInstruction
  | CancelFinancialOfferInstruction
  | AcceptFinancialOfferInstruction
  | CreateTransferProposalInstruction
  | ExecuteTransferProposalInstruction
  | CreateTransferGovernanceInstruction
  | UpdateGovernanceConfigInstruction
  | ExecuteUpdateGovernanceConfigInstruction
  | CreateUpdateRoleProposalInstruction
  | ExecuteUpdateRoleInstruction
  | CreateChangeClubConfigGovernanceInstruction
  | CreateSolseaProposalInstruction
  | ExecuteSolseaTransactionInstruction
  | CancelSolseaOfferInstruction
  | ReserveRightsInstruction
  | UpdateAllocationInstruction
  | CreateAddSellPermissionProposalInstruction
  | ExecuteSellPermissionTransactionInstruction
  | AddStakeConfigToStakeRecordInstruction
  | AddCanLeaveActionInstruction
export type ParsedAccounts =
  | ClubData
  | ClubVaultData
  | FundraiseConfig
  | FinancialRecord
  | FinancialRecordOffer
  | FinancialRecordDepricated
  | MagicEdenData
  | MaxVoterWeightRecord
  | AllowedMemberData
  | NftVoteRecord
  | ProposalMetadata
  | StakeConfig
  | StakeRecord
  | TransferProfitData
  | TreasuryData
  | UniverseMetadata
  | VoterWeightRecord
  | WithdrawalData

export type ParsedAccountsData =
  | ClubDataArgs
  | ClubVaultDataArgs
  | FundraiseConfigArgs
  | FinancialRecordArgs
  | FinancialRecordOfferArgs
  | FinancialRecordDepricatedArgs
  | MagicEdenDataArgs
  | MaxVoterWeightRecordArgs
  | AllowedMemberDataArgs
  | NftVoteRecordArgs
  | ProposalMetadataArgs
  | StakeConfigArgs
  | StakeRecordArgs
  | TransferProfitDataArgs
  | TreasuryDataArgs
  | UniverseMetadataArgs
  | VoterWeightRecordArgs
  | WithdrawalDataArgs

export type ParsedTypes =
  | KycError
  | KycLocation
  | ClubType
  | ClubVoterWeightAction
  | UpdateMembersForRole
  | ClubAction
  | SupportType
  | TradedRightType
  | ProfitType
  | UpdateAllocationAction
  | MagicEdenInstruction
  | MemberStatus
  | OfferStatus
  | OfferType
  | ProposalAction
  | ProposalType
  | ProposalStatus
  | StakePeriodType
  | StakeStatus
  | StakeOption
  | UNQNftRarity
  | VoteThresholdPercentage
  | VoteTipping
  | Rarity
  | VoterWeightAction
  | RoleConfig
  | KycConfig
  | RolesDto
  | UpdateRoleWeight
  | CustomAllocation
  | Allocation
  | TradedRight
  | DepositRecord
  | Order
  | UpdateMemberDto
  | Offer
  | SellPermissionDto
  | NftStakeRecord
  | GovernanceConfig
  | IndividualRight
  | ReservedRights
  | SellPermission
  | AddSpcInstructionData
  | SetGovCfgDto
