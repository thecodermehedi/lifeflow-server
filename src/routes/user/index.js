const router = require("../../utils/router");

const {
  saveUser,
  getUsers,
  getUser,
  updateUser,
  updateUserStatus,
  updateUserRole,
  getTotalUsers,
  getDonors
} = require("../../api/user");

router.get("/api/v1/users", getUsers);
router.get("/api/v1/users/total", getTotalUsers);
router.post("/api/v1/users", saveUser);
router.get("/api/v1/user/:email", getUser);
router.patch("/api/v1/user/:email", updateUser);
router.patch("/api/v1/user/status/:id", updateUserStatus);
router.patch("/api/v1/user/role/:id", updateUserRole);
router.get("/api/v1/users/donors", getDonors);

module.exports = router;
