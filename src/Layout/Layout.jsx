import React, { Component } from 'react';

import Searchbar from '../Searchbar/Searchbar';
import AddButton from '../AddButton/AddButton';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render () {
    return(
      <div>
        <div>Toolbar</div>
        <Searchbar/>
        <AddButton/>
      </div>
    )
  }
}

export default Layout;
