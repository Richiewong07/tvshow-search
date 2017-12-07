import React, { Component } from 'react';

import Searchbar from '../Searchbar/Searchbar';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return(
      <div>
        <div>Toolbar</div>
        <div>Sidedrawer</div>
        <Searchbar/>
      </div>
    )
  }
}

export default Layout;
