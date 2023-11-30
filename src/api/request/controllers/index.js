const saveRequest = require("./saveRequest");
const getRequests = require("./getRequests");
const updateReqStatus = require("./updateReqStatus");
const deleteRequest = require("./deleteRequest");
const updateRequest = require("./updateRequest");
const getTotalRequests = require("./getTotalRequest");
const getRequestsByStatus = require("./getRequestsByStatus");

module.exports = {
  saveRequest,
  getRequests,
  updateReqStatus,
  deleteRequest,
  updateRequest,
  getTotalRequests,
  getRequestsByStatus
};
