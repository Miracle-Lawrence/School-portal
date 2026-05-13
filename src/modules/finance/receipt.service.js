const PDFDocument = require("pdfkit");
const Payment = require("./payment.model");
const Invoice = require("./invoice.model");
const Student = require("../students/student.model");

exports.generateReceipt = async (paymentId, res) => {
  const payment = await Payment.findByPk(paymentId);
  if (!payment) throw new Error("Payment not found");

  const invoice = await Invoice.findByPk(payment.invoiceId);
  const student = await Student.findByPk(payment.studentId);

  const doc = new PDFDocument({ margin: 50 });

  // =========================
  // RESPONSE HEADERS
  // =========================
  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `inline; filename=receipt-${paymentId}.pdf`,
  );

  doc.pipe(res);

  // =========================
  // SCHOOL HEADER SECTION
  // =========================
  doc
    .fontSize(20)
    .fillColor("#1a237e")
    .text("DANIJOY INTERNATIONAL SCHOOL", { align: "center" });

  doc
    .fontSize(10)
    .fillColor("gray")
    .text("Excellence in Learning • Discipline • Integrity", {
      align: "center",
    });

  doc.moveDown();

  doc
    .strokeColor("#1a237e")
    .lineWidth(1)
    .moveTo(50, 100)
    .lineTo(550, 100)
    .stroke();

  doc.moveDown(2);

  // =========================
  // RECEIPT TITLE
  // =========================
  doc
    .fontSize(16)
    .fillColor("#000")
    .text("PAYMENT RECEIPT", { align: "center" });

  doc.moveDown();

  // =========================
  // RECEIPT INFO BOX
  // =========================
  doc.rect(50, doc.y, 500, 80).stroke("#ccc");

  doc.moveDown();

  doc
    .fontSize(10)
    .fillColor("#000")
    .text(`Receipt ID: ${payment.id}`, 60, doc.y);

  doc.text(`Transaction Ref: ${payment.reference || "N/A"}`);
  doc.text(`Payment Method: ${payment.method}`);
  doc.text(`Date: ${new Date(payment.createdAt).toDateString()}`);

  doc.moveDown(2);

  // =========================
  // STUDENT DETAILS
  // =========================
  doc.fontSize(12).fillColor("#1a237e").text("STUDENT INFORMATION");

  doc
    .fontSize(10)
    .fillColor("#000")
    .text(`Name: ${student?.name || "N/A"}`)
    .text(`Student ID: ${student?.id}`);

  doc.moveDown();

  // =========================
  // INVOICE DETAILS
  // =========================
  doc.fontSize(12).fillColor("#1a237e").text("INVOICE DETAILS");

  doc
    .fontSize(10)
    .fillColor("#000")
    .text(`Class: ${invoice?.className || "N/A"}`)
    .text(`Term: ${invoice?.term || "N/A"}`)
    .text(`Session: ${invoice?.session || "N/A"}`);

  doc.moveDown();

  // =========================
  // PAYMENT SUMMARY BOX
  // =========================
  doc.rect(50, doc.y, 500, 60).fillAndStroke("#f5f5f5", "#ccc");

  doc.fillColor("#000");

  doc.fontSize(12).text(`Amount Paid: ₦${payment.amount}`, 60, doc.y + 10);

  doc.fontSize(10).text(`Status: ${invoice?.status || "paid"}`);

  doc.moveDown(3);

  // =========================
  // FOOTER SIGNATURE
  // =========================
  doc
    .fontSize(10)
    .fillColor("gray")
    .text("__________________________", 100, doc.y + 20);

  doc.text("Bursar Signature", 120);

  doc.text("__________________________", 350, doc.y - 30);

  doc.text("Principal Signature", 370);

  doc.moveDown(3);

  // =========================
  // FOOTER NOTE
  // =========================
  doc
    .fontSize(8)
    .fillColor("gray")
    .text(
      "This is a computer-generated receipt and does not require a physical signature.",
      {
        align: "center",
      },
    );

  doc.end();
};
