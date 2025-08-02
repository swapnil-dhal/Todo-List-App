const express = require("express");
const cors = require("cors");
const todoRoutes = require("./routes/apiroutes");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/todos", todoRoutes);

app.get("/", (req, res) => res.send("Todo Backend is running"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
