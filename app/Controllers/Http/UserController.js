'use strict'
const User = use("App/Models/User");
// const Database = use("Database");

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with users
 */
class UserController {
  /**
   * Show a list of all users.
   * GET users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
    const user = await User.all();
    return user;
  }

  /**
   * Create/save a new experience.
   * POST users
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {

    try {
      // getting data passed within the request
      const data = request.only([
        "name",
        "age",
        "address",
        "city",
        "state",
        "cellphone",
        "email",
        "linkedln_link",
        "area",
        "area_level",
        "goal",
        "scholarity",
        "courseName",
        "courseSchool",
        "courseEndYear",
        "courses",
        "companyName",
        "companyOccupation",
        "companyDescription",
        "companyStartEnd",
        "cientificResearch",
        "feedback",
        "grade",
        "language",
        "language_level",
        "companyNameVolunteer",
        "companyOccupationVolunteer",
        "companyDescriptionVolunteer",
        "companyStartEndVolunteer",
      ])
      // looking for user in database
      const userExists = await User.findBy('email', data.email)

      // if user exists don't save
      if (userExists) {
        return response
          .status(400)
          .send({ message: { error: 'Usuário já cadastrado' } })
      }

      // if user doesn't exist, proceeds with saving him in DB
      const user = await User.create(data)

      return user
    } catch (err) {
      return response
        .status(err.status)
        .send(err)
    }
  }
  async findByEmail({ request,response }) {
    try {
      const user = await User.findByOrFail('email', request.header('email'))
      return user
    } catch (error) {
      return response
        .status(404)
        .send({message:"Usuário não encontrado"})
    }
  }

    /**
   * Update experience details.
   * PUT or PATCH users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
    try {
      const user = await User.findByOrFail('email', request.header('email'))
      // getting data passed within the request
      const data = request.only([
        "name",
        "age",
        "address",
        "city",
        "state",
        "cellphone",
        "email",
        "linkedln_link",
        "area",
        "area_level",
        "goal",
        "scholarity",
        "courseName",
        "courseSchool",
        "courseEndYear",
        "courses",
        "companyName",
        "companyOccupation",
        "companyDescription",
        "companyStartEnd",
        "cientificResearch",
        "feedback",
        "grade",
        "language",
        "language_level",
        "companyNameVolunteer",
        "companyOccupationVolunteer",
        "companyDescriptionVolunteer",
        "companyStartEndVolunteer",
      ])
      
        await user.merge(data)
        await user.save()
     

      return user
    } catch (err) {
      return response
        .status(404)
        .send({message:"Usuário não encontrado"})
    }
  }

  /**
   * Delete a experience with id.
   * DELETE users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
    try {
      const user = await User.findByOrFail('email', request.header('email'))
      await user.delete()
      return response.status(202).send({message:"Deletado Com sucesso"})
    } catch (error) {
      return response
        .status(404)
        .send({message:"Usuário não encontrado"})
    }
  }
}

module.exports = UserController
