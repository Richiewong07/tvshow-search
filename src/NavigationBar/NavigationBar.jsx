import React, { Component } from 'react';

import {Navbar, Nav, NavItem} from 'react-bootstrap';

// import './NavigationBar.css';

class NavigationBar extends Component {

  render() {
    return (
        <Navbar>
         <Navbar.Header>
           <Navbar.Brand>
             <a href="">TV Show Searcher</a>
           </Navbar.Brand>
         </Navbar.Header>
         <Nav>
           <NavItem eventKey={1} href="/">Home</NavItem>
           <NavItem eventKey={2} href="/watchlistpage">Watch List Page</NavItem>
         </Nav>
       </Navbar>
    );
  }
}

export default NavigationBar
