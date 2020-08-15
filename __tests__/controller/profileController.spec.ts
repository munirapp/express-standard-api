import app from "../../src/app";
import knex from "../../database";
import { redisFlushAsync, redisGetAsync } from "../../redis";
import * as request from "supertest";
import response from "../../src/helper/response";
import profile from "../../src/models/profile";

describe("Testing Profile Controller", () => {
  beforeEach(async () => {
    await redisFlushAsync();
  });

  afterEach(async () => {
    await redisFlushAsync();
  });

  describe("Testing response get all profiles", () => {
    test("It should same response manual function and request", async () => {
      const time = response.start_time();
      const path = "/profile/all";
      const dbResponseMessage = "success load data from database";
      const redisResponseMesage = "success load data from cache";
      let responseManual = null;
      let responseApi = null;

      // Testing Response Database
      const dbData = await profile.all();
      responseManual = response.format(time, dbData, dbResponseMessage);
      responseApi = await request(app).get(path);
      responseApi = JSON.parse(responseApi.text);
      expect(Object.keys(responseManual)).toEqual(Object.keys(responseApi));
      expect(responseManual.diagnostic.message).toEqual(
        responseApi.diagnostic.message
      );
      expect(JSON.parse(JSON.stringify(responseManual.data.rows))).toEqual(
        responseApi.data.rows
      );

      // Testing Response Cache
      const redisData = await redisGetAsync("allProfile");
      responseManual = response.format(
        time,
        JSON.parse(redisData),
        redisResponseMesage
      );
      responseApi = await request(app).get(path);
      responseApi = JSON.parse(responseApi.text);
      expect(Object.keys(responseManual)).toEqual(Object.keys(responseApi));
      expect(responseManual.diagnostic.message).toEqual(
        responseApi.diagnostic.message
      );
      expect(responseManual.data.rows).toEqual(responseApi.data.rows);
    });
  });

  describe("Testing response get paginate profiles", () => {
    test("It should same response manual function and request", async () => {
      const time = response.start_time();
      const page = Math.floor(Math.random() * 1001);
      const path = "/profile/page/" + page;
      const dbResponseMessage = "success load data from database";
      const redisResponseMesage = "success load data from cache";
      let responseManual = null;
      let responseApi = null;

      // Testing Response Database
      const dbData = await profile.paginate(10, page * 10);
      responseManual = response.format(time, dbData, dbResponseMessage);
      responseApi = await request(app).get(path);
      responseApi = JSON.parse(responseApi.text);
      expect(Object.keys(responseManual)).toEqual(Object.keys(responseApi));
      expect(responseManual.diagnostic.message).toEqual(
        responseApi.diagnostic.message
      );
      expect(JSON.parse(JSON.stringify(responseManual.data.rows))).toEqual(
        responseApi.data.rows
      );

      // Testing Response Cache
      const redisData = await redisGetAsync("paginateProfile" + page);
      responseManual = response.format(
        time,
        JSON.parse(redisData),
        redisResponseMesage
      );
      responseApi = await request(app).get(path);
      responseApi = JSON.parse(responseApi.text);
      expect(Object.keys(responseManual)).toEqual(Object.keys(responseApi));
      expect(responseManual.diagnostic.message).toEqual(
        responseApi.diagnostic.message
      );
      expect(responseManual.data.rows).toEqual(responseApi.data.rows);
    });
  });

  describe("Testing response get detail profiles", () => {
    test("It should same response manual function and request", async () => {
      const time = response.start_time();
      const id = Math.floor(Math.random() * 10001);
      const path = "/profile/detail/" + id;
      const dbResponseMessage = "success load data from database";
      const redisResponseMesage = "success load data from cache";
      let responseManual = null;
      let responseApi = null;

      // Testing Response Database
      const dbData = await profile.findByID(id);
      responseManual = response.format(time, dbData, dbResponseMessage);
      responseApi = await request(app).get(path);
      responseApi = JSON.parse(responseApi.text);
      expect(Object.keys(responseManual)).toEqual(Object.keys(responseApi));
      expect(responseManual.diagnostic.message).toEqual(
        responseApi.diagnostic.message
      );
      expect(JSON.parse(JSON.stringify(responseManual.data.rows))).toEqual(
        responseApi.data.rows
      );

      // Testing Response Cache
      const redisData = await redisGetAsync("detailProfile" + id);
      responseManual = response.format(
        time,
        JSON.parse(redisData),
        redisResponseMesage
      );
      responseApi = await request(app).get(path);
      responseApi = JSON.parse(responseApi.text);
      expect(Object.keys(responseManual)).toEqual(Object.keys(responseApi));
      expect(responseManual.diagnostic.message).toEqual(
        responseApi.diagnostic.message
      );
      expect(responseManual.data.rows).toEqual(responseApi.data.rows);
    });
  });
});
