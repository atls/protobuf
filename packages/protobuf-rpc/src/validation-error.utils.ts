import type { MaybeConnectError } from './connect-error.types.js'

import { ValidationError }        from './gen/tech/atls/rpc/v1alpha1/validation-error_pb.js'

export const findValidationErrorDetails = (error: unknown): Array<ValidationError> => {
  const { details } = (error || {}) as MaybeConnectError

  if (Array.isArray(details)) {
    return (
      details
        // @ts-expect-error as type
        .filter((detail) => detail.type === ValidationError.typeName)
        // @ts-expect-error as type
        .map((detail) => ValidationError.fromBinary(detail.value))
    )
  }

  return []
}
