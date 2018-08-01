import React, { Component } from "react";
import "./titled_list_example.css";
import Titledlist from "components/titled_list/titled_list";
import { TitledListModel } from "components/titled_list/titled_list.model";
import { Paper } from '@material-ui/core';

class TitledListExample extends Component {
  constructor(props) {
    super(props);
    this.getInitialState();
  }

  getInitialState = () => {
    const state = { list: [] };
    for (let i = 0; i < 10; i++) {
      state.list.push(new TitledListModel("My Title Number " + i));
    }
    this.state = state;
  };

  deleteRecord = record => {
    this.setState(state => {
      state.list = state.list.filter(v => v !== record);
      return state;
    });
  };

  render() {
    return (
      <Paper className="titled_list_example">
        <Titledlist
          list={this.state.list}
          deleteRecordEvent={this.deleteRecord}
        />
      </Paper>
    );
  }
}

export default TitledListExample;
