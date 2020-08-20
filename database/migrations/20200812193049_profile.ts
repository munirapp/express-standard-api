import Knex from 'knex'

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('profile', (table) => {
    table.increments()
    table.string('name', 50)
    table.string('email', 50)
    table.string('phone', 15)
    table.timestamp('created_at').defaultTo(knex.fn.now())
  })
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('profile')
}
