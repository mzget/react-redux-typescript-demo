import * as Immutable from "immutable";

import { ADD_TODO } from "src/redux/actions/todoAction";

const TodoStateRecord = Immutable.Record({
    counter: 0,
});

const todoStateRecord = new TodoStateRecord();

function todoReducer(state = todoStateRecord, action) {
    if (typeof state === "undefined") {
        return todoStateRecord;
    }

    switch (action.type) {
        case ADD_TODO:
            return state.set("counter", state.get("counter") + 1);
        default:
            break;
    }
    // For now, don't handle any actions
    // and just return the state given to us.
    return state;
}

export default todoReducer;
export { TodoStateRecord };
