import { LoadingState } from '../../utils/enums'
import { Member } from '../../utils/types'
import {
  ADD_OR_UPDATE_MEMBER,
  FETCH_MEMBERS,
  FETCH_MEMBERS_FAILURE,
  FETCH_MEMBERS_SUCCESS,
  MembersActionsTypes,
  REMOVE_MEMBER,
} from './actions.types'

interface MembersState {
  members: Member[]
  loadingState: LoadingState
}

export const initialMembersState: MembersState = {
  members: [],
  loadingState: LoadingState.PRISTINE,
}

export const membersReducer = (
  state: MembersState = initialMembersState,
  action: MembersActionsTypes
): MembersState => {
  switch (action.type) {
    case FETCH_MEMBERS: {
      return {
        ...state,
        loadingState: LoadingState.LOADING,
      }
    }
    case FETCH_MEMBERS_SUCCESS: {
      return {
        ...state,
        loadingState: LoadingState.LOADED,
        members: [...state.members, ...action.members],
      }
    }
    case FETCH_MEMBERS_FAILURE: {
      return {
        ...state,
        loadingState: LoadingState.FAILED,
      }
    }
    case REMOVE_MEMBER: {
      return {
        ...state,
        members: state.members.filter((member) => member.id !== action.id),
      }
    }

    case ADD_OR_UPDATE_MEMBER: {
      if (action.id) {
        return {
          ...state,
          members: state.members.map((member) => {
            if (action.id === member.id) {
              return { ...member, ...action.data }
            }
            return member
          }),
        }
      }
      return {
        ...state,
        members: [
          { ...action.data, id: Math.floor(Math.random() * 1000 + 1) },
          ...state.members,
        ],
      }
    }
    default: {
      return state
    }
  }
}
