/* eslint-disable */
// @ts-nocheck
/*
* This file is a generated Typescript file for GRPC Gateway, DO NOT MODIFY
*/

import * as fm from "../../fetch.pb"
import * as TeamV1Team from "./team.pb"
export type GetTeamRequest = {
  id?: string
}

export type GetTeamResponse = {
  team?: TeamV1Team.Team
}

export type CreateTeamRequest = {
  team?: TeamV1Team.Team
}

export type CreateTeamResponse = {
  team?: TeamV1Team.Team
}

export type UpdateTeamRequest = {
  team?: TeamV1Team.Team
}

export type UpdateTeamResponse = {
  team?: TeamV1Team.Team
}

export type DeleteTeamRequest = {
  id?: string
}

export type DeleteTeamResponse = {
}

export type InviteMemberRequest = {
  teamId?: string
  userId?: string
  encryptedTeamPrivateKey?: string
}

export type InviteMemberResponse = {
}

export type RemoveMemberRequest = {
  teamId?: string
  userId?: string
}

export type RemoveMemberResponse = {
}

export type AcceptInviteRequest = {
  inviteId?: string
}

export type AcceptInviteResponse = {
}

export class TeamService {
  static GetTeam(req: GetTeamRequest, initReq?: fm.InitReq): Promise<GetTeamResponse> {
    return fm.fetchReq<GetTeamRequest, GetTeamResponse>(`/gapi/team/v1/team?${fm.renderURLSearchParams(req, [])}`, {...initReq, method: "GET"})
  }
  static CreateTeam(req: CreateTeamRequest, initReq?: fm.InitReq): Promise<CreateTeamResponse> {
    return fm.fetchReq<CreateTeamRequest, CreateTeamResponse>(`/gapi/team/v1/team`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static UpdateTeam(req: UpdateTeamRequest, initReq?: fm.InitReq): Promise<UpdateTeamResponse> {
    return fm.fetchReq<UpdateTeamRequest, UpdateTeamResponse>(`/gapi/team/v1/team`, {...initReq, method: "PUT", body: JSON.stringify(req, fm.replacer)})
  }
  static DeleteTeam(req: DeleteTeamRequest, initReq?: fm.InitReq): Promise<DeleteTeamResponse> {
    return fm.fetchReq<DeleteTeamRequest, DeleteTeamResponse>(`/gapi/team/v1/team/remove`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static InviteMember(req: InviteMemberRequest, initReq?: fm.InitReq): Promise<InviteMemberResponse> {
    return fm.fetchReq<InviteMemberRequest, InviteMemberResponse>(`/gapi/team/v1/team/member/invite`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static RemoveMember(req: RemoveMemberRequest, initReq?: fm.InitReq): Promise<RemoveMemberResponse> {
    return fm.fetchReq<RemoveMemberRequest, RemoveMemberResponse>(`/gapi/team/v1/team/member/remove`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
  static AcceptInvite(req: AcceptInviteRequest, initReq?: fm.InitReq): Promise<AcceptInviteResponse> {
    return fm.fetchReq<AcceptInviteRequest, AcceptInviteResponse>(`/gapi/team/v1/team/member/accept`, {...initReq, method: "POST", body: JSON.stringify(req, fm.replacer)})
  }
}