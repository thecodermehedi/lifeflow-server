const router = require("../../utils/router");

const {
  saveRequest,
  getRequests,
  updateReqStatus,
  deleteRequest,
  updateRequest,
} = require("../../api/request");

router.post("/api/v1/requests", saveRequest);
router.get("/api/v1/requests/:email?", getRequests);
router.patch("/api/v1/request/status/:id", updateReqStatus);
router.delete("/api/v1/request/:id", deleteRequest);
router.patch("/api/v1/request/:id", updateRequest);

module.exports = router;
