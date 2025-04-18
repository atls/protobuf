// @generated by protoc-gen-es v1.10.0 with parameter "target=ts"
// @generated from file tech/atls/rpc/v1alpha1/validation-error.proto (package tech.atls.rpc.v1alpha1, syntax proto3)
/* eslint-disable */
// @ts-nocheck

import type { BinaryReadOptions } from '@bufbuild/protobuf'
import type { FieldList }         from '@bufbuild/protobuf'
import type { JsonReadOptions }   from '@bufbuild/protobuf'
import type { JsonValue }         from '@bufbuild/protobuf'
import type { PartialMessage }    from '@bufbuild/protobuf'
import type { PlainMessage }      from '@bufbuild/protobuf'

import { Message }                from '@bufbuild/protobuf'
import { proto3 }                 from '@bufbuild/protobuf'

import { LocalizedMessage }       from './localized-message_pb.js'

/**
 * @generated from message tech.atls.rpc.v1alpha1.ValidationErrorMessage
 */
export class ValidationErrorMessage extends Message<ValidationErrorMessage> {
  /**
   * @generated from field: string id = 1;
   */
  id = ''

  /**
   * @generated from field: string constraint = 2;
   */
  constraint = ''

  /**
   * @generated from field: repeated tech.atls.rpc.v1alpha1.LocalizedMessage details = 3;
   */
  details: LocalizedMessage[] = []

  constructor(data?: PartialMessage<ValidationErrorMessage>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.atls.rpc.v1alpha1.ValidationErrorMessage'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'constraint', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'details', kind: 'message', T: LocalizedMessage, repeated: true },
  ])

  static fromBinary(
    bytes: Uint8Array,
    options?: Partial<BinaryReadOptions>
  ): ValidationErrorMessage {
    return new ValidationErrorMessage().fromBinary(bytes, options)
  }

  static fromJson(
    jsonValue: JsonValue,
    options?: Partial<JsonReadOptions>
  ): ValidationErrorMessage {
    return new ValidationErrorMessage().fromJson(jsonValue, options)
  }

  static fromJsonString(
    jsonString: string,
    options?: Partial<JsonReadOptions>
  ): ValidationErrorMessage {
    return new ValidationErrorMessage().fromJsonString(jsonString, options)
  }

  static equals(
    a: ValidationErrorMessage | PlainMessage<ValidationErrorMessage> | undefined,
    b: ValidationErrorMessage | PlainMessage<ValidationErrorMessage> | undefined
  ): boolean {
    return proto3.util.equals(ValidationErrorMessage, a, b)
  }
}

/**
 * @generated from message tech.atls.rpc.v1alpha1.ValidationError
 */
export class ValidationError extends Message<ValidationError> {
  /**
   * @generated from field: string id = 1;
   */
  id = ''

  /**
   * @generated from field: string property = 2;
   */
  property = ''

  /**
   * @generated from field: repeated tech.atls.rpc.v1alpha1.ValidationErrorMessage messages = 3;
   */
  messages: ValidationErrorMessage[] = []

  constructor(data?: PartialMessage<ValidationError>) {
    super()
    proto3.util.initPartial(data, this)
  }

  static readonly runtime: typeof proto3 = proto3
  static readonly typeName = 'tech.atls.rpc.v1alpha1.ValidationError'
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: 'id', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 2, name: 'property', kind: 'scalar', T: 9 /* ScalarType.STRING */ },
    { no: 3, name: 'messages', kind: 'message', T: ValidationErrorMessage, repeated: true },
  ])

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidationError {
    return new ValidationError().fromBinary(bytes, options)
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidationError {
    return new ValidationError().fromJson(jsonValue, options)
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidationError {
    return new ValidationError().fromJsonString(jsonString, options)
  }

  static equals(
    a: ValidationError | PlainMessage<ValidationError> | undefined,
    b: ValidationError | PlainMessage<ValidationError> | undefined
  ): boolean {
    return proto3.util.equals(ValidationError, a, b)
  }
}
