import loggedReducer from "./isLogged";
import listeReducer from "./liste";
import { combineReducers } from "redux";

const allReducers = combineReducers({
    loggedReducer,
    listeReducer
});

export default allReducers;