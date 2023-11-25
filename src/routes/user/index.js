const router = require("../../utils/router");

const {saveUser, getUsers} = require("../../api/user");

router.post("/api/v1/users", saveUser);
router.get("/api/v1/users", getUsers);

module.exports = router;
