import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { createStore } from "redux";

const cartList = [
  { id: 0, name: "멋진 신발", quan: 2 },
  { id: 1, name: "이쁜 신발", quan: 5 },
];

function reducer(state = cartList, action) {
  if (action.type === "quanPlus") {
    let copy = [...state];
    copy[0].quan++;
    return copy;
  } else if (action.type === "quanMinus") {
    let copy = [...state];
    copy[0].quan--;
    return copy;
  } else {
    return state;
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
