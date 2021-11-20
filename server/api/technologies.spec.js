const { expect } = require("chai");
// supertest is a library that allows us to write requests to our server
const request = require("supertest");
const {
  db,
  models: { Technologies },
} = require("../db");
const seed = require("../../script/seed");
const app = require("../app");

describe("Technologies Routes", () => {
  // need to seed testing database
  beforeEach(async () => {
    await seed();
  });

  describe("GET /technologies", () => {
    // tests that this get request returns at least 1 technology from the db. Chose 1 because I have one technology in my seed data.
    it("returns all technologies from the database", async () => {
      const res = await request(app).get("/api/technologies").expect(200);
      expect(res.body.length).to.be.at.least(1);
    });
  });

  describe("POST /technologies", () => {
    it("creates a new technology in db", async () => {
      const res = await request(app)
        .post("/api/technologies")
        .send({ name: "chai" });
      expect(res.body.name).to.equal("chai");
    });
  });

  describe("PUT /technologies/:id", () => {
    it("updates a technology's checked status", async () => {
      const create = await request(app)
        .post("/api/technologies")
        .send({ id: 1000, name: "chai" });
      const res = await request(app).put("/api/technologies/1000");
      expect(res.body.checked).to.equal(true);
    });
  });
});
