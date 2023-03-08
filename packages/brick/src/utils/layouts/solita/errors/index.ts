/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

type ErrorWithCode = Error & { code: number }
type MaybeErrorWithCode = ErrorWithCode | null | undefined

const createErrorFromCodeLookup: Map<number, () => ErrorWithCode> = new Map()
const createErrorFromNameLookup: Map<string, () => ErrorWithCode> = new Map()

/**
 * TimeForRefundHasConsumed: 'Refund time has consumed'
 *
 * @category Errors
 * @category generated
 */
export class TimeForRefundHasConsumedError extends Error {
  readonly code: number = 0x1770
  readonly name: string = 'TimeForRefundHasConsumed'
  constructor() {
    super('Refund time has consumed')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, TimeForRefundHasConsumedError)
    }
  }
}

createErrorFromCodeLookup.set(0x1770, () => new TimeForRefundHasConsumedError())
createErrorFromNameLookup.set(
  'TimeForRefundHasConsumed',
  () => new TimeForRefundHasConsumedError(),
)

/**
 * NotEnoughTokensAvailable: 'There are not enough tokens to buy'
 *
 * @category Errors
 * @category generated
 */
export class NotEnoughTokensAvailableError extends Error {
  readonly code: number = 0x1771
  readonly name: string = 'NotEnoughTokensAvailable'
  constructor() {
    super('There are not enough tokens to buy')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, NotEnoughTokensAvailableError)
    }
  }
}

createErrorFromCodeLookup.set(0x1771, () => new NotEnoughTokensAvailableError())
createErrorFromNameLookup.set(
  'NotEnoughTokensAvailable',
  () => new NotEnoughTokensAvailableError(),
)

/**
 * UsersStillHoldUnusedTokens: 'There are still users with a token available for use'
 *
 * @category Errors
 * @category generated
 */
export class UsersStillHoldUnusedTokensError extends Error {
  readonly code: number = 0x1772
  readonly name: string = 'UsersStillHoldUnusedTokens'
  constructor() {
    super('There are still users with a token available for use')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, UsersStillHoldUnusedTokensError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1772,
  () => new UsersStillHoldUnusedTokensError(),
)
createErrorFromNameLookup.set(
  'UsersStillHoldUnusedTokens',
  () => new UsersStillHoldUnusedTokensError(),
)

/**
 * CannotWithdrawYet: 'You cannot withdraw these funds yet'
 *
 * @category Errors
 * @category generated
 */
export class CannotWithdrawYetError extends Error {
  readonly code: number = 0x1773
  readonly name: string = 'CannotWithdrawYet'
  constructor() {
    super('You cannot withdraw these funds yet')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, CannotWithdrawYetError)
    }
  }
}

createErrorFromCodeLookup.set(0x1773, () => new CannotWithdrawYetError())
createErrorFromNameLookup.set(
  'CannotWithdrawYet',
  () => new CannotWithdrawYetError(),
)

/**
 * IncorrectPaymentToken: 'You are trying to pay a different mint than the one stated by the seller'
 *
 * @category Errors
 * @category generated
 */
export class IncorrectPaymentTokenError extends Error {
  readonly code: number = 0x1774
  readonly name: string = 'IncorrectPaymentToken'
  constructor() {
    super(
      'You are trying to pay a different mint than the one stated by the seller',
    )
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IncorrectPaymentTokenError)
    }
  }
}

createErrorFromCodeLookup.set(0x1774, () => new IncorrectPaymentTokenError())
createErrorFromNameLookup.set(
  'IncorrectPaymentToken',
  () => new IncorrectPaymentTokenError(),
)

/**
 * IncorrectBuyerTokenAccountOnTransfer: 'You are providing a wrong buyer token account, is where the funds come from to pay'
 *
 * @category Errors
 * @category generated
 */
export class IncorrectBuyerTokenAccountOnTransferError extends Error {
  readonly code: number = 0x1775
  readonly name: string = 'IncorrectBuyerTokenAccountOnTransfer'
  constructor() {
    super(
      'You are providing a wrong buyer token account, is where the funds come from to pay',
    )
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IncorrectBuyerTokenAccountOnTransferError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1775,
  () => new IncorrectBuyerTokenAccountOnTransferError(),
)
createErrorFromNameLookup.set(
  'IncorrectBuyerTokenAccountOnTransfer',
  () => new IncorrectBuyerTokenAccountOnTransferError(),
)

/**
 * IncorrectBuyerTokenAccountToStorePurchasedToken: 'You are providing a wrong buyer token account, is where the access token will be received'
 *
 * @category Errors
 * @category generated
 */
export class IncorrectBuyerTokenAccountToStorePurchasedTokenError extends Error {
  readonly code: number = 0x1776
  readonly name: string = 'IncorrectBuyerTokenAccountToStorePurchasedToken'
  constructor() {
    super(
      'You are providing a wrong buyer token account, is where the access token will be received',
    )
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(
        this,
        IncorrectBuyerTokenAccountToStorePurchasedTokenError,
      )
    }
  }
}

createErrorFromCodeLookup.set(
  0x1776,
  () => new IncorrectBuyerTokenAccountToStorePurchasedTokenError(),
)
createErrorFromNameLookup.set(
  'IncorrectBuyerTokenAccountToStorePurchasedToken',
  () => new IncorrectBuyerTokenAccountToStorePurchasedTokenError(),
)

/**
 * IncorrectAssetAuthority: 'You are not the owner of this asset account'
 *
 * @category Errors
 * @category generated
 */
export class IncorrectAssetAuthorityError extends Error {
  readonly code: number = 0x1777
  readonly name: string = 'IncorrectAssetAuthority'
  constructor() {
    super('You are not the owner of this asset account')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IncorrectAssetAuthorityError)
    }
  }
}

createErrorFromCodeLookup.set(0x1777, () => new IncorrectAssetAuthorityError())
createErrorFromNameLookup.set(
  'IncorrectAssetAuthority',
  () => new IncorrectAssetAuthorityError(),
)

/**
 * IncorrectPaymentAuthority: 'You are not the owner of this payment account'
 *
 * @category Errors
 * @category generated
 */
export class IncorrectPaymentAuthorityError extends Error {
  readonly code: number = 0x1778
  readonly name: string = 'IncorrectPaymentAuthority'
  constructor() {
    super('You are not the owner of this payment account')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IncorrectPaymentAuthorityError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x1778,
  () => new IncorrectPaymentAuthorityError(),
)
createErrorFromNameLookup.set(
  'IncorrectPaymentAuthority',
  () => new IncorrectPaymentAuthorityError(),
)

/**
 * IncorrectPaymentVault: 'You are providing a worng payment vault'
 *
 * @category Errors
 * @category generated
 */
export class IncorrectPaymentVaultError extends Error {
  readonly code: number = 0x1779
  readonly name: string = 'IncorrectPaymentVault'
  constructor() {
    super('You are providing a worng payment vault')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IncorrectPaymentVaultError)
    }
  }
}

createErrorFromCodeLookup.set(0x1779, () => new IncorrectPaymentVaultError())
createErrorFromNameLookup.set(
  'IncorrectPaymentVault',
  () => new IncorrectPaymentVaultError(),
)

/**
 * IncorrectReceiverTokenAccount: 'You are providing an incorrect token account'
 *
 * @category Errors
 * @category generated
 */
export class IncorrectReceiverTokenAccountError extends Error {
  readonly code: number = 0x177a
  readonly name: string = 'IncorrectReceiverTokenAccount'
  constructor() {
    super('You are providing an incorrect token account')
    if (typeof Error.captureStackTrace === 'function') {
      Error.captureStackTrace(this, IncorrectReceiverTokenAccountError)
    }
  }
}

createErrorFromCodeLookup.set(
  0x177a,
  () => new IncorrectReceiverTokenAccountError(),
)
createErrorFromNameLookup.set(
  'IncorrectReceiverTokenAccount',
  () => new IncorrectReceiverTokenAccountError(),
)

/**
 * Attempts to resolve a custom program error from the provided error code.
 * @category Errors
 * @category generated
 */
export function errorFromCode(code: number): MaybeErrorWithCode {
  const createError = createErrorFromCodeLookup.get(code)
  return createError != null ? createError() : null
}

/**
 * Attempts to resolve a custom program error from the provided error name, i.e. 'Unauthorized'.
 * @category Errors
 * @category generated
 */
export function errorFromName(name: string): MaybeErrorWithCode {
  const createError = createErrorFromNameLookup.get(name)
  return createError != null ? createError() : null
}
