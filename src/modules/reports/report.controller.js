const { generateStudentReport } = require("./pdf.generator");

exports.generateReport = async (req, res) => {
  try {
    const { studentId, className, term, session } = req.query;

    await generateStudentReport(studentId, className, term, session, res);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
