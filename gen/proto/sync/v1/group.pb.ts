/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb"
export type Group = {
  groupBasic?: GroupBasic
  members?: Member[]
}

export type GroupBasic = {
  id?: string
  name?: string
  description?: string
  avatar?: string
  createdAt?: GoogleProtobufTimestamp.Timestamp
  updatedAt?: GoogleProtobufTimestamp.Timestamp
  deletedAt?: GoogleProtobufTimestamp.Timestamp
  uid?: string
}

export type Member = {
  uid?: string
}