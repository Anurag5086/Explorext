/* eslint-disable no-native-reassign */
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema
const DocumentSchema = new Schema({
  name: {
    type: String,
  },
  path: {
    type: String,
    default: "/",
  },
  type: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Document = mongoose.model("documents", DocumentSchema);
