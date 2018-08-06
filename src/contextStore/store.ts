type ActionDelegate = (prevS: IStoreState, prevP) => any;
type FunctionalState = (actionDelegate: ActionDelegate, callback?: () => void) => void;
interface IStoreState {
    // No imp.
    user: any;
}
interface IStoreActions {
    // No Imp.
    getCurrentState: () => IStoreState;
    user: {
        addUser: (username: string) => any;
    };
}
interface IStore {
    state: IStoreState;
    updateState: FunctionalState;
}

export { IStore, IStoreActions, IStoreState, FunctionalState, ActionDelegate };
