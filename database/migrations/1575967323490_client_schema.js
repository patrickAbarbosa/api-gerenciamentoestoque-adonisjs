'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

/*
name,
email,
phone,
cpf,
dataNascimento,
*/
class ClientSchema extends Schema {
  up () {
    this.create('clients', (table) => {
      table.increments()
      table.string('name').notNullable()
      table.string('email')
      table.string('phone')
      table.string('cpf')notNullable()
      table.string('date_of_birth')
      table.string('address', 255)
			table.integer('number')
			table.string('district', 255)
			table.integer('zipcode').notNullable()
			table.integer('complement')
			table.string('city')
      table.timestamps()
    })
  }

  down () {
    this.drop('clients')
  }
}

module.exports = ClientSchema
