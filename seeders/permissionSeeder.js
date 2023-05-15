const { Permission } = require("../models");

module.exports = async () => {
  const permission = [];

  permission.push(
    {
      name: "create-article",
    },
    {
      name: "create-user",
    },
    {
      name: "create-comment",
    },
    {
      name: "delete-user",
    },
    {
      name: "delete-article",
    },
    {
      name: "delete-article-self",
    },
    {
      name: "delete-comment",
    },
    {
      name: "delete-self",
    },
    {
      name: "update-user",
    },
    {
      name: "update-article",
    },
    {
      name: "update-article-self",
    },
    {
      name: "update-comment",
    },
    {
      name: "list-user",
    },
    {
      name: "list-comment",
    },
  );

  await Permission.bulkCreate(permission);
  console.log("[Database] Se corrió el seeder de Permisos.");
};
