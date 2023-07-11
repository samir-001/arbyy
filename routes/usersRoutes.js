const express = require("express")
const userController =  require("../controllers/userController") 
const hashPass = require("../middlewares/hashPasswordMiddleware")
const Uservalidation = require("../middlewares/userValidationMiddleware")
const { linkSchema } = require("../schema/userSchema")



const router = express.Router()
  
router.post("/addUser",Uservalidation(linkSchema),hashPass,userController.addUser)

router.post("/editUser",Uservalidation(linkSchema),hashPass,userController.editeUser)

router.post("/deleteUser",userController.deleteUser)

module.exports = router