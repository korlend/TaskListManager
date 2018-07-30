import React, { Component } from "react";
import TitledListLine from "./titled_list_line";
import { TitledListModel } from "./titled_list.model";
import PropTypes from "prop-types";
import { List } from "@material-ui/core";

export class TitledList extends Component {

  render() {
    const rows = [];

    for (let i = 0; i < this.props.list.length; i++) {
      const model = this.props.list[i];
      rows.push(<TitledListLine key={i} value={model} deleteRecordEvent={this.props.deleteRecordEvent}/>);
    }

    return <List>{rows}</List>;
  }
}
TitledList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.instanceOf(TitledListModel)),
  deleteRecordEvent: PropTypes.func
};

export default TitledList;
