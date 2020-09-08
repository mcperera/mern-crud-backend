const mongoose = require("mongoose");

const authorSchema = mongoose.Schema({
  firstName: {
    type: String,
    require: true,
  },
  lastName: {
    type: String,
    require: true,
  },
});

module.exports = mongoose.model("Authors", authorSchema);
