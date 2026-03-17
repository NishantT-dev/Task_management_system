import Tasks from "../model/taskModel.js";
const deleteTask=async(req,res)=>{
  try{  const {id}=req.params;
    const deletedTask=await Tasks.findByIdAndDelete(id);

    if(!deletedTask){
        return res.status(404).json({message:`Task with ID ${id} not found`});
    }
    return res.status(200).json({message:"Task deleted successfully"})

} catch(err){
    res.status(500).json({message:err.message})
}  
}
export default deleteTask