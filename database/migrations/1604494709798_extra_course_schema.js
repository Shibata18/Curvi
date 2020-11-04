'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExtraCourseSchema extends Schema {
  up () {
    this.create('extra_courses', (table) => {
      table.increments()
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE').notNullable()
      table.string('courseNameExtra')
      table.string('courseLocal')
      table.string('courseExtraDescription')
      table.string('courseExtraPeriod')
      table.timestamps()
    })
  }

  down () {
    this.drop('extra_courses')
  }
}

module.exports = ExtraCourseSchema
