const studentService = require("./student.service");

exports.createStudent = async (req, res) => {
  try {
    const student = await studentService.createStudent(req.body);

    res.status(201).json({
      message: "Student created successfully",
      student,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getStudents = async (req, res) => {
  try {
    const students = await studentService.getStudents();

    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
