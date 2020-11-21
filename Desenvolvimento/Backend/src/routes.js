const express = require("express");
const routes = express.Router();

const UserController = require("./controllers/UserController");
const DetailUserController = require("./controllers/DetailUserController");
const SessionController = require("./controllers/SessionController");
const PetController = require("./controllers/PetController");
const AdoptController = require("./controllers/AdoptController");
const MissingController = require("./controllers/MissingController");

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
routes.post("/loginUser", SessionController.show);

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

// Adoção do pet
// Listar os pets para doação
routes.get("/adoptPet", AdoptController.index);
// Pet para adoção
routes.post("/adoptPet/:idUser", AdoptController.store);
// Adoção do pet
routes.put("/adoptPet/:idUser", AdoptController.update);

// Pet perdido
// Listar pets perdidos
routes.get("/missingPet", MissingController.index);
// Informar pet perdido
routes.put("/missingPet/:idUser", MissingController.update);
// Pet localizado
routes.delete("/missingPet/:idUser", MissingController.delete);

module.exports = routes;