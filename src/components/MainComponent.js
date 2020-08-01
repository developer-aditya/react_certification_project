import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './HeaderComponent';
import Home from './HomeComponent';
import Menu from './MenuComponents';
import Contact from './ContactComponent';
import DisplayDish from './DishDetailComponent';
import Footer from './FooterComponent';

import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments'
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';



// Class Components (that holds local states as well as takes props and render Views . It Can Use Lifecycle Functions /hooks like render)

// Container Component (if Navbar Implemented Seperately)


class Main extends Component {

   constructor(props) {
      super(props);

      this.state = {
         dishes: DISHES,
         comments: COMMENTS,
         leaders: LEADERS,
         promotions: PROMOTIONS
      };
   }

   render() {
      const HomePage = () => {
         return (
            <Home
               dish={this.state.dishes.filter((dish) => dish.featured)[0]}
               promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
               leader={this.state.leaders.filter((leader) => leader.featured)[0]}
            />
         );
      }

      return (
         <React.Fragment>

            <Header />

            <Switch>
               <Route path='/home' component={HomePage} />
               <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
               <Route path='/contact' component={Contact} />
               <Redirect to='/home' />
            </Switch>


            <Footer />

         </React.Fragment>
      );
   }
}

export default Main;
