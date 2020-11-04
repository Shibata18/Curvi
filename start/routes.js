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
  return { greeting: 'Hello world in JSON' }
})
Route.post('/user','UserController.store')
//Route.get('/user','UserController.index')
Route.get('/user/:id','UserController.show')
Route.post('/user/:id/image','ImageController.store')
Route.get('images/:path', 'ImageController.show')
Route.post('/experience','ExperienceController.store')
Route.post('/degree','DegreeController.store')
Route.post('/extraCourse','ExtraCourseController.store')
Route.post('/socialMedia','SocialMediaController.store')
Route.post('/goal','GoalController.store')