import React, { Component } from "react";

export interface CounterProps {
  value: number;
  onDelete: any;
  onChange: any;
}

export interface CounterState {
  value: number;
}

class Counter extends Component<CounterProps, CounterState> {
  render() {
    return (
      <div className="counter row align-content-center justify-content-md-left row-cols-auto m-2 text-center">
        <div className="count p-2 my-auto">
          <span className={`badge ${this.getBadgeVariant()} align-self-center`}>{this.formatCount()}</span>
        </div>
        <div className="col p-1">
          <button
            onClick={() => this.props.onChange(this.props.value - 1)}
            className="btn btn-secondary btn-lg m-1"
            disabled={this.props.value <= 0}>
            <span className="">-</span>
          </button>
          <button onClick={() => this.props.onChange(this.props.value + 1)} className="btn btn-secondary btn-lg m-1">
            <span className="">+</span>
          </button>
          <button onClick={this.props.onDelete} className="btn btn-danger btn-lg m-1">
            <span className="">x</span>
          </button>
        </div>
      </div>
    );
  }

  private getBadgeVariant() {
    return this.props.value === 0 ? "badge-warning" : "badge-primary ml-3 mr-3";
  }

  private formatCount() {
    const count = this.props.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
