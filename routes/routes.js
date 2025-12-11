const express=require("express");
const router=express.Router();

const { create, getAll, getOne, updateUser, deleteUser } =require("../controllers/userController");

router.get("/get-all",getAll);
router.get("/get/:id",getOne)
router.post("/create",create)
router.put("/update/:id",updateUser)
router.delete("/delete/:id",deleteUser)

module.exports=router;