import { combineReducers, createStore } from "redux";
import listReducer from "./listReducer";


const reducers = combineReducers({
    list: listReducer
});

const store = createStore(reducers);

window.store = store;

export default store;