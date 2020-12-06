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
            cpf: cpf,
            whatsapp: whatsapp,
            telegram: telegram,
            telefone: fone,
          })
        : res.status(401).json({ error: "Dados já cadastrados" });
      res.json({ img_user, cpf, fone, whatsapp, fone });
    } else {
      res.status().json("CPF já cadastrado");
    }
  },
  async show(req, res) {
    const { id } = req.params;

    const personalData = await connection("dados_pessoais")
      .select("*")
      .where("id_usuario_dados_fk", id);

    res.json(personalData[0]);
  },
  async update(req, res) {
    const { id } = req.params;
    const { img_user, cpf, fone, whatsapp, telegram } = req.body;

    const validCpf = await connection("dados_pessoais")
      .whereNot("id_usuario_dados_fk", id)
      .where("cpf", cpf);
    const idUser = await connection("dados_pessoais").where(
      "id_usuario_dados_fk",
      id
    );
    if (validCpf.length != 0) {
      res.status(401).json("CPF já ultilizado!");
    }
    // Atualizando os dados do usuario
    idUser.length != 0
      ? await connection("dados_pessoais")
          .where("id_usuario_dados_fk", id)
          .update({
            imagem_usuario: img_user,
            cpf: cpf,
            whatsapp: whatsapp,
            telegram: telegram,
            telefone: fone,
          })
      : res.status(401).json("dados pessoais não incluidos");
    res.json({ img_user, cpf, fone, whatsapp, fone });
  },
};
