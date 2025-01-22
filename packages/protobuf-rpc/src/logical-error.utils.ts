import type { MaybeConnectError } from './connect-error.types.js'

import { LogicalError }           from './gen/tech/atls/rpc/v1alpha1/logical-error_pb.js'

export const findLogicalError = (error: unknown): LogicalError | undefined => {
  const { details } = (error || {}) as MaybeConnectError

  if (Array.isArray(details)) {
    return (
      details
        // @ts-expect-error as type
        .filter((detail) => detail.type === LogicalError.typeName)
        // @ts-expect-error as type
        .map((detail) => LogicalError.fromBinary(detail.value))
        .at(0)
    )
  }

  return undefined
}
