'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DegreeSchema extends Schema {
  up () {
    this.create('degrees', (table) => {
      table.increments()
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE').notNullable()
      table.string('courseName').notNullable()
      table.string('school').notNullable()
      table.string('courseDescription')
      table.string('periodCourse')
      table.timestamps()
    })
  }

  down () {
    this.drop('degrees')
  }
}

module.exports = DegreeSchema
