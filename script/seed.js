"use strict";

const {
  db,
  models: { Technologies, Companies, Contacts },
} = require("../server/db");

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }); // clears db and matches models to tables
  console.log("db synced!");

  const technologies = await Promise.all([
    Technologies.create({ name: "Typescript", checked: false }),
  ]);

  const companies = await Promise.all([
    Companies.create({
      name: "Asana",
      notes: "team-based work management application",
    }),
    Companies.create({
      name: "Slack",
      notes: "platform for team management and communication ",
    }),
  ]);

  const contacts = await Promise.all([
    Contacts.create({
      firstName: "Cindy",
      lastName: "Li",
      company: "Shopify",
      title: "Senior Software Developer",
      linkedIn: "https://www.linkedin.com/in/ilydnic/",
    }),
  ]);

  console.log(`seeded successfully`);
  // return {
  //   tasks: {
  //     firstTask: tasks[0]
  //   }
  // }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log("closing db connection");
    await db.close();
    console.log("db connection closed");
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
