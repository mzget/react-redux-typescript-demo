import { actionCreator } from "src/redux/actions";

export const ADD_PRODUCT = "ADD_PRODUCT";
export const addProduct = (payload: any) => actionCreator(ADD_PRODUCT, payload);
