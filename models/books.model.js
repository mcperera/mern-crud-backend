const mongoose = require("mongoose");

const booksSchema = mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  isbn: {
    type: String,
    require: true,
  },
  author: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Books", booksSchema);
