const catchAsyncErrors = require("../middleware/catchAsyncErrors");
const User = require("../models/user");
exports.getUser = catchAsyncErrors(async (req, res, next) => {
  try {
    const user = {
      name: "Rijvan",
      role: "user",
    };
    res.status(201).json({ message: "User Profile Fetched", user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});
