import { createSlice } from "@reduxjs/toolkit";
import { AnimationObj } from "../types/element-properties";

// Default keyframes
let animationObject: AnimationObj = {
    1: {position: [0, 0], scale: [100, 120], rotation: 0, colour: "green"},
    24: {position: [200, 0], scale: [103, 100], rotation: 0, colour: "green"},
    60: {position: [700, 100], scale: [102, 350], rotation: 0, colour: "green"},
    72: {position: [450, 30], scale: [100, 10], rotation: 0, colour: "green"},
};
/**
TODO: Update the active frame within the timeline component based on the key 
 * selected by the user instead of relying on hover actions (testing only).
 */

/**
 * Frame slice manages main timeline operations, including:
 * - Creating, deleting, and setting active frames
 * - Mapping object properties against the timeline frames
 */

type FrameState = {
    hovered: number,
    active: number,
    animationMap: AnimationObj,
}

export const frameSlice = createSlice({
    name: 'frame',
    initialState: {
        hovered: 1, // Frame hovered by user
        active: 1, // Current frame pointed in animation
        animationMap: animationObject // Timeline animation data
    } as FrameState,
    reducers: {
        setFrame: (state, action) => {state.hovered = action.payload},
        setActive: (state, action) => {state.active = action.payload},
        setKeyFrame: (state, action) => {
            // animationMap expects an object containing all attributes (created at active frame)
            state.animationMap[state.active] = action.payload;
        },
        deleteKeyFrame: (state,action) => {
            // Expect key (number) as input for deletion
            delete state.animationMap[action.payload];
        }
    }
})

export const {setFrame} = frameSlice.actions;
export default frameSlice.reducer;