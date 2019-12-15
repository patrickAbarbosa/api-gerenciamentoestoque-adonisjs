'use strict'

const User = use('App/Models/User')
/*
 table.increments().unique()
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('fullname').notNullable()
      table.string('thumbnail')
      table.string('phone')
      table.integer('role')
      table.string('password', 60).notNullable()
      table.timestamps()
*/

class AuthController {
  async register({ request }){
    console.log("Register")
    const data = request.only(['username', 'fullname', 'email', 'password'])
    console.log("Data", data)
    const user = await User.create(data)

    return user
  }
  async authenticate({ request, auth }){
    console.log("Authenticate")
    console.log("request: ", request)
    const { email, password } = request.all()

    const token = await auth.attempt(email, password)

    return token
  }
}

module.exports = AuthController
