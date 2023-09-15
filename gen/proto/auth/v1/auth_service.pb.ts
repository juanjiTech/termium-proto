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
}