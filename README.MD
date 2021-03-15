# Teste para vaga de estagiário

## Teste de logica
Link: [pode ser encontrado aqui](https://codesandbox.io/s/teste-estagio-template-forked-3prpl)

## Desafio de back-end

### Como rodar a aplicação
Instale as dependencias:
``` [ 
npm install 
``` 

Execulte o comando:
``` [ 
node src/serve.js 
``` 
- O desafio backend foi desenvolvido ultilizando uma versão na nuvem do MongoDb, portanto não tem necessidade de mexer com banco de dados.

## Teste
### Testes feito com Insominia

- POST Novo naver

Rota:http://localhost:3333/naver

``` [ 
{"nome":"João Pedro",
 "dataNascimento":"10-10-1998",
 "cargo":"Desenvolvedor",
 "dataAdmicao":"10-10-2020",
 "projetos":["<id_projeto>"]
} 
```

- GET Listar todos navers

Rota:http://localhost:3333/naver/lista


- GET Listar naver especifico

Rota:http://localhost:3333/naver/find/<id_naver>

- POST Novo projeto

Rota:http://localhost:3333/projeto/novo

``` [ 
{"titulo":"Controle de Validade ",
 "naver":[<id_naver>]} 
``` 

- GET Listar todos projetos

Rota:http://localhost:3333/projetos/lista

- GET Listar projeto especifico

Rota:http://localhost:3333/projeto/find/<id_projeto>

- POST Relacionamento entre navres e projetos

Rota:http://localhost:3333/naver_produto

``` [ 
{"naver":<id_naver>,
 "projeto":<id_projeto>} 
``` 
