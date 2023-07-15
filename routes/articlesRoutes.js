const ArticleController = require("./../controllers/articleController")
const express = require("express")

const router = express.Router()

router.post("/addArticle",ArticleController.addArticle)

router.post("/editArticle",ArticleController.editeArticle)

router.post("/deleteArticle",ArticleController.deleteArticle)
router.post("/allArticles",ArticleController.getAllArticles)

module.exports = router