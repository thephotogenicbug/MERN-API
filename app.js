const express = require("express");
const app = express();
const cors = require("cors");
const errorMiddleware = require("./middlewares/error");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload());

app.get("/", (req, res) => {
  res.send("api is running...");
});

const product = require('./routes/ProductRoutes')
app.use('/api/v1', product)

//middleware for error
app.use(errorMiddleware);

module.exports = app;
