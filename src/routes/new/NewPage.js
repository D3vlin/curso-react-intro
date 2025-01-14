import React from 'react'
import { useTodos } from "../useTodos";
import { TodoForm } from "../../ui/TodoForm";

function NewPage() {
    const { addTodo } = useTodos()
    
    return (
        <TodoForm
            label={'Escribe tu nuevo TODO'}
            submitText={'Añadir'}
            submitEvent={(text) => addTodo(text)}
        />
    )
}

export { NewPage }