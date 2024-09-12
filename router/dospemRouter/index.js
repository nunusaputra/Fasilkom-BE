const express = require("express");
const router = express.Router();
const logbook = require("./logbookRouter");
const bimbingan = require("./bimbinganRouter");
const nilai = require("./nilaiRouter");
const bobot = require("./bobotRouter");
const laporan = require("./laporanRouter");

router.use("/dospem", logbook);
router.use("/dospem", bimbingan);
router.use("/dospem", nilai);
router.use("/dospem", bobot);
router.use("/dospem", laporan);

module.exports = router;
