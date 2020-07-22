import React, { Component } from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText } from 'reactstrap';


class DisplayDish extends Component {

   renderDish(clickedDish) {
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


   renderComment(clickedDish) {
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
                        <cite className="ml-2" title="Source Date">{singleComment.date}</cite>
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



   render() {
      return (
         <div className="container">
            <div className="row">
               <div className="col-md-5 col-12 p-0 m-3">
                  {this.renderDish(this.props.selectedDish)}
               </div>
               <div className="col-md-5 col-12 p-0 m-3">
                  {this.renderComment(this.props.selectedDish)}
               </div>
            </div>
         </div>
      );
   }
}


export default DisplayDish;