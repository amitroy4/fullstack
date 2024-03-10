const express = require("express");
const app = express();
const dbConnection = require("./config/dbConfig");
const routes = require("./routes");
const path = require("path");

const cors = require("cors");
app.use(express.json());
dbConnection();
app.use(cors());
app.use(routes);
app.use("/uploads ", express.static(path.join(__dirname, "uploads")));

app.listen(8000, function () {
  console.log("server is running");
});
