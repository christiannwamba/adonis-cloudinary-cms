'use strict'

/*
|--------------------------------------------------------------------------
| Router
|--------------------------------------------------------------------------
|
| AdonisJs Router helps you in defining urls and their actions. It supports
| all major HTTP conventions to keep your routes file descriptive and
| clean.
|
| @example
| Route.get('/user', 'UserController.index')
| Route.post('/user', 'UserController.store')
| Route.resource('user', 'UserController')
*/

const Route = use('Route');

Route.get('/', 'PostController.index');

Route.get('/new', 'PostController.new');
Route.get('/post/:id', 'PostController.read');

Route.post('/create', 'PostController.create');

Route.get('/edit/:id', 'PostController.edit');
Route.post('/update', 'PostController.update');

Route.get('/delete/:id', 'PostController.delete');
