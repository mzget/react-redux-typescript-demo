import * as React from "react";
import { connect } from "react-redux";

import { addTodo } from "src/redux/actions/todoAction";

interface ITodoCompProps {
    onAddTodo: (n: number) => void;
    todos: any;
}

class TodoComp extends React.Component<ITodoCompProps, any> {
    constructor(props) {
        super(props);

        this.onClickButton = this.onClickButton.bind(this);
    }

    public onClickButton() {
        this.props.onAddTodo(1);
    }

    public render() {
        return (
            <div>
                <p>{this.props.todos.counter}</p>
                <button onClick={this.onClickButton}> Add</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAddTodo: (count: number) => {
            dispatch(addTodo(count));
        },
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoComp);
