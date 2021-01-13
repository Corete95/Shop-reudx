import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { stockContext } from "./App";

const ShoesList = (props) => {
  const stock = useContext(stockContext);
  const history = useHistory();
  return (
    <div
      className="col-md-4"
      onClick={() => {
        history.push("/detail/" + props.shoes.id);
      }}
    >
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" +
          (props.shoes.id + 1) +
          ".jpg"
        }
        width="100%"
      />
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
      <Stock></Stock>
    </div>
  );
};

function Stock() {
  const stock = useContext(stockContext);
  return <p>재고: {stock[0]}</p>;
}
export default ShoesList;
