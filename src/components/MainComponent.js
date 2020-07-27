import React, { Component } from 'react';

import Header from './HeaderComponent';
import Menu from './MenuComponents';
import DisplayDish from './DishDetailComponent';
import Footer from './FooterComponent';

import { DISHES } from '../shared/dishes';




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
         <React.Fragment>
            <Header />

            <Menu dishes={this.state.dishes} onClickAsProps={(dishId) => this.onDishSelect(dishId)} />

            <DisplayDish selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDishId)[0]} />

            <Footer />
         </React.Fragment>
      );
   }
}

export default Main;
