import React, { Component } from "react";
import "./titled_list_example.css";
import {
  TitledList,
  OperationType,
  ListChangedEvent
} from "components/titled_list/titled_list";
import { Paper, Button } from "@material-ui/core";
import { TitledListModel } from "components/titled_list/titled_list.model";

const storage_list_id = "titled_list";

class TitledListExample extends Component {
  constructor(props) {
    super(props);
    this.getInitialState();
  }

  getInitialState = () => {
    let list: Array<TitledListModel> = JSON.parse(
      localStorage.getItem(storage_list_id)
    );
    if (!list) {
      list = [];
    }
    const titledList = [];
    list.map(row => {
      titledList.push(new TitledListModel(row.title, row.description));
    });
    const state = { list: list ? titledList : [] };
    this.state = state;
  };

  listChangedEvent = (event: ListChangedEvent) => {
    console.log(event);
    localStorage.setItem(storage_list_id, JSON.stringify(event.list));
  };

  render() {
    return (
      <Paper className="titled_list_example">
        <TitledList
          list={this.state.list}
          listChangedEvent={this.listChangedEvent}
        />
      </Paper>
    );
  }
}

export default TitledListExample;
