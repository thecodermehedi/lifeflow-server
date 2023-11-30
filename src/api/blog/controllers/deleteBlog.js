const Blog = require("../../../models/Blog");

const deleteBlog = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Blog.deleteOne({_id: id});
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({message: error.message});
  }
};

module.exports = deleteBlog;