// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file product/v1/service.proto (package product.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { CreateBrandRequestSchema, CreateBrandResponseSchema, DeleteBrandRequestSchema, DeleteBrandResponseSchema, GetBrandRequestSchema, GetBrandResponseSchema, ListBrandsRequestSchema, ListBrandsResponseSchema, UpdateBrandRequestSchema, UpdateBrandResponseSchema } from "./brand_pb";
import { file_product_v1_brand } from "./brand_pb";
import type { CreateCommentRequestSchema, CreateCommentResponseSchema, DeleteCommentRequestSchema, DeleteCommentResponseSchema, GetCommentRequestSchema, GetCommentResponseSchema, ListCommentsRequestSchema, ListCommentsResponseSchema, UpdateCommentRequestSchema, UpdateCommentResponseSchema } from "./comment_pb";
import { file_product_v1_comment } from "./comment_pb";
import type { CreateProductRequestSchema, CreateProductResponseSchema, DeleteProductRequestSchema, DeleteProductResponseSchema, GetProductRequestSchema, GetProductResponseSchema, ListProductsRequestSchema, ListProductsResponseSchema, UpdateProductRequestSchema, UpdateProductResponseSchema } from "./product_pb";
import { file_product_v1_product } from "./product_pb";
import type { CreateProductModelRequestSchema, CreateProductModelResponseSchema, DeleteProductModelRequestSchema, DeleteProductModelResponseSchema, GetProductModelRequestSchema, GetProductModelResponseSchema, ListProductModelsRequestSchema, ListProductModelsResponseSchema, ListProductTypesRequestSchema, ListProductTypesResponseSchema, UpdateProductModelRequestSchema, UpdateProductModelResponseSchema } from "./product_model_pb";
import { file_product_v1_product_model } from "./product_model_pb";
import type { CreateProductSerialRequestSchema, CreateProductSerialResponseSchema, DeleteProductSerialRequestSchema, DeleteProductSerialResponseSchema, GetProductSerialRequestSchema, GetProductSerialResponseSchema, ListProductSerialsRequestSchema, ListProductSerialsResponseSchema, UpdateProductSerialRequestSchema, UpdateProductSerialResponseSchema } from "./product_serial_pb";
import { file_product_v1_product_serial } from "./product_serial_pb";
import type { CreateSaleRequestSchema, CreateSaleResponseSchema, DeleteSaleRequestSchema, DeleteSaleResponseSchema, GetSaleRequestSchema, GetSaleResponseSchema, ListSalesRequestSchema, ListSalesResponseSchema, UpdateSaleRequestSchema, UpdateSaleResponseSchema } from "./sale_pb";
import { file_product_v1_sale } from "./sale_pb";
import type { CreateTagRequestSchema, CreateTagResponseSchema, DeleteTagRequestSchema, DeleteTagResponseSchema, GetTagRequestSchema, GetTagResponseSchema, ListTagsRequestSchema, ListTagsResponseSchema, UpdateTagRequestSchema, UpdateTagResponseSchema } from "./tag_pb";
import { file_product_v1_tag } from "./tag_pb";

/**
 * Describes the file product/v1/service.proto.
 */
export const file_product_v1_service: GenFile = /*@__PURE__*/
  fileDesc("Chhwcm9kdWN0L3YxL3NlcnZpY2UucHJvdG8SCnByb2R1Y3QudjEy8BgKDlByb2R1Y3RTZXJ2aWNlEl8KD0dldFByb2R1Y3RNb2RlbBIiLnByb2R1Y3QudjEuR2V0UHJvZHVjdE1vZGVsUmVxdWVzdBojLnByb2R1Y3QudjEuR2V0UHJvZHVjdE1vZGVsUmVzcG9uc2UiA5ACARJlChFMaXN0UHJvZHVjdE1vZGVscxIkLnByb2R1Y3QudjEuTGlzdFByb2R1Y3RNb2RlbHNSZXF1ZXN0GiUucHJvZHVjdC52MS5MaXN0UHJvZHVjdE1vZGVsc1Jlc3BvbnNlIgOQAgESZQoSQ3JlYXRlUHJvZHVjdE1vZGVsEiUucHJvZHVjdC52MS5DcmVhdGVQcm9kdWN0TW9kZWxSZXF1ZXN0GiYucHJvZHVjdC52MS5DcmVhdGVQcm9kdWN0TW9kZWxSZXNwb25zZSIAEmUKElVwZGF0ZVByb2R1Y3RNb2RlbBIlLnByb2R1Y3QudjEuVXBkYXRlUHJvZHVjdE1vZGVsUmVxdWVzdBomLnByb2R1Y3QudjEuVXBkYXRlUHJvZHVjdE1vZGVsUmVzcG9uc2UiABJlChJEZWxldGVQcm9kdWN0TW9kZWwSJS5wcm9kdWN0LnYxLkRlbGV0ZVByb2R1Y3RNb2RlbFJlcXVlc3QaJi5wcm9kdWN0LnYxLkRlbGV0ZVByb2R1Y3RNb2RlbFJlc3BvbnNlIgASYgoQTGlzdFByb2R1Y3RUeXBlcxIjLnByb2R1Y3QudjEuTGlzdFByb2R1Y3RUeXBlc1JlcXVlc3QaJC5wcm9kdWN0LnYxLkxpc3RQcm9kdWN0VHlwZXNSZXNwb25zZSIDkAIBElAKCkdldFByb2R1Y3QSHS5wcm9kdWN0LnYxLkdldFByb2R1Y3RSZXF1ZXN0Gh4ucHJvZHVjdC52MS5HZXRQcm9kdWN0UmVzcG9uc2UiA5ACARJWCgxMaXN0UHJvZHVjdHMSHy5wcm9kdWN0LnYxLkxpc3RQcm9kdWN0c1JlcXVlc3QaIC5wcm9kdWN0LnYxLkxpc3RQcm9kdWN0c1Jlc3BvbnNlIgOQAgESVgoNQ3JlYXRlUHJvZHVjdBIgLnByb2R1Y3QudjEuQ3JlYXRlUHJvZHVjdFJlcXVlc3QaIS5wcm9kdWN0LnYxLkNyZWF0ZVByb2R1Y3RSZXNwb25zZSIAElYKDVVwZGF0ZVByb2R1Y3QSIC5wcm9kdWN0LnYxLlVwZGF0ZVByb2R1Y3RSZXF1ZXN0GiEucHJvZHVjdC52MS5VcGRhdGVQcm9kdWN0UmVzcG9uc2UiABJWCg1EZWxldGVQcm9kdWN0EiAucHJvZHVjdC52MS5EZWxldGVQcm9kdWN0UmVxdWVzdBohLnByb2R1Y3QudjEuRGVsZXRlUHJvZHVjdFJlc3BvbnNlIgASYgoQR2V0UHJvZHVjdFNlcmlhbBIjLnByb2R1Y3QudjEuR2V0UHJvZHVjdFNlcmlhbFJlcXVlc3QaJC5wcm9kdWN0LnYxLkdldFByb2R1Y3RTZXJpYWxSZXNwb25zZSIDkAIBEmgKEkxpc3RQcm9kdWN0U2VyaWFscxIlLnByb2R1Y3QudjEuTGlzdFByb2R1Y3RTZXJpYWxzUmVxdWVzdBomLnByb2R1Y3QudjEuTGlzdFByb2R1Y3RTZXJpYWxzUmVzcG9uc2UiA5ACARJoChNDcmVhdGVQcm9kdWN0U2VyaWFsEiYucHJvZHVjdC52MS5DcmVhdGVQcm9kdWN0U2VyaWFsUmVxdWVzdBonLnByb2R1Y3QudjEuQ3JlYXRlUHJvZHVjdFNlcmlhbFJlc3BvbnNlIgASaAoTVXBkYXRlUHJvZHVjdFNlcmlhbBImLnByb2R1Y3QudjEuVXBkYXRlUHJvZHVjdFNlcmlhbFJlcXVlc3QaJy5wcm9kdWN0LnYxLlVwZGF0ZVByb2R1Y3RTZXJpYWxSZXNwb25zZSIAEmgKE0RlbGV0ZVByb2R1Y3RTZXJpYWwSJi5wcm9kdWN0LnYxLkRlbGV0ZVByb2R1Y3RTZXJpYWxSZXF1ZXN0GicucHJvZHVjdC52MS5EZWxldGVQcm9kdWN0U2VyaWFsUmVzcG9uc2UiABJKCghHZXRCcmFuZBIbLnByb2R1Y3QudjEuR2V0QnJhbmRSZXF1ZXN0GhwucHJvZHVjdC52MS5HZXRCcmFuZFJlc3BvbnNlIgOQAgESUAoKTGlzdEJyYW5kcxIdLnByb2R1Y3QudjEuTGlzdEJyYW5kc1JlcXVlc3QaHi5wcm9kdWN0LnYxLkxpc3RCcmFuZHNSZXNwb25zZSIDkAIBElAKC0NyZWF0ZUJyYW5kEh4ucHJvZHVjdC52MS5DcmVhdGVCcmFuZFJlcXVlc3QaHy5wcm9kdWN0LnYxLkNyZWF0ZUJyYW5kUmVzcG9uc2UiABJQCgtVcGRhdGVCcmFuZBIeLnByb2R1Y3QudjEuVXBkYXRlQnJhbmRSZXF1ZXN0Gh8ucHJvZHVjdC52MS5VcGRhdGVCcmFuZFJlc3BvbnNlIgASUAoLRGVsZXRlQnJhbmQSHi5wcm9kdWN0LnYxLkRlbGV0ZUJyYW5kUmVxdWVzdBofLnByb2R1Y3QudjEuRGVsZXRlQnJhbmRSZXNwb25zZSIAEkcKB0dldFNhbGUSGi5wcm9kdWN0LnYxLkdldFNhbGVSZXF1ZXN0GhsucHJvZHVjdC52MS5HZXRTYWxlUmVzcG9uc2UiA5ACARJNCglMaXN0U2FsZXMSHC5wcm9kdWN0LnYxLkxpc3RTYWxlc1JlcXVlc3QaHS5wcm9kdWN0LnYxLkxpc3RTYWxlc1Jlc3BvbnNlIgOQAgESTQoKQ3JlYXRlU2FsZRIdLnByb2R1Y3QudjEuQ3JlYXRlU2FsZVJlcXVlc3QaHi5wcm9kdWN0LnYxLkNyZWF0ZVNhbGVSZXNwb25zZSIAEk0KClVwZGF0ZVNhbGUSHS5wcm9kdWN0LnYxLlVwZGF0ZVNhbGVSZXF1ZXN0Gh4ucHJvZHVjdC52MS5VcGRhdGVTYWxlUmVzcG9uc2UiABJNCgpEZWxldGVTYWxlEh0ucHJvZHVjdC52MS5EZWxldGVTYWxlUmVxdWVzdBoeLnByb2R1Y3QudjEuRGVsZXRlU2FsZVJlc3BvbnNlIgASRAoGR2V0VGFnEhkucHJvZHVjdC52MS5HZXRUYWdSZXF1ZXN0GhoucHJvZHVjdC52MS5HZXRUYWdSZXNwb25zZSIDkAIBEkoKCExpc3RUYWdzEhsucHJvZHVjdC52MS5MaXN0VGFnc1JlcXVlc3QaHC5wcm9kdWN0LnYxLkxpc3RUYWdzUmVzcG9uc2UiA5ACARJKCglDcmVhdGVUYWcSHC5wcm9kdWN0LnYxLkNyZWF0ZVRhZ1JlcXVlc3QaHS5wcm9kdWN0LnYxLkNyZWF0ZVRhZ1Jlc3BvbnNlIgASSgoJVXBkYXRlVGFnEhwucHJvZHVjdC52MS5VcGRhdGVUYWdSZXF1ZXN0Gh0ucHJvZHVjdC52MS5VcGRhdGVUYWdSZXNwb25zZSIAEkoKCURlbGV0ZVRhZxIcLnByb2R1Y3QudjEuRGVsZXRlVGFnUmVxdWVzdBodLnByb2R1Y3QudjEuRGVsZXRlVGFnUmVzcG9uc2UiABJQCgpHZXRDb21tZW50Eh0ucHJvZHVjdC52MS5HZXRDb21tZW50UmVxdWVzdBoeLnByb2R1Y3QudjEuR2V0Q29tbWVudFJlc3BvbnNlIgOQAgESVgoMTGlzdENvbW1lbnRzEh8ucHJvZHVjdC52MS5MaXN0Q29tbWVudHNSZXF1ZXN0GiAucHJvZHVjdC52MS5MaXN0Q29tbWVudHNSZXNwb25zZSIDkAIBElYKDUNyZWF0ZUNvbW1lbnQSIC5wcm9kdWN0LnYxLkNyZWF0ZUNvbW1lbnRSZXF1ZXN0GiEucHJvZHVjdC52MS5DcmVhdGVDb21tZW50UmVzcG9uc2UiABJWCg1VcGRhdGVDb21tZW50EiAucHJvZHVjdC52MS5VcGRhdGVDb21tZW50UmVxdWVzdBohLnByb2R1Y3QudjEuVXBkYXRlQ29tbWVudFJlc3BvbnNlIgASVgoNRGVsZXRlQ29tbWVudBIgLnByb2R1Y3QudjEuRGVsZXRlQ29tbWVudFJlcXVlc3QaIS5wcm9kdWN0LnYxLkRlbGV0ZUNvbW1lbnRSZXNwb25zZSIAQq8BCg5jb20ucHJvZHVjdC52MUIMU2VydmljZVByb3RvUAFaRmdpdGh1Yi5jb20vc2hvcG5leHVzL3Nob3BuZXh1cy1wcm90b2J1Zi1nZW4tZ28vcGIvcHJvZHVjdC92MTtwcm9kdWN0djGiAgNQWFiqAgpQcm9kdWN0LlYxygIKUHJvZHVjdFxWMeICFlByb2R1Y3RcVjFcR1BCTWV0YWRhdGHqAgtQcm9kdWN0OjpWMWIGcHJvdG8z", [file_product_v1_brand, file_product_v1_comment, file_product_v1_product, file_product_v1_product_model, file_product_v1_product_serial, file_product_v1_sale, file_product_v1_tag]);

/**
 * @generated from service product.v1.ProductService
 */
export const ProductService: GenService<{
  /**
   * PRODUCT MODEL
   *
   * @generated from rpc product.v1.ProductService.GetProductModel
   */
  getProductModel: {
    methodKind: "unary";
    input: typeof GetProductModelRequestSchema;
    output: typeof GetProductModelResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.ListProductModels
   */
  listProductModels: {
    methodKind: "unary";
    input: typeof ListProductModelsRequestSchema;
    output: typeof ListProductModelsResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.CreateProductModel
   */
  createProductModel: {
    methodKind: "unary";
    input: typeof CreateProductModelRequestSchema;
    output: typeof CreateProductModelResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.UpdateProductModel
   */
  updateProductModel: {
    methodKind: "unary";
    input: typeof UpdateProductModelRequestSchema;
    output: typeof UpdateProductModelResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.DeleteProductModel
   */
  deleteProductModel: {
    methodKind: "unary";
    input: typeof DeleteProductModelRequestSchema;
    output: typeof DeleteProductModelResponseSchema;
  },
  /**
   * PRODUCT TYPES
   *
   * @generated from rpc product.v1.ProductService.ListProductTypes
   */
  listProductTypes: {
    methodKind: "unary";
    input: typeof ListProductTypesRequestSchema;
    output: typeof ListProductTypesResponseSchema;
  },
  /**
   * PRODUCT
   *
   * @generated from rpc product.v1.ProductService.GetProduct
   */
  getProduct: {
    methodKind: "unary";
    input: typeof GetProductRequestSchema;
    output: typeof GetProductResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.ListProducts
   */
  listProducts: {
    methodKind: "unary";
    input: typeof ListProductsRequestSchema;
    output: typeof ListProductsResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.CreateProduct
   */
  createProduct: {
    methodKind: "unary";
    input: typeof CreateProductRequestSchema;
    output: typeof CreateProductResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.UpdateProduct
   */
  updateProduct: {
    methodKind: "unary";
    input: typeof UpdateProductRequestSchema;
    output: typeof UpdateProductResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.DeleteProduct
   */
  deleteProduct: {
    methodKind: "unary";
    input: typeof DeleteProductRequestSchema;
    output: typeof DeleteProductResponseSchema;
  },
  /**
   * PRODUCT SERIAL
   *
   * @generated from rpc product.v1.ProductService.GetProductSerial
   */
  getProductSerial: {
    methodKind: "unary";
    input: typeof GetProductSerialRequestSchema;
    output: typeof GetProductSerialResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.ListProductSerials
   */
  listProductSerials: {
    methodKind: "unary";
    input: typeof ListProductSerialsRequestSchema;
    output: typeof ListProductSerialsResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.CreateProductSerial
   */
  createProductSerial: {
    methodKind: "unary";
    input: typeof CreateProductSerialRequestSchema;
    output: typeof CreateProductSerialResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.UpdateProductSerial
   */
  updateProductSerial: {
    methodKind: "unary";
    input: typeof UpdateProductSerialRequestSchema;
    output: typeof UpdateProductSerialResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.DeleteProductSerial
   */
  deleteProductSerial: {
    methodKind: "unary";
    input: typeof DeleteProductSerialRequestSchema;
    output: typeof DeleteProductSerialResponseSchema;
  },
  /**
   * BRAND
   *
   * @generated from rpc product.v1.ProductService.GetBrand
   */
  getBrand: {
    methodKind: "unary";
    input: typeof GetBrandRequestSchema;
    output: typeof GetBrandResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.ListBrands
   */
  listBrands: {
    methodKind: "unary";
    input: typeof ListBrandsRequestSchema;
    output: typeof ListBrandsResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.CreateBrand
   */
  createBrand: {
    methodKind: "unary";
    input: typeof CreateBrandRequestSchema;
    output: typeof CreateBrandResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.UpdateBrand
   */
  updateBrand: {
    methodKind: "unary";
    input: typeof UpdateBrandRequestSchema;
    output: typeof UpdateBrandResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.DeleteBrand
   */
  deleteBrand: {
    methodKind: "unary";
    input: typeof DeleteBrandRequestSchema;
    output: typeof DeleteBrandResponseSchema;
  },
  /**
   * SALE
   *
   * @generated from rpc product.v1.ProductService.GetSale
   */
  getSale: {
    methodKind: "unary";
    input: typeof GetSaleRequestSchema;
    output: typeof GetSaleResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.ListSales
   */
  listSales: {
    methodKind: "unary";
    input: typeof ListSalesRequestSchema;
    output: typeof ListSalesResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.CreateSale
   */
  createSale: {
    methodKind: "unary";
    input: typeof CreateSaleRequestSchema;
    output: typeof CreateSaleResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.UpdateSale
   */
  updateSale: {
    methodKind: "unary";
    input: typeof UpdateSaleRequestSchema;
    output: typeof UpdateSaleResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.DeleteSale
   */
  deleteSale: {
    methodKind: "unary";
    input: typeof DeleteSaleRequestSchema;
    output: typeof DeleteSaleResponseSchema;
  },
  /**
   * TAG
   *
   * @generated from rpc product.v1.ProductService.GetTag
   */
  getTag: {
    methodKind: "unary";
    input: typeof GetTagRequestSchema;
    output: typeof GetTagResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.ListTags
   */
  listTags: {
    methodKind: "unary";
    input: typeof ListTagsRequestSchema;
    output: typeof ListTagsResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.CreateTag
   */
  createTag: {
    methodKind: "unary";
    input: typeof CreateTagRequestSchema;
    output: typeof CreateTagResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.UpdateTag
   */
  updateTag: {
    methodKind: "unary";
    input: typeof UpdateTagRequestSchema;
    output: typeof UpdateTagResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.DeleteTag
   */
  deleteTag: {
    methodKind: "unary";
    input: typeof DeleteTagRequestSchema;
    output: typeof DeleteTagResponseSchema;
  },
  /**
   * COMMENT
   *
   * @generated from rpc product.v1.ProductService.GetComment
   */
  getComment: {
    methodKind: "unary";
    input: typeof GetCommentRequestSchema;
    output: typeof GetCommentResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.ListComments
   */
  listComments: {
    methodKind: "unary";
    input: typeof ListCommentsRequestSchema;
    output: typeof ListCommentsResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.CreateComment
   */
  createComment: {
    methodKind: "unary";
    input: typeof CreateCommentRequestSchema;
    output: typeof CreateCommentResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.UpdateComment
   */
  updateComment: {
    methodKind: "unary";
    input: typeof UpdateCommentRequestSchema;
    output: typeof UpdateCommentResponseSchema;
  },
  /**
   * @generated from rpc product.v1.ProductService.DeleteComment
   */
  deleteComment: {
    methodKind: "unary";
    input: typeof DeleteCommentRequestSchema;
    output: typeof DeleteCommentResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_product_v1_service, 0);

