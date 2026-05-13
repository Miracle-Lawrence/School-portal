const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const Invoice = sequelize.define("Invoice", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  studentId: {
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

  amountDue: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  amountPaid: {
    type: DataTypes.FLOAT,
    defaultValue: 0,
  },

  status: {
    type: DataTypes.ENUM("paid", "partial", "unpaid"),
    defaultValue: "unpaid",
  },
});

module.exports = Invoice;
