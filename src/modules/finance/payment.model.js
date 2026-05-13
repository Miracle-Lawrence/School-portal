const { DataTypes } = require("sequelize");
const { sequelize } = require("../../config/db");

const Payment = sequelize.define("Payment", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },

  invoiceId: {
    type: DataTypes.UUID,
    allowNull: false,
  },

  studentId: {
    type: DataTypes.UUID,
    allowNull: false,
  },

  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },

  method: {
    type: DataTypes.STRING,
    defaultValue: "manual",
  },

  reference: {
    type: DataTypes.STRING,
  },
});

module.exports = Payment;
