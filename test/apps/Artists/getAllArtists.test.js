const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");

safeDescribe("#GET albums", () => {
  it("should select all artists list", async () => {
    const response = await request(router)
      .get("/artists")
      .send();

    expect(response.statusCode).to.equal(200);
    expect(response.body).to.eql({
      allArtists: [
        { artistId: 1, name: "Tauren Wells", genre: "Christian" },
        { artistId: 2, name: "Hillsongs", genre: "Christian" },
        { artistId: 3, name: "kari Jobe", genre: "Christian" }
      ]
    });
  });
});
