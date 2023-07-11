const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const ArticleRequest = sequelize.define('ArticleRequest',{
  Aid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  content: {
    type: Sequelize.STRING,
    length: 5000,
    allowNull: false,
  },


})

module.exports = ArticleRequest;

