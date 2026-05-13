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

exports.initializePayment = async (req, res) => {
  try {
    const { invoiceId } = req.body;

    const paymentLink = await financeService.createPaymentLink(invoiceId);

    res.status(200).json({
      message: "Payment initialized",
      paymentLink,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.paystackWebhook = async (req, res) => {
  try {
    const event = req.body;

    if (event.event === "charge.success") {
      const metadata = event.data.metadata;

      const invoice = await Invoice.findByPk(metadata.invoiceId);

      if (invoice) {
        invoice.amountPaid += event.data.amount / 100;

        if (invoice.amountPaid >= invoice.amountDue) {
          invoice.status = "paid";
        } else {
          invoice.status = "partial";
        }

        await invoice.save();
      }
    }

    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
};