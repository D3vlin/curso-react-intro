import React from 'react'
import { useTodos } from "../useTodos";
import { TodoForm } from "../../ui/TodoForm";
import { useLocation, useParams } from 'react-router-dom';

function EditPage() {
    const location = useLocation()
    const params = useParams()
    const id = Number(params.id)
    const { loading, getTodo, editTodo } = useTodos()

    let todoText;

    if(location.state?.todo) {
        todoText = location.state.todo.text

    } else if (loading) {
        return <p>Cargando Todo...</p>

    } else {
        const todo = getTodo(id)
        todoText = todo.text
    }

    return (
        <TodoForm
            label={'Edita tu TODO'}
            defaultText={todoText}
            submitText={'Editar'}
            submitEvent={(newText) => editTodo(id, newText)}
        />
    )
}

export { EditPage }