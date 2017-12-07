import React, { Component } from 'react';
import './App.css';

import {BrowserRouter, Route, Link} from 'react-router-dom';
import Layout from './Layout/Layout'
import WatchListPage from './WatchListPage/WatchListPage';
import MoreInfoPage from './MoreInfoPage/MoreInfoPage';



class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <ul>
            <li><Link to="/">Home</Link></li>
          </ul>
          <Route exact path="/" component={Layout}/>
          <Route path="/watchlist" component={WatchListPage}/>
          <Route path="/moreinfo" component={MoreInfoPage}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
