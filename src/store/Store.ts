import {combineReducers, createStore} from "redux";
import CustomerReducer from "../reducer/CustomerReducer.ts";
import ItemReducer from "../reducer/ItemReducer.ts";

const rootReducer = combineReducers({
    customer : CustomerReducer,
    item : ItemReducer,
})

export const store = createStore(rootReducer);