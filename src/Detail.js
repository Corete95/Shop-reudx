import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./Detail.scss";
import { stockContext } from "./App";

const BOX = styled.div`
  padding: 20px;
`;
const TITLE = styled.h4`
  font-size: 25px;
`;

function Detail(props) {
  const [alert, setAlert] = useState(true);
  const { id } = useParams();
  const shoesId = props.shoes.find((shoes) => shoes.id == id);
  const history = useHistory();
  const stock = useContext(stockContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAlert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="container">
      <BOX>
        <TITLE className="red">상세페이지</TITLE>
      </BOX>
      {alert === true ? (
        <div className="myAlert">
          <p>재고가 얼마 남지 않았습니다.</p>
        </div>
      ) : null}

      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (shoesId.id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{shoesId.title}</h4>
          <p>{shoesId.content}</p>
          <p>{shoesId.price}</p>
          <p>재고: {stock[0]}</p>
          <button
            className="btn btn-danger"
            onClick={() => {
              props.setStock([props.stock[0] - 1]);
            }}
          >
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
