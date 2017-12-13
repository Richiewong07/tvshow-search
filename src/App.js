import React, { Component } from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.css';

import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Layout from './Layout/Layout'
import WatchListPage from './WatchListPage/WatchListPage';
// import { auth } from './firebase-setup';
import NavigationBar from './NavigationBar/NavigationBar';
import classes from './App.css'



class App extends Component {
  // login () {
  //   auth()
  //     .then(function (user) {
  //       console.log(user);
  //     })
  //     .catch(function (e) {
  //       console.log(e);
  //     });
  // }

  render() {
    return (
      <div className={classes.Background}>
        <MuiThemeProvider>
          <NavigationBar />
          <BrowserRouter>
            <div>
              {/* <ul>
                <li><button onClick={this.login}>Login</button></li>
              </ul> */}
              <Switch>
                <Route exact path="/" component={Layout}/>
                <Route path="/watchlistpage" component={WatchListPage}/>
              </Switch>
            </div>
          </BrowserRouter>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
