import React from "react";
import "./App.css";
import Counters from "./components/Counters";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main className="container">
        <Counters></Counters>
      </main>
    </div>
  );
}

export default App;
