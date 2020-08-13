import * as Knex from "knex";
import * as faker from "faker";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("profile").del();

  // Inserts seed entries
  for (let index = 1; index <= 10000; index++) {
    await knex("profile").insert([
      {
        id: index,
        name: faker.name.findName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumberFormat(),
      },
    ]);
  }
}
