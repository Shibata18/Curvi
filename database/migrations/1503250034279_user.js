'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments().unique()
      table.string('name', 255).notNullable()
      table.string('goal', 255).notNullable()
      table.string('email', 255).notNullable()
      table.string('address', 255).notNullable()
      table.string('cellphone', 20)
      table.string('state', 4)
      table.string('city', 255)
      //table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
