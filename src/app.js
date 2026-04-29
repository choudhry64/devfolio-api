const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const projectRoutes =require("./routes/projectRoutes")
const skillRouter = require("./routes/skillRoutes")

app.use(express.json());

app.use("/api/auth", userRouter);
app.use("/api/projects", projectRoutes);
app.use("/api/skills", skillRouter)

module.exports = app;
