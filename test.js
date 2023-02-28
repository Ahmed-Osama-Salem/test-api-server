const chai = require("chai");
const request = require("supertest");

const expect = chai.expect;

describe("GET /products", function () {
  it("should return 200 OK with several products", async function () {
    const response = await request("https://api.escuelajs.co/api/v1")
      .get("/products")
      .expect(200)
      .expect("Content-Type", /json/);

    const movies = response.body;
    expect(movies).to.be.an("array");
    expect(movies).length.to.be.greaterThan(0);

    it("should have valid movies", async function () {
      const response = await request("https://api.escuelajs.co/api/v1")
        .get("/products")
        .expect(200)
        .expect("Content-Type", /json/);

      const movies = response.body;
      movies.forEach((movie) => {
        expect(movie.name).to.be.a("string");
        expect(movie.id).to.be.a("number");
      });
    });
  });
});
