const Subject = require("./subject.model");

exports.createSubject = async (data) => {
  const existingSubject = await Subject.findOne({
    where: {
      subjectName: data.subjectName,
    },
  });

  if (existingSubject) {
    throw new Error("Subject already exists");
  }

  return await Subject.create(data);
};

exports.getSubjects = async () => {
  return await Subject.findAll({
    order: [["createdAt", "DESC"]],
  });
};
