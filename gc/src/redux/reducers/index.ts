import { combineReducers } from "redux";

import examReducer from "./grammar";


const reducers = combineReducers({
    examReducer: examReducer,
})

export default reducers;