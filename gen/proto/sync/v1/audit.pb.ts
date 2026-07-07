/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

type Absent<T, K extends keyof T> = { [k in Exclude<keyof T, K>]?: undefined };
type OneOf<T> =
  | { [k in keyof T]?: undefined }
  | (
    keyof T extends infer K ?
      (K extends string & keyof T ? { [k in K]: T[K] } & Absent<T, K>
        : never)
    : never);

export enum AuditEffect {
  AUDIT_EFFECT_UNSPECIFIED = "AUDIT_EFFECT_UNSPECIFIED",
  AUDIT_EFFECT_ALLOW = "AUDIT_EFFECT_ALLOW",
  AUDIT_EFFECT_DENY = "AUDIT_EFFECT_DENY",
  AUDIT_EFFECT_ASK = "AUDIT_EFFECT_ASK",
}

export enum AuditLoggingMode {
  AUDIT_LOGGING_MODE_UNSPECIFIED = "AUDIT_LOGGING_MODE_UNSPECIFIED",
  AUDIT_LOGGING_MODE_FULL = "AUDIT_LOGGING_MODE_FULL",
  AUDIT_LOGGING_MODE_SAMPLE = "AUDIT_LOGGING_MODE_SAMPLE",
}


type BaseAuditLogging = {
  mode?: AuditLoggingMode
}

export type AuditLogging = BaseAuditLogging
  & OneOf<{ sampleRate: number }>
  & OneOf<{ alwaysLogDenied: boolean }>

export type AuditRule = {
  name?: string
  effect?: AuditEffect
  verbs?: string[]
  apiGroups?: string[]
  resources?: string[]
  resourceNames?: string[]
  namespaces?: string[]
  nonResourceUrls?: string[]
}


type BaseAuditPolicy = {
  defaultEffect?: AuditEffect
  rules?: AuditRule[]
  logging?: AuditLogging
}

export type AuditPolicy = BaseAuditPolicy
  & OneOf<{ askTimeoutSeconds: number }>


type BaseAuditPolicyOverride = {
  rules?: AuditRule[]
}

export type AuditPolicyOverride = BaseAuditPolicyOverride
  & OneOf<{ defaultEffect: AuditEffect }>
  & OneOf<{ logging: AuditLogging }>
  & OneOf<{ askTimeoutSeconds: number }>