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

export type SetNewHostRequest = {
  name?: string
  host?: string
  port?: string
  password?: string
  syncMode?: UserV1User.HostSyncMode
}

export type SetNewHostResponse = {
}

export type GetHostRequest = {
  id?: string
}

export type GetHostResponse = {
  hosts?: UserV1User.Host[]
}

export class UserService {
  static GetInfo(req: GetInfoRequest, initReq?: fm.InitReq): Promise<GetInfoResponse> {
    return fm.fetchReq<GetInfoRequest, GetInfoResponse>(`/gapi/user/info?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static SendEmailVerifyCode(req: SendEmailVerifyCodeRequest, initReq?: fm.InitReq): Promise<SendEmailVerifyCodeResponse> {
    return fm.fetchReq<SendEmailVerifyCodeRequest, SendEmailVerifyCodeResponse>(`/gapi/user/v1/verify/email/send`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static CheckEmailVerifyCode(req: CheckEmailVerifyCodeRequest, initReq?: fm.InitReq): Promise<CheckEmailVerifyCodeResponse> {
    return fm.fetchReq<CheckEmailVerifyCodeRequest, CheckEmailVerifyCodeResponse>(`/gapi/user/v1/verify/email/check`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SetNewHost(req: SetNewHostRequest, initReq?: fm.InitReq): Promise<SetNewHostResponse> {
    return fm.fetchReq<SetNewHostRequest, SetNewHostResponse>(`/gapi/user/v1/host/set`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetHost(req: GetHostRequest, initReq?: fm.InitReq): Promise<GetHostResponse> {
    return fm.fetchReq<GetHostRequest, GetHostResponse>(`/gapi/user/v1/host/get`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}