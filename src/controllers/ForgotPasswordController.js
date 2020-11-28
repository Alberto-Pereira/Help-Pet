const connection = require("../database/connection");

module.exports = {
  async show(req, res) {
    const { cpf, fone } = req.body;
    const userDatail = await connection("dados_pessoais")
      .where("cpf", cpf)
      .where("telefone", fone);

    if (userDatail.length != 0) {
      res.status(200).json({ idUser: userDatail[0].id_usuario_dados_fk });
    } else {
      res.status(401).json("Usuario incorreto!");
    }
  },
};
