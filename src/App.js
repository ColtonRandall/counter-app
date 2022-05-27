import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
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
      // Navbar to display all values greater than zero
      <React.Fragment>
        <NavBar
          totalCounters={
            this.state.counters.filter((num) => num.value > 0).length
          }
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
