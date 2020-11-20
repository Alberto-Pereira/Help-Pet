const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const pets = await connection("pet").from("animais_perdidos");

    if (pets.length == 0) {
      res.status(200).json("Nenhum pet perdido");
    } else {
      res.status(200).json(pets);
    }
  },
  async update(req, res) {
    const { idUser } = req.params;
    const { idPet } = req.body;

    const user = await connection("usuario").where("id_usuario", idUser);
    if (user.length != 0) {
      const response = await connection("pet")
        .where("id_pet", idPet)
        .andWhere("id_usuario_pet_fk", idUser)
        .update({
          status_pet: "d",
          latitude: 0,
          longitude: 0,
        });
      res.status(200).json({ idPet: response });
    } else {
      res.status(404).json({ error: "Usuario não existe" });
    }
  },
  async delete(req, res) {
    const { idUser } = req.params;
    const { idPet, location } = req.body;

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
        .update({
          status_pet: "l",
          latitude: location[0],
          longitude: location[1],
        });

      if (result == 0) {
        res.status(400).send("Pet não encontrado!");
      } else {
        return res.status(204).json("Pet localizado");
      }
    } else {
      res.status(400).json("Usuario não tem este pet");
    }
  },
};
