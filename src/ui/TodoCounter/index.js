import React from "react";
import "./TodoCounter.css";

function TodoCounter({loading, completedTodos, totalTodos}) {
  return totalTodos === completedTodos ? (
    <h2 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>Todo en orden</h2>
  ) : (
    <h2 className={`TodoCounter ${!!loading && 'TodoCounter--loading'}`}>
      Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> TODOS
    </h2>
  );
}

export { TodoCounter };
