'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SocialMediaSchema extends Schema {
  up () {
    this.create('social_medias', (table) => {
      table.increments()
      table
      .integer('user_id')
      .unsigned()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE').notNullable()
      table.string("instagram")
      table.string("facebook")
      table.string("linkedin")
      table.string("telegram")
      table.string("pinterest")
      table.string("github")
      table.timestamps()
    })
  }

  down () {
    this.drop('social_medias')
  }
}

module.exports = SocialMediaSchema
