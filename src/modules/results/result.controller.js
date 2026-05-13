const resultService = require("./result.service");

exports.createResult = async (req, res) => {
  try {
    const result = await resultService.createResult(req.body);

    res.status(201).json({
      message: "Result added successfully",
      result,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

exports.getResults = async (req, res) => {
  try {
    const results = await resultService.getResults();

    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
