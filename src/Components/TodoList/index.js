import './TodoList.css'

function TodoList({ loading, error, searchedTodos, totalTodos, searchValue, onLoading, onEmptyTodos, onEmptySearchResults, onError, render }) {
  return (
    <section className='TodoList-container'>
      {error && onError()}
      {loading && onLoading()}
      {loading && onLoading()}
      {loading && onLoading()}
      {(!loading && !totalTodos) && onEmptyTodos()}
      {(!!totalTodos && !searchedTodos.length) && onEmptySearchResults(searchValue)}
      {<ul className="TodoList">
        {searchedTodos.map(todo => render(todo))}
      </ul>}
    </section>
  )
}

export { TodoList };