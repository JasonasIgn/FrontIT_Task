import { MemberFormData } from '../../components/MemberForm'
import { Member } from '../../utils/types'

export const FETCH_MEMBERS = 'FETCH_MEMBERS'
export const FETCH_MEMBERS_SUCCESS = 'FETCH_MEMBERS_SUCCESS'
export const FETCH_MEMBERS_FAILURE = 'FETCH_MEMBERS_FAILURE'
export const REMOVE_MEMBER = 'REMOVE_MEMBER'
export const ADD_OR_UPDATE_MEMBER = 'ADD_OR_UPDATE_MEMBER'

export interface FetchMembers {
  type: typeof FETCH_MEMBERS
}

export interface FetchMembersSuccess {
  type: typeof FETCH_MEMBERS_SUCCESS
  members: Member[]
}

export interface FetchMembersFailure {
  type: typeof FETCH_MEMBERS_FAILURE
}

export interface RemoveMember {
  type: typeof REMOVE_MEMBER;
  id: number;
}

export interface AddOrUpdateMember {
  type: typeof ADD_OR_UPDATE_MEMBER;
  id?: number;
  data: MemberFormData;
}

export type MembersActionsTypes =
  | FetchMembers
  | FetchMembersSuccess
  | FetchMembersFailure
  | RemoveMember
  | AddOrUpdateMember;

