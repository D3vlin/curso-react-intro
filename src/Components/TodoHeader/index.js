import React from "react"

const TodoHeader = ({ loading, children }) => {
    return (
        <header>
            {
                React.Children
                .toArray(children)
                .map(child => React.cloneElement(child, { loading: loading }))
            }
        </header>
    )
}

export { TodoHeader }