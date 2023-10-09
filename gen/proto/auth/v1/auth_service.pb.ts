/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"
export type RegisterRequest = {
  email?: string
  verifyCode?: string
  password?: string
}

export type LoginResponse = {
  accessToken?: string
  refreshToken?: string
}

export type RegisterResponse = {
  accessToken?: string
  refreshToken?: string
}

export type LoginRequest = {
  username?: string
  password?: string
  twoFactorAuth?: string
}

export type RefreshTokenRequest = {
  refreshToken?: string
}

export type RefreshTokenResponse = {
  accessToken?: string
  refreshToken?: string
}

export type GetMFAStatusRequest = {
}

export type GetMFAStatusResponse = {
  totpStatus?: TOTPStatus
}

export type TOTPStatus = {
  isActive?: boolean
}

export type EnableTOTPRequest = {
  email?: string
  verifyCode?: string
}

export type EnableTOTPResponse = {
  secretKey?: string
  recoveryCode?: string[]
}

export type DisableTOTPRequest = {
  totpCode?: string
}

export type DisableTOTPResponse = {
}

export type CheckTOTPRequest = {
  totpCode?: string
}

export type CheckTOTPResponse = {
}

export type RecoverTOTPRequest = {
  recoveryCode?: string[]
}

export type RecoverTOTPResponse = {
  newSecretKey?: string
  newRecoveryCode?: string[]
}

export class AuthService {
  static Register(req: RegisterRequest, initReq?: fm.InitReq): Promise<RegisterResponse> {
    return fm.fetchReq<RegisterRequest, RegisterResponse>(`/gapi/auth/v1/register`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static Login(req: LoginRequest, initReq?: fm.InitReq): Promise<LoginResponse> {
    return fm.fetchReq<LoginRequest, LoginResponse>(`/gapi/auth/v1/login`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RefreshToken(req: RefreshTokenRequest, initReq?: fm.InitReq): Promise<RefreshTokenResponse> {
    return fm.fetchReq<RefreshTokenRequest, RefreshTokenResponse>(`/gapi/auth/v1/refreshToken`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetMFAStatus(req: GetMFAStatusRequest, initReq?: fm.InitReq): Promise<GetMFAStatusResponse> {
    return fm.fetchReq<GetMFAStatusRequest, GetMFAStatusResponse>(`/gapi/auth/v1/mfa/status`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static EnableTOTP(req: EnableTOTPRequest, initReq?: fm.InitReq): Promise<EnableTOTPResponse> {
    return fm.fetchReq<EnableTOTPRequest, EnableTOTPResponse>(`/gapi/auth/v1/mfa/totp/enable`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DisableTOTP(req: DisableTOTPRequest, initReq?: fm.InitReq): Promise<DisableTOTPResponse> {
    return fm.fetchReq<DisableTOTPRequest, DisableTOTPResponse>(`/gapi/auth/v1/mfa/totp/disable`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static CheckTOTP(req: CheckTOTPRequest, initReq?: fm.InitReq): Promise<CheckTOTPResponse> {
    return fm.fetchReq<CheckTOTPRequest, CheckTOTPResponse>(`/gapi/auth/v1/mfa/totp/check`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RecoverTOTP(req: RecoverTOTPRequest, initReq?: fm.InitReq): Promise<RecoverTOTPResponse> {
    return fm.fetchReq<RecoverTOTPRequest, RecoverTOTPResponse>(`/gapi/auth/v1/mfa/totp/recover`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}