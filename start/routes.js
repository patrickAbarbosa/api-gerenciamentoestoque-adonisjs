'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { message: 'Hello world in AdonisJs API' }
})

Route.post('/register', 'AuthController.register')
Route.post('/authenticate', 'AuthController.authenticate')
Route.post('/category', 'CategoryController.create')
Route.get('/category', 'CategoryController.index')
Route.put('/category/:id?', 'CategoryController.update')
Route.get('/product', 'ProductController.index')