'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('email', 254).notNullable().unique()
      table.string('nome').notNullable()
      table.string('password', 100).notNullable()
      table.string('address').notNullable()
      table.string('telefone',20).notNullable()
      table.string('area_formacao').notNullable()
      table.string('profissao').notNullable()
      table.date('date_birth').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
