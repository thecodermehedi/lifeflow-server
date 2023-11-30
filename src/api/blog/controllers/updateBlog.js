const Blog = require("../../../models/Blog");

const updateBlog = async (req, res) => {
  const { id } = req.params;
  const newBlogInfo = req.body;

  try {
    const result = await Blog.findByIdAndUpdate(id, newBlogInfo)
    res.status(200).json({ message: "Blog updated"});
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
}

module.exports = updateBlog;
