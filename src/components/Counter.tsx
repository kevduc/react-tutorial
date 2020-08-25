import React from "react";

export interface CounterProps {
  value: number;
  onDelete: any;
  onChange: any;
}

export interface CounterState {
  value: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
  render() {
    let variant = this.getBadgeVariant();

    return (
      <div>
        <span className={`badge badge-${variant} m-2`}>
          {this.formatCount()}
        </span>
        <button
          onClick={() => this.props.onChange(this.props.value + 1)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={this.props.onDelete}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );
  }

  private getBadgeVariant() {
    return this.props.value === 0 ? "warning" : "primary";
  }

  private formatCount() {
    const count = this.props.value;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
