import React from "react"
import { withStorageListener } from "./withStorageListener"
import './ChangeAlert.css'

function ChangeAlert({ show, toggleShow }) {
    if (show) {
        return (
            <div className="ChangeAlert-bg">
                <div className="ChangeAlert-container">
                    <p>Hay Cambios!</p>
                    <button onClick={() => toggleShow()} className="TodoForm-button TodoForm-button--add">Refrescar</button>
                </div>
            </div>
        )
    } else {
        return null
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert)

export { ChangeAlertWithStorageListener }