'use strict'
const User = use('App/Models/User');
const SocialMedia = use('App/Models/SocialMedia');
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with socialmedias
 */
class SocialMediaController {
  /**
   * Show a list of all socialmedias.
   * GET socialmedias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new socialmedia.
   * GET socialmedias/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({ request, response, view }) {
  }

  /**
   * Create/save a new socialmedia.
   * POST socialmedias
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({ request, response }) {
    const user_email = await User.findByOrFail("email", request.header('email'))
    if (user_email) {
      const data = request.only([
        "user_email",
        "facebook",
        "instagram",
        "telegram",
        "whatsapp",
        "linkedin",
        "github",
        "outros",
      ]);
      const social = await SocialMedia.create(data);
      return social;
    } else {
      return response.json({ "message": 'erro' })
    }

  }



  /**
   * Display a single socialmedia.
   * GET socialmedias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing socialmedia.
   * GET socialmedias/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({ params, request, response, view }) {
  }

  /**
   * Update socialmedia details.
   * PUT or PATCH socialmedias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({ params, request, response }) {
  }

  /**
   * Delete a socialmedia with id.
   * DELETE socialmedias/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({ params, request, response }) {
  }
}

module.exports = SocialMediaController
