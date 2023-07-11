const Tags = require("../models/tags");


exports.addtag = (req,res,next)=>{
    const { name } = req.body;

    const tag= new Tags({
      name,
     
    });

    tag.save().then(() => {
      res.status(201).json(tag);
    }).catch((err) => {
      res.status(400).json(err);
    });
  }
  exports.deletTag = async(req,res,next)=>{
    
    const tag= await Tags.findOne({ where: { Tid:req.body.id } });
    if (!tag) {
      return res.status(400).json({
        message: "tag doesn't exists",
      });
    } 
    await tag.destroy();
    
    res.status(201).json({
      message: "tag deleted successfully",
    });

  }
  exports.editTag = async(req,res,next)=>{
    

    const tag = await Tags.findOne({ where: { Tid:req.body.id } });
    if (!tag) {
      return res.status(400).json({
        message: "tag doesn't exists",
      });
    } 
    
    tag.name = req.body.name
   await tag.save();
    
    res.status(200).json({
      message: "tag updated successfully",
    });

  }

    