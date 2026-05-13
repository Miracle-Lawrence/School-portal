const receiptService = require("./receipt.service");

exports.getReceipt = async (req, res) => {
  try {
    const { paymentId } = req.params;

    await receiptService.generateReceipt(paymentId, res);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
