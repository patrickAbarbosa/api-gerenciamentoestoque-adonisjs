'use strict'

const User = use('App/Models/User')

class AuthController {
  async register({ request }){
    console.log("Register")
    const data = request.only(['username','email', 'password'])
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
