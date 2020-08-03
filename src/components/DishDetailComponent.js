import React, { Component } from 'react';
import {
   Card, CardImg, CardText, CardBody,
   CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';


// Purely Functional Components (that  takes props and render or return View . It Cannot Use Lifecycle Functions/hooks like render)

// Presentational Components 

function RenderDish({ clickedDish }) {
   console.log(clickedDish)
   if (clickedDish === undefined) {
      return (
         <div></div>
      );
   }
   else {
      return (
         <Card>
            <CardImg top src={clickedDish.image} alt={clickedDish.name} />
            <CardBody>
               <CardTitle>{clickedDish.name}</CardTitle>
               <CardText>{clickedDish.description}</CardText>
            </CardBody>
         </Card>
      )
   }
}





function RenderComment({ comments }) {
   if (comments === undefined) {
      return (
         <div></div>
      );
   }
   else {
      const comment = comments.map((singleComment) => {
         return (
            <blockquote key={singleComment.id} className="blockquote m-0">
               {singleComment.comment}
               <footer className="blockquote-footer text-right">
                  <small>
                     {singleComment.author}


                     {/* Date From ISO Formatted String To A International Format */}
                     <cite className="ml-2" title="Source Date">
                        {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(singleComment.date)))}
                     </cite>


                  </small>
               </footer>
               <hr />
            </blockquote>
         );
      });
      return (
         <Card className="bg-dark text-white">
            <CardBody>
               <CardTitle className="text-center">Comments</CardTitle>
               {comment}
            </CardBody>
         </Card>
      )
   }
}



const DisplayDish = (props) => {
   return (
      <div className="container">
         <div className="row">
            <Breadcrumb>

               <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
               <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
               <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
            </Breadcrumb>
            <div className="col-12">
               <h3>{props.dish.name}</h3>
               <hr />
            </div>
         </div>
         <div className="row">
            <div className="col-12 col-md-5 m-1">
               <RenderDish clickedDish={props.dish} />
            </div>
            <div className="col-12 col-md-5 m-1">
               <RenderComment comments={props.comments} />
            </div>
         </div>
      </div>
   );
}



export default DisplayDish;