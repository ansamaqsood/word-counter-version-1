import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

function Product(props) {
    function incrementQuantity(index){

    }
    function decrementQuantity(index){

    }
  return (
    <div>
      <div className="row">
        <div className="col -4">
          <h2>
            {props.product.name}
            <Badge bg="secondary">{props.product.price}</Badge> 
           
          </h2>
        </div>
        <div className="col-4">
        <ButtonGroup aria-label="Basic example">
              <Button variant="secondary"  onClick={() =>{props.decrementQuantity(props.index)}}>_</Button>
              <Button variant="secondary">{props.product.quantity}</Button>
              <Button variant="secondary" onClick={() =>{props.incrementQuantity(props.index)}}>+</Button>
            </ButtonGroup>
        </div>
        <div className="col-4">
          {props.product.quantity * props.product.price}
        </div>
      </div>
    </div>
  );
}

export default Product;
