const connection = require("../database/connection");
module.exports = {
  async index(req, res) {
    const users = await connection("usuario").select("*");
    res.json(users);
  },
  async store(req, res) {
    const { name, lastName, email, password, typeUser } = req.body;

    const emails = await connection("usuario").where("email", email);

    console.log(emails);
    if (emails.length == 0) {
      await connection("usuario").insert({
        'nome_usuario': name,
        'sobrenome_usuario': lastName,
        'email': email,
        'senha': password,
        'tipo_usuario': typeUser,
      });
      res.status(201).json({ name, lastName, email, password, typeUser });
    } else {
      res.json("Email ja cadastrado");
    }
  },
  async delete(req, res) {
    // Coleta o Id pelos parametros da requisição
    const { id } = req.params;

    // Deleta o usuario por identificador
    const user = await connection("usuario").where("id_usuario", id);
    console.log(user);
    if(user.length == 0){
      await connection('usuario').where('id_usuario', user[0].id_usuario).delete();
      return res.status(204).send();
    }else{
      return res.status(400).send();
    }
    // Resetar a contagem do auto_increment
    await connection.raw("ALTER TABLE usuario AUTO_INCREMENT = 0;")
    // Confirmação da deleção
    
  },
  async show(req, res) {
    const { id } = req.params;

    const user = await connection('usuario')
      .select('*')
      .from('perfil_usuario')
      .where('id_usuario', id);

    res.json(user);
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, lastName, email, password, typeUser } = req.body;

    const user = {
      'nome_usuario': name,
      'sobrenome_usuario': lastName,
      email,
      'senha': password,
      'tipo_usuario': typeUser,
    }

    const updated = await connection('usuario').where('id_usuario', id).update(user)
    if (updated == 0) {
      res.status(406).send('Usuario não existe')
    } else {
      res.json(updated);
    }
  }
};
