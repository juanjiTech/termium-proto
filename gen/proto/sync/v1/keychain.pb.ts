/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

export type SshKey = {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
  label?: string
  privateKey?: string
  publicKey?: string
  certificate?: string
}

export type Identity = {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
  label?: string
  username?: string
  password?: string
  keyId?: string
}