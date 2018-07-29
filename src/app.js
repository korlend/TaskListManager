import React, { Component } from "react";
import "./app.css";
import Header from "./header/header";
import TitledListExample from "./components/titled_list_example/titled_list_example"

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />

        <TitledListExample />
      </div>
    );
  }
}

export default App;
