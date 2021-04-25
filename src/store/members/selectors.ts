import { AppState } from '../reducers'

export const getMembersSelector = (state: AppState) => state.members.members
