/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"
import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb"
import * as TeamV1Team from "../../team/v1/team.pb"
import * as UserV1Key_wallet from "../../user/v1/key_wallet.pb"
import * as SyncV1Team_config from "./team_config.pb"
export type SyncConfigRequest = {
  after?: GoogleProtobufTimestamp.Timestamp
  teamId?: string
}

export type SyncConfigResponse = {
  serverTime?: GoogleProtobufTimestamp.Timestamp
  records?: SyncV1Team_config.TeamConfigRecord[]
}

export type UpdateConfigRequest = {
  teamId?: string
  record?: SyncV1Team_config.TeamConfigRecord
}

export type UpdateConfigResponse = {
  serverTime?: GoogleProtobufTimestamp.Timestamp
  record?: SyncV1Team_config.TeamConfigRecord
}

export type SyncTeamRequest = {
  after?: GoogleProtobufTimestamp.Timestamp
}

export type SyncTeamResponse = {
  serverTime?: GoogleProtobufTimestamp.Timestamp
  teams?: TeamV1Team.Team[]
}

export type SyncUserKeyWalletRequest = {
  after?: GoogleProtobufTimestamp.Timestamp
}

export type SyncUserKeyWalletResponse = {
  serverTime?: GoogleProtobufTimestamp.Timestamp
  publicKey?: string
  encryptedPrivateKey?: string
  userKeyWalletSet?: UserV1Key_wallet.UserKeyWallet[]
}

export type UpdateUserKeyWalletRequest = {
  publicKey?: string
  encryptedPrivateKey?: string
  userKeyWalletSet?: UserV1Key_wallet.UserKeyWallet[]
}

export type UpdateUserKeyWalletResponse = {
  publicKey?: string
  encryptedPrivateKey?: string
  userKeyWalletSet?: UserV1Key_wallet.UserKeyWallet[]
  serverTime?: GoogleProtobufTimestamp.Timestamp
}

export class SyncService {
  static SyncConfig(req: SyncConfigRequest, initReq?: fm.InitReq): Promise<SyncConfigResponse> {
    return fm.fetchReq<SyncConfigRequest, SyncConfigResponse>(`/gapi/sync/v1/config?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static UpdateConfig(req: UpdateConfigRequest, initReq?: fm.InitReq): Promise<UpdateConfigResponse> {
    return fm.fetchReq<UpdateConfigRequest, UpdateConfigResponse>(`/gapi/sync/v1/config`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SyncTeam(req: SyncTeamRequest, initReq?: fm.InitReq): Promise<SyncTeamResponse> {
    return fm.fetchReq<SyncTeamRequest, SyncTeamResponse>(`/gapi/sync/v1/team?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static SyncUserKeyWallet(req: SyncUserKeyWalletRequest, initReq?: fm.InitReq): Promise<SyncUserKeyWalletResponse> {
    return fm.fetchReq<SyncUserKeyWalletRequest, SyncUserKeyWalletResponse>(`/gapi/sync/v1/key_wallet?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static UpdateUserKeyWallet(req: UpdateUserKeyWalletRequest, initReq?: fm.InitReq): Promise<UpdateUserKeyWalletResponse> {
    return fm.fetchReq<UpdateUserKeyWalletRequest, UpdateUserKeyWalletResponse>(`/gapi/sync/v1/key_wallet`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}