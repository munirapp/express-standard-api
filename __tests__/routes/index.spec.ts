import app from "../../src/app";
import * as request from "supertest";

describe("Test Base Path", () => {
  test("It should be response 200 and show text", () => {
    return request(app)
      .get("/")
      .expect(200)
      .expect("This is an API Standard for NodeJS");
  });
});

describe("Test Profile All", () => {
  test("It should be response 200", () => {
    return request(app).get("/profile/all").expect(200);
  });
});

describe("Test Paginate Profile", () => {
  test("It should be response 200", () => {
    return request(app).get("/profile/page/1").expect(200);
  });
});

describe("Test Detail Profile", () => {
  test("It should be response 400 and show text", () => {
    return request(app)
      .get("/profile/detail/")
      .expect(400)
      .expect("ID can't be empty or must larger than zero");
  });
  test("It should be response 400 and show text", () => {
    return request(app)
      .get("/profile/detail/0")
      .expect(400)
      .expect("ID can't be empty or must larger than zero");
  });
  test("It should be response 200", () => {
    return request(app).get("/profile/detail/1").expect(200);
  });
});
