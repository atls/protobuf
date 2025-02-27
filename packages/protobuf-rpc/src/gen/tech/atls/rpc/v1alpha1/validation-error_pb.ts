// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file tech/atls/rpc/v1alpha1/validation-error.proto (package tech.atls.rpc.v1alpha1, syntax proto3)
/* eslint-disable */

import type { Message }                                  from '@bufbuild/protobuf'
// @ts-expect-error missing types
import type { GenFile }                                  from '@bufbuild/protobuf/codegenv1'
// @ts-expect-error missing types
import type { GenMessage }                               from '@bufbuild/protobuf/codegenv1'

// @ts-expect-error missing types
import type { LocalizedMessage }                         from './localized-message_pb'

// @ts-expect-error missing types
import { fileDesc }                                      from '@bufbuild/protobuf/codegenv1'
// @ts-expect-error missing types
import { messageDesc }                                   from '@bufbuild/protobuf/codegenv1'

// @ts-expect-error missing types
import { file_tech_atls_rpc_v1alpha1_localized_message } from './localized-message_pb'

/**
 * Describes the file tech/atls/rpc/v1alpha1/validation-error.proto.
 */
export const file_tech_atls_rpc_v1alpha1_validation_error: GenFile =
  /*@__PURE__*/
  fileDesc(
    'Ci10ZWNoL2F0bHMvcnBjL3YxYWxwaGExL3ZhbGlkYXRpb24tZXJyb3IucHJvdG8SFnRlY2guYXRscy5ycGMudjFhbHBoYTEicwoWVmFsaWRhdGlvbkVycm9yTWVzc2FnZRIKCgJpZBgBIAEoCRISCgpjb25zdHJhaW50GAIgASgJEjkKB2RldGFpbHMYAyADKAsyKC50ZWNoLmF0bHMucnBjLnYxYWxwaGExLkxvY2FsaXplZE1lc3NhZ2UicQoPVmFsaWRhdGlvbkVycm9yEgoKAmlkGAEgASgJEhAKCHByb3BlcnR5GAIgASgJEkAKCG1lc3NhZ2VzGAMgAygLMi4udGVjaC5hdGxzLnJwYy52MWFscGhhMS5WYWxpZGF0aW9uRXJyb3JNZXNzYWdlYgZwcm90bzM',
    [file_tech_atls_rpc_v1alpha1_localized_message]
  )

/**
 * @generated from message tech.atls.rpc.v1alpha1.ValidationErrorMessage
 */
// @ts-expect-error error in types
export type ValidationErrorMessage = Message<'tech.atls.rpc.v1alpha1.ValidationErrorMessage'> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string

  /**
   * @generated from field: string constraint = 2;
   */
  constraint: string

  /**
   * @generated from field: repeated tech.atls.rpc.v1alpha1.LocalizedMessage details = 3;
   */
  details: LocalizedMessage[]
}

/**
 * Describes the message tech.atls.rpc.v1alpha1.ValidationErrorMessage.
 * Use `create(ValidationErrorMessageSchema)` to create a new message.
 */
export const ValidationErrorMessageSchema: GenMessage<ValidationErrorMessage> =
  /*@__PURE__*/
  messageDesc(file_tech_atls_rpc_v1alpha1_validation_error, 0)

/**
 * @generated from message tech.atls.rpc.v1alpha1.ValidationError
 */
// @ts-expect-error error in types
export type ValidationError = Message<'tech.atls.rpc.v1alpha1.ValidationError'> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string

  /**
   * @generated from field: string property = 2;
   */
  property: string

  /**
   * @generated from field: repeated tech.atls.rpc.v1alpha1.ValidationErrorMessage messages = 3;
   */
  messages: ValidationErrorMessage[]
}

/**
 * Describes the message tech.atls.rpc.v1alpha1.ValidationError.
 * Use `create(ValidationErrorSchema)` to create a new message.
 */
export const ValidationErrorSchema: GenMessage<ValidationError> =
  /*@__PURE__*/
  messageDesc(file_tech_atls_rpc_v1alpha1_validation_error, 1)
