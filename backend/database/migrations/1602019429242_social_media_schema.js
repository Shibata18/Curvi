'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RedeSocialSchema extends Schema {
  up () {
    this.create('social_medias', (table) => {
      table.increments()
      table.string('user_email').unsigned().references('email').inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
      table.string('facebook')
      table.string('instagram')
      table.string('telegram')
      table.string('whatsapp')
      table.string('linkedin')
      table.string('github')
      table.string('outros')
      table.timestamps()
    })
  }

  down () {
    this.drop('rede_socials')
  }
}

module.exports = RedeSocialSchema
