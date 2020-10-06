'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ExperienciaSchema extends Schema {
  up () {
    this.create('experiencias', (table) => {
      table.increments()
      table.string('user_email').unsigned().references('email').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('nome_empresa').notNullable()
      table.string('cargo').notNullable()
      table.string('atividade_exercida').notNullable()
      table.string('periodo').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('experiencias')
  }
}

module.exports = ExperienciaSchema
