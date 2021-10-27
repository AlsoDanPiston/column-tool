const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ColumnsSavedSchema = new Schema({
  name: String,
  columnlist: Array,
});

module.exports = mongoose.model("ColumnsSaved", ColumnsSavedSchema);