/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as SyncV1Port_forward from "./port_forward.pb"
export type SshKeyBody = {
  label?: string
  privateKey?: string
  publicKey?: string
  certificate?: string
}

export type IdentityBody = {
  label?: string
  username?: string
  password?: string
  keyId?: string
}

export type KnownHostBody = {
  address?: string
  publicKey?: string
}

export type HostBody = {
  label?: string
  tags?: string[]
  address?: string
  port?: string
  charset?: string
  username?: string
  password?: string
  keyId?: string
  identityId?: string
  proxyHostIds?: string[]
}

export type PortForwardBody = {
  label?: string
  type?: SyncV1Port_forward.PortForwardType
  bindAddress?: string
  bindPort?: number
  targetHost?: string
  targetPort?: number
  chainHostIds?: string[]
  autoStart?: boolean
}

export type SnippetBody = {
  name?: string
  script?: string
  package?: string[]
  sortOrder?: string
}