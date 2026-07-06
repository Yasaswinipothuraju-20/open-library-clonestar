console.log("✅ authorRoutes Loaded");
const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createAuthor,
  getAuthors,
  updateAuthor,
  deleteAuthor,
} = require("../controllers/authorController");

// Create Author
router.post("/", protect, createAuthor);

// Get All Authors
router.get("/", getAuthors);

// Update Author
router.put("/:id", protect, updateAuthor);

// Delete Author
router.delete("/:id", protect, deleteAuthor);

module.exports = router;