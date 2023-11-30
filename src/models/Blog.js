const {model, Schema} = require("../utils/mongoose");

const blogSchema = new Schema({

  title: String,
  description: String,
  cover: String,
  status: String,
  date: String,
  time: String,
});

const Blog = model("Blog", blogSchema);

module.exports = Blog;