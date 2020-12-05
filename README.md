# Help!Pet REST API

A aplicação completa está contida no arquivo `src/server.js`.

A lista das rotas estão nos arquivos

## Instalação

    yarn install ou npm install

## Rodar a aplicação

    yarn dev ou npm run dev

# REST API

Está rest api

## Coletar as listas

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

    {"id":1,"name":"name","password":sha1("password"), "typeUser": "levelAcess"}

## Detalhes do usuario

### Request

`GET /infoUser/idUser`

### Response

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

##

### Request

`POST /thing/`

    curl -i -H 'Accept: application/json' -d 'name=Bar&junk=rubbish' http://localhost:7000/thing

### Response

    HTTP/1.1 201 Created
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 201 Created
    Connection: close
    Content-Type: application/json
    Location: /thing/2
    Content-Length: 35

    {"id":2,"name":"Bar","status":null}

## Get list of Things again

### Request

`GET /thing/`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 74

    [{"id":1,"name":"Foo","status":"new"},{"id":2,"name":"Bar","status":null}]

## Change a Thing's state

### Request

`PUT /thing/:id/status/changed`

    curl -i -H 'Accept: application/json' -X PUT http://localhost:7000/thing/1/status/changed

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 40

    {"id":1,"name":"Foo","status":"changed"}

## Get changed Thing

### Request

`GET /thing/id`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 40

    {"id":1,"name":"Foo","status":"changed"}

## Change a Thing

### Request

`PUT /thing/:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'name=Foo&status=changed2' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed2"}

## Attempt to change a Thing using partial params

### Request

`PUT /thing/:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'status=changed3' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed3"}

## Attempt to change a Thing using invalid params

### Request

`PUT /thing/:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'id=99&status=changed4' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed4"}

## Change a Thing using the \_method hack

### Request

`POST /thing/:id?_method=POST`

    curl -i -H 'Accept: application/json' -X POST -d 'name=Baz&_method=PUT' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Baz","status":"changed4"}

## Change a Thing using the \_method hack in the url

### Request

`POST /thing/:id?_method=POST`

    curl -i -H 'Accept: application/json' -X POST -d 'name=Qux' http://localhost:7000/thing/1?_method=PUT

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: text/html;charset=utf-8
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Delete a Thing

### Request

`DELETE /thing/id`

    curl -i -H 'Accept: application/json' -X DELETE http://localhost:7000/thing/1/

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 204 No Content
    Connection: close

## Try to delete same Thing again

### Request

`DELETE /thing/id`

    curl -i -H 'Accept: application/json' -X DELETE http://localhost:7000/thing/1/

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Get deleted Thing

### Request

`GET /thing/1`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/1

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:33 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Delete a Thing using the \_method hack

### Request

`DELETE /thing/id`

    curl -i -H 'Accept: application/json' -X POST -d'_method=DELETE' http://localhost:7000/thing/2/

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:33 GMT
    Status: 204 No Content
    Connection: close
