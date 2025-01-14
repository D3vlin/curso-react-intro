import React from 'react'
import { TodoForm } from "../../ui/TodoForm";

function EditPage() {
    return (
        <TodoForm
            label={'Edita tu TODO'}
            submitText={'Editar'}
            submitEvent={() => console.log('Editar')}
        />
    )
}

export { EditPage }