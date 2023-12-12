const express = require("express");
const authRoutes = require("../routes/authRoutes");
const userRoutes = require("./userRoutes");
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/user", userRoutes);

module.exports = router;
