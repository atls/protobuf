export interface MaybeConnectError {
  details?: Array<{
    type: string
    value: Uint8Array
  }>
}
