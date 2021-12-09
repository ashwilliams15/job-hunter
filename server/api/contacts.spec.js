const { expect } = require("chai");
const request = require("supertest");
const seed = require("../../script/seed");
const app = require("../app");

describe("Contacts Routes", () => {
  beforeEach(async () => {
    await seed();
  });

  describe("GET /contacts", () => {
    it("returns all contacts from the database", async () => {
      const res = await request(app).get("/api/contacts").expect(200);
      expect(res.body.length).to.be.at.least(1);
    });
  });

  describe("POST /contacts", () => {
    it("creates a new technology in db", async () => {
      const res = await request(app)
        .post("/api/contacts")
        .send({ firstName: "Test", lastName: "Contact" });
      expect(res.body.firstName).to.equal("Test");
    });
  });
});
