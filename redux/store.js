import { configureStore } from "@reduxjs/toolkit";
import { frameSlice } from "./frameSlice";


/*export const store = configureStore({
    reducer: {
        currentFrame: frameSlice.reducer
    }
})*/

//Using legacy create store to create payload:
import { legacy_createStore } from "redux";
import { combineReducers } from "redux";
import { frameReducer } from "./frame.reducer";

const rootReducer = combineReducers({
    frame: frameReducer,
  });

export const store = legacy_createStore(rootReducer);
