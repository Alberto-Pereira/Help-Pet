const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection("pet").from("animais_perdidos").count();

    const pets = await connection
      .select(
        "pet.id_pet",
        "usuario.id_usuario",
        "pet.imagem_pet",
        "pet.nome_pet",
        "pet.raca_pet",
        "pet.sexo_pet",
        "pet.cor_pet",
        "pet.numero_coleira",
        "pet.descricao_pet",
        "pet.longitude",
        "pet.latitude",
        "dados_pessoais.imagem_usuario",
        "dados_pessoais.telefone",
        "dados_pessoais.whatsapp",
        "dados_pessoais.telegram",
        "usuario.nome_usuario",
        "usuario.sobrenome_usuario"
      )
      .from("pet")
      .leftJoin(
        "dados_pessoais",
        "pet.id_usuario_pet_fk",
        "dados_pessoais.id_usuario_dados_fk"
      )
      .leftJoin("usuario", "pet.id_usuario_pet_fk", "usuario.id_usuario")
      .where("pet.status_pet", "d")
      .limit(10)
      .offset((page - 1) * 10);

    res.header("X-Total-Count", count["count(*)"]);

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
      if (response == 1) {
        res.status(200).json({ success: "pet está desaparecido!" });
      } else {
        res.status(400).json({ error: "pet não foi modificado!" });
      }
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
