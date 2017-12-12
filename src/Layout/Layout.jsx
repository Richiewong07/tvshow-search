import React, { Component } from 'react';

import Searchbar from '../Searchbar/Searchbar';

import database, {User} from '../firebase-setup.js';

import classes from './Layout.css';

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
      }, 300);
    }
  }

  render () {
    return(
      <div className={classes.Background}>
        <Searchbar/>
      </div>
    )
  }
}

export default Layout;
