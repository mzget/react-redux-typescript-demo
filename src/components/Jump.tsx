import React from "react";
import { withRouter } from "react-router-dom";

class Goto extends React.Component<any> {
    constructor(props) {
        super(props);

        const { history, location } = this.props;
        console.log(location.pathname);
        // Listen for changes to the current location.
        history.listen((locat, action) => {
            // location is an object like window.location
            console.log(action, locat.pathname, location.state);
        });

        this.jumpBackMySite = this.jumpBackMySite.bind(this);
        this.jumpToOtherSite = this.jumpToOtherSite.bind(this);
    }

    public jumpToOtherSite() {
        window.location.replace("http://localhost:5000");
    }
    public jumpBackMySite() {
        window.location.replace("http://localhost:3000/jump");
    }

    public logHist() {
        const { location, history } = this.props;
        console.log(location.pathname, history);
        history.goBack();
    }

    public render() {
        const { location } = this.props;
        return (
            <div>
                <button onClick={this.jumpToOtherSite}>jumpToOtherSite</button>
                <button onClick={this.jumpBackMySite}>jumpBackMySite</button>

                <h2>{location.pathname}</h2>
                <button onClick={this.logHist.bind(this)}>Back</button>
            </div>
        );
    }
}

export default withRouter(Goto);
