'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductAmountSchema extends Schema {
  up () {
    this.create('product_amounts', (table) => {
      table.increments().unique()
      table.integer('amount')
      table.string('product_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('amarzen_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('armazens')
        .onUpdate('CASCADE') 
      table.string('project_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('product_amounts')
  }
}

module.exports = ProductAmountSchema
