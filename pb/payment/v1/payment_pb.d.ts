// @generated by protoc-gen-es v2.2.3
// @generated from file payment/v1/payment.proto (package payment.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import type { Message } from "@bufbuild/protobuf";
import type { Status } from "../../common/status_pb";
import type { PaginationRequest, PaginationResponse } from "../../common/pagination_pb";

/**
 * Describes the file payment/v1/payment.proto.
 */
export declare const file_payment_v1_payment: GenFile;

/**
 * @generated from message payment.v1.Payment
 */
export declare type Payment = Message<"payment.v1.Payment"> & {
  /**
   * @generated from field: int64 id = 1;
   */
  id: bigint;

  /**
   * @generated from field: int64 user_id = 2;
   */
  userId: bigint;

  /**
   * @generated from field: payment.v1.PaymentMethod method = 3;
   */
  method: PaymentMethod;

  /**
   * @generated from field: common.Status status = 4;
   */
  status: Status;

  /**
   * @generated from field: string address = 5;
   */
  address: string;

  /**
   * @generated from field: int64 total = 6;
   */
  total: bigint;

  /**
   * @generated from field: int64 date_created = 7;
   */
  dateCreated: bigint;
};

/**
 * Describes the message payment.v1.Payment.
 * Use `create(PaymentSchema)` to create a new message.
 */
export declare const PaymentSchema: GenMessage<Payment>;

/**
 * @generated from message payment.v1.GetPaymentRequest
 */
export declare type GetPaymentRequest = Message<"payment.v1.GetPaymentRequest"> & {
  /**
   * @generated from field: string payment_id = 1;
   */
  paymentId: string;
};

/**
 * Describes the message payment.v1.GetPaymentRequest.
 * Use `create(GetPaymentRequestSchema)` to create a new message.
 */
export declare const GetPaymentRequestSchema: GenMessage<GetPaymentRequest>;

/**
 * @generated from message payment.v1.GetPaymentResponse
 */
export declare type GetPaymentResponse = Message<"payment.v1.GetPaymentResponse"> & {
  /**
   * @generated from field: payment.v1.Payment payment = 1;
   */
  payment?: Payment;
};

/**
 * Describes the message payment.v1.GetPaymentResponse.
 * Use `create(GetPaymentResponseSchema)` to create a new message.
 */
export declare const GetPaymentResponseSchema: GenMessage<GetPaymentResponse>;

/**
 * @generated from message payment.v1.ListPaymentsRequest
 */
export declare type ListPaymentsRequest = Message<"payment.v1.ListPaymentsRequest"> & {
  /**
   * @generated from field: common.PaginationRequest pagination = 1;
   */
  pagination?: PaginationRequest;

  /**
   * @generated from field: optional int64 user_id = 2;
   */
  userId?: bigint;

  /**
   * @generated from field: optional payment.v1.PaymentMethod method = 3;
   */
  method?: PaymentMethod;

  /**
   * @generated from field: optional common.Status status = 4;
   */
  status?: Status;

  /**
   * @generated from field: optional int64 date_created_from = 5;
   */
  dateCreatedFrom?: bigint;

  /**
   * @generated from field: optional int64 date_created_to = 6;
   */
  dateCreatedTo?: bigint;
};

/**
 * Describes the message payment.v1.ListPaymentsRequest.
 * Use `create(ListPaymentsRequestSchema)` to create a new message.
 */
export declare const ListPaymentsRequestSchema: GenMessage<ListPaymentsRequest>;

/**
 * @generated from message payment.v1.ListPaymentsResponse
 */
export declare type ListPaymentsResponse = Message<"payment.v1.ListPaymentsResponse"> & {
  /**
   * @generated from field: common.PaginationResponse pagination = 1;
   */
  pagination?: PaginationResponse;

  /**
   * @generated from field: repeated payment.v1.Payment payments = 2;
   */
  payments: Payment[];
};

/**
 * Describes the message payment.v1.ListPaymentsResponse.
 * Use `create(ListPaymentsResponseSchema)` to create a new message.
 */
export declare const ListPaymentsResponseSchema: GenMessage<ListPaymentsResponse>;

/**
 * @generated from message payment.v1.CreatePaymentRequest
 */
export declare type CreatePaymentRequest = Message<"payment.v1.CreatePaymentRequest"> & {
  /**
   * @generated from field: int64 request_id = 1;
   */
  requestId: bigint;

  /**
   * @generated from field: payment.v1.PaymentMethod payment_method = 2;
   */
  paymentMethod: PaymentMethod;

  /**
   * @generated from field: string address = 3;
   */
  address: string;
};

/**
 * Describes the message payment.v1.CreatePaymentRequest.
 * Use `create(CreatePaymentRequestSchema)` to create a new message.
 */
export declare const CreatePaymentRequestSchema: GenMessage<CreatePaymentRequest>;

/**
 * @generated from message payment.v1.CreatePaymentResponse
 */
export declare type CreatePaymentResponse = Message<"payment.v1.CreatePaymentResponse"> & {
  /**
   * @generated from field: int64 request_id = 1;
   */
  requestId: bigint;

  /**
   * @generated from field: string url = 2;
   */
  url: string;

  /**
   * @generated from field: payment.v1.Payment payment = 3;
   */
  payment?: Payment;
};

/**
 * Describes the message payment.v1.CreatePaymentResponse.
 * Use `create(CreatePaymentResponseSchema)` to create a new message.
 */
export declare const CreatePaymentResponseSchema: GenMessage<CreatePaymentResponse>;

/**
 * @generated from message payment.v1.UpdatePaymentRequest
 */
export declare type UpdatePaymentRequest = Message<"payment.v1.UpdatePaymentRequest"> & {
  /**
   * @generated from field: string payment_id = 1;
   */
  paymentId: string;

  /**
   * @generated from field: optional common.Status status = 2;
   */
  status?: Status;
};

/**
 * Describes the message payment.v1.UpdatePaymentRequest.
 * Use `create(UpdatePaymentRequestSchema)` to create a new message.
 */
export declare const UpdatePaymentRequestSchema: GenMessage<UpdatePaymentRequest>;

/**
 * @generated from message payment.v1.UpdatePaymentResponse
 */
export declare type UpdatePaymentResponse = Message<"payment.v1.UpdatePaymentResponse"> & {
};

/**
 * Describes the message payment.v1.UpdatePaymentResponse.
 * Use `create(UpdatePaymentResponseSchema)` to create a new message.
 */
export declare const UpdatePaymentResponseSchema: GenMessage<UpdatePaymentResponse>;

/**
 * @generated from message payment.v1.CancelPaymentRequest
 */
export declare type CancelPaymentRequest = Message<"payment.v1.CancelPaymentRequest"> & {
  /**
   * @generated from field: string payment_id = 1;
   */
  paymentId: string;
};

/**
 * Describes the message payment.v1.CancelPaymentRequest.
 * Use `create(CancelPaymentRequestSchema)` to create a new message.
 */
export declare const CancelPaymentRequestSchema: GenMessage<CancelPaymentRequest>;

/**
 * @generated from message payment.v1.CancelPaymentResponse
 */
export declare type CancelPaymentResponse = Message<"payment.v1.CancelPaymentResponse"> & {
};

/**
 * Describes the message payment.v1.CancelPaymentResponse.
 * Use `create(CancelPaymentResponseSchema)` to create a new message.
 */
export declare const CancelPaymentResponseSchema: GenMessage<CancelPaymentResponse>;

/**
 * @generated from enum payment.v1.PaymentMethod
 */
export enum PaymentMethod {
  /**
   * @generated from enum value: PAYMENT_METHOD_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PAYMENT_METHOD_CASH = 1;
   */
  CASH = 1,

  /**
   * @generated from enum value: PAYMENT_METHOD_MOMO = 2;
   */
  MOMO = 2,

  /**
   * @generated from enum value: PAYMENT_METHOD_VNPAY = 3;
   */
  VNPAY = 3,
}

/**
 * Describes the enum payment.v1.PaymentMethod.
 */
export declare const PaymentMethodSchema: GenEnum<PaymentMethod>;

