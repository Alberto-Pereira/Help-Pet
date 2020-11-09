const connection = require("../database/connection");
module.exports = {
  async store(req, res) {
    const { id } = req.params;
    const { img_user, cpf, fone, whatsapp, telegram } = req.body;

    const cpfs = await connection("dados_pessoais").where("cpf", cpf);
    const idUser = await connection("dados_pessoais").where(
      "id_usuario_dados_fk",
      id
    );
    if (cpfs.length == 0) {
      // Incluindo os detalhes do usuario
      idUser.length == 0
        ? await connection("dados_pessoais").insert({
            imagem_usuario: img_user,
            id_usuario_dados_fk: id,
            cpf,
            whatsapp,
            telegram,
            telefone: fone,
          })
        : res.status(401).json("dados pessoais ja cadastrado");
      res.json({ img_user, cpf, fone, whatsapp, fone });
    } else {
      res.json("CPF já cadastrado");
    }
  },
  async show(req, res) {
    const { id } = req.params;

    const personalData = await connection("dados_pessoais")
      .select("*")
      .where("id_usuario_dados_fk", id);

    res.json(personalData);
  },
};
