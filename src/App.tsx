import * as React from "react";
import "./App.css";

import AddProduct from "./components/AddProduct";
import AddUser from "./components/AddUser";
import Jump from "./components/Jump";
import TodoComp from "./components/TodoComp";
import { VirtualizeList } from "./components/VirtualizeList";
import { EnhancedContextStore } from "./contextStore/storeContext";
import logo from "./logo.svg";

import { BrowserRouter as Router, Link, Route } from "react-router-dom";

const App = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">1</Link>
        </li>
        <li>
          <Link to="/2">2</Link>
        </li>
        <li>
          <Link to="/jump">Jump</Link>
        </li>
        <li>
          <Link to="/topics">Topics</Link>
        </li>
      </ul>

      <hr />

      <Route exact path="/" component={Home} />
      <Route path="/2" component={About} />
      <Route path="/jump" component={Jump} />
      <Route path="/topics" component={Topics} />
    </div>
  </Router>
);

const About = (props) => {
  return (
    <div>
      <h2>{props.location.pathname}</h2>
      <VirtualizeList />
    </div>
  );
};

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={`${match.url}/rendering`}>Rendering with React</Link>
      </li>
      <li>
        <Link to={`${match.url}/components`}>Components</Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
      </li>
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route
      exact
      path={match.url}
      render={() => <h3>Please select a topic.</h3>}
    />
  </div>
);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

class Home extends React.Component<{ history }> {
  constructor(props) {
    super(props);
  }

  public render() {
    console.log(this.props);
    return (
      <EnhancedContextStore>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
          <TodoComp />
          <AddProduct />
          <AddUser />
        </div>
      </EnhancedContextStore>
    );
  }
}

export default App;
