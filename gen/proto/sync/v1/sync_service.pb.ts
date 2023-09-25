/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"
import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb"
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
}

export type UpdateRequest = BaseUpdateRequest
  & OneOf<{ host: SyncV1Host.Host; knownHost: SyncV1Known_hosts.KnownHost; sshKey: SyncV1Keychain.SshKey; identity: SyncV1Keychain.Identity }>


type BaseUpdateResponse = {
}

export type UpdateResponse = BaseUpdateResponse
  & OneOf<{ host: SyncV1Host.Host; knownHost: SyncV1Known_hosts.KnownHost; sshKey: SyncV1Keychain.SshKey; identity: SyncV1Keychain.Identity }>

export class SyncService {
  static Sync(req: SyncRequest, initReq?: fm.InitReq): Promise<SyncResponse> {
    return fm.fetchReq<SyncRequest, SyncResponse>(`/gapi/sync/v1/sync?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static Update(req: UpdateRequest, initReq?: fm.InitReq): Promise<UpdateResponse> {
    return fm.fetchReq<UpdateRequest, UpdateResponse>(`/gapi/sync/v1/update`, {...initReq, method: "POST"})
  }
}