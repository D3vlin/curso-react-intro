import React from "react";
import "./TodoSearch.css";

function TodoSearch({loading, searchValue, setSearchValue}) {
  return (
    <input
      className="TodoSearch"
      placeholder="New Todo"
      value={searchValue}
      onChange={(event) => {
        setSearchValue(event.target.value);
      }}
      disabled={loading}
    />
  );
}

export { TodoSearch };
