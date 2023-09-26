/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as GoogleProtobufTimestamp from "../../google/protobuf/timestamp.pb"
export type Group = {
  groupBasic?: GroupBasic
  memberId?: string[]
}

export type GroupBasic = {
  id?: string
  createdAt?: GoogleProtobufTimestamp.Timestamp
  updatedAt?: GoogleProtobufTimestamp.Timestamp
  deletedAt?: GoogleProtobufTimestamp.Timestamp
  name?: string
  description?: string
  avatar?: string
  uid?: string
}