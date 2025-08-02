import React from "react";

function List({ todos, onToggle, onDelete }) {
  if (!todos.length) {
    return (
      <div className="text-center text-muted mt-4">No todos yet. Add one!</div>
    );
  }

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`list-group-item d-flex justify-content-between align-items-center ${
            todo.completed ? "list-group-item-success" : ""
          }`}
        >
          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input me-2"
              id={`todo-${todo.id}`}
              checked={todo.completed}
              onChange={() => onToggle(todo.id, !todo.completed)}
            />
            <label
              htmlFor={`todo-${todo.id}`}
              className={`form-check-label ${
                todo.completed
                  ? "text-decoration-line-through text-secondary"
                  : ""
              }`}
            >
              {todo.title}
            </label>
          </div>
          <button
            className="btn btn-sm btn-outline-danger"
            onClick={() => onDelete(todo.id)}
            aria-label="Delete todo"
          >
            &times;
          </button>
        </li>
      ))}
    </ul>
  );
}

export default List;
