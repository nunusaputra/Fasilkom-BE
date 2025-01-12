"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Logbook extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Mahasiswa, { foreignKey: "userId" });
      this.belongsTo(models.User, { foreignKey: "dospemId" });
    }
  }
  Logbook.init(
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      title: DataTypes.STRING,
      desc: DataTypes.TEXT,
      dateOfPosting: DataTypes.DATE,
      comment: DataTypes.TEXT,
      status: DataTypes.ENUM("waiting", "accepted", "revision"),
      userId: DataTypes.STRING,
      dospemId: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Logbook",
    }
  );
  return Logbook;
};
