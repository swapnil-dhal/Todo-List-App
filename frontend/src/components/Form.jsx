import React, { useState } from "react";

function Form({ addTodo }) {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return; // don't submit empty inputs

    try {
      await addTodo(title.trim()); // Call the parent's addTodo function (should return a promise)
      setTitle(""); // Clear input after successful add
    } catch (error) {
      console.error("Failed to add todo:", error);
      // Optionally, you can also display an error message to the user here
    }
  };

  return (
    <div className="container-fluid mt-4" style={{ maxWidth: "750px" }}>
      {/* Add Todo Form */}
      <form id="todo-form" className="input-group mb-3" onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter a new todo..."
          id="todo-input"
          required
          value={title} // Controlled input value
          onChange={(e) => setTitle(e.target.value)} // Update state on input
        />
        <button className="btn btn-primary" type="submit">
          Add
        </button>
      </form>

      {/* Todo List */}
      <ul className="list-group" id="todo-list">
        {/* Todo items will be injected here by JS or rendered by a separate component */}
      </ul>
    </div>
  );
}

export default Form;
