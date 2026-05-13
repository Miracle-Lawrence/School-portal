const Invoice = require("../finance/invoice.model");
const Student = require("../students/student.model");

/**
 * Get all invoices for a parent
 */
exports.getParentInvoices = async (parentId) => {
  const students = await Student.findAll({
    where: { parentId },
  });

  const studentIds = students.map((s) => s.id);

  const invoices = await Invoice.findAll({
    where: {
      studentId: studentIds,
    },
    order: [["createdAt", "DESC"]],
  });

  return invoices;
};
