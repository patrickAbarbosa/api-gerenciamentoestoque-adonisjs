'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments().unique()
      table.string('name', 255).notNullable()
      table.integer('amount').notNullable()
      table.float('price_sale')
      table.float('price_purchase').notNullable()
      table.boolean('visible').notNullable()
      table.string('category_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('category')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('armazen_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('armazen')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
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
    this.drop('products')
  }
}

module.exports = ProductSchema
