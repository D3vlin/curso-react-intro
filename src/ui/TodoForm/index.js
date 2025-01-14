import React from "react";
import "./TodoForm.css"
import { useNavigate } from "react-router-dom";

function TodoForm({label, defaultText, submitText, submitEvent}) {
    const navigate = useNavigate()
    const [newTodoValue, setNewTodoValue] = React.useState(defaultText || '')

    const onSubmit = (event) => {
        event.preventDefault();
        submitEvent(newTodoValue);
        navigate('/')
    };

    const onCancel = () => {
        navigate('/')
    };

    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <label>{label}</label>
            <textarea placeholder="New TODO" value={newTodoValue} onChange={onChange} />
            <div className="TodoForm-buttonContainer">
                <button type="button" className="TodoForm-button TodoForm-button--cancel" onClick={onCancel}>Cancelar</button>
                <button type="submit" className="TodoForm-button TodoForm-button--add">{submitText}</button>
            </div>
        </form>
    );
}

export { TodoForm };
