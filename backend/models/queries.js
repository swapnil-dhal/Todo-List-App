const db = require("../utils/db");

async function getAlltask() {
  try {
    const [res] = await db.query("select * from list");
    const tasks = res.map((task) => ({
      ...task,
      completed: task.completed[0] === 1,
    }));
    return tasks;
  } catch (err) {
    console.error("Error in fetching all the tasks", err);
    throw err;
  }
}

async function addTask(title) {
  try {
    const [res] = await db.query("INSERT INTO list (title) VALUES (?)", [
      title,
    ]);
    return { id: res.insertId, title, completed: false };
  } catch (err) {
    console.error("Error in inserting data", err);
    throw err;
  }
}

async function updateTask(id, completed) {
  try {
    const [res] = await db.query("UPDATE list SET completed = ? WHERE id = ?", [
      completed,
      id,
    ]);
    return res.affectedRows > 0;
  } catch (err) {
    console.error("Error in updating the state", err);
    throw err;
  }
}

async function deleteTask(id) {
  try {
    const [res] = await db.query("DELETE FROM list WHERE id = ?", [id]);
    return res.affectedRows > 0;
  } catch (err) {
    console.error("Error in deleting the task", err);
    throw err;
  }
}

module.exports = {
  getAlltask,
  addTask,
  updateTask,
  deleteTask,
};
