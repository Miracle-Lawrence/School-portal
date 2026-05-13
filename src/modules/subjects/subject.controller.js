const subjectService = require("./subject.service");

exports.createSubject = async (req, res) => {
  try {
    const subject = await subjectService.createSubject(req.body);

    res.status(201).json({
      message: "Subject created successfully",
      subject,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getSubjects = async (req, res) => {
  try {
    const subjects = await subjectService.getSubjects();

    res.status(200).json(subjects);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
