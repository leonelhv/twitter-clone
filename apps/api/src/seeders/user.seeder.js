const { faker } = require('@faker-js/faker');
const { UniqueEnforcer } = require('enforce-unique');
const randomRange = require("../utils/randomRange.js");
const User = require("../models/user.model.js");
const bcrypt = require("bcryptjs");

const maxCant = 100;

const seedUsers = async (req, res) => {
  try {
    const cant = req.query.cant || 20;

    if (cant > maxCant) {
      return res.status(400).json({ message: `Max cant is ${maxCant}` });
    }

    await User.deleteMany();

    const USERS = await usersFake(cant);

    await User.insertMany(USERS);

    res.json({ message: 'Users seeder successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error seeding users', error });
  }
}

async function createRandomUsers () {
  return new Promise(async (resolve) => {
    const uniqueEnforce = new UniqueEnforcer();
    const randomNumber = await randomRange(1, 3)

    const username = uniqueEnforce.enforce(() => {
      return faker.internet.userName()
    });
    const email = uniqueEnforce.enforce(() => {
      return faker.internet.email()
    });
    const password = await bcrypt.hash("123456", 10)
    const name = faker.person.firstName()
    const lastname = faker.person.lastName()
    const phone = faker.phone.number("#########")
    const photo = `assets/${randomNumber}.png`

    resolve({
      username,
      email,
      password,
      name,
      lastname,
      phone,
      photo
    });
  });
}

async function usersFake (cant) {
  const promises = Array.from({ length: cant }, () => createRandomUsers());
  return Promise.all(promises);
}

module.exports = seedUsers;