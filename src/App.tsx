import React, { Component } from "react";
import "./App.css";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

export interface AppProps {}

export interface AppState {
  counters: { id: number; value: number }[];
}

class App extends Component<AppProps, AppState> {
  state: AppState = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
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

  handleDelete = (counterId: number) => {
    const counters = this.state.counters.filter((counter) => counter.id !== counterId);
    this.setState({ counters });
  };

  render() {
    return (
      <div className="App">
        <NavBar numItems={this.state.counters.filter((counter) => counter.value > 0).length} />
        <main className="container-fluid">
          <Counters
            counters={this.state.counters}
            onReset={this.handleResetAll}
            onDelete={this.handleDelete}
            onChange={this.handleChange}></Counters>
        </main>
      </div>
    );
  }
}

export default App;
