import * as React from "react";
import { connect } from "react-redux";

import { addProduct } from "src/redux/actions/productActions";

interface IAddProductState {
    productName: string;
}
interface IAddProductProps {
    products: any[];
    onAddProduct: (data: string) => void;
}
class AddProduct extends React.Component<IAddProductProps, IAddProductState> {
    constructor(props) {
        super(props);

        this.state = {
            productName: "",
        };
        this.addProduct = this.addProduct.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
    }

    public onInputChange(e) {
        this.setState({ productName: e.target.value });
    }
    public addProduct() {
        this.props.onAddProduct(this.state.productName);
    }

    public render() {
        if (this.props.products.length === 0) { return null; }

        return (
            <div>
                <p>{this.props.products}</p>
                <input onChange={this.onInputChange} />
                <button onClick={this.addProduct}>Add</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAddProduct: (data: string) => {
            dispatch(addProduct(data));
        },
    };
};
export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AddProduct);
