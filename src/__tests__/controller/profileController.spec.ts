import app from "../../app";
import * as request from "supertest";

describe("Test Profile Controller", () => {
  test("It should response GET Method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
});
