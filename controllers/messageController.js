const Messages = require("../models/messages");


exports.addMessage = (req,res,next)=>{
    const { name, content } = req.body;

    const message = new Messages({
      name,
      content,
    });

    message.save().then(() => {
      res.status(201).json(message);
    }).catch((err) => {
      res.status(400).json(err);
    });
  }
  exports.deleteMessage = async(req,res,next)=>{
    
    const message = await Messages.findOne({ where: { Mid:req.body.id } });
    if (!message) {
      return res.status(400).json({
        message: "message doesn't exists",
      });
    } 
    await message.destroy();
    
    res.status(201).json({
      message: "message deleted successfully",
    });

  }
  exports.editMessage= async(req,res,next)=>{
    

    const message = await Messages.findOne({ where: { Mid:req.body.id } });
    if (!message) {
      return res.status(400).json({
        message: "user doesn't exists",
      });
    } 
    
    message.content = req.body.content
    message.name = req.body.name
   await message.save();
    
    res.status(200).json({
      message: "message updated successfully",
    });

  }

    