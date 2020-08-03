import React, { Component } from 'react';
import {
     Card, CardImg, CardImgOverlay,
     CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';




// Purely Functional Components (that  takes props and render or return View . It Cannot Use Lifecycle Functions/hooks like render)

// Presentational Components 


function MenuCard({ dishToMenuCard }) {
     return (
          <Card>
               <Link to={`/menu/${dishToMenuCard.id}`} >
                    <CardImg width="100%" src={dishToMenuCard.image} alt={dishToMenuCard.name} />
                    <CardImgOverlay>
                         <CardTitle>{dishToMenuCard.name}</CardTitle>
                    </CardImgOverlay>
               </Link>
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
          <div className="container">
               <div className="row">
                    <Breadcrumb>
                         <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                         <BreadcrumbItem active>Menu</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                         <h3>Menu</h3>
                         <hr />
                    </div>
               </div>
               <div className="row">
                    {menu}
               </div>
          </div>
     );
};



export default Menu;