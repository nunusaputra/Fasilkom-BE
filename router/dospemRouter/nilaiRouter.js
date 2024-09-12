const express = require("express");
const { verifyUserToken, verifyDosen } = require("../../middleware/auth");
const {
  getNilai,
  getNilaiById,
  createNilai,
  updateNilai,
  deleteNilai,
} = require("../../controllers/dospemControllers/nilaiMagangControllers");
const router = express.Router();

router.get("/nilai", verifyUserToken, verifyDosen, getNilai);
router.get("/nilai/:id", verifyUserToken, verifyDosen, getNilaiById);
router.post("nilai", verifyUserToken, verifyDosen, createNilai);
router.put("/nilai", verifyUserToken, verifyDosen, updateNilai);
router.delete("/nilai", verifyUserToken, verifyDosen, deleteNilai);

module.exports = router;
