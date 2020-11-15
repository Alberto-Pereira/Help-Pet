const connection = require("../database/connection");

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    const [count] = await connection("pet").count();

    const pets = await connection("pet")
      .where("status_pet", "=", "a")
      .limit(10)
      .offset((page - 1) * 10);

    res.header("X-Total-Count", count["count(*)"]);

    res.json(pets);
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
      breed,
    } = req.body;

    const user = await connection("usuario").where("id_usuario", idUser);
    if (user.length != 0) {
      if (!isNaN(location[0]) && !isNaN(location[1])) {
        await connection("pet").insert({
          imagem_pet: img_pet,
          id_usuario_pet_fk: idUser,
          nome_pet: namePet,
          sexo_pet: sexPet,
          cor_pet: colorPet,
          numero_coleira: collarNumber,
          descricao_pet: description,
          latitude: location[0],
          longitude: location[1],
          status_pet: "a",
          raca_pet: breed,
        });
        res.status(200).json({ success: "pet disponibilizado para adoção" });
      } else {
        res.status(400).json({ error: "requisição escrita errado" });
      }
    } else {
      res.status(404).json({ error: "Usuario não existe" });
    }
  },
  async update(req, res) {
    const { idUser } = req.params;
    const { userAdopt, idPet } = req.body;

    if (idUser == userAdopt) {
      return res
        .status(400)
        .json({ error: "ambos identificadores são iguais" });
    }
    const user = await connection("usuario").where("id_usuario", idUser);
    user.push(await connection("usuario").where("id_usuario", userAdopt));

    const pet = await connection("pet")
      .where("id_usuario_pet_fk", idUser)
      .andWhere("id_pet", idPet);

    console.log(user.length);
    if (user.length == 2) {
      if (pet.length == 1) {
        if (pet[0].status_pet != "a") {
          res.status(400).json({ error: "Pet não está para adoção" });
        }
        const response = await connection("pet")
          .where("id_usuario_pet_fk", idUser)
          .andWhere("id_pet", idPet)
          .update({
            id_usuario_pet_fk: userAdopt,
            status_pet: "n",
          });
        res.status(200).json(response);
      } else {
        res.status(400).json({ error: "Pet não encontrado" });
      }
    } else {
      res.status(400).json({ error: "Usuarios não encontrados" });
    }
  },
};
