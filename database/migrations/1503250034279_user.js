'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments().unique()
      table.string('name', 255).notNullable()
      table.integer("age").notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('address', 255).notNullable()
      table.string('cellphone', 20).notNullable()
      table.string('state', 4).notNullable()
      table.string('city', 255).notNullable()
      table.string('area',100).notNullable()
      table.string('goal', 255).notNullable()
      table.string('area_level').notNullable()
      table.string('scholarity').notNullable()
      table.string('courseName').notNullable()
      table.string('courseSchool').notNullable()
      table.string('linkedln_link')
      table.string('courseEndYear')
      table.string('companyOccupation')
      table.string('companyName')
      table.string('companyStartEnd')
      table.string('companyDescription')   
      table.string('courses')
      table.string('feedback').notNullable()
      table.integer("grade").notNullable()
      //table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
