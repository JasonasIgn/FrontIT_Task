import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { History } from 'history'
import { TypedUseSelectorHook, useSelector } from 'react-redux'

export const rootReducers = {};

const rootReducerType = combineReducers({
  ...rootReducers,
  router: connectRouter({} as History),
})

export type AppState = ReturnType<typeof rootReducerType>

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
  })
export default createRootReducer
