const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const users = await connection("usuario").select("*");
    res.json(users);
  },
  async store(req, res) {
    const { name, lastName, email, password, typeUser } = req.body;
    // Coletar email
    const emails = await connection("usuario").where("email", email);
    // criptografando a senha
    const cryptPass = crypto.createHash("sha1").update(password).digest("hex");

    // Validação do cadastro
    if (emails.length == 0 && email.length != 0) {
      // inserindo no banco
      await connection("usuario").insert({
        nome_usuario: name,
        sobrenome_usuario: lastName,
        email,
        senha: cryptPass,
        tipo_usuario: typeUser,
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
    // Valida se tem usuario
    if (user.length != 0) {
      user[0].tipo_usuario = "D";
      // Resetar a contagem do auto_increment
      await connection.raw("ALTER TABLE usuario AUTO_INCREMENT = 0;");
      // Atualizar o usuario
      await connection("usuario").where("id_usuario", id).update(user[0]);
      return res.status(204).send("Usuario desativado");
    } else {
      return res.status(400).send("Usuario não encontrado");
    }
  },
  async show(req, res) {
    const { id } = req.params;

    const user = await connection("usuario")
      .select("*")
      .from("usuario")
      .where("id_usuario", id);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send("Não foi possivel encontrar o usuario");
    }
  },
  async update(req, res) {
    const { id } = req.params;
    const { name, lastName, email, password, typeUser } = req.body;

    const user = {
      nome_usuario: name,
      sobrenome_usuario: lastName,
      email,
      senha: crypto.createHash("sha1").update(password).digest("hex"),
      tipo_usuario: typeUser,
    };

    const emails = await connection("usuario")
      .where("email", email)
      .whereNot("id_usuario", id);

    if (emails.length == 0) { 
     
      const updated = await connection("usuario")
        .where("id_usuario", id)
        .update(user);
      if (updated == 0) {
        res.status(406).send("Usuario não existe");
      } else {
        res.json([{ success: "usuario atualizado" }, { user }]);
      }
    } else {
      res.status(400).json("Email ja em uso");
    }
  },
};
