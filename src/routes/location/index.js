const router = require("../../utils/router");

const {getDistricts, getUpazilas} = require("../../api/location");

router.get("/api/v1/districts", getDistricts);
router.get("/api/v1/upazilas", getUpazilas);

module.exports = router;
