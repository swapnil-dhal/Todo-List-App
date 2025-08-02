// backend/routes/apiroutes.js
const express = require("express");
const router = express.Router();
const todoController = require("../controllers/apiHandler");

router.get("/", todoController.getTodos);
router.post("/", todoController.addTodo);
router.put("/:id", todoController.changeTodo);
router.delete("/:id", todoController.removeTodo);

module.exports = router;
