import knex from "../../database";

describe("Testing knex database functional", () => {
  beforeAll(async () => {
    await knex.migrate.latest();
  });

  test("It should be return 10000", async () => {
    const data = await knex.select().from("profile");
    expect(data.length).toEqual(10000);
  });

  test("It should be return 10", async () => {
    const data = await knex.select().from("profile").limit(10).offset(0);
    expect(data.length).toEqual(10);
  });

  test("It shold be return 1", async () => {
    const data = await knex.where("id", 1).select().from("profile");
    expect(data.length).toEqual(1);
  });

  test("It should be return 0", async () => {
    const data = await knex.where("id", 10001).select().from("profile");
    expect(data.length).toEqual(0);
  });
});
