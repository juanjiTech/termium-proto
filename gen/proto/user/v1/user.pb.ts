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

export enum HostSyncMode {
  HOST_SYNC_MODE_UNSPECIFIED = "HOST_SYNC_MODE_UNSPECIFIED",
  HOST_SYNC_MODE_ENABLE = "HOST_SYNC_MODE_ENABLE",
  HOST_SYNC_MODE_DISABLE = "HOST_SYNC_MODE_DISABLE",
  HOST_SYNC_MODE_ONCE = "HOST_SYNC_MODE_ONCE",
}

export type User = {
  id?: string
  nickName?: string
  status?: UserStatus
  avatar?: string
  email?: string
}

export type Host = {
  id?: string
  owner?: string
  name?: string
  host?: string
  port?: number
  password?: string
  syncMode?: HostSyncMode
}