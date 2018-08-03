import { combineReducers } from "redux";

import productReducer from "./productReducer";
import todos, { TodoStateRecord } from "./todoReducer";

const rootInitialState = {
    todoReducer: new TodoStateRecord(),
};

const rootReducer = combineReducers({
    todos,
    products: productReducer,
});

export default rootReducer;
export { rootInitialState };
