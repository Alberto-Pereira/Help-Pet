# Help!Pet REST API

A aplicação completa está contida no arquivo `src/server.js`.

As rotas estão localizadas em `src/routes.js`

## Pré Requisitos

- Banco de dados: MariaDB ou MySQL
- Ter o Node instalado na versão LTS
- Conhecer os comandos `npm install` e `npm run`
- Clonar o repositório
- Entrar via terminal o `Desenvolvimento/backend`

## Instalação

    yarn ou npm install

## Rodar a aplicação em standalone

No arquivo `knexfile.js` adicione as informações do seu banco de dados da mariaDB ou mySQL para rodar a aplicação na propria pasta `Desenvolvimento` temos o SQL para realizar a inseção dos dados gerados pelas requisições posteriores.

Para iniciar o sevidor digite o comando

    yarn dev ou npm run dev

e seguir a lista das requisições a baixo

# REST API

Está rest api foi feita para a aplicação do Help!Pet que está na seguinte rota:

[![HelpPet](https://img.shields.io/badge/Help!Pet%20-Site-blue)](https://help-pet.netlify.app)

Logo a baixo está a listagem de todas as rotas com suas respectivas requisições e respostas.

# Sumario

- [Lista de requisições](#list)
- [Rotas do usuario](#list)
  - [Listar usuarios](#indexU)
  - [Adicionar um novo usuario](#storeU)
  - [Detalhes do usuario](#showU)
  - [Deletar Usuario](#deleteU)
  - [Atualizar usuário](#updateU)
  - [Detalhe do usuario](#showD)
  - [Adicionar Detalhes do usuario](#storeD)
  - [Deletar Detalhes do usuario](#deleteD)
  - [Login usuario](#showL)
  - [Esqueceu a senha](#showF)
  - [Cadastrar Endereço](#storeA)
  - [Mostrar endereço](#showA)
  - [Atualizar endereço](#updateA)
  - [Deletar endereço](#deleteA)
- [Rotas do Pet](#Pets)
  - [Criar Pets](#storeP)
  - [Deletar Pets](#deleteP)
  - [Listar Todos os Pet](#indexP)
  - [Consultar um Pet](#showP)
  - [Atualizar o Pet](#updateP)
  - [Mural de Pets Para Adoção](#indexAP)
  - [Disponibilizar o Pet para adoção](#storeAP)
  - [Adoção do Pet](#updateAP)
  - [Mural de Pets Perdidos](#indexMP)
  - [Colocar como pet desaparecido](#updateMP)
  - [Pet Localizado](#deleteMP)

# Requisições <a name = "list"></a>

## Listar Usuarios <a name = "indexU"></a>

### Request

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

## Adicionar um Novo Usuario <a name = "storeU"></a>

### Request

`POST /newUser/`

    {
        "name": String,
        "lastName": String,
        "email": String,
        "password": String,
        "typeUser": String
    }

### Response

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

## Detalhes do Usuario <a name = "showU"></a>

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

## Deletar Usuario (Não exclui exatamente muda de status) <a name = "deleteU"></a>

### Request

`DELETE /deleteUser/idUser`

### Response

    HTTP/1.1 404 No Content
    Status: 204 No Content
    Connection: keep-alive
    Content-Type: application/json

## Atualizar Usuário <a name = "updateU"></a>

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

## Detalhe do Usuário <a name = "showD"></a>

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

## Adicionar Detalhes do Usuário <a name = "storeD"></a>

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

## Deletar Detalhes do Usuário <a name = "deleteD"></a>

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

## Login Usuário <a name = "showL"></a>

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

## Esqueceu a Senha <a name = "showF"></a>

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

## Cadastrar Endereço <a name = "storeA"></a>

### Request

`POST /newAdress/idUser`

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

## Mostrar Endereço <a name = "showA"></a>

### Request

`GET /infoAdress/idUser`

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

## Atualizar Endereço <a name = "updateA"></a>

### Request

`PUT /updateAdress/idUser`

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

## Deletar Endereço <a name = "deleteA"></a>

### request

`DELETE /deleteAdress/idUser`

### response

    Status: 204 No Content
    Connection: keep-alive
    Content-Type: application/json

---

# Pets <a name = "pets"></a>

## Criar Pets <a name = "storeP"></a>

### Request

`POST /newPet/idUser`

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

## Deletar Pets <a name = "deleteP"></a>

### Request

`DELETE /deletePet/idUser`

    {
        "idPet":Number(identificadorPet)
    }

### Response

    Status: 204 No Content
    Connection: keep-alive

## Listar Todos os Pet <a name = "indexP"></a>

### Request

`GET /pets/idUser`

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
            "status_pet": "EstadoPet"
        }
    ]

## Consultar um Pet <a name = "showP"></a>

### Request

`GET /pet/idUser?idPet=Number(idPet)`

### Response

    {
        "imagem_pet": base64(""),
        "id_pet": Number(idPet),
        "id_usuario_pet_fk": Number(idUser)
        "nome_pet": "NomePet",
        "raca_pet": "RacaPet",
        "sexo_pet": "sexoPet",
        "cor_pet": "CorPet",
        "numero_coleira": Number(RGA),
        "descricao_pet": "Descrição",
        "longitude": coordenadas(X),
        "latitude": coordenadas(Y),
        "status_pet": estado('N')
    }

## Atualizar o Pet <a name = "updateP"></a>

### Request

`PUT /updatePet/idUser`

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

    Status: 204 No Content
    Connection: keep-alive
    Content-Type: application/json

---

## Mural de Pets Para Adoção <a name = "indexAP"></a>

### Request

`GET /adoptPet/?page="1"`

### Response

    [
        {pet},{pet},{pet}...
    ]

## Disponibilizar o Pet para Adoção <a name = "storeAP"></a>

### Request

`POST /adoptPet/idUser`

    {
        "idPet": Number(idPet),
        "location":Coordenadas([X,Y])
    }

### Respose

    {
        "success": "pet disponibilizado para adoção"
    }

## Adoção do Pet <a name = "updateAP"></a>

### Request

`PUT /adoptPet/idUser`

    {
        "userAdopt": Number(idAdotante),
        "idPet": Number(idPet)
    }

### Response

    { Number(idPetNovaListagem) }

---

## Mural de Pets Perdidos <a name = "indexMP"></a>

### Request

`GET /missingPet`

### Response

    {
        {pet},
        {pet},
        {pet}
        ...
    }

## Colocar como Pet Desaparecido <a name = "updateMP"></a>

### Request

`PUT /missingPet/idUser`

    {
        "idPet": Number(idPet)
    }

### Response

    {
    "success": "pet está desaparecido!"
    }

## Pet Localizado <a name = "deleteMP"></a>

### Request

`DELETE /missingPet/2`

    {
        "idPet": Number(idPet),
        "location": Coordenadas([X,Y])
    }

### Response

    Status: 204 No Content
    Connection: keep-alive
    Content-Type: application/json
