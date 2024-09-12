const express = require("express");
const router = express.Router();

const editRouter = require("./editProfileRouter");
const jobRouter = require("./uploadJobRouter");
const handleJobRouter = require("./handleJobRouter");

router.use("/tim-magang", editRouter);
router.use("/tim-magang", jobRouter);
router.use("/tim-magang", handleJobRouter);

module.exports = router;
