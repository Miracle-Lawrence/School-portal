const classService = require("./class.service");

exports.createClass = async (req, res) => {
  try {
    const newClass = await classService.createClass(req.body);

    res.status(201).json({
      message: "Class created successfully",
      class: newClass,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

exports.getClasses = async (req, res) => {
  try {
    const classes = await classService.getClasses();

    res.status(200).json(classes);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
