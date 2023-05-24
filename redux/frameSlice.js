import { createSlice } from "@reduxjs/toolkit";

export const frameSlice = createSlice({
    name: 'frame',
    initialState: {
        hovered: 1, //Frame hovered by user
        active: 1 //Current frame pointed in animation
    },
    reducers: {
        setFrame: (state, action) => {state.hovered = action.payload}
    }
})

export const {setFrame} = frameSlice.actions;
export default frameSlice.reducer;