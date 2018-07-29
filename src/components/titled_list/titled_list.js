import React, { Component } from "react";
import TitledListLine from "./titled_list_line";
import { TitledListModel } from "./titled_list.model";
import PropTypes from "prop-types";

export class TitledList extends Component {
  render() {
    const rows = [];

    for (let i = 0; i < this.props.list.length; i++) {
      const model = this.props.list[i];
      rows.push(<TitledListLine value={model} />);
    }

    return <div>{rows}</div>;
  }
}
TitledList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.instanceOf(TitledListModel))
};

export default TitledList;
