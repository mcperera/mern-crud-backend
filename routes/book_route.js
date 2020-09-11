const express = require("express");
const Book = require("../models/books.model");

const bookRouter = express.Router();

// bookRouter.get("/", async (req, res) => {
//   try {
//     const books = await Book.find().populate("author", {
//       _id: 0,
//       __v: 0,
//     });
//     res.json(books);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

bookRouter.post("/", async (req, res) => {
  const book = new Book({
    name: req.body.name,
    isbn: req.body.isbn,
    author: req.body.author,
  });

  try {
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (err) {
    res.json({ message: err });
  }
});

bookRouter.get("/:bookId", async (req, res) => {
  try {
    const book = await Book.findById(req.params.bookId).populate("author", {
      __v: 0,
    });
    res.json(book);
  } catch (err) {
    res.json({ message: err });
  }
});

bookRouter.delete("/:bookId", async (req, res) => {
  try {
    const bookRemoved = await Book.remove({ _id: req.params.bookId });
    res.json(bookRemoved);
  } catch (errr) {
    res.json({ message: err });
  }
});

bookRouter.patch("/:bookId", async (req, res) => {
  try {
    const updateBook = await Book.updateOne(
      { _id: req.params.bookId },
      { $set: { ...req.body } }
    );
    res.json(updateBook);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = bookRouter;
