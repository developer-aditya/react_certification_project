import React, { Component } from 'react';
import Menu from './components/MenuComponents';

import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import './App.css';

import { DISHES } from './shared/dishes';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div>
        <Navbar dark color="dark">
          <div className="container">
            <NavbarBrand href="#">Hello Bois</NavbarBrand>
          </div>
        </Navbar>

        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
