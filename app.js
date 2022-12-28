const express = require("express");
const http = require("http");
const path = require("path");
const app = express();
const { notFound } = require("./ErrorHandler");
const allusers = require("./users");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(notFound);
app.use("/users", allusers);

http.createServer(app).listen(3004, () => {
  console.log("server is running on 3004");
});
