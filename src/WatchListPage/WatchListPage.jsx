
import React, { Component } from 'react';

import firebase from 'firebase';

class WatchListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      genre: null
    }
  }

  componentWillMount() {
    this.getDataHandler();
  }

  getDataHandler = () => {
    firebase.database().ref('shows').once('value').then((shows) => {
      console.log(shows.val());
      var shows_data = shows.val();
      this.setState({
        title: shows_data.title,
        genre: shows_data.genre
      });
    });
  }

  render() {
    return(
      <div>
        {this.state.title}
        {this.state.genre}
      </div>
    );
  }
}

export default WatchListPage
