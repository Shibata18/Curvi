'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments().unique()
      table.string('name', 255).notNullable()
      table.string('goal', 255).notNullable()
      table.string('email', 255).notNullable().unique()
      table.string('address', 255).notNullable()
      table.string('cellphone', 20)
      table.string('state', 4)
      table.string('city', 255)
      table.string('courseName').notNullable()
      table.string('courseSchool').notNullable()
      table.string('courseStartYear')
      table.string('courseEndYear')
      table.string('companyOccupation')
      table.string('companyName')
      table.string('companyStart')
      table.string('companyEnd')
      table.string('companyDescription')   
      table.string('courses')
      //table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
