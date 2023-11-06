/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"
import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb"
import * as SyncV1Group from "./group.pb"
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
export type SyncRequest = {
  after?: GoogleProtobufTimestamp.Timestamp
  groupId?: string
}

export type SyncResponse = {
  serverTime?: GoogleProtobufTimestamp.Timestamp
  hostSet?: SyncV1Host.Host[]
  knownHostSet?: SyncV1Known_hosts.KnownHost[]
  sshKeySet?: SyncV1Keychain.SshKey[]
  identitySet?: SyncV1Keychain.Identity[]
}


type BaseUpdateRequest = {
  groupId?: string
  publicKey?: string
  encryptedPrivateKey?: string
}

export type UpdateRequest = BaseUpdateRequest
  & OneOf<{ host: SyncV1Host.Host; knownHost: SyncV1Known_hosts.KnownHost; sshKey: SyncV1Keychain.SshKey; identity: SyncV1Keychain.Identity }>


type BaseUpdateResponse = {
}

export type UpdateResponse = BaseUpdateResponse
  & OneOf<{ host: SyncV1Host.Host; knownHost: SyncV1Known_hosts.KnownHost; sshKey: SyncV1Keychain.SshKey; identity: SyncV1Keychain.Identity }>

export type UpdateGroupRequest = {
  group?: SyncV1Group.Group
}

export type UpdateGroupResponse = {
}

export type SyncGroupRequest = {
  after?: GoogleProtobufTimestamp.Timestamp
}

export type SyncGroupResponse = {
  serverTime?: GoogleProtobufTimestamp.Timestamp
  groups?: SyncV1Group.Group[]
}

export type GetUserKeyChainRequest = {
}

export type GetUserKeyChainResponse = {
  publicKey?: string
  encryptedPrivateKey?: string
}

export type UpdateUserKeyChainRequest = {
  publicKey?: string
  encryptedPrivateKey?: string
}

export type UpdateUserKeyChainResponse = {
}

export class SyncService {
  static Sync(req: SyncRequest, initReq?: fm.InitReq): Promise<SyncResponse> {
    return fm.fetchReq<SyncRequest, SyncResponse>(`/gapi/sync/v1/sync?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static Update(req: UpdateRequest, initReq?: fm.InitReq): Promise<UpdateResponse> {
    return fm.fetchReq<UpdateRequest, UpdateResponse>(`/gapi/sync/v1/update`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static UpdateGroup(req: UpdateGroupRequest, initReq?: fm.InitReq): Promise<UpdateGroupResponse> {
    return fm.fetchReq<UpdateGroupRequest, UpdateGroupResponse>(`/gapi/sync/v1/update_group`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SyncGroup(req: SyncGroupRequest, initReq?: fm.InitReq): Promise<SyncGroupResponse> {
    return fm.fetchReq<SyncGroupRequest, SyncGroupResponse>(`/gapi/sync/v1/sync_group?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static GetUserKeyChain(req: GetUserKeyChainRequest, initReq?: fm.InitReq): Promise<GetUserKeyChainResponse> {
    return fm.fetchReq<GetUserKeyChainRequest, GetUserKeyChainResponse>(`/gapi/sync/v1/get_user_key_chain?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static UpdateUserKeyChain(req: UpdateUserKeyChainRequest, initReq?: fm.InitReq): Promise<UpdateUserKeyChainResponse> {
    return fm.fetchReq<UpdateUserKeyChainRequest, UpdateUserKeyChainResponse>(`/gapi/sync/v1/update_user_key_chain`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}