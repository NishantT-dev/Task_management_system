import Tasks from "../model/taskModel.js";

const updateTask=async(req,res)=>{
  try{  const updates=req.body;
    const {id}=req.params;
const updatedTask = await Tasks.findByIdAndUpdate(id, updates, {
 returnDocument:"after"
});    
    return res.status(200).json({message:` Task with ID ${id} updated Successfully`,updatedTask})
}
catch(err){
    res.status(500).json({message:err.message})
}

}
export default updateTask