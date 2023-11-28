const router = require("../../utils/router");

const {saveUser, getUsers, getUser, updateUser} = require("../../api/user");

router.post("/api/v1/users", saveUser);
router.get("/api/v1/user/:email", getUser);
router.get("/api/v1/users", getUsers);
router.patch("/api/v1/user/:email", updateUser);

module.exports = router;
