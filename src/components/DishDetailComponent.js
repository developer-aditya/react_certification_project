import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';





// Purely Functional Components (that  takes props and render or return View . It Cannot Use Lifecycle Functions/hooks like render)

// Presentational Components 

function RenderDish({ clickedDish }) {
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





function RenderComment({ clickedDish }) {
   if (clickedDish === undefined) {
      return (
         <div></div>
      );
   }
   else {
      const comment = clickedDish.comments.map((singleComment) => {
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
            <div className="col-md-5 col-12 p-0 m-3">
               <RenderDish clickedDish={props.selectedDish} />
            </div>
            <div className="col-md-5 col-12 p-0 m-3">
               <RenderComment clickedDish={props.selectedDish} />
            </div>
         </div>
      </div>
   );
}



export default DisplayDish;