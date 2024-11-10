import { configureStore } from '@reduxjs/toolkit'
import frameReducer from './frameSlice'

export const store = configureStore({
    reducer: {
        frame: frameReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
