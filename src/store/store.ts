import { configureStore, combineReducers } from '@reduxjs/toolkit'
import menuSlice from './menu/menuSlice'

const rootReducer = combineReducers({
  menu: menuSlice.reducer,
})

const createStore = (initialState = {}) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  })
}

export default createStore

export type AppState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof createStore>
export type AppDispatch = AppStore['dispatch']
