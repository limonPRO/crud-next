import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/counterSlice'
import itemReducer from './slices/itemsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    itemReducer,
  },
})