'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments().unique()
      table.string('fullname', 255).notNullable()
      table.string('occupation', 255).notNullable()
      table.string('email', 255).notNullable()
      table.string('address', 255).notNullable()
      table.string('mobilephone', 20)
      table.string('homephone', 20)
      table.string('birthday', 25)
      //table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
