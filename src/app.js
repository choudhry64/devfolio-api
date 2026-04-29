const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const projectRoutes =require("./routes/projectRoutes")

app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/api/projects", projectRoutes);

module.exports = app;
