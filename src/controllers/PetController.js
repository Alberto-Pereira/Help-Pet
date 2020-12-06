const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { idUser } = req.params;

    const pets = await connection("pet").where("id_usuario_pet_fk", idUser);

    if (pets.length == 0) {
      res.status(200).json("Sem pets");
    } else {
      res.status(200).json(pets);
    }
  },
  async store(req, res) {
    const { idUser } = req.params;
    const {
      img_pet,
      namePet,
      sexPet,
      colorPet,
      collarNumber,
      description,
      location,
      status,
      breed,
    } = req.body;

    const user = await connection("usuario").where("id_usuario", idUser);

    if (status == "n" || status == "a" || status == "d" || status == "l") {
      if (user.length != 0) {
        if (!isNaN(collarNumber)) {
          const response = await connection("pet").insert({
            imagem_pet: img_pet,
            id_usuario_pet_fk: idUser,
            nome_pet: namePet,
            sexo_pet: sexPet,
            cor_pet: colorPet,
            numero_coleira: collarNumber,
            descricao_pet: description,
            latitude: location[0],
            longitude: location[1],
            status_pet: status,
            raca_pet: breed,
          });
          res.status(200).json({ idPet: response[0] });
        } else {
          res.status(400).json({ error: "requisição escrita errado" });
        }
      } else {
        res.status(404).json({ error: "Usuario não existe" });
      }
    } else {
      res.status(400).json({ error: "Status não existe" });
    }
  },
  async show(req, res) {
    const { idUser } = req.params;
    const { idPet } = req.query;

    const pet = await connection("pet")
      .where("id_pet", idPet)
      .andWhere("id_usuario_pet_fk", idUser);

    if (pet.length == 0) {
      res.status(400).json("Pet não encontrado!");
    } else if (pet.length > 1) {
      res.status(202).json([{ error: "Mais de um pet cadastrado" }, pet]);
    } else {
      res.status(200).json(pet[0]);
    }
  },
  async delete(req, res) {
    const { idUser } = req.params;
    const { idPet } = req.body;

    const petAndUser = await connection("pet")
      .select("*")
      .where("id_pet", idPet)
      .andWhere("id_usuario_pet_fk", idUser);

    if (petAndUser.length != 0) {
      // Deletando o pet
      const result = await connection("pet")
        .select("*")
        .where("id_pet", idPet)
        .andWhere("id_usuario_pet_fk", idUser)
        .del();

      // Resentado a contagem do auto increment
      await connection.raw("ALTER TABLE pet AUTO_INCREMENT = 0;");

      // Validando sucesso da requisição
      if (result == 0) {
        res.status(400).send("Pet não excluido!");
      } else {
        return res.status(204).json("Pet excluído");
      }
    } else {
      res.status(400).json("Usuario não tem este pet");
    }
  },
  async update(req, res) {
    const { idUser } = req.params;
    const {
      idPet,
      img_pet,
      namePet,
      sexPet,
      colorPet,
      collarNumber,
      description,
      location,
      status,
      breed,
    } = req.body;

    const user = await connection("usuario").where("id_usuario", idUser);

    if (user.length == 0) {
      res.status(400).json({ error: "Usuario não existe!" });
    } else {
      const pet = await connection("pet")
        .where("id_pet", idPet)
        .andWhere("id_usuario_pet_fk", idUser);

      if (pet.length == 0) {
        res.status(400).json({ error: "Pet não existe!" });
      } else {
        const result = await connection("pet")
          .where("id_pet", idPet)
          .andWhere("id_usuario_pet_fk", idUser)
          .update({
            id_pet: idPet,
            id_usuario_pet_fk: idUser,
            imagem_pet: img_pet,
            nome_pet: namePet,
            sexo_pet: sexPet,
            cor_pet: colorPet,
            numero_coleira: collarNumber,
            descricao_pet: description,
            longitude: location[0],
            latitude: location[1],
            status_pet: status,
            raca_pet: breed,
          });

        if (result == 1) {
          res.status(204).json("Pet atualizado!");
        } else {
          res.status(400).json("Pet não atualizado!");
        }
      }
    }
  },
};
