const router = require("../../utils/router");

const {getBlogs} = require("../../api/blog");


router.get("/api/v1/blogs", getBlogs);

module.exports = router;