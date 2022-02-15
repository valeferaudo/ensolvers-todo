const { Sequelize, DataTypes } = require('sequelize');

const FolderModel = require('../models/folder');
const TaskModel = require('../models/task');

const sequelize = new Sequelize('ensolvers_todo', 'root', 'root', {
  host: 'localhost',
  dialect:  'mysql',
  define: {
    timestamps: false,
    underscored: true,
  }
});

const Folder = FolderModel(sequelize,DataTypes);
const Task = TaskModel(sequelize,DataTypes);
Task.associate(sequelize.models);
Folder.associate(sequelize.models);

sequelize.sync({force: false})
  .then(() => {
    console.log('DataBase Connected')
  })
  .catch((err) => {
    console.log(err);
  })

module.exports = {
  Task,
  Folder
}