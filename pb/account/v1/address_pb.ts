// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file account/v1/address.proto (package account.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { PaginationRequest, PaginationResponse } from "../../common/pagination_pb";
import { file_common_pagination } from "../../common/pagination_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file account/v1/address.proto.
 */
export const file_account_v1_address: GenFile = /*@__PURE__*/
  fileDesc("ChhhY2NvdW50L3YxL2FkZHJlc3MucHJvdG8SCmFjY291bnQudjEivAEKDUFkZHJlc3NFbnRpdHkSCgoCaWQYASABKAMSDwoHdXNlcl9pZBgCIAEoAxIRCglmdWxsX25hbWUYAyABKAkSDQoFcGhvbmUYBCABKAkSDwoHYWRkcmVzcxgFIAEoCRIMCgRjaXR5GAYgASgJEhAKCHByb3ZpbmNlGAcgASgJEg8KB2NvdW50cnkYCCABKAkSFAoMZGF0ZV9jcmVhdGVkGAkgASgDEhQKDGRhdGVfdXBkYXRlZBgKIAEoAyIfChFHZXRBZGRyZXNzUmVxdWVzdBIKCgJpZBgBIAEoAyI9ChJHZXRBZGRyZXNzUmVzcG9uc2USJwoEZGF0YRgBIAEoCzIZLmFjY291bnQudjEuQWRkcmVzc0VudGl0eSKXAwoUTGlzdEFkZHJlc3Nlc1JlcXVlc3QSLQoKcGFnaW5hdGlvbhgBIAEoCzIZLmNvbW1vbi5QYWdpbmF0aW9uUmVxdWVzdBIUCgd1c2VyX2lkGAIgASgDSACIAQESFgoJZnVsbF9uYW1lGAMgASgJSAGIAQESEgoFcGhvbmUYBCABKAlIAogBARIUCgdhZGRyZXNzGAUgASgJSAOIAQESEQoEY2l0eRgGIAEoCUgEiAEBEhUKCHByb3ZpbmNlGAcgASgJSAWIAQESFAoHY291bnRyeRgIIAEoCUgGiAEBEh4KEWRhdGVfY3JlYXRlZF9mcm9tGAkgASgDSAeIAQESHAoPZGF0ZV9jcmVhdGVkX3RvGAogASgDSAiIAQFCCgoIX3VzZXJfaWRCDAoKX2Z1bGxfbmFtZUIICgZfcGhvbmVCCgoIX2FkZHJlc3NCBwoFX2NpdHlCCwoJX3Byb3ZpbmNlQgoKCF9jb3VudHJ5QhQKEl9kYXRlX2NyZWF0ZWRfZnJvbUISChBfZGF0ZV9jcmVhdGVkX3RvInAKFUxpc3RBZGRyZXNzZXNSZXNwb25zZRInCgRkYXRhGAEgAygLMhkuYWNjb3VudC52MS5BZGRyZXNzRW50aXR5Ei4KCnBhZ2luYXRpb24YAiABKAsyGi5jb21tb24uUGFnaW5hdGlvblJlc3BvbnNlInoKFENyZWF0ZUFkZHJlc3NSZXF1ZXN0EhEKCWZ1bGxfbmFtZRgBIAEoCRINCgVwaG9uZRgCIAEoCRIPCgdhZGRyZXNzGAMgASgJEgwKBGNpdHkYBCABKAkSEAoIcHJvdmluY2UYBSABKAkSDwoHY291bnRyeRgGIAEoCSJAChVDcmVhdGVBZGRyZXNzUmVzcG9uc2USJwoEZGF0YRgBIAEoCzIZLmFjY291bnQudjEuQWRkcmVzc0VudGl0eSKMAgoUVXBkYXRlQWRkcmVzc1JlcXVlc3QSCgoCaWQYASABKAMSFAoHdXNlcl9pZBgCIAEoA0gAiAEBEhYKCWZ1bGxfbmFtZRgDIAEoCUgBiAEBEhIKBXBob25lGAQgASgJSAKIAQESFAoHYWRkcmVzcxgFIAEoCUgDiAEBEhEKBGNpdHkYBiABKAlIBIgBARIVCghwcm92aW5jZRgHIAEoCUgFiAEBEhQKB2NvdW50cnkYCCABKAlIBogBAUIKCghfdXNlcl9pZEIMCgpfZnVsbF9uYW1lQggKBl9waG9uZUIKCghfYWRkcmVzc0IHCgVfY2l0eUILCglfcHJvdmluY2VCCgoIX2NvdW50cnkiFwoVVXBkYXRlQWRkcmVzc1Jlc3BvbnNlIiIKFERlbGV0ZUFkZHJlc3NSZXF1ZXN0EgoKAmlkGAEgASgDIhcKFURlbGV0ZUFkZHJlc3NSZXNwb25zZUKvAQoOY29tLmFjY291bnQudjFCDEFkZHJlc3NQcm90b1ABWkZnaXRodWIuY29tL3Nob3BuZXh1cy9zaG9wbmV4dXMtcHJvdG9idWYtZ2VuLWdvL3BiL2FjY291bnQvdjE7YWNjb3VudHYxogIDQVhYqgIKQWNjb3VudC5WMcoCCkFjY291bnRcVjHiAhZBY2NvdW50XFYxXEdQQk1ldGFkYXRh6gILQWNjb3VudDo6VjFiBnByb3RvMw", [file_common_pagination]);

/**
 * ADDRESS ENTITY
 *
 * @generated from message account.v1.AddressEntity
 */
export type AddressEntity = Message<"account.v1.AddressEntity"> & {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: int64 user_id = 2;
   */
  userId: bigint;

  /**
   * @generated from field: string full_name = 3;
   */
  fullName: string;

  /**
   * @generated from field: string phone = 4;
   */
  phone: string;

  /**
   * @generated from field: string address = 5;
   */
  address: string;

  /**
   * @generated from field: string city = 6;
   */
  city: string;

  /**
   * @generated from field: string province = 7;
   */
  province: string;

  /**
   * @generated from field: string country = 8;
   */
  country: string;

  /**
   * @generated from field: int64 date_created = 9;
   */
  dateCreated: bigint;

  /**
   * @generated from field: int64 date_updated = 10;
   */
  dateUpdated: bigint;
};

/**
 * Describes the message account.v1.AddressEntity.
 * Use `create(AddressEntitySchema)` to create a new message.
 */
export const AddressEntitySchema: GenMessage<AddressEntity> = /*@__PURE__*/
  messageDesc(file_account_v1_address, 0);

/**
 * @generated from message account.v1.GetAddressRequest
 */
export type GetAddressRequest = Message<"account.v1.GetAddressRequest"> & {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint;
};

/**
 * Describes the message account.v1.GetAddressRequest.
 * Use `create(GetAddressRequestSchema)` to create a new message.
 */
export const GetAddressRequestSchema: GenMessage<GetAddressRequest> = /*@__PURE__*/
  messageDesc(file_account_v1_address, 1);

/**
 * @generated from message account.v1.GetAddressResponse
 */
export type GetAddressResponse = Message<"account.v1.GetAddressResponse"> & {
  /**
   * @generated from field: account.v1.AddressEntity data = 1;
   */
  data?: AddressEntity;
};

/**
 * Describes the message account.v1.GetAddressResponse.
 * Use `create(GetAddressResponseSchema)` to create a new message.
 */
export const GetAddressResponseSchema: GenMessage<GetAddressResponse> = /*@__PURE__*/
  messageDesc(file_account_v1_address, 2);

/**
 * @generated from message account.v1.ListAddressesRequest
 */
export type ListAddressesRequest = Message<"account.v1.ListAddressesRequest"> & {
  /**
   * @generated from field: common.PaginationRequest pagination = 1;
   */
  pagination?: PaginationRequest;

  /**
   * @generated from field: optional int64 user_id = 2;
   */
  userId?: bigint;

  /**
   * @generated from field: optional string full_name = 3;
   */
  fullName?: string;

  /**
   * @generated from field: optional string phone = 4;
   */
  phone?: string;

  /**
   * @generated from field: optional string address = 5;
   */
  address?: string;

  /**
   * @generated from field: optional string city = 6;
   */
  city?: string;

  /**
   * @generated from field: optional string province = 7;
   */
  province?: string;

  /**
   * @generated from field: optional string country = 8;
   */
  country?: string;

  /**
   * @generated from field: optional int64 date_created_from = 9;
   */
  dateCreatedFrom?: bigint;

  /**
   * @generated from field: optional int64 date_created_to = 10;
   */
  dateCreatedTo?: bigint;
};

/**
 * Describes the message account.v1.ListAddressesRequest.
 * Use `create(ListAddressesRequestSchema)` to create a new message.
 */
export const ListAddressesRequestSchema: GenMessage<ListAddressesRequest> = /*@__PURE__*/
  messageDesc(file_account_v1_address, 3);

/**
 * @generated from message account.v1.ListAddressesResponse
 */
export type ListAddressesResponse = Message<"account.v1.ListAddressesResponse"> & {
  /**
   * @generated from field: repeated account.v1.AddressEntity data = 1;
   */
  data: AddressEntity[];

  /**
   * @generated from field: common.PaginationResponse pagination = 2;
   */
  pagination?: PaginationResponse;
};

/**
 * Describes the message account.v1.ListAddressesResponse.
 * Use `create(ListAddressesResponseSchema)` to create a new message.
 */
export const ListAddressesResponseSchema: GenMessage<ListAddressesResponse> = /*@__PURE__*/
  messageDesc(file_account_v1_address, 4);

/**
 * @generated from message account.v1.CreateAddressRequest
 */
export type CreateAddressRequest = Message<"account.v1.CreateAddressRequest"> & {
  /**
   * @generated from field: string full_name = 1;
   */
  fullName: string;

  /**
   * @generated from field: string phone = 2;
   */
  phone: string;

  /**
   * @generated from field: string address = 3;
   */
  address: string;

  /**
   * @generated from field: string city = 4;
   */
  city: string;

  /**
   * @generated from field: string province = 5;
   */
  province: string;

  /**
   * @generated from field: string country = 6;
   */
  country: string;
};

/**
 * Describes the message account.v1.CreateAddressRequest.
 * Use `create(CreateAddressRequestSchema)` to create a new message.
 */
export const CreateAddressRequestSchema: GenMessage<CreateAddressRequest> = /*@__PURE__*/
  messageDesc(file_account_v1_address, 5);

/**
 * @generated from message account.v1.CreateAddressResponse
 */
export type CreateAddressResponse = Message<"account.v1.CreateAddressResponse"> & {
  /**
   * @generated from field: account.v1.AddressEntity data = 1;
   */
  data?: AddressEntity;
};

/**
 * Describes the message account.v1.CreateAddressResponse.
 * Use `create(CreateAddressResponseSchema)` to create a new message.
 */
export const CreateAddressResponseSchema: GenMessage<CreateAddressResponse> = /*@__PURE__*/
  messageDesc(file_account_v1_address, 6);

/**
 * @generated from message account.v1.UpdateAddressRequest
 */
export type UpdateAddressRequest = Message<"account.v1.UpdateAddressRequest"> & {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: optional int64 user_id = 2;
   */
  userId?: bigint;

  /**
   * @generated from field: optional string full_name = 3;
   */
  fullName?: string;

  /**
   * @generated from field: optional string phone = 4;
   */
  phone?: string;

  /**
   * @generated from field: optional string address = 5;
   */
  address?: string;

  /**
   * @generated from field: optional string city = 6;
   */
  city?: string;

  /**
   * @generated from field: optional string province = 7;
   */
  province?: string;

  /**
   * @generated from field: optional string country = 8;
   */
  country?: string;
};

/**
 * Describes the message account.v1.UpdateAddressRequest.
 * Use `create(UpdateAddressRequestSchema)` to create a new message.
 */
export const UpdateAddressRequestSchema: GenMessage<UpdateAddressRequest> = /*@__PURE__*/
  messageDesc(file_account_v1_address, 7);

/**
 * @generated from message account.v1.UpdateAddressResponse
 */
export type UpdateAddressResponse = Message<"account.v1.UpdateAddressResponse"> & {
};

/**
 * Describes the message account.v1.UpdateAddressResponse.
 * Use `create(UpdateAddressResponseSchema)` to create a new message.
 */
export const UpdateAddressResponseSchema: GenMessage<UpdateAddressResponse> = /*@__PURE__*/
  messageDesc(file_account_v1_address, 8);

/**
 * @generated from message account.v1.DeleteAddressRequest
 */
export type DeleteAddressRequest = Message<"account.v1.DeleteAddressRequest"> & {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint;
};

/**
 * Describes the message account.v1.DeleteAddressRequest.
 * Use `create(DeleteAddressRequestSchema)` to create a new message.
 */
export const DeleteAddressRequestSchema: GenMessage<DeleteAddressRequest> = /*@__PURE__*/
  messageDesc(file_account_v1_address, 9);

/**
 * @generated from message account.v1.DeleteAddressResponse
 */
export type DeleteAddressResponse = Message<"account.v1.DeleteAddressResponse"> & {
};

/**
 * Describes the message account.v1.DeleteAddressResponse.
 * Use `create(DeleteAddressResponseSchema)` to create a new message.
 */
export const DeleteAddressResponseSchema: GenMessage<DeleteAddressResponse> = /*@__PURE__*/
  messageDesc(file_account_v1_address, 10);

