'use strict'

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})
Route.get('/user','UserController.index').middleware('auth:jwt')// Rota para listar todos os usuários
Route.get('/user/:id','UserController.show').middleware('auth:jwt')// Rota para listar um usuário no sistema
Route.post('/sessions','UserController.login')//Rota para logar no sistema
Route.get('/resume','UserController.allData')//Rota para logar no sistema
Route.post('/user','UserController.store')//Rota para cadastrar o usuário no sistema
Route.put('/user','UserController.update').middleware('auth:jwt')//Rota para atualizar os dados de um usuário no sistema
Route.post('/course','CursoController.store')//Rota para cadastrar cursos
Route.post('/experiencia','ExperienciaController.store')//Rota para cadastrar Experiencia
Route.post('/objetivo','ObjetivoController.store')//Rota para cadastrar os Objetivos
Route.post('/socialmedia','SocialMediaController.store')//Rota para cadastrar os Objetivos
//Route.get('/perfil','UserController.profile').middleware('auth:jwt')//Rota para visualizar os dados de um usuário no sistema