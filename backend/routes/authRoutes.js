const express = require("express");
const router = express.Router();
const { registerValidation } = require("../validators/authValidator");
const validate = require("../middleware/validationMiddleware");

const {
    registerUser,
    loginUser
} = require("../controllers/authController");

// Test Route
router.get("/test", (req, res) => {
    res.send("Auth Route Working");
});

// Register Route
router.post(
  "/register",
  registerValidation,
  validate,
  registerUser
);
router.post("/login", loginUser);

module.exports = router;