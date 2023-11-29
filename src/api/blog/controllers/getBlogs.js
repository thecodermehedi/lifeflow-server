const Blog = require("../../../models/Blog");

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({});
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = getBlogs;
