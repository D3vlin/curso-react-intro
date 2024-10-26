import React from "react";
import "./TodoCounter.css";
import { TodoContext } from "../../Context";

function TodoCounter() {
  const {completedTodos, totalTodos} = React.useContext(TodoContext);

  return totalTodos === completedTodos ? (
    <h1 className="TodoCounter">Todo en orden</h1>
  ) : (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
    </h1>
  );
}

export { TodoCounter };
