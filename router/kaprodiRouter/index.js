const express = require("express");
const router = express.Router();
const dospem = require("./dosenPembimbingKaprodi");
const magangReguler = require("./magangRegulerRouter");
const magangKompetensi = require("./magangKompetensiRouter");

router.use("/kaprodi", dospem);
router.use("/kaprodi", magangReguler);
router.use("/kaprodi", magangKompetensi);

module.exports = router;
