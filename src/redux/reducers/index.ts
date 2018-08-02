import { combineReducers } from "redux";

import todos, { TodoStateRecord } from "./todoReducer";

const rootInitialState = {
    todoReducer: new TodoStateRecord(),
};

const rootReducer = combineReducers({
    todos,
});

export default rootReducer;
export { rootInitialState };
