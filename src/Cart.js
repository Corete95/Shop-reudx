import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

const Cart = (props) => {
  return (
    <div>
      <Table responsive>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {props.state.map((state, idx) => {
            return (
              <tr key={idx}>
                <td>{state.id}</td>
                <td>{state.name}</td>
                <td>{state.quan}</td>
                <td>
                  <button
                    onClick={() => {
                      props.dispatch({
                        type: "quanPlus",
                      });
                    }}
                  >
                    +
                  </button>
                  <button
                    onClick={() => {
                      props.dispatch({ type: "quanMinus" });
                    }}
                  >
                    -
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {props.alert === true ? (
        <div className="myAlert">
          <p>지금 구매하시면 신규할인 20%</p>
          <button onClick={() => props.dispatch({ type: "alertClose" })}>
            닫기
          </button>
        </div>
      ) : null}
    </div>
  );
};

function redux(state) {
  return {
    state: state.reducer,
    alert: state.reducer2,
  };
}
export default connect(redux)(Cart);
