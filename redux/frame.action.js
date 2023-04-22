import { SET_FRAME } from "./frame.actionTypes"
export const setFrame = (frame) => {
    return {
        type: SET_FRAME,
        payload: frame
    }
}