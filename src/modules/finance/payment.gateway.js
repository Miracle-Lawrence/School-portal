const axios = require("axios");

const PAYSTACK_SECRET_KEY = process.env.PAYSTACK_SECRET_KEY;

/**
 * Initialize Paystack Payment
 */
exports.initializePayment = async ({ email, amount, metadata }) => {
  const response = await axios.post(
    "https://api.paystack.co/transaction/initialize",
    {
      email,
      amount: amount * 100, // Paystack uses kobo
      metadata,
    },
    {
      headers: {
        Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
    },
  );

  return response.data.data;
};
