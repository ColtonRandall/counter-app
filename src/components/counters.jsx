import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };
  render() {
    const { onReset, onDelete, onIncrement, onDecrement, counters } =
      this.props;
    return (
      <div>
        <div className=" d-flex aligns-items-center justify-content-center">
          <button onClick={onReset} className="btn btn-primary btn sm m-4">
            Reset
          </button>
        </div>
        <div className="d-flex aligns-items-center justify-content-center">
          <div className="m-5 w-50 d-flex aligns-items-center justify-content-center border border-danger shadow p-3 mb-5 bg-light rounded">
            <div>
              {counters.map((counter) => (
                <Counter
                  key={counter.id}
                  foodItem={counter.foodItem}
                  price={counter.price}
                  counter={counter}
                  onDelete={onDelete}
                  onIncrement={onIncrement}
                  onDecrement={onDecrement}
                />
              ))}
            </div>
          </div>
        </div>
        {/* <div className=" d-flex aligns-items-center justify-content-center m-2">
          <span style={this.styles} className={"badge m-2 badge-success"}>
            $ {this}
          </span>
        </div> */}
      </div>
    );
  }
}

export default Counters;
