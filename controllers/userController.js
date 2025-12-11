const UserModel = require("../models/userModel")

//create
const create=async (req,res)=>{
    try{
        const user=await UserModel.create(req.body);
         res.status(201).json({
            message:"user created successfully",
            user
        })
    }catch(error){
         res.status(400).json({
            error:error.message
        })
    }
}

//getall
const getAll = async(req,res)=>{
    try{
        const allUser=await UserModel.find();
         res.status(200).json({allUser})
    }catch(error){
         res.status(500).json({error:err.message})
    }
}

const getOne=async(req,res)=>{
    try{
        const getUser=await UserModel.findById(req.params.id)
        if(!getUser){
            res.status(404).json({message:"user not found"})
        }
        res.status(200).json({getUser})
    }catch(error){
        res.status(500).json({error:error.message})
    }
}
// Update
const updateUser=async(req,res)=>{
try{
    const Update =await UserModel.findByIdAndUpdate(
        req.params.id,
    req.body,
{new:true}
);

if(!Update){
        return res.status(404).json({ message: "User Not Found" });
    }

    res.status(200).json({ message: "User Updated", Update });
} catch (error) {
    res.status(400).json({ error: error.message });
}
}


const deleteUser=async(req,res)=>{
try{
    const deleteU=await UserModel.findByIdAndDelete(req.params.id);
    res.status(200).json({message:"user deleted successfully"},deleteU)
}
catch(error){
    res.status(500).json({error:error.message})
}

}

module.exports={
    deleteUser,
    updateUser,
    getAll,
    create,
    getOne

}