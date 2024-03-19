import { legacy_createStore as createStore, combineReducers } from "redux";
import { counterReducer } from "./counterReducer";
import { todoReducer } from "./todoReducer";

const rootReducer = combineReducers({
	counter: counterReducer,
	todo: todoReducer,
});
export const store = createStore(rootReducer);
