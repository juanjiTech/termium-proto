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
export type SyncConfigRequest = {
  after?: GoogleProtobufTimestamp.Timestamp
  groupId?: string
}

export type SyncConfigResponse = {
  serverTime?: GoogleProtobufTimestamp.Timestamp
  hostSet?: SyncV1Host.Host[]
  knownHostSet?: SyncV1Known_hosts.KnownHost[]
  sshKeySet?: SyncV1Keychain.SshKey[]
  identitySet?: SyncV1Keychain.Identity[]
}


type BaseUpdateConfigRequest = {
  groupId?: string
}

export type UpdateConfigRequest = BaseUpdateConfigRequest
  & OneOf<{ host: SyncV1Host.Host; knownHost: SyncV1Known_hosts.KnownHost; sshKey: SyncV1Keychain.SshKey; identity: SyncV1Keychain.Identity }>


type BaseUpdateConfigResponse = {
}

export type UpdateConfigResponse = BaseUpdateConfigResponse
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

export type SyncUserKeyWalletRequest = {
  after?: GoogleProtobufTimestamp.Timestamp
}

export type SyncUserKeyWalletResponse = {
  serverTime?: GoogleProtobufTimestamp.Timestamp
  publicKey?: string
  encryptedPrivateKey?: string
  userKeyWalletSet?: UserKeyWallet[]
}

export type UpdateUserKeyWalletRequest = {
  publicKey?: string
  encryptedPrivateKey?: string
  userKeyWalletSet?: UserKeyWallet[]
}

export type UpdateUserKeyWalletResponse = {
  publicKey?: string
  encryptedPrivateKey?: string
  userKeyWalletSet?: UserKeyWallet[]
}

export type UserKeyWallet = {
  uid?: string
  gid?: string
  encryptedGroupPrivateKey?: string
  createdAt?: GoogleProtobufTimestamp.Timestamp
  updatedAt?: GoogleProtobufTimestamp.Timestamp
  deletedAt?: GoogleProtobufTimestamp.Timestamp
}

export type GroupInviteUserRequest = {
  gid?: string
  inviteeUid?: string
  encryptedGroupPrivateKey?: string
}

export type GroupInviteUserResponse = {
}

export type GroupInviteAcceptRequest = {
  gid?: string
  isAccept?: boolean
}

export type GroupInviteAcceptResponse = {
}

export type GroupDeleteUserRequest = {
  userDeletedUid?: string
  gid?: string
}

export type GroupDeleteUserResponse = {
}

export class SyncService {
  static SyncConfig(req: SyncConfigRequest, initReq?: fm.InitReq): Promise<SyncConfigResponse> {
    return fm.fetchReq<SyncConfigRequest, SyncConfigResponse>(`/gapi/sync/v1/sync_config?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static UpdateConfig(req: UpdateConfigRequest, initReq?: fm.InitReq): Promise<UpdateConfigResponse> {
    return fm.fetchReq<UpdateConfigRequest, UpdateConfigResponse>(`/gapi/sync/v1/update_config`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static UpdateGroup(req: UpdateGroupRequest, initReq?: fm.InitReq): Promise<UpdateGroupResponse> {
    return fm.fetchReq<UpdateGroupRequest, UpdateGroupResponse>(`/gapi/sync/v1/update_group`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static SyncGroup(req: SyncGroupRequest, initReq?: fm.InitReq): Promise<SyncGroupResponse> {
    return fm.fetchReq<SyncGroupRequest, SyncGroupResponse>(`/gapi/sync/v1/sync_group?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static SyncUserKeyWallet(req: SyncUserKeyWalletRequest, initReq?: fm.InitReq): Promise<SyncUserKeyWalletResponse> {
    return fm.fetchReq<SyncUserKeyWalletRequest, SyncUserKeyWalletResponse>(`/gapi/sync/v1/sync_user_key_wallet?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static UpdateUserKeyWallet(req: UpdateUserKeyWalletRequest, initReq?: fm.InitReq): Promise<UpdateUserKeyWalletResponse> {
    return fm.fetchReq<UpdateUserKeyWalletRequest, UpdateUserKeyWalletResponse>(`/gapi/sync/v1/update_user_key_wallet`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GroupInviteUser(req: GroupInviteUserRequest, initReq?: fm.InitReq): Promise<GroupInviteUserResponse> {
    return fm.fetchReq<GroupInviteUserRequest, GroupInviteUserResponse>(`/gapi/sync/v1/group_invite_user`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GroupInviteAccept(req: GroupInviteAcceptRequest, initReq?: fm.InitReq): Promise<GroupInviteAcceptResponse> {
    return fm.fetchReq<GroupInviteAcceptRequest, GroupInviteAcceptResponse>(`/gapi/sync/v1/group_invite_accept`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static GroupDeleteUser(req: GroupDeleteUserRequest, initReq?: fm.InitReq): Promise<GroupDeleteUserResponse> {
    return fm.fetchReq<GroupDeleteUserRequest, GroupDeleteUserResponse>(`/gapi/sync/v1/group_delete_user`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}