/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
/**
 * @category enums
 * @category generated
 */
export enum ProposalStatus {
  Pending,
  CreatedBuyP2P,
  CreatedSellP2P,
  ExecutedBuyP2P,
  ExecutedSellP2P,
  CreatedBuyNowMagicEden,
  ExecutedBuyNowMagicEden,
  FinishedBuyNowMagicEden,
  CreatedSellMagicEden,
  ExecutedSellMagicEden,
  FinishedSellMagicEden,
  CreatedTransferFunds,
  ExecutedTransferFunds,
  CreatedDiscussion,
  CreatedWithdrawal,
  ExecutedWithdrawal,
  CancelledByOwner,
  CreatedUpdateGovernanceConfig,
  ExecutedUpdateGovernanceConfig,
  CreatedUpdateRoleConfig,
  ExecutedUpdateRoleConfig,
  ExecutedSolseaBuy,
  ExecutedSolseaSell,
  CreatedMetadata,
  ProposalCreated,
  ProposalPreparing,
  ProposalReady,
  ProposalExecuted,
}

/**
 * @category userTypes
 * @category generated
 */
export const proposalStatusBeet = beet.fixedScalarEnum(
  ProposalStatus,
) as beet.FixedSizeBeet<ProposalStatus, ProposalStatus>
