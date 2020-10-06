'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class SocialMedia extends Model {
    user(){
        return this.belongsToMany("App/Models/User",'user_email','email')
    }
}

module.exports = SocialMedia
