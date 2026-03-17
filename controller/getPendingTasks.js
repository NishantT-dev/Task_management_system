import Tasks from "../model/taskModel.js";

const getPendingTasks=async(req,res)=>{
     try {
       const { status, priority } = req.query; // optional filters

       const filter = {};
       if (status) filter.status = status;
       if (priority) filter.priority = priority;

       const tasks = await Tasks.find(filter);

       res.status(200).json({
         message: "Tasks fetched successfully",
         count: tasks.length,
         tasks,
       });
     } catch (error) {
       res.status(500).json({ message: error.message });
     }
}
export default getPendingTasks