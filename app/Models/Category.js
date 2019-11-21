'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Category extends Model {
  static getCategories = async (user_id) =>{
    const nCategoriesUser =  await this.query()
                                      .where('user_id', user_id)
                                      
    const response = {
      total: await nCategoriesUser,
      data: await this.query().has('user_id', user_id)
    }
    return await response
  }

  static getCategoriesByPage = async (page) =>{
    if(!page)
      page = 0
    const response = {
      total: await this.getCount(),
      data: await this.query()
                      .paginate(page)
    }
    return await response
  }
}

module.exports = Category
