import { IStoreState } from "src/contextStore/store";

export function addUser(payload: any) {
    return (prevS: IStoreState, prevP) => ({ user: payload });
}

export function removeUser() {
    return () => ({ user: undefined });
}
