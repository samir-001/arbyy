const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const articleTypes = sequelize.define('articleTypes', {
  ATid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  
});

module.exports = articleTypes;
