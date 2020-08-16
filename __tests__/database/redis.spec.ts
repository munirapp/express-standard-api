import { redisGetAsync, redisSetAsync, redisDelAsync } from "../../redis";

describe("Testing redis function", () => {
  test("It should set keys & get keys value", async (done) => {
    await redisSetAsync("testing", 100, "testing redis keys");
    const data = await redisGetAsync("testing");
    expect(data).toBe("testing redis keys");
    done();
  });

  test("It should return null value", async (done) => {
    await redisDelAsync("testing");
    const data = await redisGetAsync("testing");
    expect(data).toEqual(null);
    done();
  });
});
