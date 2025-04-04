// @generated by protoc-gen-es v2.2.3 with parameter "target=ts"
// @generated from file account/v1/service.proto (package account.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { GetUserRequestSchema, GetUserResponseSchema, LoginAdminRequestSchema, LoginAdminResponseSchema, LoginUserRequestSchema, LoginUserResponseSchema, RegisterAdminRequestSchema, RegisterAdminResponseSchema, RegisterUserRequestSchema, RegisterUserResponseSchema } from "./account_pb";
import { file_account_v1_account } from "./account_pb";
import type { AddCartItemRequestSchema, AddCartItemResponseSchema, ClearCartRequestSchema, ClearCartResponseSchema, GetCartRequestSchema, GetCartResponseSchema, UpdateCartItemRequestSchema, UpdateCartItemResponseSchema } from "./cart_pb";
import { file_account_v1_cart } from "./cart_pb";

/**
 * Describes the file account/v1/service.proto.
 */
export const file_account_v1_service: GenFile = /*@__PURE__*/
  fileDesc("ChhhY2NvdW50L3YxL3NlcnZpY2UucHJvdG8SCmFjY291bnQudjEy4wUKDkFjY291bnRTZXJ2aWNlEkcKB0dldFVzZXISGi5hY2NvdW50LnYxLkdldFVzZXJSZXF1ZXN0GhsuYWNjb3VudC52MS5HZXRVc2VyUmVzcG9uc2UiA5ACARJKCglMb2dpblVzZXISHC5hY2NvdW50LnYxLkxvZ2luVXNlclJlcXVlc3QaHS5hY2NvdW50LnYxLkxvZ2luVXNlclJlc3BvbnNlIgASTQoKTG9naW5BZG1pbhIdLmFjY291bnQudjEuTG9naW5BZG1pblJlcXVlc3QaHi5hY2NvdW50LnYxLkxvZ2luQWRtaW5SZXNwb25zZSIAElMKDFJlZ2lzdGVyVXNlchIfLmFjY291bnQudjEuUmVnaXN0ZXJVc2VyUmVxdWVzdBogLmFjY291bnQudjEuUmVnaXN0ZXJVc2VyUmVzcG9uc2UiABJWCg1SZWdpc3RlckFkbWluEiAuYWNjb3VudC52MS5SZWdpc3RlckFkbWluUmVxdWVzdBohLmFjY291bnQudjEuUmVnaXN0ZXJBZG1pblJlc3BvbnNlIgASRwoHR2V0Q2FydBIaLmFjY291bnQudjEuR2V0Q2FydFJlcXVlc3QaGy5hY2NvdW50LnYxLkdldENhcnRSZXNwb25zZSIDkAIBElAKC0FkZENhcnRJdGVtEh4uYWNjb3VudC52MS5BZGRDYXJ0SXRlbVJlcXVlc3QaHy5hY2NvdW50LnYxLkFkZENhcnRJdGVtUmVzcG9uc2UiABJZCg5VcGRhdGVDYXJ0SXRlbRIhLmFjY291bnQudjEuVXBkYXRlQ2FydEl0ZW1SZXF1ZXN0GiIuYWNjb3VudC52MS5VcGRhdGVDYXJ0SXRlbVJlc3BvbnNlIgASSgoJQ2xlYXJDYXJ0EhwuYWNjb3VudC52MS5DbGVhckNhcnRSZXF1ZXN0Gh0uYWNjb3VudC52MS5DbGVhckNhcnRSZXNwb25zZSIAQq8BCg5jb20uYWNjb3VudC52MUIMU2VydmljZVByb3RvUAFaRmdpdGh1Yi5jb20vc2hvcG5leHVzL3Nob3BuZXh1cy1wcm90b2J1Zi1nZW4tZ28vcGIvYWNjb3VudC92MTthY2NvdW50djGiAgNBWFiqAgpBY2NvdW50LlYxygIKQWNjb3VudFxWMeICFkFjY291bnRcVjFcR1BCTWV0YWRhdGHqAgtBY2NvdW50OjpWMWIGcHJvdG8z", [file_account_v1_account, file_account_v1_cart]);

/**
 * @generated from service account.v1.AccountService
 */
export const AccountService: GenService<{
  /**
   * @generated from rpc account.v1.AccountService.GetUser
   */
  getUser: {
    methodKind: "unary";
    input: typeof GetUserRequestSchema;
    output: typeof GetUserResponseSchema;
  },
  /**
   * Login, register
   *
   * @generated from rpc account.v1.AccountService.LoginUser
   */
  loginUser: {
    methodKind: "unary";
    input: typeof LoginUserRequestSchema;
    output: typeof LoginUserResponseSchema;
  },
  /**
   * @generated from rpc account.v1.AccountService.LoginAdmin
   */
  loginAdmin: {
    methodKind: "unary";
    input: typeof LoginAdminRequestSchema;
    output: typeof LoginAdminResponseSchema;
  },
  /**
   * @generated from rpc account.v1.AccountService.RegisterUser
   */
  registerUser: {
    methodKind: "unary";
    input: typeof RegisterUserRequestSchema;
    output: typeof RegisterUserResponseSchema;
  },
  /**
   * @generated from rpc account.v1.AccountService.RegisterAdmin
   */
  registerAdmin: {
    methodKind: "unary";
    input: typeof RegisterAdminRequestSchema;
    output: typeof RegisterAdminResponseSchema;
  },
  /**
   * Cart
   *
   * @generated from rpc account.v1.AccountService.GetCart
   */
  getCart: {
    methodKind: "unary";
    input: typeof GetCartRequestSchema;
    output: typeof GetCartResponseSchema;
  },
  /**
   * @generated from rpc account.v1.AccountService.AddCartItem
   */
  addCartItem: {
    methodKind: "unary";
    input: typeof AddCartItemRequestSchema;
    output: typeof AddCartItemResponseSchema;
  },
  /**
   * @generated from rpc account.v1.AccountService.UpdateCartItem
   */
  updateCartItem: {
    methodKind: "unary";
    input: typeof UpdateCartItemRequestSchema;
    output: typeof UpdateCartItemResponseSchema;
  },
  /**
   * @generated from rpc account.v1.AccountService.ClearCart
   */
  clearCart: {
    methodKind: "unary";
    input: typeof ClearCartRequestSchema;
    output: typeof ClearCartResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_account_v1_service, 0);

