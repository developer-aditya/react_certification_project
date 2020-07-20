import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';
import DisplayDish from './DishDetailComponent';



class Menu extends Component {

     constructor(props) {
          super(props);

          this.state = {
               selectedDish: null
          }
     }

     onDishSelect(dish) {
          this.setState({ selectedDish: dish });
     }

     render() {

          const menu = this.props.dishes.map((dish) => {
               return (

                    <div className="col-md-5 col-12 p-0 m-3">
                         <Card key={dish.id} onClick={() => this.onDishSelect(dish)}>
                              <CardImg width="100%" src={dish.image} alt={dish.name} />
                              <CardImgOverlay>
                                   <CardTitle>{dish.name}</CardTitle>
                              </CardImgOverlay>
                         </Card>
                    </div>

               );
          });

          return (
               <div className="container" >
                    <div className="row">
                         {menu}
                    </div>

                    <DisplayDish selectedDish={this.state.selectedDish} />
               </div>
          );
     }
}

export default Menu;