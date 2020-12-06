const connection = require("../database/connection");
const crypto = require("crypto");

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
  async update(req, res) {
    const { idUser } = req.params;
    const { password } = req.body;
    const user = await connection("usuario").where("id_usuario", idUser);
    const crypt = crypto.createHash("sha1").update(password).digest("hex");

    console.log(user, idUser);
    if (user.length == 0) {
      res.status(401).json("Usuario não exite!");
    } else {
      await connection("usuario").where("id_usuario", idUser).update({
        senha: crypt,
      });
      res.status(200).json("Atualização realizada com sucesso");
    }
  },
};
