import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    frame: 1
}

export const frameSlice = createSlice({
    name: 'currentFrame',
    initialState,
    reducers: {
        'setFrame': (action) => {state.frame = action.payload},
        'increment': (state) => {state.frame = state.frame + 1}
    }
})

export const {setFrame, increment} = frameSlice.actions
export default frameSlice.reducer 

