const express = require("express");
const app = express();
const dbConnection = require("./config/dbConfig");
const routes = require("./routes");
const cors = require("cors");
app.use(express.json());
dbConnection();
app.use(cors());
app.use(routes);

app.listen(8000, function () {
  console.log("server is running");
});
