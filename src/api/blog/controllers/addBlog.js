const Blog = require("../../../models/Blog");

const addBlog = async (req, res) => {
  const newBlog = req.body;
  try {
    const blog = await Blog.create(newBlog);
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = addBlog;
