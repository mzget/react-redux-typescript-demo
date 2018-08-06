import * as React from "react";
import StoreContext, { IStore } from "src/contextStore/storeContext";

import * as userActions from "src/contextStore/actions/userActions";

class AddUser extends React.Component<any, any> {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
        };
        this.addProduct = this.addProduct.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    public onInputChange(e) {
        this.setState({ username: e.target.value });
    }
    public addProduct() {
        this.props.onAddProduct(this.state.productName);
    }

    public onPressRemove(action) {
        action(userActions.removeUser(), () => {
            this.setState({ username: "" });
        });
    }

    public render() {
        return (
            <StoreContext.Consumer>
                {({ state, updateState }: IStore) => {
                    return (
                        <div>
                            <p>{state.user}</p>
                            <input value={this.state.username} onChange={this.onInputChange} />
                            <button onClick={() => updateState(userActions.addUser(this.state.username))}>Add</button>
                            <button onClick={this.onPressRemove.bind(this, updateState)}>Remove</button>
                        </div>
                    );
                }}
            </StoreContext.Consumer>
        );
    }
}

export default AddUser;
