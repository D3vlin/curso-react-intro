import React from "react";
import { useLocalStorage } from "./useLocalStorage";

function useTodos() {
  const {
    sincronizeItem,
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage("TODOS_V2", []);

  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const addTodo = (text) => {
    const newTodos = [...todos];
    const id = newTodoId(todos)
    newTodos.push({
      id, text, completed: false
    });
    saveTodos(newTodos);
  }

  const getTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    return todos[todoIndex]
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const editTodo = (id, newText) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.id === id)
    newTodos[todoIndex].text = newText
    saveTodos(newTodos)
  }

  const deleteTodo = (id) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex((todo) => todo.id === id);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  };

  const newTodoId = (todoList) => {
    if (!todoList.length) return 1

    const idList = todoList.map(todo => todo.id)
    return (Math.max(...idList) + 1)
  }

  return (
    {
      loading,
      error,
      completedTodos,
      totalTodos,
      searchValue,
      setSearchValue,
      searchedTodos,
      completeTodo,
      getTodo,
      editTodo,
      deleteTodo,
      addTodo,
      sincronizeItem
    }
  );
}

export { useTodos };
