import Tasks from "../model/taskModel.js";

const getTaskById=async(req,res)=>{
    try{
        const {id}=req.params;
        const IdTask=await Tasks.findById(id);
         if (!IdTask) {
           return res.status(404).json({ message: "Task not found" });
         }
        return res.status(200).json({message:`Task with ID ${id} fetched successfully`,IdTask})
    }
    catch(err){
        res.status(500).json({message:err.message})
    }
}
export default getTaskById