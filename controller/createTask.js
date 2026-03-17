import Tasks from "../model/taskModel.js";

const createTask=async (req,res)=>{
 try{
    const{title,description,status,priority}=req.body;
    if(!title){
        return res.status(400).json({message:"Title is Required"})
    }
    const task = await Tasks.create({
      title,
      description,
      priority,
      status: "pending",
    });

    res.status(201).json({
        message:"Task created successfully",task
    })
} 
catch(err){
res.status(500).json({message:" Error creating Task"})
}}
export default createTask;