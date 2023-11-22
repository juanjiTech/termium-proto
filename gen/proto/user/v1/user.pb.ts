/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export enum UserStatus {
  USER_STATUS_UNSPECIFIED = "USER_STATUS_UNSPECIFIED",
  USER_STATUS_DISABLED = "USER_STATUS_DISABLED",
  USER_STATUS_NORMAL = "USER_STATUS_NORMAL",
  USER_STATUS_WAIT_EMAIL_CHECK = "USER_STATUS_WAIT_EMAIL_CHECK",
}

export type User = {
  id?: string
  nickName?: string
  status?: UserStatus
  avatar?: string
}