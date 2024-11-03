import { configureStore } from '@reduxjs/toolkit'
import frameReducer from '../redux/frameSlice'

export default configureStore({
    reducer: {
        frame: frameReducer,
    },
})