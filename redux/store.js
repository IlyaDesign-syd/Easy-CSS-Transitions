import { configureStore } from "@reduxjs/toolkit";
import { frameSlice } from "./frameSlice";
export const store = configureStore({
    reducer: {
        currentFrame: frameSlice.reducer
    }
})