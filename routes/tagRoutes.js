const TagController = require("../controllers/tagsController")
const express = require("express")

const router = express.Router()

router.post("/addTag",TagController.addtag)

router.post("/editTag",TagController.editTag)

router.post("/deleteTag",TagController.deletTag)

module.exports = router