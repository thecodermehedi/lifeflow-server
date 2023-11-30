const Blog = require("../../../models/Blog");

const updateBlogStatus = async (req, res) => {
  const id = req.params.id;
  const status = req.body.status;

  try {
    const result = await Blog.updateOne({_id: id}, {status: status});
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({message: error.message});
  }
};

module.exports = updateBlogStatus;
