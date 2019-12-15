'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProjectUserSchema extends Schema {
  up () {
    this.create('project_users', (table) => {
      table.integer('project_id')
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
    this.drop('project_users')
  }
}

module.exports = ProjectUserSchema
