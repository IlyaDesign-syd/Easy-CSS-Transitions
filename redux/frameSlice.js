import { createSlice } from "@reduxjs/toolkit";

//Default keyframes
let animationMap = new Map();
animationMap.set(1, {position: [0, 0], scale: [1, 12], rotation: 0, colour: "green"})
animationMap.set(24, {position: [20, 0], scale: [13, 1], rotation: 0, colour: "green"})
animationMap.set(60, {position: [23, 10], scale: [12, 1], rotation: 0, colour: "green"})
animationMap.set(72, {position: [0, 0], scale: [1, 1], rotation: 0, colour: "green"})
/*
TO DO: active frame should be changed inside the timeline component, based on which key the user clicks on,
ideally also it should be draggable for smoother UI interaction
*/

export const frameSlice = createSlice({
    name: 'frame',
    initialState: {
        hovered: 1, //Frame hovered by user
        active: 1, //Current frame pointed in animation
        animationMap
    },
    reducers: {
        setFrame: (state, action) => {state.hovered = action.payload},
        setActive: (state, action) => {state.active = action.payload},
        setKeyFrame: (state, action) => {
            //animationMap expects an object containing all attributes (created at active frame)
            state.animationMap.set(state.active, action.payload)
        },
        deleteKeyFrame: (state,action) => {
            //Expect key (number) as input for deletion
            state.animationMap.delete(action.payload)
        }
    }
})


export const animationSlice = createSlice({
    name: 'animation',
    initialState: {
        animationMap: animationMap, //Default keyframe - object attribute pair map  
    },
    reducers: {
        setFrame: (state, action) => {state.hovered = action.payload}
    }
})

export const {setFrame} = frameSlice.actions;
export default frameSlice.reducer;