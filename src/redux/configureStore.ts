import {
    applyMiddleware, compose, createStore,
} from "redux";
import rootReducer from "./reducers";

const middlewares = [] as any[];

if (process.env.NODE_ENV === `development`) {
    const { logger } = require(`redux-logger`);

    middlewares.push(logger);
}

const store = compose(applyMiddleware(...middlewares))(createStore)(rootReducer);

export default store;
