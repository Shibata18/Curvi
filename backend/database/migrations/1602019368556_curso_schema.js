'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CursoSchema extends Schema {
  up () {
    this.create('cursos', (table) => {
      table.increments()
      table.string('user_email').unsigned().references('email').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('nome_curso').notNullable()
      table.string('instituicao').notNullable()
      table.string('ano_conclusao',20).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('cursos')
  }
}

module.exports = CursoSchema
