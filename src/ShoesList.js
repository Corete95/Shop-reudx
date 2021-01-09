import React, { useContext } from "react";
import { stockContext } from "./App";

const ShoesList = (props) => {
  const stock = useContext(stockContext);

  return (
    <div className="col-md-4">
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (props.idx + 1) + ".jpg"
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
