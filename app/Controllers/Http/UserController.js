'use strict'
const User = use("App/Models/User");
const Database = use("Database");

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
    const user = await await Database
      .table('users')
      .innerJoin('degrees', 'users.id', 'degrees.user_id')
      .innerJoin('experiences', 'users.id', 'experiences.user_id')
      .innerJoin('social_medias', 'users.id', 'social_medias.user_id')
      .innerJoin('extra_courses', 'users.id', 'extra_courses.user_id')
    return user
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
    const data = request.only([
      "name", 
      "goal", 
      "email", 
      "address", 
      "cellphone", 
      "state", 
      "city",
      "courseName",
      "courseSchool",
      "courseStartYear",
      "courseEndYear",
      "companyOccupation",
      "companyName",
      "companyStart",
      "companyEnd",
      "companyDescription",
      "courses"
    ])
    const user = await User.create(data)
    return user
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
    //await user.loadMany(['experience', 'degree', 'extraCourse', 'socialMedia', 'images'])
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
