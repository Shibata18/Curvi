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
Route.get('/user','UserController.index').middleware('auth:jwt')// Rota para listar todos os usuários
Route.get('/user/:id','UserController.show').middleware('auth:jwt')// Rota para listar um usuário no sistema
Route.post('/sessions','UserController.login')//Rota para logar no sistema
Route.get('/resume','UserController.allData').middleware('auth:jwt')//Rota para logar no sistema
Route.post('/user','UserController.store')//Rota para cadastrar o usuário no sistema
Route.put('/user','UserController.update').middleware('auth:jwt')//Rota para atualizar os dados de um usuário no sistema
Route.post('/course','CursoController.store').middleware('auth:jwt')//Rota para cadastrar cursos
//Route.get('/perfil','UserController.profile').middleware('auth:jwt')//Rota para visualizar os dados de um usuário no sistema