import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: 1
}

export const frameSlice = createSlice({
    name: 'currentFrame',
    initialState,
    reducers: {
        'setFrame': (action) => {state.value = action.payload},
        'increment': (state) => {state.value = state.value + 1}
    }
})

export const {setFrame, increment} = frameSlice.actions
export default frameSlice.reducer 