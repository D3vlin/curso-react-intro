import React from 'react'
import { TodoForm } from "../../ui/TodoForm";

function NewPage() {
    return (
        <TodoForm
            label={'Escribe tu nuevo TODO'}
            submitText={'Añadir'}
            submitEvent={() => console.log('Añadir')}
        />
    )
}

export { NewPage }