const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Articles = sequelize.define('Articles', {
  Aid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: Sequelize.STRING,
  visits: Sequelize.INTEGER,
  content: {
    type: Sequelize.STRING,
    length: 5000,
    allowNull: false,
  },


});

module.exports = Articles;
