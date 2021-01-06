import React, { useState } from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import data from "./data.js";
import Detail from "./Detail";
import Header from "./Header";
import ShoesList from "./ShoesList";
import axios from "axios";
import "./App.css";

function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Header />
      <Route exact path="/">
        <Jumbotron className="center">
          <h1>60% 시즌 세일!!!</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for
            calling extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <div className="container">
          <div className="row">
            {shoes.map((shoes, idx) => {
              return <ShoesList shoes={shoes} idx={idx} key={idx} />;
            })}
          </div>
          <button
            className="btn btn-primary"
            onClick={() => {
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then((res) => {
                  setShoes([...shoes, ...res.data]);
                })
                .catch(() => {
                  console("에러에러");
                });
            }}
          >
            더보기
          </button>
        </div>
      </Route>

      <Route exact path="/detail/:id">
        <Detail shoes={shoes} />
      </Route>
    </div>
  );
}

export default App;
