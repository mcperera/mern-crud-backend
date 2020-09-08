const express = require("express");
const mongoose = require("mongoose");
const server = express();
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./.env" });

//middleware
server.use(bodyParser.json());

//imports routes
const authorRoute = require("./routes/author_route");
const bookRoute = require("./routes/book_route");

server.use("/author", authorRoute);
server.use("/book", bookRoute);

//routes
server.get("/", (req, res) => {
  res.send("Home Home");
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
  console.log("DB ready! :)");
});

//listening to the server
server.listen(4000);

//console.log(mongoose.connection.readyState);
