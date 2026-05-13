const service = require("./payment.service");

exports.createPayment = async (req, res) => {
  try {
    const payment = await service.createPayment(req.body);

    res.status(201).json({
      message: "Payment created successfully",
      payment,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
