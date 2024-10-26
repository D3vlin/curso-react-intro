import "./App.css";
import { AppUI } from "./AppUI";
import React from "react";
import { TodoProvider } from "../Context";

function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
