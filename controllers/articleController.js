const Articles = require("../models/articles");


exports.addArticle = (req,res,next)=>{
    const { title, content } = req.body;

    const article = new Articles({
      title,
      content,
    });

    article.save().then(() => {
      res.status(201).json(article);
    }).catch((err) => {
      res.status(400).json(err);
    });
  }
  exports.deleteArticle = async(req,res,next)=>{
    
    const article = await Articles.findOne({ where: { Aid:req.body.id } });
    if (!article) {
      return res.status(400).json({
        message: "article doesn't exists",
      });
    } 
    await article.destroy();
    
    res.status(201).json({
      message: "article deleted successfully",
    });

  }
  exports.editeArticle = async(req,res,next)=>{
    

    const article = await Articles.findOne({ where: { Aid:req.body.id } });



    if (!article) {
      return res.status(400).json({
        message: "article doesn't exists",
      });
    } 
    
    article.title = req.body.title
    article.content = req.body.content
   await article.save();
    
    res.status(200).json({
      message: "article updated successfully",
    });

  }
  exports.getAllArticles = async(req,res,next)=>{
    

    const article = await Articles.findAll({limit:100});
    console.log(article)
    if (!article) {
      return res.status(400).json({
        message: " doesn't exists",
      });
    } 
    res.status(200).json({
      message: "",
      data: article,
      err:[]
    });

  }


    