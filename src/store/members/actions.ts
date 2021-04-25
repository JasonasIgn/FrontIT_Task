import { Member } from '../../utils/types'
import {
  FETCH_MEMBERS,
  FETCH_MEMBERS_FAILURE,
  FETCH_MEMBERS_SUCCESS,
  MembersActionsTypes,
  REMOVE_MEMBER,
} from './actions.types'

export const fetchMembersAction = (): MembersActionsTypes => ({
  type: FETCH_MEMBERS,
})

export const fetchMembersSuccessAction = (members: Member[]): MembersActionsTypes => ({
  type: FETCH_MEMBERS_SUCCESS,
  members
})

export const fetchMembersFailureAction = (): MembersActionsTypes => ({
  type: FETCH_MEMBERS_FAILURE,
})

export const removeMemberAction = (id: number): MembersActionsTypes => ({
  type: REMOVE_MEMBER,
  id,
})