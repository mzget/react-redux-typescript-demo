import { actionCreator } from "src/redux/actions";

export const ADD_TODO = "ADD_TODO";
export const addTodo = (payload: any) => actionCreator(ADD_TODO, payload);
