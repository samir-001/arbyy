const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Comments = sequelize.define('Comments', {
  Cid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    
  },
  content: Sequelize.STRING,

});

module.exports = Comments;
