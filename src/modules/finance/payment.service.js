const Payment = require("./payment.model");

exports.createPayment = async (data) => {
  // 1. create payment
  const payment = await Payment.create(data);

  // 2. generate reference
  payment.reference = "PAY_" + Date.now();

  // 3. save updated payment
  await payment.save();

  return payment;
};
