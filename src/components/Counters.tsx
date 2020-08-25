import React from "react";
import Counter from "./Counter";

export interface CountersProps {}

export interface CountersState {
  counters: { id: number; value: number }[];
}

class Counters extends React.Component<CountersProps, CountersState> {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId: number) => {
    const counters = this.state.counters.filter((counter) => counter.id !== counterId);
    this.setState({ counters });
  };

  handleResetAll = () => {
    const counters = this.state.counters.map((counter: any) => ({
      ...counter,
      value: 0,
    }));
    this.setState({ counters });
  };

  handleChange = (counterId: number, newValue: number) => {
    const counters: any = [...this.state.counters];
    const index = counters.findIndex((counter: any) => counter.id === counterId);
    counters[index] = { ...counters[index], value: newValue };
    this.setState({ counters });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleResetAll} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        {this.state.counters.map((counter) => {
          return (
            <Counter
              onDelete={() => this.handleDelete(counter.id)}
              onChange={(newValue: number) => this.handleChange(counter.id, newValue)}
              key={counter.id}
              value={counter.value}
            />
          );
        })}
      </div>
    );
  }
}

export default Counters;
