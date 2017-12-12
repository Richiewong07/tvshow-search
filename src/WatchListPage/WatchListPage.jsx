import React, { Component } from 'react';

import database, {User} from '../firebase-setup.js'
import classes from './WatchListPage.css'

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class WatchListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listOfShows: []
    };
  }

  getShows () {
    if (User.user && User.user.uid) {
      database.ref('shows/' + User.user.uid).on('child_added', snapshot => {
        const newList = this.state.listOfShows;
        newList.push({
          showKey: snapshot.key,
          title: snapshot.val().title,
          genre: snapshot.val().genre
        });
        this.setState({
          listOfShows: newList
        });
        // console.log('test', JSON.stringify(newList))
      });
    } else {
      setTimeout(() => {
        this.getShows();
      }, 300);
    }
  }
  componentDidMount() {
    this.getShows();
  }

  deleteHandler(index) {
    let showItem = this.state.listOfShows[index];
    database.ref('shows/' + User.user.uid + '/' + showItem.showKey).remove();
    this.state.listOfShows.splice(index, 1);
    this.setState({
      listOfShows: this.state.listOfShows
    });
  }

  deleteSelected (event) {
    for (let i=0; i < this.state.listOfShows.length; i++){
      if (this.refs['row' + i].props.selected) {
        this.deleteHandler(i);
      }
    }
  }



  render() {
    const listOfShows = this.state.listOfShows.map((show, index) =>
      <TableRow
        ref={'row' + index}
        key={show.showKey}
        onClick={this.deleteHandler.bind(this, index)}>
        <TableRowColumn>{show.title}</TableRowColumn>
        <TableRowColumn>{show.genre}</TableRowColumn>
      </TableRow>
    );

    return (
      <div className={classes.Background}>
        <Table multiSelectable={true}>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Genre</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody deselectOnClickaway={false}>
            {listOfShows}
          </TableBody>
        </Table>
        <button onClick={(e) => this.deleteSelected(e)}>Delete Selected</button>
      </div>
    );
  }
}

export default WatchListPage
