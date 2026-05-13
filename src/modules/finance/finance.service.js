const Invoice = require("./invoice.model");
const Payment = require("./payment.model");

exports.createInvoice = async (data) => {
  return await Invoice.create(data);
};

exports.makePayment = async (data) => {
  const invoice = await Invoice.findByPk(data.invoiceId);

  if (!invoice) {
    throw new Error("Invoice not found");
  }

  // Update invoice payment
  invoice.amountPaid += data.amount;

  if (invoice.amountPaid >= invoice.amountDue) {
    invoice.status = "paid";
  } else {
    invoice.status = "partial";
  }

  await invoice.save();

  const payment = await Payment.create(data);

  return { invoice, payment };
};

exports.getInvoices = async () => {
  return await Invoice.findAll({
    order: [["createdAt", "DESC"]],
  });
};
