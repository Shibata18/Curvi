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

/* Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
}) */
Route.post('/api/user','UserController.store')
Route.get('/api/user','UserController.findByEmail')
Route.put('/api/user','UserController.update')
//Route.get('/user/:id','UserController.show')
// Route.get('/user','UserController.index')
// https://preview.adonisjs.com/guides/auth/api-guard