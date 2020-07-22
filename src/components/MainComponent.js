import React, { Component } from 'react';

import Menu from './MenuComponents';
import DisplayDish from './DishDetailComponent';
import { DISHES } from '../shared/dishes';

import { Navbar, NavbarBrand } from "reactstrap";




// Class Components (that holds local states as well as takes props and render Views . It Can Use Lifecycle Functions /hooks like render)

// Container Component (if Navbar Implemented Seperately)


class Main extends Component {

   constructor(props) {
      super(props);

      this.state = {
         dishes: DISHES,
         selectedDishId: null
      };
   }

   onDishSelect(dishId) {
      this.setState({ selectedDishId: dishId });
   }

   render() {

      return (
         <div>
            <Navbar dark color="dark">
               <div className="container">
                  <NavbarBrand href="#">Removing all Confusions</NavbarBrand>
               </div>
            </Navbar>

            <Menu dishes={this.state.dishes} onClickAsProps={(dishId) => this.onDishSelect(dishId)} />

            <DisplayDish selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]} />
         </div>
      );
   }
}

export default Main;
