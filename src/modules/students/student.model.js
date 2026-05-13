const { DataTypes } = require("sequelize");

const { sequelize } = require("../../config/db");

const Student = sequelize.define("Student", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  gender: {
    type: DataTypes.ENUM("male", "female"),
    allowNull: false,
  },

  dateOfBirth: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },

  admissionNumber: {
    type: DataTypes.STRING,
    unique: true,
  },

  className: {
    type: DataTypes.STRING,
  },

  parentPhone: {
    type: DataTypes.STRING,
  },

  address: {
    type: DataTypes.TEXT,
    },
  
  parentId: {
    type: DataTypes.UUID,
    allowNull: true,
  },
});

module.exports = Student;
