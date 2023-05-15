const { Model, DataTypes } = require("sequelize");

class Permission extends Model {
  static initModel(sequelize) {
    Permission.init(
      {
        id: {
          type: DataTypes.INTEGER.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
          unique: true,
        },
      },
      {
        sequelize,
        modelName: "permission",
      },
    );

    return Permission;
  }
}

module.exports = Permission;
