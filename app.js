const cors = require('cors')
const express = require('express')
const userRoutes = require("./routes/usersRoutes")
const MesageRoutes = require("./routes/messageRoutes")
const articleRoutes = require("./routes/articlesRoutes")
const commentRoutes = require("./routes/commentRoutes")
const editRequestRoutes = require("./routes/editRequestRoutes")
const tagRoutes = require("./routes/tagRoutes")
const authRoutes = require("./routes/authRoutes")
const sequelize = require("./util/database")
const Articles =require("./models/articles")
const  bodyParser = require('body-parser')

const bcrypt = require("bcrypt")
const Users =require("./models/users")
const Comments =require("./models/comments")
const Messages =require("./models/messages")
const Tags =require("./models/tags")
const ArticleTypes =require("./models/articleTypes")
const editeArticleRequest =require("./models/editeArticleRequest")
const ArticleRequest = require('./models/editeArticleRequest')
const { tree } = require('gulp')
require('dotenv').config()
const port = process.env.PORT;
const app = express()

//cross origin handling

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
// define Routes
app.use(authRoutes)
app.use(userRoutes)
app.use(articleRoutes)
app.use(editRequestRoutes)
app.use(commentRoutes)
app.use(MesageRoutes)
app.use(tagRoutes)





app.get('*', (req, res) => {
  res.send('test!')
})

Articles.belongsTo(ArticleTypes)
ArticleTypes.hasMany(Articles)

Articles.hasMany(editeArticleRequest)
editeArticleRequest.belongsTo(Articles)

Articles.belongsTo(Users)
Users.hasMany(Articles)

Comments.belongsTo(Articles)
Articles.hasMany(Comments)

Articles.belongsToMany(Tags, {
  foreignKey: 'Aid',
  otherKey: 'Tid',
  through: 'ArticleTage',
});

Tags.belongsToMany(Articles, {
  foreignKey: 'Tid',
  otherKey: 'Aid',
  through: 'ArticleTage',
});

sequelize.sync({force:true}).then((data)=>{
    bcrypt.hash("123",12).then((hash)=>{
    const user =  Users.create({
      name:"samir",
      password:hash,
      role:1,
  })
  })


}).catch(()=>{})

app.listen(5000)
console.log(5000)