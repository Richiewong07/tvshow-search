import React, { Component } from 'react';
import './App.css';

import {BrowserRouter, Route, Link} from 'react-router-dom';
import Layout from './Layout/Layout'
import WatchListPage from './WatchListPage/WatchListPage';
import setup_firebase from './firebase-setup';

setup_firebase();

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/watchlistpage">Watch List Page</Link></li>
          </ul>
          <Route exact path="/" component={Layout}/>
          <Route path="/watchlistpage" component={WatchListPage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
