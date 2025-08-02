// Dynamically choose base API URL depending on environment
const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:3000";

export async function getTodos() {
  const res = await fetch(`${API_BASE}/todos`);
  if (!res.ok) throw new Error("Failed to fetch todos");
  return await res.json();
}

export async function addTodo(title) {
  const res = await fetch(`${API_BASE}/todos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  });
  if (!res.ok) throw new Error("Failed to add todo");
  return await res.json();
}

export async function updateTodo(id, completed) {
  const res = await fetch(`${API_BASE}/todos/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  });
  if (!res.ok) throw new Error("Failed to update todo");
  return await res.json();
}

export async function deleteTodo(id) {
  const res = await fetch(`${API_BASE}/todos/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete todo");
  return true;
}

// Optional named export grouping
export default {
  getTodos,
  addTodo,
  updateTodo,
  deleteTodo,
};
