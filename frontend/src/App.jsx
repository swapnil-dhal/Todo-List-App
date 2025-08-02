import React, { useState } from "react";
import Header from "./components/Navbar";
import Form from "./components/Form";
import List from "./components/List";
import Footer from "./components/Footer";
import {
  addTodo as addTodoApi,
  updateTodo as updateTodoApi,
  deleteTodo as deleteTodoApi,
} from "./services/api";

function App() {
  const [todos, setTodos] = useState([]);

  // Add todo: call API, then update state with new todo
  const addTodo = async (title) => {
    const newTodo = await addTodoApi(title);
    setTodos((prevTodos) => [newTodo, ...prevTodos]);
  };

  // Toggle todo completion: call API and update state optimistically
  const toggleTodo = async (id, completed) => {
    await updateTodoApi(id, completed);
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  // Delete todo: call API and remove from state
  const deleteTodo = async (id) => {
    await deleteTodoApi(id);
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="d-flex flex-column min-vh-100 ">
      <Header />
      <main className="container mt-4 flex-grow-1 " style={{ maxWidth: 600 }}>
        {/* Pass the wrapped addTodo that updates state, not the raw API */}
        <Form addTodo={addTodo} />

        {/* Pass todos and handlers to List for display and interaction */}
        <List todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </main>
      <Footer> </Footer>
    </div>
  );
}

export default App;
