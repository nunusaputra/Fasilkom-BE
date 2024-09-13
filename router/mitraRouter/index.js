const express = require("express");
const router = express.Router();
const nilai = require("./nilaiRouter");

router.use("/mitra", nilai);

module.exports = router;
