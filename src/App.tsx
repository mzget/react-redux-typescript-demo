import * as React from "react";
import "./App.css";

import AddProduct from "./components/AddProduct";
import AddUser from "./components/AddUser";
import TodoComp from "./components/TodoComp";
import { EnhancedContextStore } from "./contextStore/storeContext";
import logo from "./logo.svg";

class App extends React.Component {
  public render() {
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
