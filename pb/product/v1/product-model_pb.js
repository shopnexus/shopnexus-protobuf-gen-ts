// @generated by protoc-gen-es v2.2.3
// @generated from file product/v1/product-model.proto (package product.v1, syntax proto3)
/* eslint-disable */

import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_common_pagination } from "../../common/pagination_pb";

/**
 * Describes the file product/v1/product-model.proto.
 */
export const file_product_v1_product_model = /*@__PURE__*/
  fileDesc("Ch5wcm9kdWN0L3YxL3Byb2R1Y3QtbW9kZWwucHJvdG8SCnByb2R1Y3QudjEihAEKElByb2R1Y3RNb2RlbEVudGl0eRIKCgJpZBgBIAEoAxIQCghicmFuZF9pZBgCIAEoAxIMCgRuYW1lGAMgASgJEhMKC2Rlc2NyaXB0aW9uGAQgASgJEhIKCmxpc3RfcHJpY2UYBSABKAMSGQoRZGF0ZV9tYW51ZmFjdHVyZWQYBiABKAMiJAoWR2V0UHJvZHVjdE1vZGVsUmVxdWVzdBIKCgJpZBgBIAEoAyJQChdHZXRQcm9kdWN0TW9kZWxSZXNwb25zZRI1Cg1wcm9kdWN0X21vZGVsGAEgASgLMh4ucHJvZHVjdC52MS5Qcm9kdWN0TW9kZWxFbnRpdHkijwMKGExpc3RQcm9kdWN0TW9kZWxzUmVxdWVzdBItCgpwYWdpbmF0aW9uGAEgASgLMhkuY29tbW9uLlBhZ2luYXRpb25SZXF1ZXN0EhUKCGJyYW5kX2lkGAIgASgDSACIAQESEQoEbmFtZRgDIAEoCUgBiAEBEhgKC2Rlc2NyaXB0aW9uGAQgASgJSAKIAQESHAoPbGlzdF9wcmljZV9mcm9tGAUgASgDSAOIAQESGgoNbGlzdF9wcmljZV90bxgGIAEoA0gEiAEBEiMKFmRhdGVfbWFudWZhY3R1cmVkX2Zyb20YByABKANIBYgBARIhChRkYXRlX21hbnVmYWN0dXJlZF90bxgIIAEoA0gGiAEBQgsKCV9icmFuZF9pZEIHCgVfbmFtZUIOCgxfZGVzY3JpcHRpb25CEgoQX2xpc3RfcHJpY2VfZnJvbUIQCg5fbGlzdF9wcmljZV90b0IZChdfZGF0ZV9tYW51ZmFjdHVyZWRfZnJvbUIXChVfZGF0ZV9tYW51ZmFjdHVyZWRfdG8igwEKGUxpc3RQcm9kdWN0TW9kZWxzUmVzcG9uc2USLgoKcGFnaW5hdGlvbhgBIAEoCzIaLmNvbW1vbi5QYWdpbmF0aW9uUmVzcG9uc2USNgoOcHJvZHVjdF9tb2RlbHMYAiADKAsyHi5wcm9kdWN0LnYxLlByb2R1Y3RNb2RlbEVudGl0eSJ/ChlDcmVhdGVQcm9kdWN0TW9kZWxSZXF1ZXN0EhAKCGJyYW5kX2lkGAEgASgDEgwKBG5hbWUYAiABKAkSEwoLZGVzY3JpcHRpb24YAyABKAkSEgoKbGlzdF9wcmljZRgEIAEoAxIZChFkYXRlX21hbnVmYWN0dXJlZBgFIAEoAyJTChpDcmVhdGVQcm9kdWN0TW9kZWxSZXNwb25zZRI1Cg1wcm9kdWN0X21vZGVsGAEgASgLMh4ucHJvZHVjdC52MS5Qcm9kdWN0TW9kZWxFbnRpdHki7wEKGVVwZGF0ZVByb2R1Y3RNb2RlbFJlcXVlc3QSCgoCaWQYASABKAMSFQoIYnJhbmRfaWQYAiABKANIAIgBARIRCgRuYW1lGAMgASgJSAGIAQESGAoLZGVzY3JpcHRpb24YBCABKAlIAogBARIXCgpsaXN0X3ByaWNlGAUgASgDSAOIAQESHgoRZGF0ZV9tYW51ZmFjdHVyZWQYBiABKANIBIgBAUILCglfYnJhbmRfaWRCBwoFX25hbWVCDgoMX2Rlc2NyaXB0aW9uQg0KC19saXN0X3ByaWNlQhQKEl9kYXRlX21hbnVmYWN0dXJlZCIcChpVcGRhdGVQcm9kdWN0TW9kZWxSZXNwb25zZSInChlEZWxldGVQcm9kdWN0TW9kZWxSZXF1ZXN0EgoKAmlkGAEgASgDIhwKGkRlbGV0ZVByb2R1Y3RNb2RlbFJlc3BvbnNlQrQBCg5jb20ucHJvZHVjdC52MUIRUHJvZHVjdE1vZGVsUHJvdG9QAVpGZ2l0aHViLmNvbS9zaG9wbmV4dXMvc2hvcG5leHVzLXByb3RvYnVmLWdlbi1nby9wYi9wcm9kdWN0L3YxO3Byb2R1Y3R2MaICA1BYWKoCClByb2R1Y3QuVjHKAgpQcm9kdWN0XFYx4gIWUHJvZHVjdFxWMVxHUEJNZXRhZGF0YeoCC1Byb2R1Y3Q6OlYxYgZwcm90bzM", [file_common_pagination]);

/**
 * Describes the message product.v1.ProductModelEntity.
 * Use `create(ProductModelEntitySchema)` to create a new message.
 */
export const ProductModelEntitySchema = /*@__PURE__*/
  messageDesc(file_product_v1_product_model, 0);

/**
 * Describes the message product.v1.GetProductModelRequest.
 * Use `create(GetProductModelRequestSchema)` to create a new message.
 */
export const GetProductModelRequestSchema = /*@__PURE__*/
  messageDesc(file_product_v1_product_model, 1);

/**
 * Describes the message product.v1.GetProductModelResponse.
 * Use `create(GetProductModelResponseSchema)` to create a new message.
 */
export const GetProductModelResponseSchema = /*@__PURE__*/
  messageDesc(file_product_v1_product_model, 2);

/**
 * Describes the message product.v1.ListProductModelsRequest.
 * Use `create(ListProductModelsRequestSchema)` to create a new message.
 */
export const ListProductModelsRequestSchema = /*@__PURE__*/
  messageDesc(file_product_v1_product_model, 3);

/**
 * Describes the message product.v1.ListProductModelsResponse.
 * Use `create(ListProductModelsResponseSchema)` to create a new message.
 */
export const ListProductModelsResponseSchema = /*@__PURE__*/
  messageDesc(file_product_v1_product_model, 4);

/**
 * Describes the message product.v1.CreateProductModelRequest.
 * Use `create(CreateProductModelRequestSchema)` to create a new message.
 */
export const CreateProductModelRequestSchema = /*@__PURE__*/
  messageDesc(file_product_v1_product_model, 5);

/**
 * Describes the message product.v1.CreateProductModelResponse.
 * Use `create(CreateProductModelResponseSchema)` to create a new message.
 */
export const CreateProductModelResponseSchema = /*@__PURE__*/
  messageDesc(file_product_v1_product_model, 6);

/**
 * Describes the message product.v1.UpdateProductModelRequest.
 * Use `create(UpdateProductModelRequestSchema)` to create a new message.
 */
export const UpdateProductModelRequestSchema = /*@__PURE__*/
  messageDesc(file_product_v1_product_model, 7);

/**
 * Describes the message product.v1.UpdateProductModelResponse.
 * Use `create(UpdateProductModelResponseSchema)` to create a new message.
 */
export const UpdateProductModelResponseSchema = /*@__PURE__*/
  messageDesc(file_product_v1_product_model, 8);

/**
 * Describes the message product.v1.DeleteProductModelRequest.
 * Use `create(DeleteProductModelRequestSchema)` to create a new message.
 */
export const DeleteProductModelRequestSchema = /*@__PURE__*/
  messageDesc(file_product_v1_product_model, 9);

/**
 * Describes the message product.v1.DeleteProductModelResponse.
 * Use `create(DeleteProductModelResponseSchema)` to create a new message.
 */
export const DeleteProductModelResponseSchema = /*@__PURE__*/
  messageDesc(file_product_v1_product_model, 10);

