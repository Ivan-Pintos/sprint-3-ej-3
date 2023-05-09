const { Model, DataTypes } = require("sequelize");

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
    return Author;
  }
}

module.exports = Author;
