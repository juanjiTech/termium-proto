/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"
import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb"
import * as TeamV1Team from "../../team/v1/team.pb"
import * as UserV1Key_wallet from "../../user/v1/key_wallet.pb"
import * as SyncV1Host from "./host.pb"
import * as SyncV1Keychain from "./keychain.pb"
import * as SyncV1Known_hosts from "./known_hosts.pb"

type Absent<T, K extends keyof T> = { [k in Exclude<keyof T, K>]?: undefined };
type OneOf<T> =
  | { [k in keyof T]?: undefined }
  | (
    keyof T extends infer K ?
      (K extends string & keyof T ? { [k in K]: T[K] } & Absent<T, K>
        : never)
    : never);
export type SyncConfigRequest = {
  after?: GoogleProtobufTimestamp.Timestamp
  teamId?: string
}

export type SyncConfigResponse = {
  serverTime?: GoogleProtobufTimestamp.Timestamp
  hostSet?: SyncV1Host.Host[]
  knownHostSet?: SyncV1Known_hosts.KnownHost[]
  sshKeySet?: SyncV1Keychain.SshKey[]
  identitySet?: SyncV1Keychain.Identity[]
}


type BaseUpdateConfigRequest = {
  teamId?: string
}

export type UpdateConfigRequest = BaseUpdateConfigRequest
  & OneOf<{ host: SyncV1Host.Host; knownHost: SyncV1Known_hosts.KnownHost; sshKey: SyncV1Keychain.SshKey; identity: SyncV1Keychain.Identity }>


type BaseUpdateConfigResponse = {
}

export type UpdateConfigResponse = BaseUpdateConfigResponse
  & OneOf<{ host: SyncV1Host.Host; knownHost: SyncV1Known_hosts.KnownHost; sshKey: SyncV1Keychain.SshKey; identity: SyncV1Keychain.Identity }>

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