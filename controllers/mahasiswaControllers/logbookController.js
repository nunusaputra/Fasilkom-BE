const User = require("../../models").User;
const ApplyJob = require("../../models").applyJob;
const Mahasiswa = require("../../models").Mahasiswa;
const Logbook = require("../../models").Logbook;
const DosenPembimbing = require("../../models").DosenPembimbing;

module.exports = {
  // ---------------------- START FITUR GET ALL LOGBOOK FOR MAHASISWA -------------------------- //

  getAllLogbook: async (req, res) => {
    try {
      const logbook = await Logbook.findAll({
        where: {
          userId: req.mhsId,
        },
        attributes: [
          "id",
          "title",
          "desc",
          "dateOfPosting",
          "status",
          "comment",
        ],
        include: [
          {
            model: Mahasiswa,
            attributes: ["name", "email", "profile_pict", "no_hp"],
          },
          {
            model: User,
            attributes: ["id", "name", "email"],
          },
        ],
        order: [["dateOfPosting", "DESC"]],
      });

      if (logbook.length === 0) {
        return res.status(404).json({
          message: "Tidak ada data logbook yang tersedia!",
        });
      }

      res.status(200).json({
        message: "Success get all data logbook",
        data: logbook,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  // ---------------------- END FITUR GET ALL LOGBOOK FOR MAHASISWA ---------------------------- //

  // ---------------------- START FITUR GET LOGBOOK FOR MAHASISWA BY ID ---------------------------- //

  getLogbookByID: async (req, res) => {
    try {
      const id = req.params.id;

      const logbook = await Logbook.findOne({
        where: {
          id,
        },
        attributes: [
          "id",
          "title",
          "desc",
          "dateOfPosting",
          "status",
          "comment",
        ],
        include: [
          {
            model: Mahasiswa,
            attributes: ["name", "email", "profile_pict", "no_hp"],
          },
          {
            model: User,
            attributes: ["id", "name", "email"],
          },
        ],
        order: [["dateOfPosting", "DESC"]],
      });

      if (!logbook) {
        return res.status(404).json({
          message: "Data logbook yang anda cari tidak tersedia!",
        });
      }

      res.status(200).json({
        message: "Success get data logbook",
        data: logbook,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  // ---------------------- END FITUR GET LOGBOOK FOR MAHASISWA BY ID ------------------------------ //

  // ---------------------- START FITUR CREATE LOGBOOK FOR MAHASISWA ------------------------------ //

  createLogbook: async (req, res) => {
    try {
      const data = req.body;

      // const applyJob = await ApplyJob.findOne({
      //   where: {
      //     mhsId: req.mhsId,
      //     status: "accepted",
      //   },
      // });

      // if (!applyJob) {
      //   return res.status(400).json({
      //     message: "Anda belum diterima di mitra manapun!",
      //   });
      // }

      const dospem = await DosenPembimbing.findOne({
        where: {
          mhsId: req.mhsId,
          status: "accepted",
        },
      });

      if (!dospem) {
        return res.status(400).json({
          message: "Kamu belum memiliki dosen pembimbing!",
        });
      }

      const logbook = await Logbook.create({
        title: data.title,
        desc: data.desc,
        dateOfPosting: data.dateOfPosting,
        userId: req.mhsId,
        dospemId: dospem.dospemId,
      });

      res.status(201).json({
        message: "Success create logbook",
        data: logbook,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  // ---------------------- END FITUR CREATE LOGBOOK FOR MAHASISWA -------------------------------- //

  // ---------------------- START FITUR UPDATE LOGBOOK FOR MAHASISWA -------------------------------- //

  updateLogbook: async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    const logbook = await Logbook.findOne({
      where: {
        id,
      },
    });

    if (!logbook) {
      return res.status(404).json({
        message: "Logbook yang anda cari tidak ditemukan!",
      });
    }

    try {
      await Logbook.update(
        {
          title: data.title,
          desc: data.desc,
          dateOfPosting: data.dateOfPosting,
        },
        {
          where: {
            id: logbook.id,
          },
        }
      );

      res.status(200).json({
        message: "Success update data logbook",
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  // ---------------------- END FITUR UPDATE LOGBOOK FOR MAHASISWA ---------------------------------- //

  // ---------------------- START FITUR DELETE LOGBOOK FOR MAHASISWA ---------------------------------- //

  deleteLogbook: async (req, res) => {
    try {
      const id = req.params.id;

      await Logbook.destroy({
        where: {
          id,
        },
      });

      res.status(200).json({
        message: "Success delete data logbook",
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  // ---------------------- END FITUR DELETE LOGBOOK FOR MAHASISWA ------------------------------------ //
};
