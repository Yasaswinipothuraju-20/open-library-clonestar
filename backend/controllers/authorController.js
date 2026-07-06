const Author = require("../models/Author");

// Create Author
const createAuthor = async (req, res) => {
  try {
    const { name, bio, country } = req.body;

    const author = await Author.create({
      name,
      bio,
      country,
    });

    res.status(201).json(author);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Authors
const getAuthors = async (req, res) => {
  try {
    const authors = await Author.find();

    res.status(200).json(authors);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Author
const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );

    res.status(200).json(author);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

// Delete Author
const deleteAuthor = async (req, res) => {
  try {
    await Author.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Author Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  createAuthor,
  getAuthors,
  updateAuthor,
  deleteAuthor,
};