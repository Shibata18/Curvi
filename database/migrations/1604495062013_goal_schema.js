'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class GoalSchema extends Schema {
  up () {
    this.create('goals', (table) => {
      table.increments()
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE').notNullable()
      table.string('goalDescription').notNullable()
      table.string('skills').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('goals')
  }
}

module.exports = GoalSchema
