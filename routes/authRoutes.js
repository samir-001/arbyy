const authController = require("../controllers/authController")
const { linkSchema } = require("../schema/userSchema")
const validation = require("../middlewares/userValidationMiddleware")

const express = require("express")

const router = express.Router()

router.post("/login",validation(linkSchema) ,authController.login)



module.exports = router