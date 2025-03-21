// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file product/v1/product.proto (package product.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { PaginationRequest, PaginationResponse } from "../../common/pagination_pb";
import { file_common_pagination } from "../../common/pagination_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file product/v1/product.proto.
 */
export const file_product_v1_product: GenFile = /*@__PURE__*/
  fileDesc("Chhwcm9kdWN0L3YxL3Byb2R1Y3QucHJvdG8SCnByb2R1Y3QudjEidAoNUHJvZHVjdEVudGl0eRIKCgJpZBgBIAEoAxIRCglzZXJpYWxfaWQYAiABKAkSGAoQcHJvZHVjdF9tb2RlbF9pZBgDIAEoAxIUCgxkYXRlX2NyZWF0ZWQYBCABKAMSFAoMZGF0ZV91cGRhdGVkGAUgASgDIlEKEUdldFByb2R1Y3RSZXF1ZXN0Eg8KAmlkGAEgASgDSACIAQESFgoJc2VyaWFsX2lkGAIgASgJSAGIAQFCBQoDX2lkQgwKCl9zZXJpYWxfaWQiPQoSR2V0UHJvZHVjdFJlc3BvbnNlEicKBGRhdGEYASABKAsyGS5wcm9kdWN0LnYxLlByb2R1Y3RFbnRpdHki4AEKE0xpc3RQcm9kdWN0c1JlcXVlc3QSLQoKcGFnaW5hdGlvbhgBIAEoCzIZLmNvbW1vbi5QYWdpbmF0aW9uUmVxdWVzdBIdChBwcm9kdWN0X21vZGVsX2lkGAIgASgDSACIAQESHgoRZGF0ZV9jcmVhdGVkX2Zyb20YAyABKANIAYgBARIcCg9kYXRlX2NyZWF0ZWRfdG8YBCABKANIAogBAUITChFfcHJvZHVjdF9tb2RlbF9pZEIUChJfZGF0ZV9jcmVhdGVkX2Zyb21CEgoQX2RhdGVfY3JlYXRlZF90byJvChRMaXN0UHJvZHVjdHNSZXNwb25zZRInCgRkYXRhGAEgAygLMhkucHJvZHVjdC52MS5Qcm9kdWN0RW50aXR5Ei4KCnBhZ2luYXRpb24YAiABKAsyGi5jb21tb24uUGFnaW5hdGlvblJlc3BvbnNlIkMKFENyZWF0ZVByb2R1Y3RSZXF1ZXN0EhEKCXNlcmlhbF9pZBgBIAEoCRIYChBwcm9kdWN0X21vZGVsX2lkGAIgASgDIkAKFUNyZWF0ZVByb2R1Y3RSZXNwb25zZRInCgRkYXRhGAEgASgLMhkucHJvZHVjdC52MS5Qcm9kdWN0RW50aXR5InwKFFVwZGF0ZVByb2R1Y3RSZXF1ZXN0EgoKAmlkGAEgASgDEhYKCXNlcmlhbF9pZBgCIAEoCUgAiAEBEh0KEHByb2R1Y3RfbW9kZWxfaWQYAyABKANIAYgBAUIMCgpfc2VyaWFsX2lkQhMKEV9wcm9kdWN0X21vZGVsX2lkIhcKFVVwZGF0ZVByb2R1Y3RSZXNwb25zZSJUChREZWxldGVQcm9kdWN0UmVxdWVzdBIPCgJpZBgBIAEoA0gAiAEBEhYKCXNlcmlhbF9pZBgCIAEoCUgBiAEBQgUKA19pZEIMCgpfc2VyaWFsX2lkIhcKFURlbGV0ZVByb2R1Y3RSZXNwb25zZUKvAQoOY29tLnByb2R1Y3QudjFCDFByb2R1Y3RQcm90b1ABWkZnaXRodWIuY29tL3Nob3BuZXh1cy9zaG9wbmV4dXMtcHJvdG9idWYtZ2VuLWdvL3BiL3Byb2R1Y3QvdjE7cHJvZHVjdHYxogIDUFhYqgIKUHJvZHVjdC5WMcoCClByb2R1Y3RcVjHiAhZQcm9kdWN0XFYxXEdQQk1ldGFkYXRh6gILUHJvZHVjdDo6VjFiBnByb3RvMw", [file_common_pagination]);

/**
 * PRODUCT ENTITY
 *
 * @generated from message product.v1.ProductEntity
 */
export type ProductEntity = Message<"product.v1.ProductEntity"> & {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: string serial_id = 2;
   */
  serialId: string;

  /**
   * @generated from field: int64 product_model_id = 3;
   */
  productModelId: bigint;

  /**
   * @generated from field: int64 date_created = 4;
   */
  dateCreated: bigint;

  /**
   * @generated from field: int64 date_updated = 5;
   */
  dateUpdated: bigint;
};

/**
 * Describes the message product.v1.ProductEntity.
 * Use `create(ProductEntitySchema)` to create a new message.
 */
export const ProductEntitySchema: GenMessage<ProductEntity> = /*@__PURE__*/
  messageDesc(file_product_v1_product, 0);

/**
 * @generated from message product.v1.GetProductRequest
 */
export type GetProductRequest = Message<"product.v1.GetProductRequest"> & {
  /**
   * @generated from field: optional int64 id = 1;
   */
  id?: bigint;

  /**
   * @generated from field: optional string serial_id = 2;
   */
  serialId?: string;
};

/**
 * Describes the message product.v1.GetProductRequest.
 * Use `create(GetProductRequestSchema)` to create a new message.
 */
export const GetProductRequestSchema: GenMessage<GetProductRequest> = /*@__PURE__*/
  messageDesc(file_product_v1_product, 1);

/**
 * @generated from message product.v1.GetProductResponse
 */
export type GetProductResponse = Message<"product.v1.GetProductResponse"> & {
  /**
   * @generated from field: product.v1.ProductEntity data = 1;
   */
  data?: ProductEntity;
};

/**
 * Describes the message product.v1.GetProductResponse.
 * Use `create(GetProductResponseSchema)` to create a new message.
 */
export const GetProductResponseSchema: GenMessage<GetProductResponse> = /*@__PURE__*/
  messageDesc(file_product_v1_product, 2);

/**
 * @generated from message product.v1.ListProductsRequest
 */
export type ListProductsRequest = Message<"product.v1.ListProductsRequest"> & {
  /**
   * @generated from field: common.PaginationRequest pagination = 1;
   */
  pagination?: PaginationRequest;

  /**
   * @generated from field: optional int64 product_model_id = 2;
   */
  productModelId?: bigint;

  /**
   * @generated from field: optional int64 date_created_from = 3;
   */
  dateCreatedFrom?: bigint;

  /**
   * @generated from field: optional int64 date_created_to = 4;
   */
  dateCreatedTo?: bigint;
};

/**
 * Describes the message product.v1.ListProductsRequest.
 * Use `create(ListProductsRequestSchema)` to create a new message.
 */
export const ListProductsRequestSchema: GenMessage<ListProductsRequest> = /*@__PURE__*/
  messageDesc(file_product_v1_product, 3);

/**
 * @generated from message product.v1.ListProductsResponse
 */
export type ListProductsResponse = Message<"product.v1.ListProductsResponse"> & {
  /**
   * @generated from field: repeated product.v1.ProductEntity data = 1;
   */
  data: ProductEntity[];

  /**
   * @generated from field: common.PaginationResponse pagination = 2;
   */
  pagination?: PaginationResponse;
};

/**
 * Describes the message product.v1.ListProductsResponse.
 * Use `create(ListProductsResponseSchema)` to create a new message.
 */
export const ListProductsResponseSchema: GenMessage<ListProductsResponse> = /*@__PURE__*/
  messageDesc(file_product_v1_product, 4);

/**
 * @generated from message product.v1.CreateProductRequest
 */
export type CreateProductRequest = Message<"product.v1.CreateProductRequest"> & {
  /**
   * @generated from field: string serial_id = 1;
   */
  serialId: string;

  /**
   * @generated from field: int64 product_model_id = 2;
   */
  productModelId: bigint;
};

/**
 * Describes the message product.v1.CreateProductRequest.
 * Use `create(CreateProductRequestSchema)` to create a new message.
 */
export const CreateProductRequestSchema: GenMessage<CreateProductRequest> = /*@__PURE__*/
  messageDesc(file_product_v1_product, 5);

/**
 * @generated from message product.v1.CreateProductResponse
 */
export type CreateProductResponse = Message<"product.v1.CreateProductResponse"> & {
  /**
   * @generated from field: product.v1.ProductEntity data = 1;
   */
  data?: ProductEntity;
};

/**
 * Describes the message product.v1.CreateProductResponse.
 * Use `create(CreateProductResponseSchema)` to create a new message.
 */
export const CreateProductResponseSchema: GenMessage<CreateProductResponse> = /*@__PURE__*/
  messageDesc(file_product_v1_product, 6);

/**
 * @generated from message product.v1.UpdateProductRequest
 */
export type UpdateProductRequest = Message<"product.v1.UpdateProductRequest"> & {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: optional string serial_id = 2;
   */
  serialId?: string;

  /**
   * @generated from field: optional int64 product_model_id = 3;
   */
  productModelId?: bigint;
};

/**
 * Describes the message product.v1.UpdateProductRequest.
 * Use `create(UpdateProductRequestSchema)` to create a new message.
 */
export const UpdateProductRequestSchema: GenMessage<UpdateProductRequest> = /*@__PURE__*/
  messageDesc(file_product_v1_product, 7);

/**
 * @generated from message product.v1.UpdateProductResponse
 */
export type UpdateProductResponse = Message<"product.v1.UpdateProductResponse"> & {
};

/**
 * Describes the message product.v1.UpdateProductResponse.
 * Use `create(UpdateProductResponseSchema)` to create a new message.
 */
export const UpdateProductResponseSchema: GenMessage<UpdateProductResponse> = /*@__PURE__*/
  messageDesc(file_product_v1_product, 8);

/**
 * @generated from message product.v1.DeleteProductRequest
 */
export type DeleteProductRequest = Message<"product.v1.DeleteProductRequest"> & {
  /**
   * @generated from field: optional int64 id = 1;
   */
  id?: bigint;

  /**
   * @generated from field: optional string serial_id = 2;
   */
  serialId?: string;
};

/**
 * Describes the message product.v1.DeleteProductRequest.
 * Use `create(DeleteProductRequestSchema)` to create a new message.
 */
export const DeleteProductRequestSchema: GenMessage<DeleteProductRequest> = /*@__PURE__*/
  messageDesc(file_product_v1_product, 9);

/**
 * @generated from message product.v1.DeleteProductResponse
 */
export type DeleteProductResponse = Message<"product.v1.DeleteProductResponse"> & {
};

/**
 * Describes the message product.v1.DeleteProductResponse.
 * Use `create(DeleteProductResponseSchema)` to create a new message.
 */
export const DeleteProductResponseSchema: GenMessage<DeleteProductResponse> = /*@__PURE__*/
  messageDesc(file_product_v1_product, 10);

