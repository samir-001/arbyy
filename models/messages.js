const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Messages = sequelize.define('Messages', {
  Mid: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,

  },
  content: {
    type:Sequelize.STRING},

});

module.exports = Messages;
