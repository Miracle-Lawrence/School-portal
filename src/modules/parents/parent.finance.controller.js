const service = require("./parent.finance.service");

exports.getDashboard = async (req, res) => {
  try {
    const parentId = req.user.id;

    const invoices = await service.getParentInvoices(parentId);

    // calculate summary
    const totalDue = invoices.reduce((sum, inv) => sum + inv.amountDue, 0);

    const totalPaid = invoices.reduce((sum, inv) => sum + inv.amountPaid, 0);

    const balance = totalDue - totalPaid;

    res.json({
      summary: {
        totalDue,
        totalPaid,
        balance,
      },
      invoices,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
