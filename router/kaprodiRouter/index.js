const express = require("express");
const router = express.Router();
const dospem = require("./dosenPembimbingKaprodi");
const magangReguler = require("./magangRegulerRouter");
const magangKompetensi = require("./magangKompetensiRouter");
const laporan = require("./laporanRouter");

router.use("/kaprodi", dospem);
router.use("/kaprodi", magangReguler);
router.use("/kaprodi", magangKompetensi);
router.use("/kaprodi", laporan);

module.exports = router;
