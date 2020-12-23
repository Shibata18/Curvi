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
        "grade"
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

  /**
   * Display a single experience.
   * GET users/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) { 
    const user = await User.findOrFail(params.id)
    return user
  }
  async findByEmail({ request }) {
    const user = await User.findByOrFail('email', request.header('email'))
    return user
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
        "grade"
      ])
      // if user exists don't save
        await user.merge(data)
        await user.save()

      // if user doesn't exist, proceeds with saving him in DB
     

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
  }
}

module.exports = UserController
