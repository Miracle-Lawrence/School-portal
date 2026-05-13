const Student = require("./student.model");

exports.createStudent = async (data) => {
  const count = await Student.count();

  const admissionNumber = `STD-${String(count + 1).padStart(4, "0")}`;

  const student = await Student.create({
    ...data,
    admissionNumber,
  });

  return student;
};

exports.getStudents = async () => {
  return await Student.findAll();
};
