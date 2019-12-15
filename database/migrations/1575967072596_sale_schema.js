'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SaleSchema extends Schema {
  up () {
    this.create('sales', (table) => {
      table.increments().unique()
      table.integer('product_id')
        .unique()
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('products')
        .onUpdate('CASCADE')
      table.integer('client_id')
        .unique()
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('clients')
        .onUpdate('CASCADE')  
      table.integer('user_id')
        .unique()
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('user')
        .onUpdate('CASCADE')
      table.integer('armazen_id')
        .unique()
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('armazen_id')
        .onUpdate('CASCADE')
      table.integer('projects_id')
        .unique()
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('projects')
        .onUpdate('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('sales')
  }
}

module.exports = SaleSchema
