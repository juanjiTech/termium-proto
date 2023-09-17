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
export type SyncRequest = {
  after?: GoogleProtobufTimestamp.Timestamp
}

export type SyncResponse = {
  serverTime?: GoogleProtobufTimestamp.Timestamp
  hostSet?: SyncV1Host.Host[]
  knownHostSet?: SyncV1Known_hosts.KnownHost[]
  sshKeySet?: SyncV1Keychain.SshKey[]
  identitySet?: SyncV1Keychain.Identity[]
}

export class SyncService {
  static Sync(req: SyncRequest, initReq?: fm.InitReq): Promise<SyncResponse> {
    return fm.fetchReq<SyncRequest, SyncResponse>(`/gapi/sync/v1/sync?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
}