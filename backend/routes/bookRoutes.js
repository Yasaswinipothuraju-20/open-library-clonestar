console.log("✅ bookRoutes Loaded");

const express = require("express");
const router = express.Router();

const protect = require("../middleware/authMiddleware");

const {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

// Test Route
router.get("/test", (req, res) => {
  res.send("Book Route Working");
});

// Create Book
router.post("/", protect, createBook);

// Get All Books
router.get("/", getBooks);

// Update Book
router.put("/:id", protect, updateBook);

// Delete Book
router.delete("/:id", protect, deleteBook);

module.exports = router;