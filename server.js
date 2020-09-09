const express = require("express");
const mongoose = require("mongoose");
const server = express();
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });

//---------Models
const Book = require("./models/books.model");
const Author = require("./models/author.model");

//---------Middleware
server.use(cors());
server.use(bodyParser.json());

//---------Imports routes
const authorRoute = require("./routes/author_route");
const bookRoute = require("./routes/book_route");

server.use("/author", authorRoute);
server.use("/book", bookRoute);

//---------Routes
server.get("/", (req, res) => {
  res.send("Home Home");
});

//---------Routes-Get Books
server.get("/books", async (req, res) => {
  try {
    const books = await Book.find().populate("author", {
      _id: 0,
      __v: 0,
    });
    res.json(books);
  } catch (err) {
    res.json({ message: err });
  }
});

//---------Routes-Get Authors
server.get("/authors", async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.json({ message: err });
  }
});

//---------Connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("DB ready! :)");
});

//---------Listening to the server
server.listen(process.env.PORT || 5000);

//console.log(mongoose.connection.readyState);
