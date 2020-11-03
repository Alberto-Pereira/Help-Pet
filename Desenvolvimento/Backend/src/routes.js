const express = require('express');
const routes = express.Router();

const UserController = require('./controllers/UserController');
const DetailUserController = require('./controllers/DetailUserController');

// Rotas do usuario
// Listar usuarios
routes.get('/users', UserController.index);
// Criar novo usuario
routes.post('/newUser', UserController.store);
// Deletar um usuario
routes.delete('/deleteUser/:id', UserController.delete);
// Atualizar usuario
routes.put('/updateUser/:id', UserController.update)
// Mostrar detalhadamente um usuario
routes.get('/infoUser/:id', UserController.show);
// Inserir dados pessoais
routes.post('/detailUser/:id', DetailUserController.store);
// Mostrar dados pessoais
routes.get('/detailUser/:id', DetailUserController.show);


module.exports = routes;