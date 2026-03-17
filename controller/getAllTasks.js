import Task from "../model/taskModel.js";

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find(); // fetch all tasks
    res.status(200).json({
      message: "Tasks fetched successfully",
      count: tasks.length,
      tasks,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getAllTasks;
 