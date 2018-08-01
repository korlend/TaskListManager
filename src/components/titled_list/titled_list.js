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
  TextField,
  Grid
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import EditIcon from "@material-ui/icons/Edit";
import CancelIcon from "@material-ui/icons/Cancel";

const INSERT = 0; const UPDATE = 1; const DELETE = 2;
export class OperationType {
  static get INSERT() {
    return INSERT;
  }
  static get UPDATE() {
    return UPDATE;
  }
  static get DELETE() {
    return DELETE;
  }
}

const ASCENDING = 0; const DESCENDING = 1;
class SortTypes {
  static get ASCENDING() {
    return ASCENDING;
  }
  static get DESCENDING() {
    return DESCENDING;
  }
}

export class ListChangedEvent {
  operation: OperationType;
  list: Array<TitledListModel>;

  constructor(list: Array<TitledListModel>, operation: OperationType) {
    this.list = list;
    this.operation = operation;
  }
}

export class TitledList extends React.Component {
  constructor(props) {
    super(props);
    this.getInitialState();
  }

  getInitialState = () => {
    const state = {
      sorting: { sortBy: '', sortIn: SortTypes.ASCENDING },
      list: this.props.list
    };
    this.state = state;
  };

  deleteRecord = (record) => {
    this.setState(state => {
      state.list = state.list.filter(v => v !== record);
      return state;
    }, () => {
      this.callListChangeEvent(OperationType.DELETE, this.state.list);
    });
  };

  addNewRecord = () => {
    this.setState(state => {
      const newRow = new TitledListModel('My title', 'My desc');
      newRow.edit();
      state.list.push(newRow);
      return state;
    }, () => {
      this.callListChangeEvent(OperationType.INSERT, this.state.list);
    });
  }

  startEditing = (row) => {
    row.edit();
    this.forceUpdate();
  }

  saveEditing = (row) => {
    row.save();
    this.forceUpdate(() => {
      this.callListChangeEvent(OperationType.UPDATE, this.state.list);
    });
  }

  cancelEditing = (row) => {
    row.cancelEdit();
    this.forceUpdate();
  }

  callListChangeEvent = (type, list) => {
    if (this.props.listChangedEvent) {
      this.props.listChangedEvent(new ListChangedEvent(list, type));
    }
  }

  getInEditTableRow = (row, key) => {
    return (
      <TableRow key={key}>
        <TableCell component="th" scope="row">
          <TextField
            defaultValue={row.title}
            onChange={(e) => { row.title = e.target.value }}
          />
        </TableCell>
        <TableCell>
          <TextField
            defaultValue={row.description}
            onChange={(e) => { row.description = e.target.value }}
          />
        </TableCell>
        <TableCell>
          <IconButton onClick={() => this.saveEditing(row)}>
            <DoneIcon />
          </IconButton>
          <IconButton onClick={() => this.cancelEditing(row)}>
            <CancelIcon />
          </IconButton>
          <IconButton onClick={() => this.deleteRecord(row)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }

  getTableRow = (row, key) => {
    return (
      <TableRow key={key}>
        <TableCell component="th" scope="row">
          {row.title}
        </TableCell>
        <TableCell>{row.description}</TableCell>
        <TableCell>
          <IconButton onClick={() => this.startEditing(row)}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={() => this.deleteRecord(row)}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    );
  }

  iterateList = () => {
    const list = this.state.list;
    const jsxList = [];
    const sort = this.state.sorting;
    if (sort && sort.sortBy) {
      // TODO: add list sorting before output
    }
    list.map((n, i) => {
      const row = n._inEdit ? this.getInEditTableRow(n, i) : this.getTableRow(n, i);
      jsxList.push(row)
    });
    return jsxList;
  }

  render() {
    return (
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Button onClick={this.addNewRecord}>Add New</Button>
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
              {this.iterateList()}
            </TableBody>
          </Table>
        </Grid>
      </Grid>
    );
  }
}
TitledList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.instanceOf(TitledListModel)),
  listChangedEvent: PropTypes.func
};
