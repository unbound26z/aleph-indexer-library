/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as web3 from '@solana/web3.js'
import * as beet from '@metaplex-foundation/beet'
import * as beetSolana from '@metaplex-foundation/beet-solana'
import { OfferStatus, offerStatusBeet } from './OfferStatus.js'
import { OfferType, offerTypeBeet } from './OfferType.js'
export type Offer = {
  discriminator: number[] /* size: 8 */
  maker: web3.PublicKey
  treasury: web3.PublicKey
  offeredAmount: beet.bignum
  offeredTokenMint: web3.PublicKey
  wantedAmount: beet.bignum
  wantedTokenMint: web3.PublicKey
  tokenLedgerMint: web3.PublicKey
  makerWantedToken: web3.PublicKey
  escrowedWantedToken: web3.PublicKey
  status: OfferStatus
  offerType: OfferType
  dedicatedTaker: beet.COption<web3.PublicKey>
  proposal: web3.PublicKey
  sellerFeeBps: number
}

/**
 * @category userTypes
 * @category generated
 */
export const offerBeet = new beet.FixableBeetArgsStruct<Offer>(
  [
    ['discriminator', beet.uniformFixedSizeArray(beet.u8, 8)],
    ['maker', beetSolana.publicKey],
    ['treasury', beetSolana.publicKey],
    ['offeredAmount', beet.u64],
    ['offeredTokenMint', beetSolana.publicKey],
    ['wantedAmount', beet.u64],
    ['wantedTokenMint', beetSolana.publicKey],
    ['tokenLedgerMint', beetSolana.publicKey],
    ['makerWantedToken', beetSolana.publicKey],
    ['escrowedWantedToken', beetSolana.publicKey],
    ['status', offerStatusBeet],
    ['offerType', offerTypeBeet],
    ['dedicatedTaker', beet.coption(beetSolana.publicKey)],
    ['proposal', beetSolana.publicKey],
    ['sellerFeeBps', beet.u16],
  ],
  'Offer',
)
