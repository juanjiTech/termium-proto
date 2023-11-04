/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"
export type RegisterRequest = {
  email?: string
  verifyCode?: string
  message1?: Uint8Array
}

export type RegisterResponse = {
  message2?: Uint8Array
  contextId?: string
}

export type RegisterFinalizeRequest = {
  message3?: Uint8Array
  contextId?: string
}

export type RegisterFinalizeResponse = {
  accessToken?: string
  refreshToken?: string
}

export type LoginRequest = {
  username?: string
  message1?: Uint8Array
  twoFactorAuth?: string
}

export type LoginResponse = {
  message2?: Uint8Array
  contextId?: string
}

export type LoginFinalizeRequest = {
  message3?: Uint8Array
  contextId?: string
}

export type LoginFinalizeResponse = {
  accessToken?: string
  refreshToken?: string
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
  emailStatus?: EmailStatus[]
}

export type TOTPStatus = {
  isActive?: boolean
}

export type EmailStatus = {
  email?: string
  isPrimary?: boolean
  isActive?: boolean
}

export type ActiveTOTPRequest = {
  secretKey?: string
  totpCode?: string
}

export type ActiveTOTPResponse = {
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

export type AddEmailMFARequest = {
  email?: string
}

export type AddEmailMFAResponse = {
}

export type ActivateEmailMFARequest = {
  email?: string
  verificationCode?: string
}

export type ActivateEmailMFAResponse = {
}

export type SetPrimaryEmailMFARequest = {
  newEmail?: string
  oldEmail?: string
}

export type SetPrimaryEmailMFAResponse = {
}

export type SendCodeEmailMFARequest = {
  email?: string
}

export type SendCodeEmailMFAResponse = {
}

export type CheckEmailMFARequest = {
  email?: string
  verificationCode?: string
}

export type CheckEmailMFAResponse = {
}

export type DisableEmailMFARequest = {
  email?: string
}

export type DisableEmailMFAResponse = {
}

export type GetAccountStatusRequest = {
}

export type GetAccountStatusResponse = {
  sudoTtl?: string
}

export class AuthService {
  static Register(req: RegisterRequest, initReq?: fm.InitReq): Promise<RegisterResponse> {
    return fm.fetchReq<RegisterRequest, RegisterResponse>(`/gapi/auth/v1/register`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RegisterFinalize(req: RegisterFinalizeRequest, initReq?: fm.InitReq): Promise<RegisterFinalizeResponse> {
    return fm.fetchReq<RegisterFinalizeRequest, RegisterFinalizeResponse>(`/gapi/auth/v1/register-finalize`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static Login(req: LoginRequest, initReq?: fm.InitReq): Promise<LoginResponse> {
    return fm.fetchReq<LoginRequest, LoginResponse>(`/gapi/auth/v1/login`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static LoginFinalize(req: LoginFinalizeRequest, initReq?: fm.InitReq): Promise<LoginFinalizeResponse> {
    return fm.fetchReq<LoginFinalizeRequest, LoginFinalizeResponse>(`/gapi/auth/v1/login-finalize`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RefreshToken(req: RefreshTokenRequest, initReq?: fm.InitReq): Promise<RefreshTokenResponse> {
    return fm.fetchReq<RefreshTokenRequest, RefreshTokenResponse>(`/gapi/auth/v1/refreshToken`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetMFAStatus(req: GetMFAStatusRequest, initReq?: fm.InitReq): Promise<GetMFAStatusResponse> {
    return fm.fetchReq<GetMFAStatusRequest, GetMFAStatusResponse>(`/gapi/auth/v1/mfa/status`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ActiveTOTP(req: ActiveTOTPRequest, initReq?: fm.InitReq): Promise<ActiveTOTPResponse> {
    return fm.fetchReq<ActiveTOTPRequest, ActiveTOTPResponse>(`/gapi/auth/v1/mfa/totp/active`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
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
  static AddEmailMFA(req: AddEmailMFARequest, initReq?: fm.InitReq): Promise<AddEmailMFAResponse> {
    return fm.fetchReq<AddEmailMFARequest, AddEmailMFAResponse>(`/gapi/auth/v1/mfa/email/add`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static ActivateEmailMFA(req: ActivateEmailMFARequest, initReq?: fm.InitReq): Promise<ActivateEmailMFAResponse> {
    return fm.fetchReq<ActivateEmailMFARequest, ActivateEmailMFAResponse>(`/gapi/auth/v1/mfa/email/activate`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SetPrimaryEmailMFA(req: SetPrimaryEmailMFARequest, initReq?: fm.InitReq): Promise<SetPrimaryEmailMFAResponse> {
    return fm.fetchReq<SetPrimaryEmailMFARequest, SetPrimaryEmailMFAResponse>(`/gapi/auth/v1/mfa/email/setPrimary`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SendCodeEmailMFA(req: SendCodeEmailMFARequest, initReq?: fm.InitReq): Promise<SendCodeEmailMFAResponse> {
    return fm.fetchReq<SendCodeEmailMFARequest, SendCodeEmailMFAResponse>(`/gapi/auth/v1/mfa/email/send`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static CheckEmailMFA(req: CheckEmailMFARequest, initReq?: fm.InitReq): Promise<CheckEmailMFAResponse> {
    return fm.fetchReq<CheckEmailMFARequest, CheckEmailMFAResponse>(`/gapi/auth/v1/mfa/email/check`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static DisableEmailMFA(req: DisableEmailMFARequest, initReq?: fm.InitReq): Promise<DisableEmailMFAResponse> {
    return fm.fetchReq<DisableEmailMFARequest, DisableEmailMFAResponse>(`/gapi/auth/v1/mfa/email/disable`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GetAccountStatus(req: GetAccountStatusRequest, initReq?: fm.InitReq): Promise<GetAccountStatusResponse> {
    return fm.fetchReq<GetAccountStatusRequest, GetAccountStatusResponse>(`/gapi/auth/v1/account/status`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}