const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Tags = sequelize.define('tags', {
  Tid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,

  },

});

module.exports = Tags;
