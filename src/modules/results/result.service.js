const Result = require("./result.model");

const { calculateGrade } = require("./grading.service");

exports.createResult = async (data) => {
  const totalScore = Number(data.caScore) + Number(data.examScore);

  const grade = calculateGrade(totalScore);

  const result = await Result.create({
    ...data,
    totalScore,
    grade,
  });

  return result;
};

exports.getResults = async () => {
  return await Result.findAll({
    order: [["createdAt", "DESC"]],
  });
};
