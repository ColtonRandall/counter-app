import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    // Using filter to get all counters except one with given id
    const counters = this.state.counters.filter(
      (counter) => counter.id !== counterId
    );
    // Now we have a new array - override counters prop with counters constant.
    this.setState({ counters }); // can simplify to ({ counters })
  };

  handleReset = () => {
    // Use map method to get each counter and reset its value
    const counters = this.state.counters.map((eachCounter) => {
      eachCounter.value = 0;
      return eachCounter;
    });
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <div className=" d-flex aligns-items-center justify-content-center">
          <button
            onClick={this.handleReset}
            className="btn btn-primary btn sm m-2"
          >
            Reset
          </button>
        </div>
        <div className="d-flex aligns-items-center justify-content-center">
          <div className="m-5 w-25 d-flex aligns-items-center justify-content-center border border-danger shadow p-3 mb-5 bg-light rounded">
            <div>
              {this.state.counters.map((counter) => (
                <Counter
                  key={counter.id}
                  value={counter.value}
                  id={counter.id}
                  onDelete={this.handleDelete}
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
