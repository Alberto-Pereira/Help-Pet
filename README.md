# Help!Pet REST API

A aplicação completa está contida no arquivo `src/server.js`.

A lista das rotas estão nos arquivos

## Instalação

    yarn install ou npm install

## Rodar a aplicação

    yarn dev ou npm run dev

# REST API

Está rest api

## Listar usuarios

### Requisição

`GET /users/`

### Response

    [
        {
            "id_usuario": Integer,
            "nome_usuario": String,
            "sobrenome_usuario": String,
            "email": String,
            "senha": String,
            "tipo_usuario": String
        }
    ]

## Adicionar um novo usuario

### Requisição

`POST /newUser/`

    {
        "name": String,
        "lastName": String,
        "email": String,
        "password": String,
        "typeUser": String
    }

### Resposta

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:30 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/1
    Content-Length: 36

    {
        "id":1,
        "name":"NomeUsuario",
        "password":sha1("Senha"),
        "typeUser": "NivelUsuario"
    }

## Detalhes do usuario

### Request

`GET /infoUser/idUser`

### Response

    HTTP/1.1 200 Ok
    Status: 200 Ok
    Connection: keep-alive
    Content-Type: application/json

    {
        "imagem_usuario":Base64("data:image/..."),
        "id_usuario":1,
        "nome_usuario":"NomeDoUsuario",
        "sobrenome": "SobrenomeDoUsuario",
        "email": "email@email.com",
        "telefone": "numero",
        "whatsapp": "numeroWpp",
        "telegram": "numeroTelegram"
    }

## Deletar Usuario (Não exclui exatamente muda de status)

### Request

`DELETE /deleteUser/idUser`

### Response

    HTTP/1.1 404 No Content
    Status: 204 No Content
    Connection: keep-alive
    Content-Type: application/json

## Atualizar usuário

### Request

`PUT /updateUser/idUser`

    {
        "name": "NomeUsuario",
        "lastName": "Sobrenome",
        "password": "Senha",
        "type_user": "A" || "D"
    }

### Response

    Status: 200 Ok
    Connection: keep-alive
    Content-Type: application/json

    [
        {
            "Success": "usuario atualizado"
        },
        {
            "user": {
                "nome_usuario": "NomeUsuario",
                "sobrenome_usuario": "Sobrenome",
                "email":"email@email.com",
                "tipo_usuario":"A",
                "senha":"sha1(password)"
            }
        }
    ]

---

## Detalhe do usuario

### Request

`GET /detailUser/idUser`

### Response

    Status: 200 Ok
    Connection: keep-alive
    Content-Type: application/json

    [
        {
            "imagem_usuario"base64(...),
            "cpf": 11111111111,
            "id_usuario_dados_fk":"idUser",
            "telefone":"Numero",
            "whatsapp":"NumeroWpp",
            "telegram":"NumeroTelegram",
        }
    ]

## Adicionar Detalhes do usuario

### Request

`POST /detailUser/idUser`

    [
        {
            "img_user"base64(...),
            "cpf": 11111111111,
            "id_usuario_dados_fk":"idUser",
            "fone":"Numero",
            "whatsapp":"NumeroWpp",
            "telegram":"NumeroTelegram",
        }
    ]

### Response

    [
        {
            "imagem_usuario"base64(...),
            "cpf": 11111111111,
            "id_usuario_dados_fk":"idUser",
            "telefone":"Numero",
            "whatsapp":"NumeroWpp",
            "telegram":"NumeroTelegram",
        }
    ]

## Deletar Detalhes do usuario

### Request

`PUT /detailUser/idUser`

    [
        {
            "img_user"base64(...),
            "cpf": 11111111111,
            "id_usuario_dados_fk":"idUser",
            "fone":"Numero",
            "whatsapp":"NumeroWpp",
            "telegram":"NumeroTelegram",
        }
    ]

### Response

    [
        {
            "imagem_usuario"base64(...),
            "cpf": 11111111111,
            "id_usuario_dados_fk":"idUser",
            "telefone":"Numero",
            "whatsapp":"NumeroWpp",
            "telegram":"NumeroTelegram",
        }
    ]

---

## Login usuario

### Request

`POST /loginUser`

    {
        "email":"email@email.com",
        "password":"senha"
    }

### Response

    [
        {
            "id_usuario":Number(idUser),
            "nome_usuario":"NomeUsuario",
            "sobrenome_usuario":"Sobrenome",
            "email":"email@email.com",
            "tipo_usuario":"a"
        }
    ]

---

## Esqueceu a senha

### Request

`POST /forgotPassword`

    {
        "cpf": "11111111111",
        "fone": "telefone"
    }

### Response

    {
        "idUser": Number("Identificador do usuario")
    }

---

## Cadastrar Endereço

### Request

`/newAdress/idUser`

    {
        "cep": "11111111",
        "street":"nomeRua",
        "residencialNumber": "numeroRua",
        "complement": "complemento",
        "district": "Bairro/Setor",
        "city": "Cidade",
        "state": "estado"
    }

### Response

    {
        "success":"endereço cadastrado"
    }

## Mostrar endereço

### Request

`/infoAdress/idUser`

### Resonse

    {
        "cep": "11111111",
        "id_usuario_endereco_fk": idUsuario,
        "rua":"rua",
        "num_residencia":"numero",
        "complemento":"complemento",
        "bairro":"bairro/setor",
        "cidade":"cidade",
        "estado": "estado"
    }

## Atualizar endereço

### Request

`/updateAdress/idUser`

    {
        "cep": "11111111",
        "street":"nomeRua",
        "residencialNumber": "numeroRua",
        "complement": "complemento",
        "district": "Bairro/Setor",
        "city": "Cidade",
        "state": "estado"
    }

### Response

    "Endereço atualizado com sucesso!"

## Deletar endereço

### request

`/deleteAdress/idUser`

### response

    Status: 204 No Content
    Connection: keep-alive
    Content-Type: application/json

---

# Pets

## Criar Pets

### Request

`/newPet/idUser`

    {
        "img_pet": base64(""),
        "namePet": "nomePet",
        "sexPet": "sexoPet",
        "colorPet": "corPet",
        "collarNumber": Number(RGA),
        "description": "Descrição",
        "location": coordenadas[X,Y],
        "status": estado('N'),
        "breed": "raça"
    }

### Response

    {
        "idPet": Number(identificadorPet)
    }

## Deletar Pets

### Request

`/deletePet/idUser`

    {
        "idPet":Number(identificadorPet)
    }

### Response

    Status: 204 No Content
    Connection: keep-alive

## Listar Todos os Pet

### Request

`/pets/idUser`

### Response

    [
        {
            "imagem_pet": base64(...),
            "id_pet": Number(idPet),
            "id_usuario_pet_fk": Number(idUser),
            "nome_pet": "NomePet",
            "raca_pet": "RaçaPet",
            "sexo_pet": "SexoPet",
            "cor_pet": "Cor",
            "numero_coleira": Number(RGA),
            "descricao_pet": "descrição",
            "longitude": coordenada(X),
            "latitude": coordenada(Y),
            "status_pet": "a"
        }
    ]

## Consultar um Pet

### Request

``

### Response

## Atualizar o Pet

### Request

``

### Response
