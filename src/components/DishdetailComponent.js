import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

function RenderDish({ dish }) {
  return (
    <Card>
      <CardImg width="100%" object="true" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>
  );
}
function RenderComments({ dish }) {
  const comments = dish.comments.map((comm) => {
    return (
      <ul className="list-unstyled" key={comm.id}>
        <li>{comm.comment}</li>
        <li>
          -- {comm.author} ,{" "}
          {new Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          }).format(new Date(Date.parse(comm.date)))}
        </li>
      </ul>
    );
  });

  return comments;
}

const DishDetail = (props) => {
  if (props.dish != null) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>

          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            <RenderComments dish={props.dish} />
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
};

export default DishDetail;
