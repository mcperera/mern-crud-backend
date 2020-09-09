const express = require("express");
const Author = require("../models/author.model");

const authorRouter = express.Router();

// authorRouter.get("/", async (req, res) => {
//   try {
//     const authors = await Author.find();
//     res.json(authors);
//   } catch (err) {
//     res.json({ message: err });
//   }
// });

authorRouter.post("/", async (req, res) => {
  const author = new Author({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
  });

  try {
    const savedAuthor = await author.save();
    res.json(savedAuthor);
  } catch (err) {
    res.json({ message: err });
  }
});

authorRouter.get("/:authorId", async (req, res) => {
  try {
    const author = await Author.findById(req.params.authorId);
    res.json(author);
  } catch (err) {
    res.json({ message: err });
  }
});

authorRouter.delete("/:authorId", async (req, res) => {
  try {
    const authorRemoved = await Author.remove({ _id: req.params.authorId });
    res.json(authorRemoved);
  } catch (errr) {
    res.json({ message: err });
  }
});

authorRouter.patch("/:authorId", async (req, res) => {
  try {
    const updateAuthor = await Author.updateOne(
      { _id: req.params.authorId },
      { $set: { firstName: req.body.firstName } }
    );
    res.json(updateAuthor);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = authorRouter;
