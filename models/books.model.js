const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
    type: Schema.Types.ObjectId,
    ref: "Author",
    require: true,
  },
});

module.exports = mongoose.model("Book", booksSchema);
