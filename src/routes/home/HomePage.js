import React from "react";
import { useTodos } from "../useTodos";
import { TodoHeader } from "../../ui/TodoHeader";
import { TodoCounter } from "../../ui/TodoCounter";
import { TodoSearch } from "../../ui/TodoSearch";
import { TodoList } from "../../ui/TodoList";
import { TodoItem } from "../../ui/TodoItem";
import { CreateTodoButton } from "../../ui/CreateTodoButton";
import { TodosLoading } from "../../ui/TodosLoading";
import { TodosError } from "../../ui/TodosError";
import { TodosEmpty } from "../../ui/TodosEmpty";
import { Modal } from "../../ui/Modal";
import { TodoForm } from "../../ui/TodoForm";
import { ChangeAlertWithStorageListener } from "../../ui/ChangeAlert";

function HomePage() {
    const { loading, error, searchedTodos, completeTodo, deleteTodo, openModal, setOpenModal, completedTodos, totalTodos, searchValue, setSearchValue, addTodo, sincronizeItem } =
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
            <ChangeAlertWithStorageListener sincronize={sincronizeItem} />
            <CreateTodoButton setOpenModal={setOpenModal} />
            {openModal && (
                <Modal>
                    <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
                </Modal>
            )}
        </>
    );
}

export { HomePage };
