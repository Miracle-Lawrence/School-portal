const PDFDocument = require("pdfkit");

const Result = require("../results/result.model");

const Student = require("../students/student.model");

const { computePositions } = require("../results/position.service");

exports.generateStudentReport = async (
  studentId,
  className,
  term,
  session,
  res,
) => {
  // Fetch student
  const student = await Student.findByPk(studentId);

  if (!student) {
    throw new Error("Student not found");
  }

  // Fetch results
  const results = await Result.findAll({
    where: {
      studentId,
      className,
      term,
      session,
    },
  });

  // Compute totals
  let totalScore = 0;

  results.forEach((result) => {
    totalScore += result.totalScore;
  });

  const average =
    results.length > 0 ? (totalScore / results.length).toFixed(2) : 0;

  // Compute positions
  const rankings = await computePositions(className, term, session);

  const studentRank = rankings.find((r) => r.studentId === studentId);

  // Create PDF
  const doc = new PDFDocument();

  res.setHeader("Content-Type", "application/pdf");

  res.setHeader("Content-Disposition", `inline; filename=report-card.pdf`);

  doc.pipe(res);

  // Header
  doc.fontSize(22).text("SCHOOL REPORT CARD", {
    align: "center",
  });

  doc.moveDown();

  // Student Info
  doc
    .fontSize(14)
    .text(`Student Name: ${student.firstName} ${student.lastName}`);

  doc.text(`Admission No: ${student.admissionNumber}`);

  doc.text(`Class: ${className}`);

  doc.text(`Term: ${term}`);

  doc.text(`Session: ${session}`);

  doc.moveDown();

  // Results Table Header
  doc.fontSize(16).text("Academic Results");

  doc.moveDown();

  results.forEach((result) => {
    doc.fontSize(12).text(`Subject ID: ${result.subjectId}`);

    doc.text(`CA: ${result.caScore}`);

    doc.text(`Exam: ${result.examScore}`);

    doc.text(`Total: ${result.totalScore}`);

    doc.text(`Grade: ${result.grade}`);

    doc.moveDown();
  });

  // Summary
  doc.moveDown();

  doc.fontSize(14).text(`Average: ${average}`);

  doc.text(`Position: ${studentRank ? studentRank.position : "-"}`);

  doc.end();
};
