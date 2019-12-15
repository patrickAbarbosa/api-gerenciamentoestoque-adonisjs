\'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArmazenSchema extends Schema {
  up () {
    this.create('armazens', (table) => {
      table.increments().unique()
      table.string('name', 255).notNullable()
      table.string('description')
      table.string('address', 255)
      table.integer('number')
      table.string('district', 255)
      table.integer('zipcode').notNullable()
      table.integer('complement')
      table.string('city')
      table.integer('project_id')
        .unique()
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
      table.integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('armazens')
  }
}

module.exports = ArmazenSchema
