const { faker } = require("@faker-js/faker");
const bcrypt = require("bcryptjs");

const { User, Role } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const users = [];
  const roles = await Role.findAll();

  for (let i = 0; i < 20; i++) {
    const randomRol = roles[Math.floor(Math.random() * roles.length)];
    users.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
      password: await bcrypt.hash("pass", 10),
      roleId: randomRol.id,
    });
  }

  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Users.");
};
