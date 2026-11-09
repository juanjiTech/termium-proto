/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/


export enum PortForwardType {
  PORT_FORWARD_TYPE_UNSPECIFIED = "PORT_FORWARD_TYPE_UNSPECIFIED",
  PORT_FORWARD_TYPE_LOCAL = "PORT_FORWARD_TYPE_LOCAL",
  PORT_FORWARD_TYPE_REMOTE = "PORT_FORWARD_TYPE_REMOTE",
  PORT_FORWARD_TYPE_DYNAMIC = "PORT_FORWARD_TYPE_DYNAMIC",
}

export type PortForward = {
  id?: string
  createdAt?: Date
  updatedAt?: Date
  deletedAt?: Date
  clientId?: string
  label?: string
  type?: PortForwardType
  bindAddress?: string
  bindPort?: number
  targetHost?: string
  targetPort?: number
  chainHostIds?: string[]
  autoStart?: boolean
}