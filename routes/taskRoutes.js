import express from "express";
import createTask from "../controller/createTask.js";
import getPendingTasks from "../controller/getPendingTasks.js";
import getAllTasks from "../controller/getAllTasks.js";
import getTaskById from "../controller/getTaskById.js";
import updateTask from "../controller/updateTask.js";
import deleteTask from "../controller/deleteTask.js";

const router = express.Router();

// Task related routes
router.post("/task",createTask);  // POST task
router.get("/tasks",getAllTasks)  // GET all tasks
router.get("/task/:id",getTaskById);  // GET task by ID
router.get("/tasks",getPendingTasks);  // GET tasks by filter (status/priority)
router.put("/task/:id",updateTask);  // PUT update Task
router.delete("/task/:id", deleteTask);  // DELETE task by ID

export default router;