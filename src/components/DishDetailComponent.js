import React, { Component } from "react";
import {
   Card, CardImg, CardText, CardBody, CardTitle,
   Modal, ModalHeader, ModalBody,
   Breadcrumb, BreadcrumbItem,
   Button,
   Row, Col, Label
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";




const required = val => val && val.length;
const maxLength = len => val => !val || val.length <= len;
const minLength = len => val => val && val.length >= len;

class CommentForm extends Component {
   constructor(props) {
      super(props);
      this.state = {
         isModalOpen: false
      };
      this.toggleModal = this.toggleModal.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
   }

   toggleModal() {
      this.setState({
         isModalOpen: !this.state.isModalOpen
      });
   }

   handleSubmit(values) {
      this.toggleModal();
      this.props.postComment(
         this.props.dishId,
         values.rating,
         values.author,
         values.comment
      );
   }

   render() {
      return (
         <div>
            <Button color="light" outline onClick={this.toggleModal}>
               <span className="fa fa-pencil" /> Submit Comment
        </Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
               <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
               <ModalBody>
                  <LocalForm onSubmit={this.handleSubmit}>
                     <Row className="form-group">
                        <Label htmlFor="rating" md={12}>
                           Rating
                </Label>
                        <Col md={{ size: 12 }}>
                           <Control.select
                              model=".rating"
                              name="rating"
                              className="form-control"
                           >
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                           </Control.select>
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Label htmlFor="author" md={12}>
                           Your Name
                </Label>
                        <Col md={12}>
                           <Control.text
                              model=".author"
                              id="author"
                              name="author"
                              placeholder="Your Name"
                              className="form-control"
                              validators={{
                                 required,
                                 minLength: minLength(3),
                                 maxLength: maxLength(15)
                              }}
                           />
                           <Errors
                              className="text-danger"
                              model=".author"
                              show="touched"
                              messages={{
                                 required: "Required: ",
                                 minLength: "Must be greater than 2 characters",
                                 maxLength: "Must be 15 characters or less"
                              }}
                           />
                        </Col>
                     </Row>
                     <Row className="form-group">
                        <Label htmlFor="comment" md={12}>
                           Comment
                </Label>
                        <Col md={12}>
                           <Control.textarea
                              model=".comment"
                              id="comment"
                              name="comment"
                              rows={5}
                              className="form-control"
                           />
                        </Col>
                     </Row>
                     <Button type="submit" value="submit" color="primary">
                        Submit
              </Button>
                  </LocalForm>
               </ModalBody>
            </Modal>
         </div>
      );
   }
}









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





function RenderComment({ comments, postComment, dishId }) {
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
               <CommentForm dishId={dishId} postComment={postComment} />
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