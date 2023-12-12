const express = require("express");
const { getUser } = require("../controllers/userController");
const { isAuthenticatedUser } = require("../middleware/auth");

const router = express.Router();

// router.get("/profile", isAuthenticatedUser, getUser);
router.get("/profile", getUser);

module.exports = router;
