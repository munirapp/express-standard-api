import knex from "../../database";

describe("Testing knex database functional", () => {
  beforeAll(async () => {
    await knex.migrate.latest();
  });

  test("It should be return 10000", async (done) => {
    const data = await knex.select().from("profile");
    expect(data.length).toEqual(10000);
    done();
  });

  test("It should be return 10", async (done) => {
    const data = await knex.select().from("profile").limit(10).offset(0);
    expect(data.length).toEqual(10);
    done();
  });

  test("It shold be return 1", async (done) => {
    const data = await knex.where("id", 1).select().from("profile");
    expect(data.length).toEqual(1);
    done();
  });

  test("It should be return 0", async (done) => {
    const data = await knex.where("id", 10001).select().from("profile");
    expect(data.length).toEqual(0);
    done();
  });
});
