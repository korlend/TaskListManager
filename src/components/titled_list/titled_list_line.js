import React, { Component } from "react";
import PropTypes from "prop-types";
import { TitledListModel } from "./titled_list.model";

class TitledListLine extends Component {
  render() {
    return <div>my line</div>;
  }
}
TitledListLine.propTypes = {
  value: PropTypes.instanceOf(TitledListModel)
}

export default TitledListLine;