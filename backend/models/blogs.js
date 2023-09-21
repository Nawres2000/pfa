const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
const blogSchema = new Schema({
  title: String,
  body: String,
  image: String,

});
 
module.exports = mongoose.model("Blog", blogSchema);