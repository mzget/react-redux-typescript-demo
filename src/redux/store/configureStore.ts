import {
    applyMiddleware, createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";

import rootReducer from "../reducers";

const middlewares = [] as any[];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const store = createStore(rootReducer, composeWithDevTools(
    applyMiddleware(...middlewares),
    // other store enhancers if any
));

export default store;
