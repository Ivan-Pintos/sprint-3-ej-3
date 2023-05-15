const { Role } = require("../models");

module.exports = async () => {
  const role = [];

  role.push({
    id: 100,
    name: "Reader",
  });
  role.push({
    id: 200,
    name: "Writer",
  });
  role.push({
    id: 300,
    name: "Editor",
  });
  role.push({
    id: 400,
    name: "Admin",
  });
  await Role.bulkCreate(role);

  console.log("[Database] Se corrió el seeder de Roles.");
};
