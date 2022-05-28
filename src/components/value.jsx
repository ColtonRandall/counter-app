import React, { Component } from "react";
import Counter from "./counter";

class Value extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className=" d-flex aligns-items-center justify-content-center m-2">
          <span>Total cost:</span>
        </div>
        <div className=" d-flex aligns-items-center justify-content-center m-2">
          <span className={"badge m-2 badge-success"}>
            ${this.props.totalPrice}0
          </span>
        </div>
      </div>
    );
  }
}

export default Value;
