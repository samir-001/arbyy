const MessageController = require("../controllers/messageController")
const express = require("express")

const router = express.Router()

router.post("/addMessage",MessageController.addMessage)

router.post("/editMessage",MessageController.editMessage)

router.post("/deleteMessage",MessageController.deleteMessage)

module.exports = router