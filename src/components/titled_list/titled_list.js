import React, { Component } from "react";
import { TitledListModel } from "./titled_list.model";
import PropTypes from "prop-types";
import {
  Button,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Grid
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

export class TitledList extends Component {
  constructor(props) {
    super(props);
    this.getInitialState();
  }

  getInitialState = () => {
    const state = { list: [] };
    for (let i = 0; i < 10; i++) {
      state.list.push(new TitledListModel("My Title Number " + i));
    }
    this.setState = state;
  };

  deleteRecord = value => {
    this.list = [];
    this.props.deleteRecordEvent(value);
  };

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Button>Add New</Button>
        </Grid>
        <Grid item xs={12}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.list.map((n, i) => (
                <TableRow key={i}>
                  <TableCell component="th" scope="row">
                    {n.title}
                  </TableCell>
                  <TableCell>{n.description}</TableCell>
                  <TableCell>
                    <IconButton
                      aria-label="Delete"
                      onClick={() => this.deleteRecord(n)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    );
  }
}
TitledList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.instanceOf(TitledListModel)),
  deleteRecordEvent: PropTypes.func
};

export default TitledList;
