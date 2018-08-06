import React, { Component } from "react";
import { IStore, IStoreState } from "./store";

const initialStore = {
    user: "undefined",
} as IStoreState;

// Initialize a context
const StoreContext = React.createContext({});

class EnhancedContextStore extends Component<any, IStoreState> {
    constructor(props) {
        super(props);

        this.state = { ...initialStore };
        this.updateState = this.updateState.bind(this);
    }

    public updateState(actionDelegate: (prevS: IStoreState, prevP: any) => any, callback?: () => void) {
        this.setState(actionDelegate, (callback) ? callback : () => console.log(this.state));
    }

    public render() {
        const store = { state: { ...this.state }, updateState: this.updateState } as IStore;
        return (
            <StoreContext.Provider value={store}  >
                {this.props.children}
            </StoreContext.Provider>
        );
    }
}

export default StoreContext;
export { EnhancedContextStore };
export { IStoreState, IStore } from "./store";
