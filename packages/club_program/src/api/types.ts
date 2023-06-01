import { GraphQLBoolean, GraphQLInt } from 'graphql'
import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLEnumType,
  GraphQLNonNull,
  GraphQLList,
  GraphQLInterfaceType,
  GraphQLUnionType,
} from 'graphql'
import { GraphQLBigNumber, GraphQLLong, GraphQLJSON } from '@aleph-indexer/core'
import { InstructionType } from '../utils/layouts/index.js'

// ------------------- TYPES ---------------------------

export const KycError = new GraphQLEnumType({
  name: 'KycError',
  values: {
    KycError: { value: 'KycError' },
    IncorrectGatekeeper: { value: 'IncorrectGatekeeper' },
    InvalidOwner: { value: 'InvalidOwner' },
    InvalidToken: { value: 'InvalidToken' },
    InvalidSessionToken: { value: 'InvalidSessionToken' },
    TokenRevoked: { value: 'TokenRevoked' },
    ExpectedRevokedToken: { value: 'ExpectedRevokedToken' },
    InvalidStateChange: { value: 'InvalidStateChange' },
    IncorrectProgramId: { value: 'IncorrectProgramId' },
    TokenExpired: { value: 'TokenExpired' },
    InvalidGatekeeperAccount: { value: 'InvalidGatekeeperAccount' },
  },
})

export const KycLocation = new GraphQLEnumType({
  name: 'KycLocation',
  values: {
    All: { value: 'All' },
    OnlyUS: { value: 'OnlyUS' },
    NonUS: { value: 'NonUS' },
  },
})

export const ClubType = new GraphQLEnumType({
  name: 'ClubType',
  values: {
    TokenProportional: { value: 'TokenProportional' },
    TokenEqual: { value: 'TokenEqual' },
    RoleBased: { value: 'RoleBased' },
    NftBased: { value: 'NftBased' },
  },
})

export const ClubVoterWeightAction = new GraphQLEnumType({
  name: 'ClubVoterWeightAction',
  values: {
    CastVote: { value: 'CastVote' },
    CommentProposal: { value: 'CommentProposal' },
    CreateGovernance: { value: 'CreateGovernance' },
    CreateProposal: { value: 'CreateProposal' },
    SignOffProposal: { value: 'SignOffProposal' },
    CancelProposal: { value: 'CancelProposal' },
  },
})

export const UpdateMembersForRole = new GraphQLEnumType({
  name: 'UpdateMembersForRole',
  values: {
    Add: { value: 'Add' },
    Remove: { value: 'Remove' },
  },
})

export const ClubAction = new GraphQLEnumType({
  name: 'ClubAction',
  values: {
    CastVote: { value: 'CastVote' },
    CreateDiscussionProposal: { value: 'CreateDiscussionProposal' },
    CreateTreasuryGovernance: { value: 'CreateTreasuryGovernance' },
    CreateWithdrawalGovernance: { value: 'CreateWithdrawalGovernance' },
    CreateTransferGovernance: { value: 'CreateTransferGovernance' },
    CreateP2PProposal: { value: 'CreateP2PProposal' },
    CreateWithdrawalProposal: { value: 'CreateWithdrawalProposal' },
    CreateTransferProposal: { value: 'CreateTransferProposal' },
    CreateMeProposal: { value: 'CreateMeProposal' },
    SignOffProposal: { value: 'SignOffProposal' },
    CancelProposal: { value: 'CancelProposal' },
    AllowMember: { value: 'AllowMember' },
    CancelP2POffer: { value: 'CancelP2POffer' },
    CancelInvitation: { value: 'CancelInvitation' },
    Fundraise: { value: 'Fundraise' },
    Distribute: { value: 'Distribute' },
    SupportClub: { value: 'SupportClub' },
    UpdateMember: { value: 'UpdateMember' },
    InitializeStaking: { value: 'InitializeStaking' },
    StakeTokens: { value: 'StakeTokens' },
    CreateFinancialOffer: { value: 'CreateFinancialOffer' },
    AcceptFinancialOffer: { value: 'AcceptFinancialOffer' },
    CreateSolseaProposal: { value: 'CreateSolseaProposal' },
    CreateChangeClubConfigGovernance: {
      value: 'CreateChangeClubConfigGovernance',
    },
    UpdateGovernanceConfig: { value: 'UpdateGovernanceConfig' },
    UpdateRoleConfig: { value: 'UpdateRoleConfig' },
    AddReservedRights: { value: 'AddReservedRights' },
    UpdateAllocation: { value: 'UpdateAllocation' },
    AddReservedRightsToSelf: { value: 'AddReservedRightsToSelf' },
    CanLeave: { value: 'CanLeave' },
  },
})

export const SupportType = new GraphQLEnumType({
  name: 'SupportType',
  values: {
    Deposit: { value: 'Deposit' },
    Withdrawal: { value: 'Withdrawal' },
  },
})

export const TradedRightType = new GraphQLEnumType({
  name: 'TradedRightType',
  values: {
    Buy: { value: 'Buy' },
    Sell: { value: 'Sell' },
    BuyReserved: { value: 'BuyReserved' },
    SellReserved: { value: 'SellReserved' },
  },
})

export const ProfitType = new GraphQLEnumType({
  name: 'ProfitType',
  values: {
    Gain: { value: 'Gain' },
    Loss: { value: 'Loss' },
  },
})

export const UpdateAllocationAction = new GraphQLEnumType({
  name: 'UpdateAllocationAction',
  values: {
    UpdateCustomAllocation: { value: 'UpdateCustomAllocation' },
    RemoveCustomAllocation: { value: 'RemoveCustomAllocation' },
    UpdateEqual: { value: 'UpdateEqual' },
  },
})

export const MagicEdenInstruction = new GraphQLEnumType({
  name: 'MagicEdenInstruction',
  values: {
    BuyNow: { value: 'BuyNow' },
    Sell: { value: 'Sell' },
  },
})

export const MemberStatus = new GraphQLEnumType({
  name: 'MemberStatus',
  values: {
    UNINVITED: { value: 'UNINVITED' },
    PENDING: { value: 'PENDING' },
    ACCEPTED: { value: 'ACCEPTED' },
    REJECTED: { value: 'REJECTED' },
    CANCELED: { value: 'CANCELED' },
  },
})

export const OfferStatus = new GraphQLEnumType({
  name: 'OfferStatus',
  values: {
    Initialised: { value: 'Initialised' },
    Accepted: { value: 'Accepted' },
    Canceled: { value: 'Canceled' },
    PendingBuyNowExecutionOnMagicEden: {
      value: 'PendingBuyNowExecutionOnMagicEden',
    },
    ExecutedBuyNowOnMagicEden: { value: 'ExecutedBuyNowOnMagicEden' },
    CanceledOnMagic: { value: 'CanceledOnMagic' },
    PendingSellExecutionOnMagicEden: {
      value: 'PendingSellExecutionOnMagicEden',
    },
    ExecutedSellOnMagicEden: { value: 'ExecutedSellOnMagicEden' },
    FundsTransfered: { value: 'FundsTransfered' },
    ListedOnSolsea: { value: 'ListedOnSolsea' },
    ExecutedBuyNowOnSolsea: { value: 'ExecutedBuyNowOnSolsea' },
    CanceledOnSolsea: { value: 'CanceledOnSolsea' },
  },
})

export const OfferType = new GraphQLEnumType({
  name: 'OfferType',
  values: {
    Buy: { value: 'Buy' },
    Sell: { value: 'Sell' },
  },
})

export const ProposalAction = new GraphQLEnumType({
  name: 'ProposalAction',
  values: {
    BuyNFT: { value: 'BuyNFT' },
    SellNFT: { value: 'SellNFT' },
  },
})

export const ProposalType = new GraphQLEnumType({
  name: 'ProposalType',
  values: {
    BuyP2P: { value: 'BuyP2P' },
    SellP2P: { value: 'SellP2P' },
    BuyNowMagicEden: { value: 'BuyNowMagicEden' },
    SellMagicEden: { value: 'SellMagicEden' },
    TransferFunds: { value: 'TransferFunds' },
    Discussion: { value: 'Discussion' },
    Withdrawal: { value: 'Withdrawal' },
    SellSolsea: { value: 'SellSolsea' },
    BuySolsea: { value: 'BuySolsea' },
    UpdateGovernanceConfig: { value: 'UpdateGovernanceConfig' },
    UpdateRoleConfig: { value: 'UpdateRoleConfig' },
    AddSellPermission: { value: 'AddSellPermission' },
  },
})

export const ProposalStatus = new GraphQLEnumType({
  name: 'ProposalStatus',
  values: {
    Pending: { value: 'Pending' },
    CreatedBuyP2P: { value: 'CreatedBuyP2P' },
    CreatedSellP2P: { value: 'CreatedSellP2P' },
    ExecutedBuyP2P: { value: 'ExecutedBuyP2P' },
    ExecutedSellP2P: { value: 'ExecutedSellP2P' },
    CreatedBuyNowMagicEden: { value: 'CreatedBuyNowMagicEden' },
    ExecutedBuyNowMagicEden: { value: 'ExecutedBuyNowMagicEden' },
    FinishedBuyNowMagicEden: { value: 'FinishedBuyNowMagicEden' },
    CreatedSellMagicEden: { value: 'CreatedSellMagicEden' },
    ExecutedSellMagicEden: { value: 'ExecutedSellMagicEden' },
    FinishedSellMagicEden: { value: 'FinishedSellMagicEden' },
    CreatedTransferFunds: { value: 'CreatedTransferFunds' },
    ExecutedTransferFunds: { value: 'ExecutedTransferFunds' },
    CreatedDiscussion: { value: 'CreatedDiscussion' },
    CreatedWithdrawal: { value: 'CreatedWithdrawal' },
    ExecutedWithdrawal: { value: 'ExecutedWithdrawal' },
    CanceledByOwner: { value: 'CanceledByOwner' },
    CreatedUpdateGovernanceConfig: { value: 'CreatedUpdateGovernanceConfig' },
    ExecutedUpdateGovernanceConfig: { value: 'ExecutedUpdateGovernanceConfig' },
    CreatedUpdateRoleConfig: { value: 'CreatedUpdateRoleConfig' },
    ExecutedUpdateRoleConfig: { value: 'ExecutedUpdateRoleConfig' },
    ExecutedSolseaBuy: { value: 'ExecutedSolseaBuy' },
    ExecutedSolseaSell: { value: 'ExecutedSolseaSell' },
  },
})

export const StakePeriodType = new GraphQLEnumType({
  name: 'StakePeriodType',
  values: {
    OneMonth: { value: 'OneMonth' },
    ThreeMonths: { value: 'ThreeMonths' },
    SixMonths: { value: 'SixMonths' },
    TwelveMonths: { value: 'TwelveMonths' },
  },
})

export const StakeStatus = new GraphQLEnumType({
  name: 'StakeStatus',
  values: {
    Funding: { value: 'Funding' },
    InProgress: { value: 'InProgress' },
    Finished: { value: 'Finished' },
    Canceled: { value: 'Canceled' },
  },
})

export const StakeOption = new GraphQLEnumType({
  name: 'StakeOption',
  values: {
    FT: { value: 'FT' },
    NFT: { value: 'NFT' },
  },
})

export const UNQNftRarity = new GraphQLEnumType({
  name: 'UNQNftRarity',
  values: {
    Common: { value: 'Common' },
    Rare: { value: 'Rare' },
    Epic: { value: 'Epic' },
    Legendary: { value: 'Legendary' },
  },
})

export const VoteThresholdPercentage = new GraphQLEnumType({
  name: 'VoteThresholdPercentage',
  values: {
    YesVote: { value: 'YesVote' },
    Quorum: { value: 'Quorum' },
  },
})

export const VoteTipping = new GraphQLEnumType({
  name: 'VoteTipping',
  values: {
    Strict: { value: 'Strict' },
    Early: { value: 'Early' },
    Disabled: { value: 'Disabled' },
  },
})

export const Rarity = new GraphQLEnumType({
  name: 'Rarity',
  values: {
    Common: { value: 'Common' },
    Rare: { value: 'Rare' },
    Epic: { value: 'Epic' },
    Legendary: { value: 'Legendary' },
  },
})

export const VoterWeightAction = new GraphQLEnumType({
  name: 'VoterWeightAction',
  values: {
    CastVote: { value: 'CastVote' },
    CommentProposal: { value: 'CommentProposal' },
    CreateGovernance: { value: 'CreateGovernance' },
    CreateProposal: { value: 'CreateProposal' },
    SignOffProposal: { value: 'SignOffProposal' },
  },
})

export const RoleConfig = new GraphQLObjectType({
  name: 'RoleConfig',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    roleWeight: { type: new GraphQLNonNull(GraphQLBigNumber) },
    clubActions: { type: new GraphQLNonNull(ClubAction) },
    membersCount: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const KycConfig = new GraphQLObjectType({
  name: 'KycConfig',
  fields: {
    required: { type: new GraphQLNonNull(GraphQLBoolean) },
    location: { type: new GraphQLNonNull(KycLocation) },
  },
})

export const RolesDto = new GraphQLObjectType({
  name: 'RolesDto',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    roleWeight: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const UpdateRoleWeight = new GraphQLObjectType({
  name: 'UpdateRoleWeight',
  fields: {
    role: { type: new GraphQLNonNull(GraphQLString) },
    currentWeight: { type: new GraphQLNonNull(GraphQLBigNumber) },
    updateWeight: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const CustomAllocation = new GraphQLObjectType({
  name: 'CustomAllocation',
  fields: {
    authority: { type: new GraphQLNonNull(GraphQLString) },
    amount: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const Allocation = new GraphQLObjectType({
  name: 'Allocation',
  fields: {
    equal: { type: new GraphQLNonNull(GraphQLBigNumber) },
    custom: { type: new GraphQLNonNull(CustomAllocation) },
  },
})

export const TradedRight = new GraphQLObjectType({
  name: 'TradedRight',
  fields: {
    amount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    timestamp: { type: new GraphQLNonNull(GraphQLBigNumber) },
    tradeType: { type: new GraphQLNonNull(TradedRightType) },
  },
})

export const DepositRecord = new GraphQLObjectType({
  name: 'DepositRecord',
  fields: {
    accumulatedAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    fundraiseIndex: { type: new GraphQLNonNull(GraphQLInt) },
    depositedAt: { type: new GraphQLNonNull(GraphQLBigNumber) },
    currentFundraiseDeposit: { type: new GraphQLNonNull(GraphQLBigNumber) },
    tradedRight: { type: new GraphQLNonNull(TradedRight) },
  },
})

export const Order = new GraphQLObjectType({
  name: 'Order',
  fields: {
    amount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    mint: { type: new GraphQLNonNull(GraphQLString) },
    slot: { type: new GraphQLNonNull(GraphQLBigNumber) },
    createdAt: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const UpdateMemberDto = new GraphQLObjectType({
  name: 'UpdateMemberDto',
  fields: {
    isMember: { type: new GraphQLNonNull(GraphQLBoolean) },
    status: { type: new GraphQLNonNull(GraphQLInt) },
    role: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const Offer = new GraphQLObjectType({
  name: 'Offer',
  fields: {
    discriminator: { type: new GraphQLNonNull(GraphQLString) },
    maker: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    offeredAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    offeredTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    wantedAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    wantedTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    tokenLedgerMint: { type: new GraphQLNonNull(GraphQLString) },
    makerWantedToken: { type: new GraphQLNonNull(GraphQLString) },
    escrowedWantedToken: { type: new GraphQLNonNull(GraphQLString) },
    status: { type: new GraphQLNonNull(OfferStatus) },
    offerType: { type: new GraphQLNonNull(OfferType) },
    dedicatedTaker: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    sellerFeeBps: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const SellPermissionDto = new GraphQLObjectType({
  name: 'SellPermissionDto',
  fields: {
    from: { type: new GraphQLNonNull(GraphQLBigNumber) },
    to: { type: new GraphQLNonNull(GraphQLBigNumber) },
    quorumMinimum: { type: new GraphQLNonNull(GraphQLInt) },
    decimal: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const NftStakeRecord = new GraphQLObjectType({
  name: 'NftStakeRecord',
  fields: {
    nftOwner: { type: new GraphQLNonNull(GraphQLString) },
    tokenAccount: { type: new GraphQLNonNull(GraphQLString) },
    tokenMint: { type: new GraphQLNonNull(GraphQLString) },
    stakedNft: { type: new GraphQLNonNull(GraphQLString) },
    rarity: { type: new GraphQLNonNull(Rarity) },
    hasClaimed: { type: new GraphQLNonNull(GraphQLBoolean) },
    unstakePeriodEnd: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const GovernanceConfig = new GraphQLObjectType({
  name: 'GovernanceConfig',
  fields: {
    voteThresholdPercentage: {
      type: new GraphQLNonNull(VoteThresholdPercentage),
    },
    minCommunityWeightToCreateProposal: {
      type: new GraphQLNonNull(GraphQLBigNumber),
    },
    minTransactionHoldUpTime: { type: new GraphQLNonNull(GraphQLInt) },
    maxVotingTime: { type: new GraphQLNonNull(GraphQLInt) },
    voteTipping: { type: new GraphQLNonNull(VoteTipping) },
    proposalCoolOffTime: { type: new GraphQLNonNull(GraphQLInt) },
    minCouncilWeightToCreateProposal: {
      type: new GraphQLNonNull(GraphQLBigNumber),
    },
  },
})

export const IndividualRight = new GraphQLObjectType({
  name: 'IndividualRight',
  fields: {
    memberPubkey: { type: new GraphQLNonNull(GraphQLString) },
    rightPercentage: { type: new GraphQLNonNull(GraphQLInt) },
    amountOfRights: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const ReservedRights = new GraphQLObjectType({
  name: 'ReservedRights',
  fields: {
    totalReservedRights: { type: new GraphQLNonNull(GraphQLBigNumber) },
    totalReservedPercentage: { type: new GraphQLNonNull(GraphQLInt) },
    individualRights: { type: new GraphQLNonNull(IndividualRight) },
  },
})

export const SellPermission = new GraphQLObjectType({
  name: 'SellPermission',
  fields: {
    from: { type: new GraphQLNonNull(GraphQLBigNumber) },
    to: { type: new GraphQLNonNull(GraphQLBigNumber) },
    quorumMinimum: { type: new GraphQLNonNull(GraphQLInt) },
    decimal: { type: new GraphQLNonNull(GraphQLInt) },
    governance: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const AddSpcInstructionData = new GraphQLObjectType({
  name: 'AddSpcInstructionData',
  fields: {
    sellPermission: { type: new GraphQLNonNull(SellPermissionDto) },
    maxVotingTime: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const SetGovCfgDto = new GraphQLObjectType({
  name: 'SetGovCfgDto',
  fields: {
    config: { type: new GraphQLNonNull(GovernanceConfig) },
    seeds: { type: new GraphQLNonNull(GraphQLString) },
  },
})

// ------------------- STATS ---------------------------

export const AccessTimeStats = new GraphQLObjectType({
  name: 'MarinadeFinanceInfo',
  fields: {
    accesses: { type: new GraphQLNonNull(GraphQLInt) },
    accessesByProgramId: { type: new GraphQLNonNull(GraphQLJSON) },
    startTimestamp: { type: new GraphQLNonNull(GraphQLLong) },
    endTimestamp: { type: new GraphQLNonNull(GraphQLLong) },
  },
})

export const TotalAccounts = new GraphQLObjectType({
  name: 'TotalAccounts',
  fields: {
    ClubData: { type: new GraphQLNonNull(GraphQLInt) },
    // ClubVault: { type: new GraphQLNonNull(GraphQLInt) },
    ClubVaultData: { type: new GraphQLNonNull(GraphQLInt) },
    FundraiseConfig: { type: new GraphQLNonNull(GraphQLInt) },
    FinancialRecord: { type: new GraphQLNonNull(GraphQLInt) },
    FinancialRecordOffer: { type: new GraphQLNonNull(GraphQLInt) },
    FinancialRecordDepricated: { type: new GraphQLNonNull(GraphQLInt) },
    MagicEdenData: { type: new GraphQLNonNull(GraphQLInt) },
    MaxVoterWeightRecord: { type: new GraphQLNonNull(GraphQLInt) },
    AllowedMemberData: { type: new GraphQLNonNull(GraphQLInt) },
    NftVoteRecord: { type: new GraphQLNonNull(GraphQLInt) },
    ProposalMetadata: { type: new GraphQLNonNull(GraphQLInt) },
    StakeConfig: { type: new GraphQLNonNull(GraphQLInt) },
    StakeRecord: { type: new GraphQLNonNull(GraphQLInt) },
    TransferProfitData: { type: new GraphQLNonNull(GraphQLInt) },
    ClubTreasury: { type: new GraphQLNonNull(GraphQLInt) },
    TreasuryData: { type: new GraphQLNonNull(GraphQLInt) },
    UniverseMetadata: { type: new GraphQLNonNull(GraphQLInt) },
    VoterWeightRecord: { type: new GraphQLNonNull(GraphQLInt) },
    Withdrawal: { type: new GraphQLNonNull(GraphQLInt) },
    WithdrawalData: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const GlobalClubProgramStats = new GraphQLObjectType({
  name: 'GlobalClubProgramStats',
  fields: {
    totalAccounts: { type: new GraphQLNonNull(TotalAccounts) },
    totalAccesses: { type: new GraphQLNonNull(GraphQLInt) },
    totalAccessesByProgramId: { type: new GraphQLNonNull(GraphQLJSON) },
    startTimestamp: { type: new GraphQLNonNull(GraphQLLong) },
    endTimestamp: { type: new GraphQLNonNull(GraphQLLong) },
  },
})

export const ClubProgramStats = new GraphQLObjectType({
  name: 'ClubProgramStats',
  fields: {
    last1h: { type: AccessTimeStats },
    last24h: { type: AccessTimeStats },
    last7d: { type: AccessTimeStats },
    total: { type: AccessTimeStats },
  },
})

// ------------------- ACCOUNTS ---------------------------

export const AccountsEnum = new GraphQLEnumType({
  name: 'AccountsEnum',
  values: {
    ClubData: { value: 'ClubData' },
    // ClubVault: { value: 'ClubVault' },
    ClubVaultData: { value: 'ClubVaultData' },
    FundraiseConfig: { value: 'FundraiseConfig' },
    FinancialRecord: { value: 'FinancialRecord' },
    FinancialRecordOffer: { value: 'FinancialRecordOffer' },
    FinancialRecordDepricated: { value: 'FinancialRecordDepricated' },
    MagicEdenData: { value: 'MagicEdenData' },
    MaxVoterWeightRecord: { value: 'MaxVoterWeightRecord' },
    AllowedMemberData: { value: 'AllowedMemberData' },
    NftVoteRecord: { value: 'NftVoteRecord' },
    ProposalMetadata: { value: 'ProposalMetadata' },
    StakeConfig: { value: 'StakeConfig' },
    StakeRecord: { value: 'StakeRecord' },
    TransferProfitData: { value: 'TransferProfitData' },
    ClubTreasury: { value: 'ClubTreasury' },
    TreasuryData: { value: 'TreasuryData' },
    UniverseMetadata: { value: 'UniverseMetadata' },
    VoterWeightRecord: { value: 'VoterWeightRecord' },
    Withdrawal: { value: 'Withdrawal' },
    WithdrawalData: { value: 'WithdrawalData' },
  },
})

export const ClubData = new GraphQLObjectType({
  name: 'ClubData',
  fields: {
    authority: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    slotCreated: { type: new GraphQLNonNull(GraphQLBigNumber) },
    clubType: { type: new GraphQLNonNull(GraphQLInt) },
    roleConfig: { type: new GraphQLNonNull(RoleConfig) },
    treasuryCount: { type: new GraphQLNonNull(GraphQLInt) },
    maxVoterWeight: { type: new GraphQLNonNull(GraphQLBigNumber) },
    stakeCount: { type: new GraphQLNonNull(GraphQLInt) },
    activeStakeCount: { type: new GraphQLNonNull(GraphQLInt) },
    hasActiveStaking: { type: new GraphQLNonNull(GraphQLBoolean) },
    numberOfMembers: { type: new GraphQLNonNull(GraphQLInt) },
    defaultRole: { type: new GraphQLNonNull(GraphQLString) },
    kycConfig: { type: new GraphQLNonNull(KycConfig) },
  },
})

// export const ClubVault = new GraphQLObjectType({
//   name: 'ClubVault',
//   fields: {},
// })

export const ClubVaultData = new GraphQLObjectType({
  name: 'ClubVaultData',
  fields: {
    chainId: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const FundraiseConfig = new GraphQLObjectType({
  name: 'FundraiseConfig',
  fields: {
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    capAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    raisedAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    isActive: { type: new GraphQLNonNull(GraphQLBoolean) },
    fundraiseIndex: { type: new GraphQLNonNull(GraphQLInt) },
    allocation: { type: new GraphQLNonNull(Allocation) },
  },
})

export const FinancialRecord = new GraphQLObjectType({
  name: 'FinancialRecord',
  fields: {
    authority: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    sellOffersCount: { type: new GraphQLNonNull(GraphQLInt) },
    listedFinancialRights: { type: new GraphQLNonNull(GraphQLBigNumber) },
    depositRecords: { type: new GraphQLNonNull(DepositRecord) },
  },
})

export const FinancialRecordOffer = new GraphQLObjectType({
  name: 'FinancialRecordOffer',
  fields: {
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    financialRecord: { type: new GraphQLNonNull(GraphQLString) },
    amountOfRights: { type: new GraphQLNonNull(GraphQLBigNumber) },
    price: { type: new GraphQLNonNull(GraphQLBigNumber) },
    seller: { type: new GraphQLNonNull(GraphQLString) },
    wantedTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    buyer: { type: new GraphQLNonNull(GraphQLString) },
    financialIndex: { type: new GraphQLNonNull(GraphQLInt) },
    initialAmountOfRights: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const FinancialRecordDepricated = new GraphQLObjectType({
  name: 'FinancialRecordDepricated',
  fields: {
    authority: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    financialRight: { type: new GraphQLNonNull(GraphQLBigNumber) },
    latestFundraiseIndex: { type: new GraphQLNonNull(GraphQLInt) },
    validFromIndex: { type: new GraphQLNonNull(GraphQLInt) },
    sellOffersCount: { type: new GraphQLNonNull(GraphQLInt) },
    listedFinancialAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const MagicEdenData = new GraphQLObjectType({
  name: 'MagicEdenData',
  fields: {
    instruction: { type: new GraphQLNonNull(MagicEdenInstruction) },
    data: { type: new GraphQLNonNull(GraphQLString) },
    accounts: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const MaxVoterWeightRecord = new GraphQLObjectType({
  name: 'MaxVoterWeightRecord',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    governingTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    maxVoterWeight: { type: new GraphQLNonNull(GraphQLBigNumber) },
    maxVoterWeightExpiry: { type: new GraphQLNonNull(GraphQLBigNumber) },
    reserved: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const AllowedMemberData = new GraphQLObjectType({
  name: 'AllowedMemberData',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberPubkey: { type: new GraphQLNonNull(GraphQLString) },
    isMember: { type: new GraphQLNonNull(GraphQLBoolean) },
    status: { type: new GraphQLNonNull(GraphQLInt) },
    role: { type: new GraphQLNonNull(GraphQLString) },
    joinedAt: { type: new GraphQLNonNull(GraphQLBigNumber) },
    joinedAtSlot: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const NftVoteRecord = new GraphQLObjectType({
  name: 'NftVoteRecord',
  fields: {
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    nftMint: { type: new GraphQLNonNull(GraphQLString) },
    governingTokenOwner: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ProposalMetadata = new GraphQLObjectType({
  name: 'ProposalMetadata',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    options: { type: new GraphQLNonNull(GraphQLString) },
    authority: { type: new GraphQLNonNull(GraphQLString) },
    discussionLink: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    currentFundraiseIndex: { type: new GraphQLNonNull(GraphQLInt) },
    totalFinancialPower: { type: new GraphQLNonNull(GraphQLBigNumber) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalIndex: { type: new GraphQLNonNull(GraphQLInt) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    governance: { type: new GraphQLNonNull(GraphQLString) },
    isCreated: { type: new GraphQLNonNull(GraphQLBoolean) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    authorityRole: { type: new GraphQLNonNull(GraphQLString) },
    dataPda: { type: new GraphQLNonNull(GraphQLString) },
    proposalType: { type: new GraphQLNonNull(ProposalType) },
    proposalStatus: { type: new GraphQLNonNull(ProposalStatus) },
    approvalQuorumPercentage: { type: new GraphQLNonNull(GraphQLInt) },
    maxVoterWeight: { type: new GraphQLNonNull(GraphQLBigNumber) },
    createdAt: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const StakeConfig = new GraphQLObjectType({
  name: 'StakeConfig',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    capAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    raisedAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    stakePeriodType: { type: new GraphQLNonNull(StakePeriodType) },
    stakePeriodEnd: { type: new GraphQLNonNull(GraphQLBigNumber) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    rewardPercentage: { type: new GraphQLNonNull(GraphQLInt) },
    status: { type: new GraphQLNonNull(StakeStatus) },
    nftStakeRecord: { type: new GraphQLNonNull(NftStakeRecord) },
    stakeIndex: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const StakeRecord = new GraphQLObjectType({
  name: 'StakeRecord',
  fields: {
    stakeOwner: { type: new GraphQLNonNull(GraphQLString) },
    amount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    hasClaimed: { type: new GraphQLNonNull(GraphQLBoolean) },
    claimAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    hasUnstaked: { type: new GraphQLNonNull(GraphQLBoolean) },
    unstakePeriodEnd: { type: new GraphQLNonNull(GraphQLBigNumber) },
    stakeConfig: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const TransferProfitData = new GraphQLObjectType({
  name: 'TransferProfitData',
  fields: {
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    treasuryToken: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    slotExpiry: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

// export const ClubTreasury = new GraphQLObjectType({
//   name: 'ClubTreasury',
//   fields: {},
// })

export const TreasuryData = new GraphQLObjectType({
  name: 'TreasuryData',
  fields: {
    fundraiseCount: { type: new GraphQLNonNull(GraphQLInt) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    hasActiveFundraise: { type: new GraphQLNonNull(GraphQLBoolean) },
    governance: { type: new GraphQLNonNull(GraphQLString) },
    maxVoterWeight: { type: new GraphQLNonNull(GraphQLBigNumber) },
    totalFinancialPower: { type: new GraphQLNonNull(GraphQLBigNumber) },
    denominatedCurrency: { type: new GraphQLNonNull(GraphQLString) },
    financialTokenAccount: { type: new GraphQLNonNull(GraphQLString) },
    sellPermission: { type: new GraphQLNonNull(SellPermission) },
    withdrawalGovernance: { type: new GraphQLNonNull(GraphQLString) },
    financialRecordCount: { type: new GraphQLNonNull(GraphQLInt) },
    treasuryIndex: { type: new GraphQLNonNull(GraphQLInt) },
    financialOffersCount: { type: new GraphQLNonNull(GraphQLInt) },
    transferGovernance: { type: new GraphQLNonNull(GraphQLString) },
    changeClubConfigGovernance: { type: new GraphQLNonNull(GraphQLString) },
    hasActiveUpdateGovernanceConfig: {
      type: new GraphQLNonNull(GraphQLBoolean),
    },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    reservedRights: { type: new GraphQLNonNull(ReservedRights) },
  },
})

export const UniverseMetadata = new GraphQLObjectType({
  name: 'UniverseMetadata',
  fields: {
    discriminator: { type: new GraphQLNonNull(GraphQLString) },
    authority: { type: new GraphQLNonNull(GraphQLString) },
    candyMachine: { type: new GraphQLNonNull(GraphQLString) },
    mint: { type: new GraphQLNonNull(GraphQLString) },
    mintingEpoch: { type: new GraphQLNonNull(GraphQLBigNumber) },
    currentUniverseLevel: { type: new GraphQLNonNull(GraphQLInt) },
    status: { type: new GraphQLNonNull(GraphQLInt) },
    rarity: { type: new GraphQLNonNull(GraphQLInt) },
    evolutionPoints: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const VoterWeightRecord = new GraphQLObjectType({
  name: 'VoterWeightRecord',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    governingTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    governingTokenOwner: { type: new GraphQLNonNull(GraphQLString) },
    voterWeight: { type: new GraphQLNonNull(GraphQLBigNumber) },
    voterWeightExpiry: { type: new GraphQLNonNull(GraphQLBigNumber) },
    weightAction: { type: new GraphQLNonNull(VoterWeightAction) },
    weightActionTarget: { type: new GraphQLNonNull(GraphQLString) },
    reserved: { type: new GraphQLNonNull(GraphQLString) },
  },
})

// export const Withdrawal = new GraphQLObjectType({
//   name: 'Withdrawal',
//   fields: {},
// })

export const WithdrawalData = new GraphQLObjectType({
  name: 'WithdrawalData',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    fundraiseNumber: { type: new GraphQLNonNull(GraphQLInt) },
    withdrawalAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    amountWithdrawn: { type: new GraphQLNonNull(GraphQLBigNumber) },
    totalFinancialPower: { type: new GraphQLNonNull(GraphQLBigNumber) },
    withdrawalMint: { type: new GraphQLNonNull(GraphQLString) },
    proposalCreatedAt: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const ParsedAccountsData = new GraphQLUnionType({
  name: 'ParsedAccountsData',
  types: [
    ClubData,
    // ClubVault,
    ClubVaultData,
    FundraiseConfig,
    FinancialRecord,
    FinancialRecordOffer,
    FinancialRecordDepricated,
    MagicEdenData,
    MaxVoterWeightRecord,
    AllowedMemberData,
    NftVoteRecord,
    ProposalMetadata,
    StakeConfig,
    StakeRecord,
    TransferProfitData,
    // ClubTreasury,
    TreasuryData,
    UniverseMetadata,
    VoterWeightRecord,
    // Withdrawal,
    WithdrawalData,
  ],
  resolveType: (obj) => {
    // here is selected a unique property of each account to discriminate between types
    if (obj.kycConfig) {
      return 'ClubData'
    }
    if (obj.chainId) {
      return 'ClubVaultData'
    }
    if (obj.allocation) {
      return 'FundraiseConfig'
    }
    if (obj.depositRecords) {
      return 'FinancialRecord'
    }
    if (obj.initialAmountOfRights) {
      return 'FinancialRecordOffer'
    }
    if (obj.listedFinancialAmount) {
      return 'FinancialRecordDepricated'
    }
    if (obj.accounts) {
      return 'MagicEdenData'
    }
    if (obj.reserved) {
      return 'MaxVoterWeightRecord'
    }
    if (obj.joinedAtSlot) {
      return 'AllowedMemberData'
    }
    if (obj.governingTokenOwner) {
      return 'NftVoteRecord'
    }
    if (obj.createdAt) {
      return 'ProposalMetadata'
    }
    if (obj.stakeIndex) {
      return 'StakeConfig'
    }
    if (obj.stakeConfig) {
      return 'StakeRecord'
    }
    if (obj.slotExpiry) {
      return 'TransferProfitData'
    }
    if (obj.reservedRights) {
      return 'TreasuryData'
    }
    if (obj.evolutionPoints) {
      return 'UniverseMetadata'
    }
    if (obj.reserved) {
      return 'VoterWeightRecord'
    }
    if (obj.proposalCreatedAt) {
      return 'WithdrawalData'
    }
  },
})

const commonAccountInfoFields = {
  name: { type: new GraphQLNonNull(GraphQLString) },
  programId: { type: new GraphQLNonNull(GraphQLString) },
  address: { type: new GraphQLNonNull(GraphQLString) },
  type: { type: new GraphQLNonNull(AccountsEnum) },
}

const Account = new GraphQLInterfaceType({
  name: 'Account',
  fields: {
    ...commonAccountInfoFields,
  },
})

export const ClubProgramAccountsInfo = new GraphQLObjectType({
  name: 'ClubProgramAccountsInfo',
  interfaces: [Account],
  fields: {
    ...commonAccountInfoFields,
    data: { type: new GraphQLNonNull(ParsedAccountsData) },
  },
})

export const AccountsInfo = new GraphQLList(ClubProgramAccountsInfo)

// ------------------- EVENTS --------------------------

export const ParsedEvents = new GraphQLEnumType({
  name: 'ParsedEvents',
  values: {
    CreateClubEvent: { value: 'CreateClubEvent' },
    CreateClubVaultEvent: { value: 'CreateClubVaultEvent' },
    CreateTreasuryGovernanceEvent: { value: 'CreateTreasuryGovernanceEvent' },
    AddSellPermissionEvent: { value: 'AddSellPermissionEvent' },
    SupportClubEvent: { value: 'SupportClubEvent' },
    LeaveClubEvent: { value: 'LeaveClubEvent' },
    CreateClubProposalEvent: { value: 'CreateClubProposalEvent' },
    AllowMemberEvent: { value: 'AllowMemberEvent' },
    UpdateMemberEvent: { value: 'UpdateMemberEvent' },
    AcceptMembershipEvent: { value: 'AcceptMembershipEvent' },
    CancelInvitationEvent: { value: 'CancelInvitationEvent' },
    CreateFundraiseEvent: { value: 'CreateFundraiseEvent' },
    FinishFundraiseEvent: { value: 'FinishFundraiseEvent' },
    UpdateVoterWeightEvent: { value: 'UpdateVoterWeightEvent' },
    ExecuteTransactionEvent: { value: 'ExecuteTransactionEvent' },
    CancelEscrowEvent: { value: 'CancelEscrowEvent' },
    CreateProposalMetadataEvent: { value: 'CreateProposalMetadataEvent' },
    CreateWithdrawalProposalEvent: { value: 'CreateWithdrawalProposalEvent' },
    ExecuteWithdrawalTransactionEvent: {
      value: 'ExecuteWithdrawalTransactionEvent',
    },
    UpdateVoterWeightForGovernanceEvent: {
      value: 'UpdateVoterWeightForGovernanceEvent',
    },
    DistributeEvent: { value: 'DistributeEvent' },
    TransferProfitEvent: { value: 'TransferProfitEvent' },
    CreateWithdrawalGovernanceEvent: {
      value: 'CreateWithdrawalGovernanceEvent',
    },
    CastNftVoteEvent: { value: 'CastNftVoteEvent' },
    InitializeStakingEvent: { value: 'InitializeStakingEvent' },
    StakeTokensEvent: { value: 'StakeTokensEvent' },
    ClaimStakedTokensEvent: { value: 'ClaimStakedTokensEvent' },
    UnstakeTokensEvent: { value: 'UnstakeTokensEvent' },
    FinishStakingEvent: { value: 'FinishStakingEvent' },
    StartStakingEvent: { value: 'StartStakingEvent' },
    InitializeStakingRewardEvent: { value: 'InitializeStakingRewardEvent' },
    UpdateProposalDescriptionEvent: { value: 'UpdateProposalDescriptionEvent' },
    CreateMeBuyNowProposalEvent: { value: 'CreateMeBuyNowProposalEvent' },
    CreateMeSellProposalEvent: { value: 'CreateMeSellProposalEvent' },
    ExecuteMeBuyNowTransactionEvent: {
      value: 'ExecuteMeBuyNowTransactionEvent',
    },
    ExecuteMeSellTransactionEvent: { value: 'ExecuteMeSellTransactionEvent' },
    ExecuteMeBuyNowEvent: { value: 'ExecuteMeBuyNowEvent' },
    ExecuteMeSellEvent: { value: 'ExecuteMeSellEvent' },
    ExecuteMeSellCancelEvent: { value: 'ExecuteMeSellCancelEvent' },
    CreateFinancialOfferEvent: { value: 'CreateFinancialOfferEvent' },
    CancelFinancialOfferEvent: { value: 'CancelFinancialOfferEvent' },
    AcceptFinancialOfferEvent: { value: 'AcceptFinancialOfferEvent' },
    CreateTransferProposalEvent: { value: 'CreateTransferProposalEvent' },
    ExecuteTransferProposalEvent: { value: 'ExecuteTransferProposalEvent' },
    CreateTransferGovernanceEvent: { value: 'CreateTransferGovernanceEvent' },
    UpdateGovernanceConfigEvent: { value: 'UpdateGovernanceConfigEvent' },
    ExecuteUpdateGovernanceConfigEvent: {
      value: 'ExecuteUpdateGovernanceConfigEvent',
    },
    CreateUpdateRoleProposalEvent: { value: 'CreateUpdateRoleProposalEvent' },
    ExecuteUpdateRoleEvent: { value: 'ExecuteUpdateRoleEvent' },
    CreateChangeClubConfigGovernanceEvent: {
      value: 'CreateChangeClubConfigGovernanceEvent',
    },
    CreateSolseaProposalEvent: { value: 'CreateSolseaProposalEvent' },
    ExecuteSolseaTransactionEvent: { value: 'ExecuteSolseaTransactionEvent' },
    CancelSolseaOfferEvent: { value: 'CancelSolseaOfferEvent' },
    ReserveRightsEvent: { value: 'ReserveRightsEvent' },
    UpdateAllocationEvent: { value: 'UpdateAllocationEvent' },
    CreateAddSellPermissionProposalEvent: {
      value: 'CreateAddSellPermissionProposalEvent',
    },
    ExecuteSellPermissionTransactionEvent: {
      value: 'ExecuteSellPermissionTransactionEvent',
    },
    AddStakeConfigToStakeRecordEvent: {
      value: 'AddStakeConfigToStakeRecordEvent',
    },
    AddCanLeaveActionEvent: { value: 'AddCanLeaveActionEvent' },
  },
})

const commonEventFields = {
  id: { type: new GraphQLNonNull(GraphQLString) },
  timestamp: { type: GraphQLLong },
  type: { type: new GraphQLNonNull(ParsedEvents) },
  account: { type: new GraphQLNonNull(GraphQLString) },
  signer: { type: new GraphQLNonNull(GraphQLString) },
}

const Event = new GraphQLInterfaceType({
  name: 'Event',
  fields: {
    ...commonEventFields,
  },
})

/*-----------------------* CUSTOM EVENTS TYPES *-----------------------*/

export const CreateClubEventAccounts = new GraphQLObjectType({
  name: 'CreateClubEventAccounts',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    ogRealm: { type: new GraphQLNonNull(GraphQLString) },
    realmAuthority: { type: new GraphQLNonNull(GraphQLString) },
    communityTokenHoldingAddress: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightProgram: { type: new GraphQLNonNull(GraphQLString) },
    communityTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateClubEventData = new GraphQLObjectType({
  name: 'CreateClubEventData',
  fields: {
    clubName: { type: new GraphQLNonNull(GraphQLString) },
    clubType: { type: new GraphQLNonNull(GraphQLInt) },
    roles: { type: new GraphQLNonNull(GraphQLString) },
    ownerRole: { type: new GraphQLNonNull(GraphQLString) },
    defaultRole: { type: new GraphQLNonNull(GraphQLString) },
    kycConfig: { type: new GraphQLNonNull(KycConfig) },
  },
})

export const CreateClubEvent = new GraphQLObjectType({
  name: 'CreateClubEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateClub,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateClubEventData) },
    accounts: { type: new GraphQLNonNull(CreateClubEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CreateClubVaultEventAccounts = new GraphQLObjectType({
  name: 'CreateClubVaultEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    vaultData: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateClubVaultEventData = new GraphQLObjectType({
  name: 'CreateClubVaultEventData',
  fields: {
    chainId: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateClubVaultEvent = new GraphQLObjectType({
  name: 'CreateClubVaultEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateClubVault,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateClubVaultEventData) },
    accounts: { type: new GraphQLNonNull(CreateClubVaultEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CreateTreasuryGovernanceEventAccounts = new GraphQLObjectType({
  name: 'CreateTreasuryGovernanceEventAccounts',
  fields: {
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    realmAuthority: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    governance: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    profit: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateTreasuryGovernanceEvent = new GraphQLObjectType({
  name: 'CreateTreasuryGovernanceEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateTreasuryGovernance,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(GraphQLInt) },
    accounts: {
      type: new GraphQLNonNull(CreateTreasuryGovernanceEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const AddSellPermissionEventAccounts = new GraphQLObjectType({
  name: 'AddSellPermissionEventAccounts',
  fields: {
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    realmAuthority: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    governance: { type: new GraphQLNonNull(GraphQLString) },
    governedSpc: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const AddSellPermissionEvent = new GraphQLObjectType({
  name: 'AddSellPermissionEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.AddSellPermission,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(GraphQLInt) },
    accounts: { type: new GraphQLNonNull(AddSellPermissionEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const SupportClubEventAccounts = new GraphQLObjectType({
  name: 'SupportClubEventAccounts',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    fundraiseConfig: { type: new GraphQLNonNull(GraphQLString) },
    financialRecord: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const SupportClubEventData = new GraphQLObjectType({
  name: 'SupportClubEventData',
  fields: {
    depositAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    supportType: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const SupportClubEvent = new GraphQLObjectType({
  name: 'SupportClubEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.SupportClub,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(SupportClubEventData) },
    accounts: { type: new GraphQLNonNull(SupportClubEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const LeaveClubEventAccounts = new GraphQLObjectType({
  name: 'LeaveClubEventAccounts',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    recipientMemberData: { type: new GraphQLNonNull(GraphQLString) },
    recipient: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const LeaveClubEvent = new GraphQLObjectType({
  name: 'LeaveClubEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.LeaveClub,
  fields: {
    ...commonEventFields,
    accounts: { type: new GraphQLNonNull(LeaveClubEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CreateClubProposalEventAccounts = new GraphQLObjectType({
  name: 'CreateClubProposalEventAccounts',
  fields: {
    governance: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    governanceAuthority: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransactionAddress: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    communityTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    makerOfferedTokens: { type: new GraphQLNonNull(GraphQLString) },
    escrowedWantedTokens: { type: new GraphQLNonNull(GraphQLString) },
    makerWantedAuthority: { type: new GraphQLNonNull(GraphQLString) },
    makerOfferedAuthority: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    wantedTokensMint: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateClubProposalEventData = new GraphQLObjectType({
  name: 'CreateClubProposalEventData',
  fields: {
    chainId: { type: new GraphQLNonNull(GraphQLString) },
    useDeny: { type: new GraphQLNonNull(GraphQLBoolean) },
    offeredAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    wantedAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    action: { type: new GraphQLNonNull(GraphQLInt) },
    dedicatedTaker: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateClubProposalEvent = new GraphQLObjectType({
  name: 'CreateClubProposalEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateClubProposal,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateClubProposalEventData) },
    accounts: { type: new GraphQLNonNull(CreateClubProposalEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const AllowMemberEventAccounts = new GraphQLObjectType({
  name: 'AllowMemberEventAccounts',
  fields: {
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const AllowMemberEventData = new GraphQLObjectType({
  name: 'AllowMemberEventData',
  fields: {
    roles: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const AllowMemberEvent = new GraphQLObjectType({
  name: 'AllowMemberEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.AllowMember,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(AllowMemberEventData) },
    accounts: { type: new GraphQLNonNull(AllowMemberEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const UpdateMemberEventAccounts = new GraphQLObjectType({
  name: 'UpdateMemberEventAccounts',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    memberAddress: { type: new GraphQLNonNull(GraphQLString) },
    memberVoterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    updaterMemberData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const UpdateMemberEvent = new GraphQLObjectType({
  name: 'UpdateMemberEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.UpdateMember,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(UpdateMemberDto) },
    accounts: { type: new GraphQLNonNull(UpdateMemberEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const AcceptMembershipEventAccounts = new GraphQLObjectType({
  name: 'AcceptMembershipEventAccounts',
  fields: {
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    communityTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const AcceptMembershipEvent = new GraphQLObjectType({
  name: 'AcceptMembershipEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.AcceptMembership,
  fields: {
    ...commonEventFields,
    accounts: { type: new GraphQLNonNull(AcceptMembershipEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CancelInvitationEventAccounts = new GraphQLObjectType({
  name: 'CancelInvitationEventAccounts',
  fields: {
    payer: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    memberAddress: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    recipient: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CancelInvitationEvent = new GraphQLObjectType({
  name: 'CancelInvitationEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CancelInvitation,
  fields: {
    ...commonEventFields,
    accounts: { type: new GraphQLNonNull(CancelInvitationEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CreateFundraiseEventAccounts = new GraphQLObjectType({
  name: 'CreateFundraiseEventAccounts',
  fields: {
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    fundraiseConfig: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateFundraiseEventData = new GraphQLObjectType({
  name: 'CreateFundraiseEventData',
  fields: {
    amount: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const CreateFundraiseEvent = new GraphQLObjectType({
  name: 'CreateFundraiseEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateFundraise,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateFundraiseEventData) },
    accounts: { type: new GraphQLNonNull(CreateFundraiseEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const FinishFundraiseEventAccounts = new GraphQLObjectType({
  name: 'FinishFundraiseEventAccounts',
  fields: {
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    fundraiseConfig: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const FinishFundraiseEvent = new GraphQLObjectType({
  name: 'FinishFundraiseEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.FinishFundraise,
  fields: {
    ...commonEventFields,
    accounts: { type: new GraphQLNonNull(FinishFundraiseEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const UpdateVoterWeightEventAccounts = new GraphQLObjectType({
  name: 'UpdateVoterWeightEventAccounts',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    maxVoterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const UpdateVoterWeightEventData = new GraphQLObjectType({
  name: 'UpdateVoterWeightEventData',
  fields: {
    action: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const UpdateVoterWeightEvent = new GraphQLObjectType({
  name: 'UpdateVoterWeightEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.UpdateVoterWeight,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(UpdateVoterWeightEventData) },
    accounts: { type: new GraphQLNonNull(UpdateVoterWeightEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const ExecuteTransactionEventAccounts = new GraphQLObjectType({
  name: 'ExecuteTransactionEventAccounts',
  fields: {
    governance: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransaction: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    makerOfferedTokens: { type: new GraphQLNonNull(GraphQLString) },
    escrowedWantedTokenAccount: { type: new GraphQLNonNull(GraphQLString) },
    maker: { type: new GraphQLNonNull(GraphQLString) },
    escrowedOfferedTokens: { type: new GraphQLNonNull(GraphQLString) },
    offeredTokensMint: { type: new GraphQLNonNull(GraphQLString) },
    wantedTokensMint: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteTransactionEventData = new GraphQLObjectType({
  name: 'ExecuteTransactionEventData',
  fields: {
    chainId: { type: new GraphQLNonNull(GraphQLString) },
    action: { type: new GraphQLNonNull(GraphQLInt) },
    treasuryIndex: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const ExecuteTransactionEvent = new GraphQLObjectType({
  name: 'ExecuteTransactionEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ExecuteTransaction,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(ExecuteTransactionEventData) },
    accounts: { type: new GraphQLNonNull(ExecuteTransactionEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CancelEscrowEventAccounts = new GraphQLObjectType({
  name: 'CancelEscrowEventAccounts',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    makerOfferedTokens: { type: new GraphQLNonNull(GraphQLString) },
    maker: { type: new GraphQLNonNull(GraphQLString) },
    escrowedWantedTokens: { type: new GraphQLNonNull(GraphQLString) },
    escrowedOfferedTokens: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CancelEscrowEventData = new GraphQLObjectType({
  name: 'CancelEscrowEventData',
  fields: {
    chainId: { type: new GraphQLNonNull(GraphQLString) },
    action: { type: new GraphQLNonNull(GraphQLInt) },
    treasuryIndex: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const CancelEscrowEvent = new GraphQLObjectType({
  name: 'CancelEscrowEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CancelEscrow,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CancelEscrowEventData) },
    accounts: { type: new GraphQLNonNull(CancelEscrowEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CreateProposalMetadataEventAccounts = new GraphQLObjectType({
  name: 'CreateProposalMetadataEventAccounts',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    governance: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateProposalMetadataEventData = new GraphQLObjectType({
  name: 'CreateProposalMetadataEventData',
  fields: {
    proposalType: { type: new GraphQLNonNull(GraphQLInt) },
    data1: { type: new GraphQLNonNull(GraphQLString) },
    data2: { type: new GraphQLNonNull(GraphQLString) },
    data3: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateProposalMetadataEvent = new GraphQLObjectType({
  name: 'CreateProposalMetadataEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateProposalMetadata,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateProposalMetadataEventData) },
    accounts: { type: new GraphQLNonNull(CreateProposalMetadataEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CreateWithdrawalProposalEventAccounts = new GraphQLObjectType({
  name: 'CreateWithdrawalProposalEventAccounts',
  fields: {
    governance: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransactionAddress: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    communityTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    treasuryToken: { type: new GraphQLNonNull(GraphQLString) },
    withdrawal: { type: new GraphQLNonNull(GraphQLString) },
    withdrawalData: { type: new GraphQLNonNull(GraphQLString) },
    withdrawalMint: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateWithdrawalProposalEventData = new GraphQLObjectType({
  name: 'CreateWithdrawalProposalEventData',
  fields: {
    useDeny: { type: new GraphQLNonNull(GraphQLBoolean) },
    withdrawalAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const CreateWithdrawalProposalEvent = new GraphQLObjectType({
  name: 'CreateWithdrawalProposalEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateWithdrawalProposal,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateWithdrawalProposalEventData) },
    accounts: {
      type: new GraphQLNonNull(CreateWithdrawalProposalEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const ExecuteWithdrawalTransactionEventAccounts = new GraphQLObjectType({
  name: 'ExecuteWithdrawalTransactionEventAccounts',
  fields: {
    governance: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryToken: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    withdrawal: { type: new GraphQLNonNull(GraphQLString) },
    withdrawalData: { type: new GraphQLNonNull(GraphQLString) },
    withdrawalMint: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransaction: { type: new GraphQLNonNull(GraphQLString) },
    transferProfitData: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteWithdrawalTransactionEvent = new GraphQLObjectType({
  name: 'ExecuteWithdrawalTransactionEvent',
  interfaces: [Event],
  isTypeOf: (item) =>
    item.type === InstructionType.ExecuteWithdrawalTransaction,
  fields: {
    ...commonEventFields,
    accounts: {
      type: new GraphQLNonNull(ExecuteWithdrawalTransactionEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const UpdateVoterWeightForGovernanceEventAccounts =
  new GraphQLObjectType({
    name: 'UpdateVoterWeightForGovernanceEventAccounts',
    fields: {
      realm: { type: new GraphQLNonNull(GraphQLString) },
      voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
      memberData: { type: new GraphQLNonNull(GraphQLString) },
      clubData: { type: new GraphQLNonNull(GraphQLString) },
      payer: { type: new GraphQLNonNull(GraphQLString) },
      systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    },
  })

export const UpdateVoterWeightForGovernanceEvent = new GraphQLObjectType({
  name: 'UpdateVoterWeightForGovernanceEvent',
  interfaces: [Event],
  isTypeOf: (item) =>
    item.type === InstructionType.UpdateVoterWeightForGovernance,
  fields: {
    ...commonEventFields,
    accounts: {
      type: new GraphQLNonNull(UpdateVoterWeightForGovernanceEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const DistributeEventAccounts = new GraphQLObjectType({
  name: 'DistributeEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    tokenLedger: { type: new GraphQLNonNull(GraphQLString) },
    ledgerEntry: { type: new GraphQLNonNull(GraphQLString) },
    profit: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    profitToken: { type: new GraphQLNonNull(GraphQLString) },
    escrowedWantedToken: { type: new GraphQLNonNull(GraphQLString) },
    makerWantedToken: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const DistributeEventData = new GraphQLObjectType({
  name: 'DistributeEventData',
  fields: {
    treasuryIndex: { type: new GraphQLNonNull(GraphQLInt) },
    chainId: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const DistributeEvent = new GraphQLObjectType({
  name: 'DistributeEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.Distribute,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(DistributeEventData) },
    accounts: { type: new GraphQLNonNull(DistributeEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const TransferProfitEventAccounts = new GraphQLObjectType({
  name: 'TransferProfitEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryToken: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    profit: { type: new GraphQLNonNull(GraphQLString) },
    transferProfit: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    profitToken: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const TransferProfitEventData = new GraphQLObjectType({
  name: 'TransferProfitEventData',
  fields: {
    withdrawalAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const TransferProfitEvent = new GraphQLObjectType({
  name: 'TransferProfitEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.TransferProfit,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(TransferProfitEventData) },
    accounts: { type: new GraphQLNonNull(TransferProfitEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CreateWithdrawalGovernanceEventAccounts = new GraphQLObjectType({
  name: 'CreateWithdrawalGovernanceEventAccounts',
  fields: {
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    realmAuthority: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    governance: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateWithdrawalGovernanceEventData = new GraphQLObjectType({
  name: 'CreateWithdrawalGovernanceEventData',
  fields: {
    treasuryIndex: { type: new GraphQLNonNull(GraphQLInt) },
    maxVotingTime: { type: new GraphQLNonNull(GraphQLInt) },
    voteThresholdPercentage: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const CreateWithdrawalGovernanceEvent = new GraphQLObjectType({
  name: 'CreateWithdrawalGovernanceEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateWithdrawalGovernance,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateWithdrawalGovernanceEventData) },
    accounts: {
      type: new GraphQLNonNull(CreateWithdrawalGovernanceEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const CastNftVoteEventAccounts = new GraphQLObjectType({
  name: 'CastNftVoteEventAccounts',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CastNftVoteEvent = new GraphQLObjectType({
  name: 'CastNftVoteEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CastNftVote,
  fields: {
    ...commonEventFields,
    accounts: { type: new GraphQLNonNull(CastNftVoteEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const InitializeStakingEventAccounts = new GraphQLObjectType({
  name: 'InitializeStakingEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    stakedTokens: { type: new GraphQLNonNull(GraphQLString) },
    stakeConfig: { type: new GraphQLNonNull(GraphQLString) },
    unqMint: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const InitializeStakingEventData = new GraphQLObjectType({
  name: 'InitializeStakingEventData',
  fields: {
    stakeName: { type: new GraphQLNonNull(GraphQLString) },
    capAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    stakePeriod: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const InitializeStakingEvent = new GraphQLObjectType({
  name: 'InitializeStakingEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.InitializeStaking,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(InitializeStakingEventData) },
    accounts: { type: new GraphQLNonNull(InitializeStakingEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const StakeTokensEventAccounts = new GraphQLObjectType({
  name: 'StakeTokensEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    stakeConfig: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const StakeTokensEventData = new GraphQLObjectType({
  name: 'StakeTokensEventData',
  fields: {
    stakeIndex: { type: new GraphQLNonNull(GraphQLInt) },
    amount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    stakeOption: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const StakeTokensEvent = new GraphQLObjectType({
  name: 'StakeTokensEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.StakeTokens,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(StakeTokensEventData) },
    accounts: { type: new GraphQLNonNull(StakeTokensEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const ClaimStakedTokensEventAccounts = new GraphQLObjectType({
  name: 'ClaimStakedTokensEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    stakeConfig: { type: new GraphQLNonNull(GraphQLString) },
    stakedTokens: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    memberTokens: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ClaimStakedTokensEventData = new GraphQLObjectType({
  name: 'ClaimStakedTokensEventData',
  fields: {
    stakeIndex: { type: new GraphQLNonNull(GraphQLInt) },
    stakeOption: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const ClaimStakedTokensEvent = new GraphQLObjectType({
  name: 'ClaimStakedTokensEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ClaimStakedTokens,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(ClaimStakedTokensEventData) },
    accounts: { type: new GraphQLNonNull(ClaimStakedTokensEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const UnstakeTokensEventAccounts = new GraphQLObjectType({
  name: 'UnstakeTokensEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    stakeConfig: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const UnstakeTokensEventData = new GraphQLObjectType({
  name: 'UnstakeTokensEventData',
  fields: {
    stakeIndex: { type: new GraphQLNonNull(GraphQLInt) },
    stakeOption: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const UnstakeTokensEvent = new GraphQLObjectType({
  name: 'UnstakeTokensEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.UnstakeTokens,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(UnstakeTokensEventData) },
    accounts: { type: new GraphQLNonNull(UnstakeTokensEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const FinishStakingEventAccounts = new GraphQLObjectType({
  name: 'FinishStakingEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    stakedTokens: { type: new GraphQLNonNull(GraphQLString) },
    stakeConfig: { type: new GraphQLNonNull(GraphQLString) },
    clubUnqTokens: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const FinishStakingEventData = new GraphQLObjectType({
  name: 'FinishStakingEventData',
  fields: {
    stakeIndex: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const FinishStakingEvent = new GraphQLObjectType({
  name: 'FinishStakingEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.FinishStaking,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(FinishStakingEventData) },
    accounts: { type: new GraphQLNonNull(FinishStakingEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const StartStakingEventAccounts = new GraphQLObjectType({
  name: 'StartStakingEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    stakedTokens: { type: new GraphQLNonNull(GraphQLString) },
    stakeConfig: { type: new GraphQLNonNull(GraphQLString) },
    unqMint: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const StartStakingEventData = new GraphQLObjectType({
  name: 'StartStakingEventData',
  fields: {
    stakeIndex: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const StartStakingEvent = new GraphQLObjectType({
  name: 'StartStakingEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.StartStaking,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(StartStakingEventData) },
    accounts: { type: new GraphQLNonNull(StartStakingEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const InitializeStakingRewardEventAccounts = new GraphQLObjectType({
  name: 'InitializeStakingRewardEventAccounts',
  fields: {
    clubUnqTokens: { type: new GraphQLNonNull(GraphQLString) },
    unqMint: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const InitializeStakingRewardEvent = new GraphQLObjectType({
  name: 'InitializeStakingRewardEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.InitializeStakingReward,
  fields: {
    ...commonEventFields,
    accounts: {
      type: new GraphQLNonNull(InitializeStakingRewardEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const UpdateProposalDescriptionEventAccounts = new GraphQLObjectType({
  name: 'UpdateProposalDescriptionEventAccounts',
  fields: {
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const UpdateProposalDescriptionEventData = new GraphQLObjectType({
  name: 'UpdateProposalDescriptionEventData',
  fields: {
    descriptionBuffer: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    options: { type: new GraphQLNonNull(GraphQLString) },
    discussionLink: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const UpdateProposalDescriptionEvent = new GraphQLObjectType({
  name: 'UpdateProposalDescriptionEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.UpdateProposalDescription,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(UpdateProposalDescriptionEventData) },
    accounts: {
      type: new GraphQLNonNull(UpdateProposalDescriptionEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const CreateMeBuyNowProposalEventAccounts = new GraphQLObjectType({
  name: 'CreateMeBuyNowProposalEventAccounts',
  fields: {
    governance: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransactionAddress: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    communityTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenData: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateMeBuyNowProposalEventData = new GraphQLObjectType({
  name: 'CreateMeBuyNowProposalEventData',
  fields: {
    useDeny: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
})

export const CreateMeBuyNowProposalEvent = new GraphQLObjectType({
  name: 'CreateMeBuyNowProposalEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateMeBuyNowProposal,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateMeBuyNowProposalEventData) },
    accounts: { type: new GraphQLNonNull(CreateMeBuyNowProposalEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CreateMeSellProposalEventAccounts = new GraphQLObjectType({
  name: 'CreateMeSellProposalEventAccounts',
  fields: {
    governance: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransactionAddress: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    communityTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenData: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateMeSellProposalEventData = new GraphQLObjectType({
  name: 'CreateMeSellProposalEventData',
  fields: {
    useDeny: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
})

export const CreateMeSellProposalEvent = new GraphQLObjectType({
  name: 'CreateMeSellProposalEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateMeSellProposal,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateMeSellProposalEventData) },
    accounts: { type: new GraphQLNonNull(CreateMeSellProposalEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const ExecuteMeBuyNowTransactionEventAccounts = new GraphQLObjectType({
  name: 'ExecuteMeBuyNowTransactionEventAccounts',
  fields: {
    governance: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransaction: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    unqEscrowTokens: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenEscrowedTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteMeBuyNowTransactionEvent = new GraphQLObjectType({
  name: 'ExecuteMeBuyNowTransactionEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ExecuteMeBuyNowTransaction,
  fields: {
    ...commonEventFields,
    accounts: {
      type: new GraphQLNonNull(ExecuteMeBuyNowTransactionEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const ExecuteMeSellTransactionEventAccounts = new GraphQLObjectType({
  name: 'ExecuteMeSellTransactionEventAccounts',
  fields: {
    governance: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransaction: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    nativeMint: { type: new GraphQLNonNull(GraphQLString) },
    makerWantedToken: { type: new GraphQLNonNull(GraphQLString) },
    unqEscrowTokens: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenEscrowedTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteMeSellTransactionEvent = new GraphQLObjectType({
  name: 'ExecuteMeSellTransactionEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ExecuteMeSellTransaction,
  fields: {
    ...commonEventFields,
    accounts: {
      type: new GraphQLNonNull(ExecuteMeSellTransactionEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const ExecuteMeBuyNowEventAccounts = new GraphQLObjectType({
  name: 'ExecuteMeBuyNowEventAccounts',
  fields: {
    payer: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenAccountsHolder: { type: new GraphQLNonNull(GraphQLString) },
    sellersWallet: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenExerchina: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenEscrowedToken: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenEscrowedTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenEscrowedTokenMetadata: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenState1: { type: new GraphQLNonNull(GraphQLString) },
    escrowedWantedToken: { type: new GraphQLNonNull(GraphQLString) },
    autExer: { type: new GraphQLNonNull(GraphQLString) },
    e8cExer: { type: new GraphQLNonNull(GraphQLString) },
    expoitExer: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenState2: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenState3: { type: new GraphQLNonNull(GraphQLString) },
    onebwExer: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    associatedTokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    magicEden: { type: new GraphQLNonNull(GraphQLString) },
    unqEscrowToken: { type: new GraphQLNonNull(GraphQLString) },
    account13: { type: new GraphQLNonNull(GraphQLString) },
    account15: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteMeBuyNowEventData = new GraphQLObjectType({
  name: 'ExecuteMeBuyNowEventData',
  fields: {
    data1: { type: new GraphQLNonNull(GraphQLString) },
    data2: { type: new GraphQLNonNull(GraphQLString) },
    data3: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteMeBuyNowEvent = new GraphQLObjectType({
  name: 'ExecuteMeBuyNowEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ExecuteMeBuyNow,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(ExecuteMeBuyNowEventData) },
    accounts: { type: new GraphQLNonNull(ExecuteMeBuyNowEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const ExecuteMeSellEventAccounts = new GraphQLObjectType({
  name: 'ExecuteMeSellEventAccounts',
  fields: {
    payer: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    meState0: { type: new GraphQLNonNull(GraphQLString) },
    offeredNftToken: { type: new GraphQLNonNull(GraphQLString) },
    nftMint: { type: new GraphQLNonNull(GraphQLString) },
    nftMetadata: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenExerchina: { type: new GraphQLNonNull(GraphQLString) },
    autExer: { type: new GraphQLNonNull(GraphQLString) },
    e8cExer: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenState1: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenState2: { type: new GraphQLNonNull(GraphQLString) },
    onebwExer: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    associatedTokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    magicEden: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteMeSellEventData = new GraphQLObjectType({
  name: 'ExecuteMeSellEventData',
  fields: {
    data: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteMeSellEvent = new GraphQLObjectType({
  name: 'ExecuteMeSellEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ExecuteMeSell,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(ExecuteMeSellEventData) },
    accounts: { type: new GraphQLNonNull(ExecuteMeSellEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const ExecuteMeSellCancelEventAccounts = new GraphQLObjectType({
  name: 'ExecuteMeSellCancelEventAccounts',
  fields: {
    payer: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    offeredNftToken: { type: new GraphQLNonNull(GraphQLString) },
    nftMint: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenExerchina: { type: new GraphQLNonNull(GraphQLString) },
    autExer: { type: new GraphQLNonNull(GraphQLString) },
    e8cExer: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenState1: { type: new GraphQLNonNull(GraphQLString) },
    magicEdenState2: { type: new GraphQLNonNull(GraphQLString) },
    onebwExer: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    magicEden: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteMeSellCancelEventData = new GraphQLObjectType({
  name: 'ExecuteMeSellCancelEventData',
  fields: {
    data: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteMeSellCancelEvent = new GraphQLObjectType({
  name: 'ExecuteMeSellCancelEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ExecuteMeSellCancel,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(ExecuteMeSellCancelEventData) },
    accounts: { type: new GraphQLNonNull(ExecuteMeSellCancelEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CreateFinancialOfferEventAccounts = new GraphQLObjectType({
  name: 'CreateFinancialOfferEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    financialOffer: { type: new GraphQLNonNull(GraphQLString) },
    financialRecord: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateFinancialOfferEventData = new GraphQLObjectType({
  name: 'CreateFinancialOfferEventData',
  fields: {
    amountOfRights: { type: new GraphQLNonNull(GraphQLBigNumber) },
    price: { type: new GraphQLNonNull(GraphQLBigNumber) },
    buyer: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateFinancialOfferEvent = new GraphQLObjectType({
  name: 'CreateFinancialOfferEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateFinancialOffer,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateFinancialOfferEventData) },
    accounts: { type: new GraphQLNonNull(CreateFinancialOfferEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CancelFinancialOfferEventAccounts = new GraphQLObjectType({
  name: 'CancelFinancialOfferEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    financialRecord: { type: new GraphQLNonNull(GraphQLString) },
    financialOffer: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CancelFinancialOfferEvent = new GraphQLObjectType({
  name: 'CancelFinancialOfferEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CancelFinancialOffer,
  fields: {
    ...commonEventFields,
    accounts: { type: new GraphQLNonNull(CancelFinancialOfferEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const AcceptFinancialOfferEventAccounts = new GraphQLObjectType({
  name: 'AcceptFinancialOfferEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    seller: { type: new GraphQLNonNull(GraphQLString) },
    financialOffer: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    buyerFinancialRecord: { type: new GraphQLNonNull(GraphQLString) },
    sellerFinancialRecord: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const AcceptFinancialOfferEventData = new GraphQLObjectType({
  name: 'AcceptFinancialOfferEventData',
  fields: {
    amountToBuy: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const AcceptFinancialOfferEvent = new GraphQLObjectType({
  name: 'AcceptFinancialOfferEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.AcceptFinancialOffer,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(AcceptFinancialOfferEventData) },
    accounts: { type: new GraphQLNonNull(AcceptFinancialOfferEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CreateTransferProposalEventAccounts = new GraphQLObjectType({
  name: 'CreateTransferProposalEventAccounts',
  fields: {
    governance: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransactionAddress: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    communityTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    destination: { type: new GraphQLNonNull(GraphQLString) },
    treasuryToken: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateTransferProposalEventData = new GraphQLObjectType({
  name: 'CreateTransferProposalEventData',
  fields: {
    useDeny: { type: new GraphQLNonNull(GraphQLBoolean) },
    transferAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const CreateTransferProposalEvent = new GraphQLObjectType({
  name: 'CreateTransferProposalEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateTransferProposal,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateTransferProposalEventData) },
    accounts: { type: new GraphQLNonNull(CreateTransferProposalEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const ExecuteTransferProposalEventAccounts = new GraphQLObjectType({
  name: 'ExecuteTransferProposalEventAccounts',
  fields: {
    governance: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryToken: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransaction: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    tokenLedger: { type: new GraphQLNonNull(GraphQLString) },
    ledgerEntry: { type: new GraphQLNonNull(GraphQLString) },
    destination: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteTransferProposalEvent = new GraphQLObjectType({
  name: 'ExecuteTransferProposalEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ExecuteTransferProposal,
  fields: {
    ...commonEventFields,
    accounts: {
      type: new GraphQLNonNull(ExecuteTransferProposalEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const CreateTransferGovernanceEventAccounts = new GraphQLObjectType({
  name: 'CreateTransferGovernanceEventAccounts',
  fields: {
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    realmAuthority: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    governance: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    governedAccount: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateTransferGovernanceEventData = new GraphQLObjectType({
  name: 'CreateTransferGovernanceEventData',
  fields: {
    maxVotingTime: { type: new GraphQLNonNull(GraphQLInt) },
    voteThresholdPercentage: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const CreateTransferGovernanceEvent = new GraphQLObjectType({
  name: 'CreateTransferGovernanceEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateTransferGovernance,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateTransferGovernanceEventData) },
    accounts: {
      type: new GraphQLNonNull(CreateTransferGovernanceEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const UpdateGovernanceConfigEventAccounts = new GraphQLObjectType({
  name: 'UpdateGovernanceConfigEventAccounts',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    governance: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransaction: { type: new GraphQLNonNull(GraphQLString) },
    communityTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    splGovernance: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const UpdateGovernanceConfigEventData = new GraphQLObjectType({
  name: 'UpdateGovernanceConfigEventData',
  fields: {
    newQuorum: { type: new GraphQLNonNull(GraphQLString) },
    seeds: { type: new GraphQLNonNull(GraphQLString) },
    newVotingTime: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const UpdateGovernanceConfigEvent = new GraphQLObjectType({
  name: 'UpdateGovernanceConfigEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.UpdateGovernanceConfig,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(UpdateGovernanceConfigEventData) },
    accounts: { type: new GraphQLNonNull(UpdateGovernanceConfigEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const ExecuteUpdateGovernanceConfigEventAccounts = new GraphQLObjectType(
  {
    name: 'ExecuteUpdateGovernanceConfigEventAccounts',
    fields: {
      clubData: { type: new GraphQLNonNull(GraphQLString) },
      realm: { type: new GraphQLNonNull(GraphQLString) },
      governance: { type: new GraphQLNonNull(GraphQLString) },
      proposal: { type: new GraphQLNonNull(GraphQLString) },
      proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
      treasury: { type: new GraphQLNonNull(GraphQLString) },
      treasuryData: { type: new GraphQLNonNull(GraphQLString) },
      proposalTransaction: { type: new GraphQLNonNull(GraphQLString) },
      splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    },
  },
)

export const ExecuteUpdateGovernanceConfigEvent = new GraphQLObjectType({
  name: 'ExecuteUpdateGovernanceConfigEvent',
  interfaces: [Event],
  isTypeOf: (item) =>
    item.type === InstructionType.ExecuteUpdateGovernanceConfig,
  fields: {
    ...commonEventFields,
    accounts: {
      type: new GraphQLNonNull(ExecuteUpdateGovernanceConfigEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const CreateUpdateRoleProposalEventAccounts = new GraphQLObjectType({
  name: 'CreateUpdateRoleProposalEventAccounts',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransaction: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    communityMint: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    governance: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateUpdateRoleProposalEventData = new GraphQLObjectType({
  name: 'CreateUpdateRoleProposalEventData',
  fields: {
    roleWeigthConfig: { type: new GraphQLNonNull(UpdateRoleWeight) },
  },
})

export const CreateUpdateRoleProposalEvent = new GraphQLObjectType({
  name: 'CreateUpdateRoleProposalEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateUpdateRoleProposal,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateUpdateRoleProposalEventData) },
    accounts: {
      type: new GraphQLNonNull(CreateUpdateRoleProposalEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const ExecuteUpdateRoleEventAccounts = new GraphQLObjectType({
  name: 'ExecuteUpdateRoleEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransaction: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    governance: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteUpdateRoleEvent = new GraphQLObjectType({
  name: 'ExecuteUpdateRoleEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ExecuteUpdateRole,
  fields: {
    ...commonEventFields,
    accounts: { type: new GraphQLNonNull(ExecuteUpdateRoleEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CreateChangeClubConfigGovernanceEventAccounts =
  new GraphQLObjectType({
    name: 'CreateChangeClubConfigGovernanceEventAccounts',
    fields: {
      realm: { type: new GraphQLNonNull(GraphQLString) },
      clubData: { type: new GraphQLNonNull(GraphQLString) },
      payer: { type: new GraphQLNonNull(GraphQLString) },
      memberData: { type: new GraphQLNonNull(GraphQLString) },
      treasury: { type: new GraphQLNonNull(GraphQLString) },
      treasuryData: { type: new GraphQLNonNull(GraphQLString) },
      governance: { type: new GraphQLNonNull(GraphQLString) },
      realmConfig: { type: new GraphQLNonNull(GraphQLString) },
      realmAuthority: { type: new GraphQLNonNull(GraphQLString) },
      voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
      tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
      goverenedAccount: { type: new GraphQLNonNull(GraphQLString) },
      splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
      systemProgram: { type: new GraphQLNonNull(GraphQLString) },
      tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    },
  })

export const CreateChangeClubConfigGovernanceEventData = new GraphQLObjectType({
  name: 'CreateChangeClubConfigGovernanceEventData',
  fields: {
    voteThreshold: { type: new GraphQLNonNull(GraphQLInt) },
    maxVotingTime: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const CreateChangeClubConfigGovernanceEvent = new GraphQLObjectType({
  name: 'CreateChangeClubConfigGovernanceEvent',
  interfaces: [Event],
  isTypeOf: (item) =>
    item.type === InstructionType.CreateChangeClubConfigGovernance,
  fields: {
    ...commonEventFields,
    data: {
      type: new GraphQLNonNull(CreateChangeClubConfigGovernanceEventData),
    },
    accounts: {
      type: new GraphQLNonNull(CreateChangeClubConfigGovernanceEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const CreateSolseaProposalEventAccounts = new GraphQLObjectType({
  name: 'CreateSolseaProposalEventAccounts',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransaction: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    escrowWantedToken: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    makerWantedToken: { type: new GraphQLNonNull(GraphQLString) },
    offeredTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    wantedTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    governance: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    communityTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    splGovernance: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateSolseaProposalEventData = new GraphQLObjectType({
  name: 'CreateSolseaProposalEventData',
  fields: {
    treasuryIndex: { type: new GraphQLNonNull(GraphQLInt) },
    chainId: { type: new GraphQLNonNull(GraphQLString) },
    offeredAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    wantedAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
    sellerFeeBps: { type: new GraphQLNonNull(GraphQLInt) },
    useDeny: { type: new GraphQLNonNull(GraphQLBoolean) },
    action: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const CreateSolseaProposalEvent = new GraphQLObjectType({
  name: 'CreateSolseaProposalEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateSolseaProposal,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateSolseaProposalEventData) },
    accounts: { type: new GraphQLNonNull(CreateSolseaProposalEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const ExecuteSolseaTransactionEventAccounts = new GraphQLObjectType({
  name: 'ExecuteSolseaTransactionEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    solseaEscrow: { type: new GraphQLNonNull(GraphQLString) },
    authorityAccount: { type: new GraphQLNonNull(GraphQLString) },
    solseaProfitAccount: { type: new GraphQLNonNull(GraphQLString) },
    solseaEscrowTokens: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    maker: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransaction: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    solseaProgram: { type: new GraphQLNonNull(GraphQLString) },
    wantedTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    offeredTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    escrowWantedToken: { type: new GraphQLNonNull(GraphQLString) },
    makerWantedToken: { type: new GraphQLNonNull(GraphQLString) },
    makerOfferedToken: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    splGovernance: { type: new GraphQLNonNull(GraphQLString) },
    governance: { type: new GraphQLNonNull(GraphQLString) },
    profitAccount: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteSolseaTransactionEventData = new GraphQLObjectType({
  name: 'ExecuteSolseaTransactionEventData',
  fields: {
    action: { type: new GraphQLNonNull(GraphQLInt) },
    treasuryIndex: { type: new GraphQLNonNull(GraphQLInt) },
    chainId: { type: new GraphQLNonNull(GraphQLString) },
    authorityBump: { type: new GraphQLNonNull(GraphQLInt) },
    creatorsCount: { type: new GraphQLNonNull(GraphQLInt) },
    sellerFeeBps: { type: new GraphQLNonNull(GraphQLInt) },
    royalties: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteSolseaTransactionEvent = new GraphQLObjectType({
  name: 'ExecuteSolseaTransactionEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ExecuteSolseaTransaction,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(ExecuteSolseaTransactionEventData) },
    accounts: {
      type: new GraphQLNonNull(ExecuteSolseaTransactionEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const CancelSolseaOfferEventAccounts = new GraphQLObjectType({
  name: 'CancelSolseaOfferEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    solseaEscrow: { type: new GraphQLNonNull(GraphQLString) },
    solseaEscrowTokens: { type: new GraphQLNonNull(GraphQLString) },
    offeredTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    solseaAuthority: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    makerOfferedTokens: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    solseaProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CancelSolseaOfferEventData = new GraphQLObjectType({
  name: 'CancelSolseaOfferEventData',
  fields: {
    chainId: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CancelSolseaOfferEvent = new GraphQLObjectType({
  name: 'CancelSolseaOfferEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CancelSolseaOffer,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CancelSolseaOfferEventData) },
    accounts: { type: new GraphQLNonNull(CancelSolseaOfferEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const ReserveRightsEventAccounts = new GraphQLObjectType({
  name: 'ReserveRightsEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ReserveRightsEvent = new GraphQLObjectType({
  name: 'ReserveRightsEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ReserveRights,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(ReservedRights) },
    accounts: { type: new GraphQLNonNull(ReserveRightsEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const UpdateAllocationEventAccounts = new GraphQLObjectType({
  name: 'UpdateAllocationEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    fundraiseConfig: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const UpdateAllocationEventData = new GraphQLObjectType({
  name: 'UpdateAllocationEventData',
  fields: {
    equal: { type: new GraphQLNonNull(GraphQLBigNumber) },
    customAllocations: { type: new GraphQLNonNull(CustomAllocation) },
    removeAllocation: { type: new GraphQLNonNull(CustomAllocation) },
    newCap: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const UpdateAllocationEvent = new GraphQLObjectType({
  name: 'UpdateAllocationEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.UpdateAllocation,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(UpdateAllocationEventData) },
    accounts: { type: new GraphQLNonNull(UpdateAllocationEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CreateAddSellPermissionProposalEventAccounts =
  new GraphQLObjectType({
    name: 'CreateAddSellPermissionProposalEventAccounts',
    fields: {
      governance: { type: new GraphQLNonNull(GraphQLString) },
      realm: { type: new GraphQLNonNull(GraphQLString) },
      governanceAuthority: { type: new GraphQLNonNull(GraphQLString) },
      realmConfig: { type: new GraphQLNonNull(GraphQLString) },
      proposal: { type: new GraphQLNonNull(GraphQLString) },
      proposalTransactionAddress: { type: new GraphQLNonNull(GraphQLString) },
      tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
      splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
      communityTokenMint: { type: new GraphQLNonNull(GraphQLString) },
      payer: { type: new GraphQLNonNull(GraphQLString) },
      voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
      treasuryData: { type: new GraphQLNonNull(GraphQLString) },
      proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
      clubData: { type: new GraphQLNonNull(GraphQLString) },
      rent: { type: new GraphQLNonNull(GraphQLString) },
      systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    },
  })

export const CreateAddSellPermissionProposalEvent = new GraphQLObjectType({
  name: 'CreateAddSellPermissionProposalEvent',
  interfaces: [Event],
  isTypeOf: (item) =>
    item.type === InstructionType.CreateAddSellPermissionProposal,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(GraphQLBoolean) },
    accounts: {
      type: new GraphQLNonNull(CreateAddSellPermissionProposalEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const ExecuteSellPermissionTransactionEventAccounts =
  new GraphQLObjectType({
    name: 'ExecuteSellPermissionTransactionEventAccounts',
    fields: {
      governance: { type: new GraphQLNonNull(GraphQLString) },
      realm: { type: new GraphQLNonNull(GraphQLString) },
      realmConfig: { type: new GraphQLNonNull(GraphQLString) },
      proposal: { type: new GraphQLNonNull(GraphQLString) },
      proposalTransaction: { type: new GraphQLNonNull(GraphQLString) },
      splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
      tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
      voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
      payer: { type: new GraphQLNonNull(GraphQLString) },
      proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
      clubData: { type: new GraphQLNonNull(GraphQLString) },
      treasuryData: { type: new GraphQLNonNull(GraphQLString) },
      memberData: { type: new GraphQLNonNull(GraphQLString) },
      clubProgram: { type: new GraphQLNonNull(GraphQLString) },
      spcGovernance: { type: new GraphQLNonNull(GraphQLString) },
      spcGovernedAccount: { type: new GraphQLNonNull(GraphQLString) },
      systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    },
  })

export const ExecuteSellPermissionTransactionEvent = new GraphQLObjectType({
  name: 'ExecuteSellPermissionTransactionEvent',
  interfaces: [Event],
  isTypeOf: (item) =>
    item.type === InstructionType.ExecuteSellPermissionTransaction,
  fields: {
    ...commonEventFields,
    accounts: {
      type: new GraphQLNonNull(ExecuteSellPermissionTransactionEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const AddStakeConfigToStakeRecordEventAccounts = new GraphQLObjectType({
  name: 'AddStakeConfigToStakeRecordEventAccounts',
  fields: {
    payer: { type: new GraphQLNonNull(GraphQLString) },
    stakeRecord: { type: new GraphQLNonNull(GraphQLString) },
    stakeConfig: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const AddStakeConfigToStakeRecordEvent = new GraphQLObjectType({
  name: 'AddStakeConfigToStakeRecordEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.AddStakeConfigToStakeRecord,
  fields: {
    ...commonEventFields,
    accounts: {
      type: new GraphQLNonNull(AddStakeConfigToStakeRecordEventAccounts),
    },
  },
})

/*----------------------------------------------------------------------*/

export const AddCanLeaveActionEventAccounts = new GraphQLObjectType({
  name: 'AddCanLeaveActionEventAccounts',
  fields: {
    payer: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const AddCanLeaveActionEvent = new GraphQLObjectType({
  name: 'AddCanLeaveActionEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.AddCanLeaveAction,
  fields: {
    ...commonEventFields,
    accounts: { type: new GraphQLNonNull(AddCanLeaveActionEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const Events = new GraphQLList(Event)

export const types = [
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
]
