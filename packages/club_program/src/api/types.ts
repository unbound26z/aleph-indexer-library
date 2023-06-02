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
    Syndicate: { value: 'Syndicate' },
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

export const WhitelistingAction = new GraphQLEnumType({
  name: 'WhitelistingAction',
  values: {
    Add: { value: 'Add' },
    Remove: { value: 'Remove' },
  },
})

export const AdminPermission = new GraphQLEnumType({
  name: 'AdminPermission',
  values: {
    CreateClub: { value: 'CreateClub' },
    WhitelistMembers: { value: 'WhitelistMembers' },
  },
})

export const AdminStatus = new GraphQLEnumType({
  name: 'AdminStatus',
  values: {
    Accepted: { value: 'Accepted' },
    Rejected: { value: 'Rejected' },
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

export const InitializeType = new GraphQLEnumType({
  name: 'InitializeType',
  values: {
    MagicEdenSell: { value: 'MagicEdenSell' },
    MagicEdenBuy: { value: 'MagicEdenBuy' },
    RegularBuySell: { value: 'RegularBuySell' },
    Solsea: { value: 'Solsea' },
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

export const UpdateAllocationAction = new GraphQLEnumType({
  name: 'UpdateAllocationAction',
  values: {
    UpdateCustomAllocation: { value: 'UpdateCustomAllocation' },
    RemoveCustomAllocation: { value: 'RemoveCustomAllocation' },
    UpdateEqual: { value: 'UpdateEqual' },
  },
})

export const FundraiseAction = new GraphQLEnumType({
  name: 'FundraiseAction',
  values: {
    Create: { value: 'Create' },
    Finish: { value: 'Finish' },
  },
})

export const GovernanceType = new GraphQLEnumType({
  name: 'GovernanceType',
  values: {
    Treasury: { value: 'Treasury' },
    Withdrawal: { value: 'Withdrawal' },
    Transfer: { value: 'Transfer' },
    SellPermission: { value: 'SellPermission' },
    GovernanceChange: { value: 'GovernanceChange' },
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

export const MemberStatus = new GraphQLEnumType({
  name: 'MemberStatus',
  values: {
    Uninvited: { value: 'Uninvited' },
    Pending: { value: 'Pending' },
    Accepted: { value: 'Accepted' },
    Rejected: { value: 'Rejected' },
    Cancelled: { value: 'Cancelled' },
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
    CancelledByOwner: { value: 'CancelledByOwner' },
    CreatedUpdateGovernanceConfig: { value: 'CreatedUpdateGovernanceConfig' },
    ExecutedUpdateGovernanceConfig: { value: 'ExecutedUpdateGovernanceConfig' },
    CreatedUpdateRoleConfig: { value: 'CreatedUpdateRoleConfig' },
    ExecutedUpdateRoleConfig: { value: 'ExecutedUpdateRoleConfig' },
    ExecutedSolseaBuy: { value: 'ExecutedSolseaBuy' },
    ExecutedSolseaSell: { value: 'ExecutedSolseaSell' },
    CreatedMetadata: { value: 'CreatedMetadata' },
    ProposalCreated: { value: 'ProposalCreated' },
    ProposalPreparing: { value: 'ProposalPreparing' },
    ProposalReady: { value: 'ProposalReady' },
    ProposalExecuted: { value: 'ProposalExecuted' },
  },
})

export const ProposalAction = new GraphQLEnumType({
  name: 'ProposalAction',
  values: {
    BuyNFT: { value: 'BuyNFT' },
    SellNFT: { value: 'SellNFT' },
  },
})

export const ProposalUpdateStatus = new GraphQLEnumType({
  name: 'ProposalUpdateStatus',
  values: {
    Updating: { value: 'Updating' },
    Finished: { value: 'Finished' },
    Close: { value: 'Close' },
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
    Ft: { value: 'Ft' },
    Nft: { value: 'Nft' },
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

export const TreasuryAction = new GraphQLEnumType({
  name: 'TreasuryAction',
  values: {
    CreateDiscussionProposal: { value: 'CreateDiscussionProposal' },
    CreateP2PProposal: { value: 'CreateP2PProposal' },
    CreateWithdrawalProposal: { value: 'CreateWithdrawalProposal' },
    CreateTransferProposal: { value: 'CreateTransferProposal' },
    CreateMeProposal: { value: 'CreateMeProposal' },
    SignOffProposal: { value: 'SignOffProposal' },
    CancelProposal: { value: 'CancelProposal' },
    CancelP2POffer: { value: 'CancelP2POffer' },
  },
})

export const AllowType = new GraphQLEnumType({
  name: 'AllowType',
  values: {
    Club: { value: 'Club' },
    Treasury: { value: 'Treasury' },
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
    clubActions: { type: new GraphQLNonNull(ClubAction) },
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

export const AdminConfig = new GraphQLObjectType({
  name: 'AdminConfig',
  fields: {
    admin: { type: new GraphQLNonNull(GraphQLString) },
    permissions: { type: new GraphQLNonNull(AdminPermission) },
    status: { type: new GraphQLNonNull(AdminStatus) },
  },
})

export const FundraiseFeeConfig = new GraphQLObjectType({
  name: 'FundraiseFeeConfig',
  fields: {
    authority: { type: new GraphQLNonNull(GraphQLString) },
    feePercentage: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const OtcFeeConfig = new GraphQLObjectType({
  name: 'OtcFeeConfig',
  fields: {
    authority: { type: new GraphQLNonNull(GraphQLString) },
    feePercentage: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const Offer = new GraphQLObjectType({
  name: 'Offer',
  fields: {
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

export const UpdateGovernanceConfigInput = new GraphQLObjectType({
  name: 'UpdateGovernanceConfigInput',
  fields: {
    newQuorums: { type: new GraphQLNonNull(GraphQLString) },
    seeds: { type: new GraphQLNonNull(GraphQLString) },
    newVotingTime: { type: new GraphQLNonNull(GraphQLInt) },
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

export const UpdateMemberDto = new GraphQLObjectType({
  name: 'UpdateMemberDto',
  fields: {
    isMember: { type: new GraphQLNonNull(GraphQLBoolean) },
    status: { type: new GraphQLNonNull(MemberStatus) },
    role: { type: new GraphQLNonNull(GraphQLString) },
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

export const GovernanceDto = new GraphQLObjectType({
  name: 'GovernanceDto',
  fields: {
    governanceType: { type: new GraphQLNonNull(GovernanceType) },
    maxVotingTime: { type: new GraphQLNonNull(GraphQLInt) },
    voteThresholdPercentage: { type: new GraphQLNonNull(GraphQLInt) },
    sellPermission: { type: new GraphQLNonNull(SellPermission) },
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

export const TreasuryRoleConfig = new GraphQLObjectType({
  name: 'TreasuryRoleConfig',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    roleWeight: { type: new GraphQLNonNull(GraphQLBigNumber) },
    treasuryActions: { type: new GraphQLNonNull(TreasuryAction) },
    membersCount: { type: new GraphQLNonNull(GraphQLInt) },
    isDefault: { type: new GraphQLNonNull(GraphQLBoolean) },
  },
})

export const TreasuryRolesDto = new GraphQLObjectType({
  name: 'TreasuryRolesDto',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    roleWeight: { type: new GraphQLNonNull(GraphQLBigNumber) },
    treasuryActions: { type: new GraphQLNonNull(TreasuryAction) },
    isDefault: { type: new GraphQLNonNull(GraphQLBoolean) },
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
    WhitelistingData: { type: new GraphQLNonNull(GraphQLInt) },
    Admins: { type: new GraphQLNonNull(GraphQLInt) },
    ClubVault: { type: new GraphQLNonNull(GraphQLInt) },
    ClubVaultData: { type: new GraphQLNonNull(GraphQLInt) },
    Withdrawal: { type: new GraphQLNonNull(GraphQLInt) },
    WithdrawalData: { type: new GraphQLNonNull(GraphQLInt) },
    FundraiseConfig: { type: new GraphQLNonNull(GraphQLInt) },
    FinancialRecord: { type: new GraphQLNonNull(GraphQLInt) },
    FinancialRecordOffer: { type: new GraphQLNonNull(GraphQLInt) },
    MaxVoterWeightRecord: { type: new GraphQLNonNull(GraphQLInt) },
    VoterWeightRecord: { type: new GraphQLNonNull(GraphQLInt) },
    AllowedMemberData: { type: new GraphQLNonNull(GraphQLInt) },
    NftVoteRecord: { type: new GraphQLNonNull(GraphQLInt) },
    ProposalMetadata: { type: new GraphQLNonNull(GraphQLInt) },
    StakeConfig: { type: new GraphQLNonNull(GraphQLInt) },
    StakeRecord: { type: new GraphQLNonNull(GraphQLInt) },
    TreasuryData: { type: new GraphQLNonNull(GraphQLInt) },
    UniverseMetadata: { type: new GraphQLNonNull(GraphQLInt) },
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
    WhitelistingData: { value: 'WhitelistingData' },
    Admins: { value: 'Admins' },
    ClubVault: { value: 'ClubVault' },
    ClubVaultData: { value: 'ClubVaultData' },
    Withdrawal: { value: 'Withdrawal' },
    WithdrawalData: { value: 'WithdrawalData' },
    FundraiseConfig: { value: 'FundraiseConfig' },
    FinancialRecord: { value: 'FinancialRecord' },
    FinancialRecordOffer: { value: 'FinancialRecordOffer' },
    MaxVoterWeightRecord: { value: 'MaxVoterWeightRecord' },
    VoterWeightRecord: { value: 'VoterWeightRecord' },
    AllowedMemberData: { value: 'AllowedMemberData' },
    NftVoteRecord: { value: 'NftVoteRecord' },
    ProposalMetadata: { value: 'ProposalMetadata' },
    StakeConfig: { value: 'StakeConfig' },
    StakeRecord: { value: 'StakeRecord' },
    TreasuryData: { value: 'TreasuryData' },
    UniverseMetadata: { value: 'UniverseMetadata' },
  },
})

export const ClubData = new GraphQLObjectType({
  name: 'ClubData',
  fields: {
    authority: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    slotCreated: { type: new GraphQLNonNull(GraphQLBigNumber) },
    clubType: { type: new GraphQLNonNull(ClubType) },
    roleConfig: { type: new GraphQLNonNull(RoleConfig) },
    treasuryCount: { type: new GraphQLNonNull(GraphQLInt) },
    stakeCount: { type: new GraphQLNonNull(GraphQLInt) },
    activeStakeCount: { type: new GraphQLNonNull(GraphQLInt) },
    hasActiveStaking: { type: new GraphQLNonNull(GraphQLBoolean) },
    numberOfMembers: { type: new GraphQLNonNull(GraphQLInt) },
    defaultRole: { type: new GraphQLNonNull(GraphQLString) },
    kycConfig: { type: new GraphQLNonNull(KycConfig) },
  },
})

export const WhitelistingData = new GraphQLObjectType({
  name: 'WhitelistingData',
  fields: {
    whitelistedMembers: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const Admins = new GraphQLObjectType({
  name: 'Admins',
  fields: {
    feeWallet: { type: new GraphQLNonNull(GraphQLString) },
    feePercentage: { type: new GraphQLNonNull(GraphQLInt) },
    adminConfigs: { type: new GraphQLNonNull(AdminConfig) },
    fundraiseFeeConfigs: { type: new GraphQLNonNull(FundraiseFeeConfig) },
    otcFeeConfigs: { type: new GraphQLNonNull(OtcFeeConfig) },
  },
})

export const ClubVault = new GraphQLObjectType({
  name: 'ClubVault',
  fields: {},
})

export const ClubVaultData = new GraphQLObjectType({
  name: 'ClubVaultData',
  fields: {
    chainId: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const Withdrawal = new GraphQLObjectType({
  name: 'Withdrawal',
  fields: {},
})

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
    treasuryRole: { type: new GraphQLNonNull(GraphQLString) },
    createdAt: { type: new GraphQLNonNull(GraphQLBigNumber) },
    createdAtSlot: { type: new GraphQLNonNull(GraphQLBigNumber) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
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

export const AllowedMemberData = new GraphQLObjectType({
  name: 'AllowedMemberData',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberPubkey: { type: new GraphQLNonNull(GraphQLString) },
    isMember: { type: new GraphQLNonNull(GraphQLBoolean) },
    status: { type: new GraphQLNonNull(MemberStatus) },
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

export const TreasuryData = new GraphQLObjectType({
  name: 'TreasuryData',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
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
    reservedRights: { type: new GraphQLNonNull(ReservedRights) },
    treasuryRoleConfig: { type: new GraphQLNonNull(TreasuryRoleConfig) },
    defaultTreasuryRole: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
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
    rarity: { type: new GraphQLNonNull(Rarity) },
    evolutionPoints: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const ParsedAccountsData = new GraphQLUnionType({
  name: 'ParsedAccountsData',
  types: [
    ClubData,
    WhitelistingData,
    Admins,
    ClubVault,
    ClubVaultData,
    Withdrawal,
    WithdrawalData,
    FundraiseConfig,
    FinancialRecord,
    FinancialRecordOffer,
    MaxVoterWeightRecord,
    VoterWeightRecord,
    AllowedMemberData,
    NftVoteRecord,
    ProposalMetadata,
    StakeConfig,
    StakeRecord,
    TreasuryData,
    UniverseMetadata,
  ],
  resolveType: (obj) => {
    // here is selected a unique property of each account to discriminate between types
    if (obj.kycConfig) {
      return 'ClubData'
    }
    if (obj.whitelistedMembers) {
      return 'WhitelistingData'
    }
    if (obj.otcFeeConfigs) {
      return 'Admins'
    }
    if (obj.chainId) {
      return 'ClubVaultData'
    }
    if (obj.proposalCreatedAt) {
      return 'WithdrawalData'
    }
    if (obj.allocation) {
      return 'FundraiseConfig'
    }
    if (obj.tokenOwnerRecord) {
      return 'FinancialRecord'
    }
    if (obj.initialAmountOfRights) {
      return 'FinancialRecordOffer'
    }
    if (obj.reserved) {
      return 'MaxVoterWeightRecord'
    }
    if (obj.reserved) {
      return 'VoterWeightRecord'
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
    if (obj.name) {
      return 'TreasuryData'
    }
    if (obj.evolutionPoints) {
      return 'UniverseMetadata'
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
    CreateGovernanceEvent: { value: 'CreateGovernanceEvent' },
    CreateTreasuryEvent: { value: 'CreateTreasuryEvent' },
    SupportClubEvent: { value: 'SupportClubEvent' },
    LeaveClubEvent: { value: 'LeaveClubEvent' },
    CreateClubProposalEvent: { value: 'CreateClubProposalEvent' },
    AllowMemberEvent: { value: 'AllowMemberEvent' },
    UpdateMemberEvent: { value: 'UpdateMemberEvent' },
    AcceptMembershipEvent: { value: 'AcceptMembershipEvent' },
    CancelInvitationEvent: { value: 'CancelInvitationEvent' },
    UpdateVoterWeightEvent: { value: 'UpdateVoterWeightEvent' },
    ExecuteProposalEvent: { value: 'ExecuteProposalEvent' },
    DistributeEvent: { value: 'DistributeEvent' },
    CastNftVoteEvent: { value: 'CastNftVoteEvent' },
    InitializeStakingEvent: { value: 'InitializeStakingEvent' },
    StakeTokensEvent: { value: 'StakeTokensEvent' },
    ClaimStakedTokensEvent: { value: 'ClaimStakedTokensEvent' },
    UnstakeTokensEvent: { value: 'UnstakeTokensEvent' },
    FinishStakingEvent: { value: 'FinishStakingEvent' },
    StartStakingEvent: { value: 'StartStakingEvent' },
    InitializeStakingRewardEvent: { value: 'InitializeStakingRewardEvent' },
    UpdateProposalMetadataEvent: { value: 'UpdateProposalMetadataEvent' },
    CreateFinancialOfferEvent: { value: 'CreateFinancialOfferEvent' },
    CancelFinancialOfferEvent: { value: 'CancelFinancialOfferEvent' },
    AcceptFinancialOfferEvent: { value: 'AcceptFinancialOfferEvent' },
    ReserveRightsEvent: { value: 'ReserveRightsEvent' },
    UpdateAllocationEvent: { value: 'UpdateAllocationEvent' },
    ConfigureWhitelistingsEvent: { value: 'ConfigureWhitelistingsEvent' },
    ConfigureAdminsEvent: { value: 'ConfigureAdminsEvent' },
    MigrateFinancialsEvent: { value: 'MigrateFinancialsEvent' },
    InsertTransactionEvent: { value: 'InsertTransactionEvent' },
    FundraiseEvent: { value: 'FundraiseEvent' },
    CancelProposalEvent: { value: 'CancelProposalEvent' },
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
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateClubEvent = new GraphQLObjectType({
  name: 'CreateClubEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateClub,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(GraphQLString) },
    accounts: { type: new GraphQLNonNull(CreateClubEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CreateGovernanceEventAccounts = new GraphQLObjectType({
  name: 'CreateGovernanceEventAccounts',
  fields: {
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    realmConfig: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateGovernanceEventData = new GraphQLObjectType({
  name: 'CreateGovernanceEventData',
  fields: {
    governanceDtos: { type: new GraphQLNonNull(GovernanceDto) },
  },
})

export const CreateGovernanceEvent = new GraphQLObjectType({
  name: 'CreateGovernanceEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateGovernance,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateGovernanceEventData) },
    accounts: { type: new GraphQLNonNull(CreateGovernanceEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CreateTreasuryEventAccounts = new GraphQLObjectType({
  name: 'CreateTreasuryEventAccounts',
  fields: {
    payer: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    profit: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    vaultData: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    financialRecord: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    splGovernance: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateTreasuryEventData = new GraphQLObjectType({
  name: 'CreateTreasuryEventData',
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    chainId: { type: new GraphQLNonNull(GraphQLString) },
    nftMaxVoterWeight: { type: new GraphQLNonNull(GraphQLBigNumber) },
    roleDtos: { type: new GraphQLNonNull(TreasuryRolesDto) },
  },
})

export const CreateTreasuryEvent = new GraphQLObjectType({
  name: 'CreateTreasuryEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateTreasury,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(CreateTreasuryEventData) },
    accounts: { type: new GraphQLNonNull(CreateTreasuryEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const SupportClubEventAccounts = new GraphQLObjectType({
  name: 'SupportClubEventAccounts',
  fields: {
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    fundraiseConfig: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    financialRecord: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const SupportClubEvent = new GraphQLObjectType({
  name: 'SupportClubEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.SupportClub,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(SupportType) },
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
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    communityTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    maxVoterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CreateClubProposalEvent = new GraphQLObjectType({
  name: 'CreateClubProposalEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CreateClubProposal,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(GraphQLBoolean) },
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
    realm: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const AllowMemberEvent = new GraphQLObjectType({
  name: 'AllowMemberEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.AllowMember,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(GraphQLString) },
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
    realm: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
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

export const UpdateVoterWeightEventAccounts = new GraphQLObjectType({
  name: 'UpdateVoterWeightEventAccounts',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const UpdateVoterWeightEvent = new GraphQLObjectType({
  name: 'UpdateVoterWeightEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.UpdateVoterWeight,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(ClubAction) },
    accounts: { type: new GraphQLNonNull(UpdateVoterWeightEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const ExecuteProposalEventAccounts = new GraphQLObjectType({
  name: 'ExecuteProposalEventAccounts',
  fields: {
    governance: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransaction: { type: new GraphQLNonNull(GraphQLString) },
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ExecuteProposalEvent = new GraphQLObjectType({
  name: 'ExecuteProposalEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ExecuteProposal,
  fields: {
    ...commonEventFields,
    accounts: { type: new GraphQLNonNull(ExecuteProposalEventAccounts) },
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

export const CastNftVoteEventAccounts = new GraphQLObjectType({
  name: 'CastNftVoteEventAccounts',
  fields: {
    realm: { type: new GraphQLNonNull(GraphQLString) },
    voterWeightRecord: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
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

export const InitializeStakingEvent = new GraphQLObjectType({
  name: 'InitializeStakingEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.InitializeStaking,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(GraphQLString) },
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

export const StakeTokensEvent = new GraphQLObjectType({
  name: 'StakeTokensEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.StakeTokens,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(GraphQLBigNumber) },
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

export const ClaimStakedTokensEvent = new GraphQLObjectType({
  name: 'ClaimStakedTokensEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ClaimStakedTokens,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(StakeOption) },
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

export const UnstakeTokensEvent = new GraphQLObjectType({
  name: 'UnstakeTokensEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.UnstakeTokens,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(StakeOption) },
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

export const FinishStakingEvent = new GraphQLObjectType({
  name: 'FinishStakingEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.FinishStaking,
  fields: {
    ...commonEventFields,
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

export const StartStakingEvent = new GraphQLObjectType({
  name: 'StartStakingEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.StartStaking,
  fields: {
    ...commonEventFields,
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

export const UpdateProposalMetadataEventAccounts = new GraphQLObjectType({
  name: 'UpdateProposalMetadataEventAccounts',
  fields: {
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const UpdateProposalMetadataEventData = new GraphQLObjectType({
  name: 'UpdateProposalMetadataEventData',
  fields: {
    description: { type: new GraphQLNonNull(GraphQLString) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    options: { type: new GraphQLNonNull(GraphQLString) },
    discussionLink: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const UpdateProposalMetadataEvent = new GraphQLObjectType({
  name: 'UpdateProposalMetadataEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.UpdateProposalMetadata,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(UpdateProposalMetadataEventData) },
    accounts: { type: new GraphQLNonNull(UpdateProposalMetadataEventAccounts) },
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
    buyerTokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
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

export const ConfigureWhitelistingsEventAccounts = new GraphQLObjectType({
  name: 'ConfigureWhitelistingsEventAccounts',
  fields: {
    payer: { type: new GraphQLNonNull(GraphQLString) },
    whitelistingData: { type: new GraphQLNonNull(GraphQLString) },
    adminsData: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ConfigureWhitelistingsEvent = new GraphQLObjectType({
  name: 'ConfigureWhitelistingsEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ConfigureWhitelistings,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(GraphQLString) },
    accounts: { type: new GraphQLNonNull(ConfigureWhitelistingsEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const ConfigureAdminsEventAccounts = new GraphQLObjectType({
  name: 'ConfigureAdminsEventAccounts',
  fields: {
    admins: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const ConfigureAdminsEventData = new GraphQLObjectType({
  name: 'ConfigureAdminsEventData',
  fields: {
    admins: { type: new GraphQLNonNull(AdminConfig) },
    feeWallet: { type: new GraphQLNonNull(GraphQLString) },
    feePercentage: { type: new GraphQLNonNull(GraphQLInt) },
    fundraiseFeeConfigs: { type: new GraphQLNonNull(FundraiseFeeConfig) },
    otcFeeConfigs: { type: new GraphQLNonNull(OtcFeeConfig) },
  },
})

export const ConfigureAdminsEvent = new GraphQLObjectType({
  name: 'ConfigureAdminsEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.ConfigureAdmins,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(ConfigureAdminsEventData) },
    accounts: { type: new GraphQLNonNull(ConfigureAdminsEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const MigrateFinancialsEventAccounts = new GraphQLObjectType({
  name: 'MigrateFinancialsEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    payerMemberData: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    member: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    financialRecord: { type: new GraphQLNonNull(GraphQLString) },
    fundraiseConfig: { type: new GraphQLNonNull(GraphQLString) },
    splGovernance: { type: new GraphQLNonNull(GraphQLString) },
    realm: { type: new GraphQLNonNull(GraphQLString) },
    governingTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const MigrateFinancialsEventData = new GraphQLObjectType({
  name: 'MigrateFinancialsEventData',
  fields: {
    usdcAmount: { type: new GraphQLNonNull(GraphQLBigNumber) },
  },
})

export const MigrateFinancialsEvent = new GraphQLObjectType({
  name: 'MigrateFinancialsEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.MigrateFinancials,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(MigrateFinancialsEventData) },
    accounts: { type: new GraphQLNonNull(MigrateFinancialsEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const InsertTransactionEventAccounts = new GraphQLObjectType({
  name: 'InsertTransactionEventAccounts',
  fields: {
    splGovernanceProgram: { type: new GraphQLNonNull(GraphQLString) },
    governance: { type: new GraphQLNonNull(GraphQLString) },
    proposal: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    proposalTransaction: { type: new GraphQLNonNull(GraphQLString) },
    tokenOwnerRecord: { type: new GraphQLNonNull(GraphQLString) },
    communityTokenMint: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    rent: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const InsertTransactionEventData = new GraphQLObjectType({
  name: 'InsertTransactionEventData',
  fields: {
    data: { type: new GraphQLNonNull(GraphQLString) },
    signerIndexes: { type: new GraphQLNonNull(GraphQLInt) },
  },
})

export const InsertTransactionEvent = new GraphQLObjectType({
  name: 'InsertTransactionEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.InsertTransaction,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(InsertTransactionEventData) },
    accounts: { type: new GraphQLNonNull(InsertTransactionEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const FundraiseEventAccounts = new GraphQLObjectType({
  name: 'FundraiseEventAccounts',
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

export const FundraiseEvent = new GraphQLObjectType({
  name: 'FundraiseEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.Fundraise,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(FundraiseAction) },
    accounts: { type: new GraphQLNonNull(FundraiseEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const CancelProposalEventAccounts = new GraphQLObjectType({
  name: 'CancelProposalEventAccounts',
  fields: {
    clubData: { type: new GraphQLNonNull(GraphQLString) },
    memberData: { type: new GraphQLNonNull(GraphQLString) },
    offer: { type: new GraphQLNonNull(GraphQLString) },
    proposalMetadata: { type: new GraphQLNonNull(GraphQLString) },
    vault: { type: new GraphQLNonNull(GraphQLString) },
    treasury: { type: new GraphQLNonNull(GraphQLString) },
    treasuryData: { type: new GraphQLNonNull(GraphQLString) },
    makerOfferedTokens: { type: new GraphQLNonNull(GraphQLString) },
    payer: { type: new GraphQLNonNull(GraphQLString) },
    escrowProgram: { type: new GraphQLNonNull(GraphQLString) },
    tokenProgram: { type: new GraphQLNonNull(GraphQLString) },
    systemProgram: { type: new GraphQLNonNull(GraphQLString) },
  },
})

export const CancelProposalEvent = new GraphQLObjectType({
  name: 'CancelProposalEvent',
  interfaces: [Event],
  isTypeOf: (item) => item.type === InstructionType.CancelProposal,
  fields: {
    ...commonEventFields,
    data: { type: new GraphQLNonNull(GraphQLString) },
    accounts: { type: new GraphQLNonNull(CancelProposalEventAccounts) },
  },
})

/*----------------------------------------------------------------------*/

export const Events = new GraphQLList(Event)

export const types = [
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
]
