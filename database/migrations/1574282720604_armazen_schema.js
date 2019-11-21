'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ArmazenSchema extends Schema {
  up () {
    this.create('armazens', (table) => {
      table.increments().unique()
      table.string('name', 255).notNullable()
      table.string('address', 255)
      table.string('district', 255)
      table.integer('cep').notNullable()
      table.string('city')
      table.string('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('armazens')
  }
}

module.exports = ArmazenSchema
