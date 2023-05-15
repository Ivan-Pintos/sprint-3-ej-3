const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
class User extends Model {
  static initModel(sequelize) {
    User.init(
      {
        id: {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        },
        firstname: {
          type: DataTypes.STRING,
        },
        lastname: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
        password: {
          type: DataTypes.STRING,
        },
        isDeleted: {
          type: DataTypes.BOOLEAN,
          defaultValue: 0,
          allowNull: false,
        },
      },
      {
        sequelize,
        modelName: "user",
      },
    );
    User.addHook("beforeCreate", async (user, options) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      user.password = hashedPassword;
    });
    return User;
  }
}

module.exports = User;
