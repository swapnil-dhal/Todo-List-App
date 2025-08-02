const todomodel = require("../models/queries");

async function getTodos(req, res) {
  try {
    const todos = await todomodel.getAlltask();
    res.json(todos);
  } catch (err) {
    console.error("Error fetching todos", err);
    res.status(500).json({
      error: "Failed to retrieve todos",
    });
  }
}

async function addTodo(req, res) {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Task name is required" });
  }

  try {
    const newTodo = await todomodel.addTask(title);
    res.status(201).json(newTodo);
  } catch (err) {
    console.error("Error creating todo", err);
    res.status(500).json({ error: "Failed to create todo" });
  }
}

async function changeTodo(req, res) {
  const id = req.params.id;
  const { completed } = req.body;

  if (typeof completed != "boolean") {
    return res.status(400).json({ error: "Complete boolean is required" });
  }
  try {
    const success = await todomodel.updateTask(id, completed);
    if (success) {
      res.json({
        message: "todo updated",
      });
    } else {
      res.status(404).json({ error: "Failed to update task" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update task" });
  }
}

async function removeTodo(req, res) {
  const id = req.params.id;
  console.log(`Attempting to delete Todo with id: ${id}`);
  try {
    const success = await todomodel.deleteTask(id);
    console.log(`Delete success status: ${success}`);
    if (success) res.status(204).end();
    else res.status(404).json({ error: "Todo not found" });
  } catch (err) {
    console.error("Error in removeTodo:", err);
    res.status(500).json({ error: "Failed to delete todo" });
  }
}

module.exports = { getTodos, addTodo, changeTodo, removeTodo };
