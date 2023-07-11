const Comments = require("../models/comments");


exports.addComment = (req,res,next)=>{
    const { name, content } = req.body;

    const comment = new Comments({
      name,
      content,
    });

    comment.save().then(() => {
      res.status(201).json(comment);
    }).catch((err) => {
      res.status(400).json(err);
    });
  }
  exports.deleteComment = async(req,res,next)=>{
    
    const comment = await Comments.findOne({ where: { Cid:req.body.id } });
    if (!comment) {
      return res.status(400).json({
        message: "message doesn't exists",
      });
    } 
    await comment.destroy();
    
    res.status(201).json({
      message: "message deleted successfully",
    });

  }
  exports.editComment= async(req,res,next)=>{
    

    const comment = await Comments.findOne({ where: { Cid:req.body.id } });
    if (!comment) {
      return res.status(400).json({
        message: "comment doesn't exists",
      });
    } 
    
    comment.content = req.body.content
    comment.name = req.body.name
   await comment.save();
    
    res.status(200).json({
      message: "comment updated successfully",
    });

  }

    