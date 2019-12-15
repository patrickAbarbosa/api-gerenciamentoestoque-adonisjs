'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
  up () {
    this.create('products', (table) => {
      table.increments().unique()
      table.string('name', 255).notNullable()
      table.boolean('visible').notNullable()
      table.float('price')
      table.float('purchase_price')
      table.string('category_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('categories')
        .onUpdate('CASCADE')
      table.string('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('products')
  }
}

module.exports = ProductSchema
