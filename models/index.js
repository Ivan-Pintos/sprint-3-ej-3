const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_DATABASE, // Ej: hack_academy_db
  process.env.DB_USERNAME, // Ej: root
  process.env.DB_PASSWORD, // Ej: root
  {
    host: process.env.DB_HOST, // Ej: 127.0.0.1
    dialect: process.env.DB_CONNECTION, // Ej: mysql
    logging: false, // Para que no aparezcan mensajes en consola.
  },
);

const Comment = require("./Comment");
const Article = require("./Article");
const User = require("./User");
const Role = require("./Role");
const Permission = require("./Permission");

Comment.initModel(sequelize);
Article.initModel(sequelize);
User.initModel(sequelize);
Role.initModel(sequelize);
Permission.initModel(sequelize);

User.belongsTo(Role);
User.hasMany(Article);

Article.belongsTo(User);
Article.hasMany(Comment);

Comment.belongsTo(Article);

Role.hasMany(User);
Role.belongsToMany(Permission, { through: "RolePermissions" });

Permission.belongsToMany(Role, { through: "RolePermissions" });

module.exports = {
  sequelize,
  Comment,
  Article,
  User,
  Permission,
  Role,
};
