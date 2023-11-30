const router = require("../../utils/router");

const {getBlogs, addBlog, deleteBlog, updateBlogStatus, updateBlog} = require("../../api/blog");

router.get("/api/v1/blogs", getBlogs);
router.post("/api/v1/blogs", addBlog);
router.delete("/api/v1/blog/:id", deleteBlog);
router.patch("/api/v1/blog/status/:id", updateBlogStatus);
router.patch("/api/v1/blog/:id", updateBlog);

module.exports = router;
