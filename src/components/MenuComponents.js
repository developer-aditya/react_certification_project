import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';



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

     renderToUI(clickedDish) {
          if (clickedDish === null) {
               return (
                    <div></div>
               );
          }
          else {
               return (
                    <Card className="bg-secondary text-white">
                         <CardImg top src={clickedDish.image} alt={clickedDish.name} />
                         <CardBody>
                              <CardTitle>{clickedDish.name}</CardTitle>
                              <CardText>{clickedDish.description}</CardText>
                         </CardBody>
                    </Card>
               )
          }
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

                    <div className="row mt-5">
                         <div className="col-md-5 col-12 p-0">
                              {this.renderToUI(this.state.selectedDish)}
                         </div>
                    </div>
               </div>
          );
     }
}

export default Menu;