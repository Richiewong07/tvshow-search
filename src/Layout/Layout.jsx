import React, { Component } from 'react';

import Searchbar from '../Searchbar/Searchbar';

import AppBar from 'material-ui/AppBar';

import database, {User} from '../firebase-setup.js';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.check_login();
  }

  check_login() {
    console.log('Checking Login')
    if (User.user) {
      database.ref('shows/' + User.user.uid)
      .on('value', function(shows) {
        console.log(shows.val());
      });
    } else {
      setTimeout(() => {
        this.check_login();
      }, 10000);
    }
  }

  render () {
    return(
      <div>
        <AppBar title = "TV Show Searcher"/>
        <Searchbar/>
      </div>
    )
  }
}

export default Layout;
