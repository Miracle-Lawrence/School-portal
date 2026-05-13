const financeService = require("./finance.service");

exports.createInvoice = async (req, res) => {
  try {
    const invoice = await financeService.createInvoice(req.body);

    res.status(201).json({
      message: "Invoice created",
      invoice,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.makePayment = async (req, res) => {
  try {
    const result = await financeService.makePayment(req.body);

    res.status(201).json({
      message: "Payment successful",
      result,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getInvoices = async (req, res) => {
  try {
    const invoices = await financeService.getInvoices();

    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
