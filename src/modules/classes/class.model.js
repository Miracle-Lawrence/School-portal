const { DataTypes } = require("sequelize");

const { sequelize } = require("../../config/db");

const Class = sequelize.define("Class", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  className: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  arm: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  session: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  term: {
    type: DataTypes.ENUM("First Term", "Second Term", "Third Term"),
    allowNull: false,
  },
});

module.exports = Class;
