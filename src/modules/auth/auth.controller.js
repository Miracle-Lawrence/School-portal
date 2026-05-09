const authService = require("./auth.service");

// REGISTER
const register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body);

    res.status(201).json({
      message: "User registered successfully",
      user,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// LOGIN
const login = async (req, res) => {
  try {
    const data = await authService.loginUser(req.body);

    res.status(200).json({
      message: "Login successful",
      ...data,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
};

module.exports = {
  register,
  login,
};
