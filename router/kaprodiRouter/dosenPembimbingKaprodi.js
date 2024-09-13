const express = require("express");
const router = express.Router();
const { verifyUserToken, verifyKaprodi } = require("../../middleware/auth");
const {
  deleteDospem,
} = require("../../controllers/mahasiswaControllers/suratMenyuratController");
const {
  getDataPlotingKaprodi,
  getDataPlotingByIDKaprodi,
  plottingDospem,
} = require("../../controllers/kaprodi/plottingDospem");

router.get(
  "/dosen-pembimbing",
  verifyUserToken,
  verifyKaprodi,
  getDataPlotingKaprodi
);
router.get(
  "/dosen-pembimbing/:id",
  verifyUserToken,
  verifyKaprodi,
  getDataPlotingByIDKaprodi
);
router.put(
  "/dosen-pembimbing/:id",
  verifyUserToken,
  verifyKaprodi,
  plottingDospem
);
router.delete(
  "/dosen-pembimbing/:id",
  verifyUserToken,
  verifyKaprodi,
  deleteDospem
);

module.exports = router;
