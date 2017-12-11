import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

import {BrowserRouter, Route, Link} from 'react-router-dom';
import Layout from './Layout/Layout'
import WatchListPage from './WatchListPage/WatchListPage';
import { auth } from './firebase-setup';





class App extends Component {
  login () {
    auth()
      .then(function (user) {
        console.log(user);
      })
      .catch(function (e) {
        console.log(e);
      });
  }

  render() {
    return (
      <MuiThemeProvider>
        <BrowserRouter>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/watchlistpage">Watch List Page</Link></li>
              <li><button onClick={this.login}>Login</button></li>
            </ul>
            <Route exact path="/" component={Layout}/>
            <Route path="/watchlistpage" component={WatchListPage}/>
          </div>
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
