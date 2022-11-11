import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { save, load } from 'redux-localstorage-simple'
import { updateVersion } from './global/actions'
import { createDispatchHook, createSelectorHook, createStoreHook } from 'react-redux'
import user from './user/reducer'
import React from 'react'

const PERSISTED_KEYS: string[] = ['user']

const store = configureStore({
  reducer: {
    user
  },
  middleware: [...getDefaultMiddleware({ thunk: false }), save({ states: PERSISTED_KEYS })],
  preloadedState: load({ states: PERSISTED_KEYS })
})

store.dispatch(updateVersion())

export default store

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const AppContext = React.createContext(null as any)

// Export your custom hooks if you wish to use them in other files.
export const useStore = createStoreHook(AppContext)
export const useDispatch = createDispatchHook(AppContext)
export const useSelector = createSelectorHook(AppContext)
