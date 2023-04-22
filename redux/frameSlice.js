import { createSlice } from "@reduxjs/toolkit";

export const frameSlice = createSlice({
    name: 'frame',
    initialState: {
        hovered: 1
    },
    reducers: {
        setFrame: (state, action) => {state.hovered = action.payload}
    }
})

export const {setFrame} = frameSlice.actions;
export default frameSlice.reducer;