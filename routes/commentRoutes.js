const CommentController = require("../controllers/commentController")
const express = require("express")

const router = express.Router()

router.post("/addComment",CommentController.addComment)

router.post("/editComment",CommentController.editComment)

router.post("/deleteComment",CommentController.deleteComment)

module.exports = router