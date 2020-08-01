import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavItem, NavbarToggler, Nav, Jumbotron, Collapse } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

   constructor(props) {
      super(props);

      // If we use normal Function instead of arrow function as parameter we need to bind this to function
      // Alternative: Use () => this.toggleNav() instead of just this.toggleNav
      this.toggleNav = this.toggleNav.bind(this);

      this.state = {
         isNavOpen: false
      }
   }


   toggleNav() {
      this.setState({
         isNavOpen: !(this.state.isNavOpen)
      });
   }


   render() {
      return (
         <React.Fragment>
            <Navbar dark expand='md'>
               <div className="container">
                  <NavbarBrand href="/">
                     <img src='assets/images/logo.png' height="30" width="41" alt='Ristorante Con Fusion' />
                  </NavbarBrand>
                  <NavbarToggler onClick={this.toggleNav} />
                  <Collapse isOpen={this.state.isNavOpen} navbar>
                     <Nav navbar className="ml-auto">
                        <NavItem>
                           <NavLink to='/home' className='nav-link'><i className='fa fa-home fa-lg mr-1'></i>Home </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink to='/about' className='nav-link'><i className='fa fa-info fa-lg mr-1'></i>About </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink to='/menu' className='nav-link'><i className='fa fa-list fa-lg mr-1'></i>Menu </NavLink>
                        </NavItem>
                        <NavItem>
                           <NavLink to='/contact' className='nav-link'><i className='fa fa-address-card fa-lg mr-1'></i>ContactUs </NavLink>
                        </NavItem>
                     </Nav>
                  </Collapse>
               </div>
            </Navbar>

            <Jumbotron>
               <div className="container">
                  <div className="row row-header">
                     <div className="col-12 col-sm-6">
                        <h1>Ristorante con Fusion</h1>
                        <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                     </div>
                  </div>
               </div>
            </Jumbotron>
         </React.Fragment>
      );
   }
}

export default Header;