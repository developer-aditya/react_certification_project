import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import Menu from './components/MenuComponents.js'
import './App.css';

function App() {
  return (
    <div>
      <Navbar dark color="dark">
        <div className="container">
          <NavbarBrand href="#">Hello Bois</NavbarBrand>
        </div>
      </Navbar>

      <Menu />
    </div>
  );
}

export default App;
