import React from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar dark color="primary">
        <div className="container">
          <NavbarBrand href="#">Hello Bois</NavbarBrand>
        </div>
      </Navbar>
    </div>
  );
}

export default App;
