import React, { Component } from "react";
import Counter from "./Counter";

export interface CountersProps {
  counters: any;
  onReset: any;
  onDelete: any;
  onChange: any;
}

export interface CountersState {}

class Counters extends Component<CountersProps, CountersState> {
  render() {
    const { onReset, onDelete, onChange } = this.props;

    return (
      <React.Fragment>
        <div className="text-left">
          <button onClick={onReset} className="btn btn-primary btn-lg m-2">
            Reset
          </button>
        </div>
        {this.props.counters.map((counter: any) => (
          <Counter
            onDelete={() => onDelete(counter.id)}
            onChange={(newValue: number) => onChange(counter.id, newValue)}
            key={counter.id}
            value={counter.value}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Counters;
