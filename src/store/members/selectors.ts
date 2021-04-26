import { AppState } from '../reducers'

export const getMembersSelector = (state: AppState) => state.members.members

export const getMembersLoadingStateSelector = (state: AppState) =>
  state.members.loadingState

export const getMemberSelector = (state: AppState, memberId?: number) => {
  if (memberId) {
    return state.members.members.find((member) => member.id === memberId)
  }
  return undefined
}
