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
      <TodoHeader loading={loading}>
        <TodoCounter completedTodos={completedTodos} totalTodos={totalTodos} />
        <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      </TodoHeader>

      <TodoList
        loading={loading} error={error} searchedTodos={searchedTodos} totalTodos={totalTodos} searchValue={searchValue}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <TodosEmpty />}
        onEmptySearchResults={(searchText) => <p>No Hay resultados para {searchText}</p>}
        onError={() => <TodosError />}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />
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
