const { DataTypes } = require("sequelize");

const { sequelize } = require("../../config/db");

const Result = sequelize.define("Result", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  studentId: {
    type: DataTypes.UUID,
    allowNull: false,
  },

  subjectId: {
    type: DataTypes.UUID,
    allowNull: false,
  },

  className: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  term: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  session: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  caScore: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },

  examScore: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },

  totalScore: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },

  grade: {
    type: DataTypes.STRING,
  },
});

module.exports = Result;
