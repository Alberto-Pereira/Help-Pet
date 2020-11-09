const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const DetailUserController = require("./controllers/DetailUserController");
const SessionController = require("./controllers/SessionController");
const PetController = require("./controllers/PetController");

// Rotas do usuario
// Listar usuarios
routes.get("/users", UserController.index);
// Criar novo usuario
routes.post("/newUser", UserController.store);
// Deletar um usuario
routes.delete("/deleteUser/:id", UserController.delete);
// Atualizar usuario
routes.put("/updateUser/:id", UserController.update);
// Mostrar detalhadamente um usuario
routes.get("/infoUser/:id", UserController.show);
// Inserir dados pessoais
routes.post("/detailUser/:id", DetailUserController.store);
// Mostrar dados pessoais
routes.get("/detailUser/:id", DetailUserController.show);
// Login do usuario
routes.get("/loginUser", SessionController.show);

// PETS
// Cadastrar pets
routes.post("/newPet/:idUser", PetController.store);
// Deletar pet
routes.delete("/deletePet/:idUser", PetController.delete);
// Listar pets
routes.get("/pets/:idUser", PetController.index);
// Mostrar um pet
routes.get("/pet/:idUser", PetController.show);
// Atualizar um pet
routes.put("/updatePet/:idUser", PetController.update);

module.exports = routes;
