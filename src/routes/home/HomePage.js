import React from "react";
import { useNavigate } from "react-router-dom";
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
import { ChangeAlertWithStorageListener } from "../../ui/ChangeAlert";

function HomePage() {
    const navigate = useNavigate()
    const { loading, error, searchedTodos, completeTodo, deleteTodo, completedTodos, totalTodos, searchValue, setSearchValue, sincronizeItem } =
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
                        key={todo.id}
                        text={todo.text}
                        completed={todo.completed}
                        onComplete={() => completeTodo(todo.id)}
                        onEdit={() => navigate('/edit/' + todo.id, { state: { todo } })}
                        onDelete={() => deleteTodo(todo.id)}
                    />
                )}
            />
            <ChangeAlertWithStorageListener sincronize={sincronizeItem} />
            <CreateTodoButton onClick={() => navigate('/new')} />
        </>
    );
}

export { HomePage };
