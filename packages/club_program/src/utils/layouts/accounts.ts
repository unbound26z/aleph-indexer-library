import {
  clubDataDiscriminator,
  clubDataBeet,
  clubVaultDataDiscriminator,
  clubVaultDataBeet,
  fundraiseConfigDiscriminator,
  fundraiseConfigBeet,
  financialRecordDiscriminator,
  financialRecordBeet,
  financialRecordOfferDiscriminator,
  financialRecordOfferBeet,
  financialRecordDepricatedDiscriminator,
  financialRecordDepricatedBeet,
  magicEdenDataDiscriminator,
  magicEdenDataBeet,
  maxVoterWeightRecordDiscriminator,
  maxVoterWeightRecordBeet,
  allowedMemberDataDiscriminator,
  allowedMemberDataBeet,
  nftVoteRecordDiscriminator,
  nftVoteRecordBeet,
  proposalMetadataDiscriminator,
  proposalMetadataBeet,
  stakeConfigDiscriminator,
  stakeConfigBeet,
  stakeRecordDiscriminator,
  stakeRecordBeet,
  transferProfitDataDiscriminator,
  transferProfitDataBeet,
  treasuryDataDiscriminator,
  treasuryDataBeet,
  universeMetadataDiscriminator,
  universeMetadataBeet,
  voterWeightRecordDiscriminator,
  voterWeightRecordBeet,
  withdrawalDataDiscriminator,
  withdrawalDataBeet,
} from './solita/index.js'

export enum AccountType {
  ClubData = 'ClubData',
  // ClubVault = 'ClubVault',
  ClubVaultData = 'ClubVaultData',
  FundraiseConfig = 'FundraiseConfig',
  FinancialRecord = 'FinancialRecord',
  FinancialRecordOffer = 'FinancialRecordOffer',
  FinancialRecordDepricated = 'FinancialRecordDepricated',
  MagicEdenData = 'MagicEdenData',
  MaxVoterWeightRecord = 'MaxVoterWeightRecord',
  AllowedMemberData = 'AllowedMemberData',
  NftVoteRecord = 'NftVoteRecord',
  ProposalMetadata = 'ProposalMetadata',
  StakeConfig = 'StakeConfig',
  StakeRecord = 'StakeRecord',
  TransferProfitData = 'TransferProfitData',
  // ClubTreasury = 'ClubTreasury',
  TreasuryData = 'TreasuryData',
  UniverseMetadata = 'UniverseMetadata',
  VoterWeightRecord = 'VoterWeightRecord',
  // Withdrawal = 'Withdrawal',
  WithdrawalData = 'WithdrawalData',
}

export const ACCOUNT_DISCRIMINATOR: Record<AccountType, Buffer> = {
  [AccountType.ClubData]: Buffer.from(clubDataDiscriminator),
  // [AccountType.ClubVault]: Buffer.from(clubVaultDiscriminator),
  [AccountType.ClubVaultData]: Buffer.from(clubVaultDataDiscriminator),
  [AccountType.FundraiseConfig]: Buffer.from(fundraiseConfigDiscriminator),
  [AccountType.FinancialRecord]: Buffer.from(financialRecordDiscriminator),
  [AccountType.FinancialRecordOffer]: Buffer.from(
    financialRecordOfferDiscriminator,
  ),
  [AccountType.FinancialRecordDepricated]: Buffer.from(
    financialRecordDepricatedDiscriminator,
  ),
  [AccountType.MagicEdenData]: Buffer.from(magicEdenDataDiscriminator),
  [AccountType.MaxVoterWeightRecord]: Buffer.from(
    maxVoterWeightRecordDiscriminator,
  ),
  [AccountType.AllowedMemberData]: Buffer.from(allowedMemberDataDiscriminator),
  [AccountType.NftVoteRecord]: Buffer.from(nftVoteRecordDiscriminator),
  [AccountType.ProposalMetadata]: Buffer.from(proposalMetadataDiscriminator),
  [AccountType.StakeConfig]: Buffer.from(stakeConfigDiscriminator),
  [AccountType.StakeRecord]: Buffer.from(stakeRecordDiscriminator),
  [AccountType.TransferProfitData]: Buffer.from(
    transferProfitDataDiscriminator,
  ),
  // [AccountType.ClubTreasury]: Buffer.from(clubTreasuryDiscriminator),
  [AccountType.TreasuryData]: Buffer.from(treasuryDataDiscriminator),
  [AccountType.UniverseMetadata]: Buffer.from(universeMetadataDiscriminator),
  [AccountType.VoterWeightRecord]: Buffer.from(voterWeightRecordDiscriminator),
  // [AccountType.Withdrawal]: Buffer.from(withdrawalDiscriminator),
  [AccountType.WithdrawalData]: Buffer.from(withdrawalDataDiscriminator),
}

export const ACCOUNTS_DATA_LAYOUT: Record<AccountType, any> = {
  [AccountType.ClubData]: clubDataBeet,
  // [AccountType.ClubVault]: clubVaultBeet,
  [AccountType.ClubVaultData]: clubVaultDataBeet,
  [AccountType.FundraiseConfig]: fundraiseConfigBeet,
  [AccountType.FinancialRecord]: financialRecordBeet,
  [AccountType.FinancialRecordOffer]: financialRecordOfferBeet,
  [AccountType.FinancialRecordDepricated]: financialRecordDepricatedBeet,
  [AccountType.MagicEdenData]: magicEdenDataBeet,
  [AccountType.MaxVoterWeightRecord]: maxVoterWeightRecordBeet,
  [AccountType.AllowedMemberData]: allowedMemberDataBeet,
  [AccountType.NftVoteRecord]: nftVoteRecordBeet,
  [AccountType.ProposalMetadata]: proposalMetadataBeet,
  [AccountType.StakeConfig]: stakeConfigBeet,
  [AccountType.StakeRecord]: stakeRecordBeet,
  [AccountType.TransferProfitData]: transferProfitDataBeet,
  // [AccountType.ClubTreasury]: clubTreasuryBeet,
  [AccountType.TreasuryData]: treasuryDataBeet,
  [AccountType.UniverseMetadata]: universeMetadataBeet,
  [AccountType.VoterWeightRecord]: voterWeightRecordBeet,
  // [AccountType.Withdrawal]: withdrawalBeet,
  [AccountType.WithdrawalData]: withdrawalDataBeet,
}
