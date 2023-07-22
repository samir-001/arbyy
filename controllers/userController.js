const Users = require("../models/users");
const loginTokens = require("../models/loginTokens");


exports.addUser = (req,res,next)=>{
    const { name, password } = req.body;

    const user = new Users({
      name,
      password,
      role:0
    });

    user.save().then(() => {
      res.status(201).json(user);
    }).catch((err) => {
      res.status(400).json(err);
    });
  }
  exports.deleteUser = async(req,res,next)=>{
    
    const user = await Users.findOne({ where: { id:req.body.id } });
    if (!user) {
      return res.status(400).json({
        message: "user doesn't exists",
      });
    } 
    await user.destroy();
    
    res.status(201).json({
      message: "user deleted successfully",
    });

  }
  exports.editeUser = async(req,res,next)=>{
    

    const user = await Users.findOne({ where: { id:req.body.id } });
    if (!user) {
      return res.status(400).json({
        message: "user doesn't exists",
      });
    } 
    
    user.name = req.body.name
    user.password = req.body.password
   await user.save();
    
    res.status(200).json({
      message: "user updated successfully",
    });

  }

    