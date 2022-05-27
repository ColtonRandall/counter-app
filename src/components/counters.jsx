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

  // set to function that takes a parameter 'counter'
  // to update the state, create a new counters array and pass to setState() for React to update dynamically.
  handleIncrement = (counter) => {
    console.log(counter);
    const counters = [...this.state.counters]; // cloning array using spread operator
    const index = counters.indexOf(counter); // must find the index of button being pushed since we only want to change this value
    counters[index] = { ...counter }; // replace values
    counters[index].value++; // increment by 1
    this.setState({ counters });
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
                  counter={counter}
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
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
