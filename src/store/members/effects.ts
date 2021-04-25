import axios from 'axios'
import { Action } from 'redux'
import { ThunkAction, ThunkDispatch } from 'redux-thunk'
import { apiUrls } from '../../api.config'
import { AppState } from '../reducers'
import { fetchMembersAction, fetchMembersFailureAction, fetchMembersSuccessAction } from './actions'

export const fetchMembersEffect = (): ThunkAction<
  Promise<void>,
  AppState,
  void,
  Action<string>
> => async (
  dispatch: ThunkDispatch<AppState, void, Action<string>>,
  getState
) => {
  dispatch(fetchMembersAction())
  try {
    const response = await axios.get(apiUrls.members)
    dispatch(fetchMembersSuccessAction(response.data))
  } catch (e) {
    dispatch(fetchMembersFailureAction())
  }
}
