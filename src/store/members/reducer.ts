import { LoadingState } from '../../utils/enums'
import { Member } from '../../utils/types'
import {
  FETCH_MEMBERS,
  FETCH_MEMBERS_FAILURE,
  FETCH_MEMBERS_SUCCESS,
  MembersActionsTypes,
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
        members: action.members,
      }
    }
    case FETCH_MEMBERS_FAILURE: {
      return {
        ...state,
        loadingState: LoadingState.FAILED,
      }
    }
    default: {
      return state
    }
  }
}
