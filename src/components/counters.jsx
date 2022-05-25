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

  handleDelete = () => {
    console.log("Event handler called");
  };

  render() {
    return (
      <div className='d-flex aligns-items-center justify-content-center'>
        <div className='m-5 w-25 d-flex aligns-items-center justify-content-center border border-danger shadow p-3 mb-5 bg-light rounded'>
          <div>
            {this.state.counters.map((counter) => (
              <Counter
                key={counter.id}
                onDelete={this.handleDelete}
                value={counter.value}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Counters;
