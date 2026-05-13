const { DataTypes } = require("sequelize");

const { sequelize } = require("../../config/db");

const Subject = sequelize.define("Subject", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  subjectName: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },

  subjectCode: {
    type: DataTypes.STRING,
    unique: true,
  },

  category: {
    type: DataTypes.ENUM("Science", "Commercial", "Arts", "General"),
    defaultValue: "General",
  },

  isCompulsory: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
});

module.exports = Subject;
