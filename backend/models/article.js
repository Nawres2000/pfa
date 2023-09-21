const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  description: {
    type: String,
  },
  prix: {
    type: String,
  },
  stock: {
    type: String,
  },
  remise: {
    type: String,
  },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;
