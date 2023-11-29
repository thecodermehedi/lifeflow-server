const {model, Schema} = require("../utils/mongoose");

const blogSchema = new Schema({

  title: String,
  description: String,
  image: String,
  status: String,
  
});

const Blog = model("Blog", blogSchema);

module.exports = Blog;