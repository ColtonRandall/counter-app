import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    return (
      <div>
        <div className=" d-flex aligns-items-center justify-content-center">
          <button
            onClick={this.props.onReset}
            className="btn btn-primary btn sm m-2"
          >
            Reset
          </button>
        </div>
        <div className="d-flex aligns-items-center justify-content-center">
          <div className="m-5 w-50 d-flex aligns-items-center justify-content-center border border-danger shadow p-3 mb-5 bg-light rounded">
            <div>
              {this.props.counters.map((counter) => (
                <Counter
                  key={counter.id}
                  counter={counter}
                  onDelete={this.props.onDelete}
                  onIncrement={this.props.onIncrement}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Counters;
