import React from "react";
import "./App.css";
import { useTodos } from "./useTodos";
import { TodoHeader } from "../Components/TodoHeader";
import { TodoCounter } from "../Components/TodoCounter";
import { TodoSearch } from "../Components/TodoSearch";
import { TodoList } from "../Components/TodoList";
import { TodoItem } from "../Components/TodoItem";
import { CreateTodoButton } from "../Components/CreateTodoButton";
import { TodosLoading } from "../Components/TodosLoading";
import { TodosError } from "../Components/TodosError";
import { TodosEmpty } from "../Components/TodosEmpty";
import { Modal } from "../Components/Modal";
import { TodoForm } from "../Components/TodoForm";

function App() {
  const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal, completedTodos, totalTodos, searchValue, setSearchValue, addTodo } =
    useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>
      <TodoList>
        {loading && <TodosLoading />}
        {loading && <TodosLoading />}
        {loading && <TodosLoading />}
        {error && <TodosError />}
        {!loading && searchedTodos.length === 0 && <TodosEmpty />}
        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton setOpenModal={setOpenModal} />
      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}
    </>
  );
}

export default App;
