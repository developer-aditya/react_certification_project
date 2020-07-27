import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Home from './HomeComponent';
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
         dishes: DISHES
      };
   }

   render() {
      const HomePage = () => {
         return (
            <Home />
         );
      }

      return (
         <React.Fragment>

            <Header />

            <Switch>
               <Route path='/home' component={HomePage} />
               <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
               <Redirect to='/home' />
            </Switch>


            <Footer />

         </React.Fragment>
      );
   }
}

export default Main;
