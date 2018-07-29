import React, { Component } from "react";
import "./titled_list_example.css";
import Titledlist from "components/titled_list/titled_list";
import { TitledListModel } from "components/titled_list/titled_list.model";

class TitledListExample extends Component {
  render() {
    const list = new Array;

    for (let i = 0; i < 10; i++) {
      list.push(new TitledListModel("My Title Number " + i));
    }

    return (
      <div className="titled_list_example">
        <Titledlist list={list} />
      </div>
    );
  }
}

export default TitledListExample;
