const { expect } = require("chai");
const request = require("supertest");
const router = require("~root/app");
const safeDescribe = require("~test/utils/safeDescribe");
const createAlbum = require("./queries/createAlbum");

safeDescribe("DELETE /albums/:albumId", () => {
  let albumIdToDelete;

  before(async () => {
    albumIdToDelete = await createAlbum({
      name: "l'impetrarice",
      year: "2017",
      artistId: "1"
    });
  });

  it("deletes album record by artist id", async () => {
    const res = await request(router).delete(`/albums/${albumIdToDelete}`);
    expect(res.status).to.equal(200);
  });
});
