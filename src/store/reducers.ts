import { AnyAction, combineReducers, Dispatch } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { ThunkAction } from 'redux-thunk'
import { membersReducer } from './members/reducer'

export const rootReducers = {
  members: membersReducer,
}

const rootReducerType = combineReducers({
  ...rootReducers,
  router: connectRouter({} as History),
})

export type AppState = ReturnType<typeof rootReducerType>

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector
type TDispatch<R> = (action: ThunkAction<R, AppState, void, AnyAction>) => R
export type AppDispatch = Dispatch
export type AppDispatchEffect = TDispatch<Promise<any | AnyAction>>
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppDispatchEffect: () => AppDispatchEffect = useDispatch

const createRootReducer = (history: History) =>
  combineReducers({
    ...rootReducers,
    router: connectRouter(history),
  })
export default createRootReducer
