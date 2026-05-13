const Invoice = require("./invoice.model");
const Payment = require("./payment.model");
const PaymentGateway = require("./payment.gateway");


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

exports.createPaymentLink = async (invoiceId) => {
  const invoice = await Invoice.findByPk(invoiceId);

  if (!invoice) {
    throw new Error("Invoice not found");
  }

  const payment = await PaymentGateway.initializePayment({
    email: "student@example.com", // later we link to student email
    amount: invoice.amountDue - invoice.amountPaid,
    metadata: {
      invoiceId: invoice.id,
      studentId: invoice.studentId,
    },
  });

  return payment; // contains authorization_url
};
