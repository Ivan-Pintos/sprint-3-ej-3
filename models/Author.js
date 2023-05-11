const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcryptjs");
class Author extends Model {
  static initModel(sequelize) {
    Author.init(
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
      },
      {
        sequelize,
        modelName: "author",
      },
    );
    Author.addHook("beforeCreate", async (author, options) => {
      console.log(author);
      const hashedPassword = await bcrypt.hash(author.password, 10);
      author.password = hashedPassword;
    });
    return Author;
  }
}

module.exports = Author;
