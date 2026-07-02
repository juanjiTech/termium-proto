/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb"

export enum TeamConfigKind {
  TEAM_CONFIG_KIND_UNSPECIFIED = "TEAM_CONFIG_KIND_UNSPECIFIED",
  TEAM_CONFIG_KIND_SSH_KEY = "TEAM_CONFIG_KIND_SSH_KEY",
  TEAM_CONFIG_KIND_IDENTITY = "TEAM_CONFIG_KIND_IDENTITY",
  TEAM_CONFIG_KIND_KNOWN_HOST = "TEAM_CONFIG_KIND_KNOWN_HOST",
  TEAM_CONFIG_KIND_HOST = "TEAM_CONFIG_KIND_HOST",
  TEAM_CONFIG_KIND_PORT_FORWARD = "TEAM_CONFIG_KIND_PORT_FORWARD",
  TEAM_CONFIG_KIND_SNIPPET = "TEAM_CONFIG_KIND_SNIPPET",
}

export type TeamConfigRecord = {
  innerId?: string
  kind?: TeamConfigKind
  updatedAt?: GoogleProtobufTimestamp.Timestamp
  deletedAt?: GoogleProtobufTimestamp.Timestamp
  payloadCiphertext?: Uint8Array
}