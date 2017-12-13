import React, { Component } from 'react';

import Searchbar from '../Searchbar/Searchbar';
import FlatButton from 'material-ui/FlatButton';

import Aux from '../hoc/Aux';
import database, {User, auth} from '../firebase-setup.js';
import {Grid, Col, Row} from 'react-bootstrap';

// import classes from './Layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.check_login();
  }

  login () {
    auth()
      .then(function (user) {
        console.log(user);
      })
      .catch(function (e) {
        console.log(e);
      });
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
      <Aux>
        <div>
          <Searchbar />
        </div>
        <Grid>
          <Row className="show-grid">
            <Col xs={6} md={4}></Col>
            <Col xs={6} md={4}>
              <FlatButton
                label="Login"
                fullWidth={true}
                backgroundColor="#1E88E5"
                hoverColor="#BBDEFB"
                rippleColor="#2196F3"
                onClick={this.login}
                type='submit'></FlatButton>
            </Col>
            <Col xsHidden md={4}></Col>
          </Row>
        </Grid>
      </Aux>

    )
  }
}

export default Layout;
