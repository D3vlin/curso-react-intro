import React from 'react'
import { useTodos } from "../useTodos";
import { TodoForm } from "../../ui/TodoForm";
import { useParams } from 'react-router-dom';

function EditPage() {
    const params = useParams()
    const id = Number(params.id)
    const { editTodo } = useTodos()

    return (
        <TodoForm
            label={'Edita tu TODO'}
            submitText={'Editar'}
            submitEvent={(newText) => editTodo(id, newText)}
        />
    )
}

export { EditPage }