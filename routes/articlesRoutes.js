const authmiddleware = require("../middlewares/authmiddleware")
const ArticleController = require("./../controllers/articleController")
const { linkSchema } = require("../schema/aricleSchema")
const validation = require("../middlewares/userValidationMiddleware")
const express = require("express")

const router = express.Router()

router.post("/addArticle",validation(linkSchema),authmiddleware,ArticleController.addArticle)

router.post("/editArticle",ArticleController.editeArticle)

router.post("/deleteArticle",ArticleController.deleteArticle)
router.post("/allArticles",ArticleController.getAllArticles)

module.exports = router