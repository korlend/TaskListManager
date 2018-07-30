import React, { Component } from "react";
import { TitledListModel } from "./titled_list.model";
import PropTypes from "prop-types";
import {
  ListItemText,
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  Divider
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

class TitledListLine extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  deleteRecord = () => {
    console.log(this);
    this.props.deleteRecordEvent(this.props.value);
  }

  render() {
    return (
      <ListItem button>
        <ListItemText
          primary={this.props.value.title}
          secondary={"[Description]"}
        />
        <ListItemSecondaryAction onClick={this.deleteRecord}>
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
        <Divider />
      </ListItem>
    );
  }
}
TitledListLine.propTypes = {
  value: PropTypes.instanceOf(TitledListModel),
  deleteRecordEvent: PropTypes.func
};

export default TitledListLine;
