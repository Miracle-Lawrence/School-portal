const Result = require("./result.model");

exports.computePositions = async (className, term, session) => {
  // Get all results for class
  const results = await Result.findAll({
    where: {
      className,
      term,
      session,
    },
  });

  // Group results by student
  const studentMap = {};

  results.forEach((result) => {
    if (!studentMap[result.studentId]) {
      studentMap[result.studentId] = {
        studentId: result.studentId,
        total: 0,
        subjects: 0,
      };
    }

    studentMap[result.studentId].total += result.totalScore;

    studentMap[result.studentId].subjects += 1;
  });

  // Convert to array
  const rankings = Object.values(studentMap);

  // Calculate average
  rankings.forEach((student) => {
    student.average = student.total / student.subjects;
  });

  // Sort highest first
  rankings.sort((a, b) => b.average - a.average);

  // Assign positions
  rankings.forEach((student, index) => {
    student.position = index + 1;
  });

  return rankings;
};
