const { faker } = require("@faker-js/faker");
const { isFirstDayOfMonth } = require("date-fns");
const { Author } = require("../models");

faker.locale = "es";

module.exports = async () => {
  const authors = [];

  for (let i = 0; i < 8; i++) {
    authors.push({
      firstname: faker.name.firstName(),
      lastname: faker.name.lastName(),
      email: faker.internet.email(),
    });
  }

  await Author.bulkCreate(authors);
  console.log("[Database] Se corrió el seeder de Authors.");
};
