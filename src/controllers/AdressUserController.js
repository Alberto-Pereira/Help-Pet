const connection = require("../database/connection");

module.exports = {
  async store(req, res) {
    const { idUser } = req.params;
    const {
      cep,
      street,
      residenceNumber,
      complement,
      district,
      city,
      state,
    } = req.body;

    const user = await connection("usuario").where("id_usuario", idUser);

    if (user.length == 0) {
      res.status(400).json({ error: "Usuário não existe!" });
    } else {
      const userAdress = await connection("endereco_usuario").where(
        "id_usuario_endereco_fk",
        idUser
      );

      if (userAdress.length == 0) {
        const response = await connection("endereco_usuario").insert({
          cep: cep,
          id_usuario_endereco_fk: idUser,
          rua: street,
          num_residencia: residenceNumber,
          complemento: complement,
          bairro: district,
          cidade: city,
          estado: state,
        });
        res.status(200).json(response[0]);
      } else {
        res.status(400).json("Endereço não criado");
      }
    }
  },

  async show(req, res) {
    const { idUser } = req.params;

    const userAdress = await connection("endereco_usuario").where(
      "id_usuario_endereco_fk",
      idUser
    );

    if (userAdress.length == 0) {
      res.status(400).json("Endereço não encontrado!");
    } else if (userAdress > 1) {
      res
        .status(202)
        .json([{ error: "Mais de um endereço cadastrado" }, userAdress]);
    } else {
      res.status(200).json(userAdress[0]);
    }
  },

  async delete(req, res) {
    const { idUser } = req.params;

    const userAdress = await connection("endereco_usuario").where(
      "id_usuario_endereco_fk",
      idUser
    );

    if (userAdress.length != 0) {
      const result = await connection("endereco_usuario")
        .where("id_usuario_endereco_fk", idUser)
        .del();

      await connection.raw("ALTER TABLE endereco_usuario AUTO_INCREMENT = 0;");

      if (result == 0) {
        res.status(400).send("Endereço não excluido!");
      } else {
        return res.status(204).json("Endereço excluido");
      }
    } else {
      res.status(400).json("Usuario não tem este endereço");
    }
  },

  async update(req, res) {
    const { idUser } = req.params;
    const {
      cep,
      street,
      residenceNumber,
      complement,
      district,
      city,
      state,
    } = req.body;

    const user = await connection("usuario").where("id_usuario", idUser);

    if (user.length == 0) {
      res.status(400).json({ error: "Usuário não existe!" });
    } else {
      const userAdress = await connection("endereco_usuario").where(
        "id_usuario_endereco_fk",
        idUser
      );

      if (userAdress.length == 0) {
        res.status(400).json({ error: "Endereço de usuário não existe!" });
      } else {
        const result = await connection("endereco_usuario")
          .where("id_usuario_endereco_fk", idUser)
          .update({
            cep: cep,
            id_usuario_endereco_fk: idUser,
            rua: street,
            num_residencia: residenceNumber,
            complemento: complement,
            bairro: district,
            cidade: city,
            estado: state,
          });

        if (result == 1) {
          res.status(200).json("Endereço atualizado com sucesso!");
        } else {
          res.status(400).json("Endereço não atualizado!");
        }
      }
    }
  },
};
