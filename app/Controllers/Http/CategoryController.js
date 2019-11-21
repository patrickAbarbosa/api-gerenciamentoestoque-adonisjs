'use strict'

const User = use('App/Models/User')
const Category = use('App/Models/Category')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categories
 */
class CategoryController {
  /**
   * Show a list of all categories.
   * GET categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, auth }) {
    const user = await auth.getUser()
    const categories = await Category.getCategories(user.id)
    
    return categories
  }

  /**
   * Render a form to be used for creating a new category.
   * GET categories/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, auth }) {
    /* testes
    console.log("category -> create")
    const authorization = request.request.headers
    console.log('ip confiável', request.ip())
    console.log('ips', request.ips())
    console.log('hostname', request.hostname())
    console.log('get', request.get())
    console.log('post', request.post())
    console.log('all', request.all())
    console.log('raw', request.raw())
    const user = await auth.getUser()
    console.log('user by token:', user)
    const users = await User.all()
    return await response.send(users)
    */

    const body = request.all()
    const user = await auth.getUser()
    //console.log(user.$attributes)
    const category = new Category()

    category.name = body.name
    category.user_id = user.$attributes.id
    return category.save()
  }

  /**
   * Create/save a new category.
   * POST categories
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single category.
   * GET categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing category.
   * GET categories/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update category details.
   * PUT or PATCH categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    //console.log('params: ', params)
    //console.log('request all: ', request.all())
    const { name } = request.all()
    const category = await Category.findBy('id', params.id)
    category.name = name
    
    let res
    try {
      res = await category.save()
      response.status(202).send(category)
    }
    catch{
      return response.status(406).send({
        erro: "[trow_exceotion] x0001 - Update category not executed.",
        message: "O campo name já se encontra no banco de dados!"
      })
    }
  }

  /**
   * Delete a category with id.
   * DELETE categories/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    
  }
}

module.exports = CategoryController
