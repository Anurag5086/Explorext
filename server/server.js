const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const document = require("./routes/Document");

//BodyParser middleware
app.use(bodyParser.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/explorext", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB is Connected"))
  .catch((err) => console.log(err));

app.use("/", document);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Sever Started on Port 5000!"));
