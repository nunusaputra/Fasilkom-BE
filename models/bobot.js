"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bobot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Nilai, { foreignKey: "nilaiId" });
      this.belongsTo(models.User, { foreignKey: "userId" });
    }
  }
  Bobot.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      disiplin: DataTypes.INTEGER,
      sikap: DataTypes.INTEGER,
      tanggung_jawab: DataTypes.INTEGER,
      kehadiran: DataTypes.INTEGER,
      tata_tertib: DataTypes.INTEGER,
      penampilan: DataTypes.INTEGER,
      kemampuan_kerja: DataTypes.INTEGER,
      keterampilan_kerja: DataTypes.INTEGER,
      kualitas_kerja: DataTypes.INTEGER,
      kemampuan_berkomunikasi: DataTypes.INTEGER,
      kerjasama: DataTypes.INTEGER,
      kerajinan: DataTypes.INTEGER,
      percaya_diri: DataTypes.INTEGER,
      relevansi: DataTypes.INTEGER,
      isi_laporan: DataTypes.INTEGER,
      nilaiId: DataTypes.STRING,
      userId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Bobot",
    }
  );
  return Bobot;
};
