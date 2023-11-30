const router = require("../../utils/router");

const {
  saveRequest,
  getRequests,
  updateReqStatus,
  deleteRequest,
  updateRequest,
  getTotalRequests,
  getRequestsByStatus
} = require("../../api/request");

router.get("/api/v1/requests/total", getTotalRequests);
router.get("/api/v1/requests/:email?", getRequests);
router.get("/api/v1/request/pending", getRequestsByStatus)
router.post("/api/v1/requests", saveRequest);
router.patch("/api/v1/request/status/:id", updateReqStatus);
router.delete("/api/v1/request/:id", deleteRequest);
router.patch("/api/v1/request/:id", updateRequest);

module.exports = router;
