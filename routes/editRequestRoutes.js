const ArticleRequestController = require("../controllers/articleRequestcontroller")
const express = require("express")

const router = express.Router()

router.post("/addEditRequest",ArticleRequestController.addEditRequest)

router.post("/editEditRequest",ArticleRequestController.editEditRequest)

router.post("/deleteEditRequest",ArticleRequestController.deleteEditRequest)

module.exports = router