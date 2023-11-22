/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"
import * as UserV1User from "./user.pb"
export type GetInfoRequest = {
}

export type GetInfoResponse = {
  info?: UserV1User.User
}

export type SendEmailVerifyCodeRequest = {
  email?: string
}

export type SendEmailVerifyCodeResponse = {
}

export type CheckEmailVerifyCodeRequest = {
  email?: string
  code?: string
}

export type CheckEmailVerifyCodeResponse = {
}

export type GetUserPublicKeyRequest = {
  id?: string
}

export type GetUserPublicKeyResponse = {
  publicKey?: string
}

export class UserService {
  static GetInfo(req: GetInfoRequest, initReq?: fm.InitReq): Promise<GetInfoResponse> {
    return fm.fetchReq<GetInfoRequest, GetInfoResponse>(`/gapi/user/v1/info?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static SendEmailVerifyCode(req: SendEmailVerifyCodeRequest, initReq?: fm.InitReq): Promise<SendEmailVerifyCodeResponse> {
    return fm.fetchReq<SendEmailVerifyCodeRequest, SendEmailVerifyCodeResponse>(`/gapi/user/v1/verify/email/send`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static CheckEmailVerifyCode(req: CheckEmailVerifyCodeRequest, initReq?: fm.InitReq): Promise<CheckEmailVerifyCodeResponse> {
    return fm.fetchReq<CheckEmailVerifyCodeRequest, CheckEmailVerifyCodeResponse>(`/gapi/user/v1/verify/email/check`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetUserPublicKey(req: GetUserPublicKeyRequest, initReq?: fm.InitReq): Promise<GetUserPublicKeyResponse> {
    return fm.fetchReq<GetUserPublicKeyRequest, GetUserPublicKeyResponse>(`/gapi/user/v1/public_key?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
}