const connection = require('../database/connection');
module.exports = {
  async store(req, res) {
    const { id } = req.params;
    const { img_user, cpf, fone, whatsapp, telegram } = req.body;

    const cpfs = await connection('dados_pessoais').where('cpf', cpf);

    if (cpfs.length == 0) {
      await connection('dados_pessoais').insert({
        'imagem_usuario': img_user,
        'id_usuario_dados_fk': id,
        cpf,
        'telefone': fone,
        'whatsapp': whatsapp,
        'telegram': telegram,
      })
      res.json({ img_user, cpf, fone, whatsapp, telefone })
    } else {
      res.json("CPF já cadastrado!")
    }
  },
  async show(req, res) {
    const { id } = req.params;

    const personalData = await connection('dados_pessoais')
      .select('*')
      .where('id_usuario_dados_fk', id);

    res.json(personalData);
  }
}