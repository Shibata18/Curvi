'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ObjetivoSchema extends Schema {
  up () {
    this.create('objetivos', (table) => {
      table.increments()
      table.string('user_email').unsigned().references('email').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('objetivo').notNullable()
      table.string('habilidades').notNullable()
      table.string('motivacao').notNullable()
      table.string('hobbies').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('objetivos')
  }
}

module.exports = ObjetivoSchema
