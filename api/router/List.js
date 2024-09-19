const router=require("express").Router();
const User=require("../models/User");
const List=require("../models/List");
//create
router.post("/addTask",async(req,res)=>{
    try{
        const {title,body,id}=req.body;
        const existuser=await User.findById({id});
        if(existuser){
            const list=new List({title,body,user : existuser});
            await list.save().then(()=>res.status(200).json((list)));
            existuser.list.push(list);
            existuser.save();
        }
    }catch(error){
        console.log(error);
    }

    });

//update
router.put("/updateTask:id",async(req,res)=>{
    try{
        const {title,body}=req.body;
            const list=await List.findByIdAndUpdate(req.params.id,{title,body});
             list.save().then(()=>res.status(200).json({message:"task update"}));
    }catch(error){
        console.log(error);
    }

    });
//DELETE
router.delete("/deleteTask/:id",async(req,res)=>{
    try{
        const {id}=req.body;
        const existuser=await User.findOneAndUpdate({id,},{$pull:{list:req.params.id}});
        if(existuser){
            await List.findByIdAndDelete(req.params.id).then(()=>
        res.status(200).json({message:"task update"})
    );}

}
    catch(error){
        console.log(error);
    }
});
//gettask
router.get("/getTasks/:id",async(req,res)=>{
    const list=await List.find({user:req.params.id}).sort({createdAt:-1});
    if(list.length!==0)
    {
        res.status(200).json({list:list});
    }else{
        res.status(200).json({message:"NO tasks"});
    }
});

module.exports=router;