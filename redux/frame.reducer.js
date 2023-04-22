//Classic redux (not using createSlice) and using actions file separately.
//Test if payload will work for this method
import { SET_FRAME } from "./frame.actionTypes";

const initialState = {
    frame: 1
}

const frameReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_FRAME: {
        return {
            frame: action.payload,
        };
      }
      default:
        return state;
    }
  };

export { frameReducer };