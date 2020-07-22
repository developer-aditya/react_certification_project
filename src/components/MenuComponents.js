import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';




// Purely Functional Components (that  takes props and render or return View . It Cannot Use Lifecycle Functions/hooks like render)

// Presentational Components 


function MenuCard({ dishToMenuCard, onClickOfProps }) {
     return (
          <Card onClick={() => onClickOfProps(dishToMenuCard.id)}>
               <CardImg width="100%" src={dishToMenuCard.image} alt={dishToMenuCard.name} />
               <CardImgOverlay>
                    <CardTitle>{dishToMenuCard.name}</CardTitle>
               </CardImgOverlay>
          </Card>
     );
}



const Menu = (props) => {
     const menu = props.dishes.map((dish) => {
          return (
               <div key={dish.id} className="col-md-5 col-12 p-0 m-3">
                    <MenuCard dishToMenuCard={dish} onClickOfProps={props.onClickAsProps} />
               </div>
          );
     });
     return (
          <div className="container" >
               <div className="row">
                    {menu}
               </div>
          </div>
     );
};



export default Menu;