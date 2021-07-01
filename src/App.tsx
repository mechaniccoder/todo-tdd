import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button>+1</button>
      <button>-1</button>
    </div>
  );
}

export default App;
