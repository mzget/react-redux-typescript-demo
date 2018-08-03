import * as Immutable from "immutable";

import { ADD_PRODUCT } from "src/redux/actions/productActions";

const ProductStateRecord = Immutable.Record({
    products: [],
});

const productInitState = new ProductStateRecord();

function productReducer(state = productInitState, action) {
    if (typeof state === "undefined") {
        return productInitState;
    }

    switch (action.type) {
        case ADD_PRODUCT:
            const products = state.get("products");
            products.push(action.payload);
            return state;

        default:
            return state;
    }

    // For now, don't handle any actions
    // and just return the state given to us.
    return state;
}

export default productReducer;
