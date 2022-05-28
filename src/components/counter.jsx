import React, { Component } from "react";

class Counter extends Component {
  styles = {
    fontSize: 20,
    fontWeight: "bold",
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Remove
        </button>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>

        <span style={this.styles} className={"badge m-2 badge-success"}>
          ${this.props.price}0
        </span>

        <span style={this.styles} className={"badge m-2"}>
          {this.props.foodItem}
        </span>

        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          +
        </button>

        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm m-2"
        >
          -
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-3 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    // changing (removing) local state of counter component (this.state)
    const { value } = this.props.counter;
    return value === 0 ? "0" : value;
  }
}

export default Counter;
