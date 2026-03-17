import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true,"Title of Task is required"],
    trim: true,
  },
  description: {
    type: String,
    required: [true,"Description of task is required"],
    trim: true,
  },
  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending",
  },
  priority: {
    type: String,
    enum: ["low", "medium", "high"],
    default: "medium",
  },
  createdAt: {
    type:Date,
    default: Date.now,
  }, 
},
{
    timeseries:true
});

const Tasks=mongoose.model("Task",taskSchema)
export default Tasks;