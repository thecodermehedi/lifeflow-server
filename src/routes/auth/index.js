const router = require("../../utils/router");

const { createAuthCookie, removeAuthCookie } = require("../../api/auth");

router.post("/api/v1/auth/generateToken", createAuthCookie);
router.post("/api/v1/auth/clearToken", removeAuthCookie);

module.exports = router;