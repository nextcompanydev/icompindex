# iCompany WebServices (WebServices do iCompany)
<!-- TOC -->

- [iCompany WebServices](#xPDV Server)
    - [Tecnologias](#tecnologias)
    - [Estrutura do projeto](#estrutura-do-projeto)
    - [Executando o projeto](#executando-o-projeto)
    - [Acessando a aplicacao](#acessando-a-aplicacao)
    - [Documentacao da API](#documentacao-da-api)

<!-- /TOC -->

## Tecnologias
O objetivo desse projeto é implementar um conjunto de microservicos para operacionalizar as rotinas do iCompany|:
- [nodejs](https://nodejs.org/api/)
- [typescript](https://www.typescriptlang.org/)
- [expressjs](http://expressjs.com/en/4x/api.html)
- [typescript-rest](https://github.com/thiagobustamante/typescript-rest)
- [typescript-rest-swagger](https://github.com/thiagobustamante/typescript-rest-swagger)
- [Redux](https://redux.js.org/)

## Estrutura do projeto
```bash  
+-- node_modules                          '(dependências)'
+-- dist                                  '(javascripts gerados)'
+-- src                                   '(Códigos fontes do projeto)'
|     |
|     +-- controllers                     '(Controladores que expoem as APIs do microserviços)'
|     |     |
|     |     +-- BaseController.ts         '(Classe base de todos os controladores que expoe metodos comuns)'
|     |     +-- ControllerFunctions.ts    '(Funcoes comuns utilizadas nos controladores)'
|     |     +-- ControllerTypes.ts        '(Tipos comuns utilizados nos controladores)'
|     |     +-- EntityController.ts       '(Controlador de classes de entidades)'
|     |     +-- LoginController.ts        '(Controlador de acesso que permite efetuar login)'
|     |     +-- index.ts                  '(Exportador das classes dos controladores)'
|     |
|     +-- persistence                     '(Classes e interfaces da pseudo unidade de persistencia)'
|     |     |
|     |     +-- classes                   '(Classes e interfaces da pseudo unidade de persistencia)'
|     |     |     |
|     |     |     +--- *.ts               '(Classes de entidade da unidade persistencia)' 
|     |     |
|     |     +-- Entity.ts                 '(Classe base de todas as entidades)'
|     |     +-- FieldDef.ts               '(Classe de difinicao de um Campo na classe de entidade)'
|     |     +-- index.ts                  '(Exportados de todas as classes de persistencia)'
|     |     +-- persistence.ts            '(Classe da unidade de persistencia)'
|     | 
|     | 
|     +-- store                           '(Dados/Tipos/Funcoes que manipulam os estados no servidor de microservicos)'
|     |     |
|     |     +-- Initial.ts                '(Informacoes do estado inicial)'
|     |     +-- Functions.ts              '(Funcoes auxialires de manipulacao dos estados)'
|     |     +-- Types.ts                  '(Tipos/Interfaces utilizados nos estados)'
|     |     +-- Actions.ts                '(Acoes de manipulacoes dos estados)'
|     |     +-- Reducers.ts               '(Reducers de manipulacao dos estados)'
|     |     +-- Store.ts                  '(Definicao do Store de armazena o estado)'
|     |
|     +-- helpers.ts                      '(Helpers genericos de String/Array/Number/Date/Object)'
|     +-- Types.ts                        '(Tipos padroes do projeto)'
|     +-- TObject.ts                      '(Classe padrao de objetos com suporte a listeners)'
|     +-- createEntityClasses.ts          '(Gerador de classes de entidades para determinado banco de dados)'
|     +-- indexPU.ts                      '(Gerador de classes de entidade)'
|     +-- DB.ts                           '(Conector de banco de dados para classes de entidade)'
|     +-- api-server.ts                   '(Definicao/Criacao do controlador de rotas)'
|     +-- indexTest.ts                    '(Execucao de teste/caso de uso)'
|     +-- index.ts                        '(Ponto de entrada do sistema)'
|     |
|     +-- swagger.json                    '(Arquivo de configuracoes do Swagger)'
|     +-- tsconfig.json                   '(Arquivo de configuracoes do compilador TypeScript)'
|     +-- package.json                    '(descritor do projeto)'
|     +-- README.md                       '(documentacao do projeto em markdown)'
```

## Executando o projeto

Se você tiver acabado de baixar o projeto, você deve instalar as dependências. Para isso, execute:

```npm install```

<br>
O arquivo **package.json** é o descritor do projeto e nele consta, dentre outras coisas, as formas possíveis de executar o projeto.

```json
  "scripts": {
    "prepare": "tsc",
    "build": "tsc",
    "start": "tsc && npm run swagger && ts-node src/index.ts",
    "swagger": "swaggerGen -c swagger.json",
    "test": "tsc && npm run swagger && ts-node src/indexTest.ts"
  },
```

<br>
Para iniciar o projeto voce deve, no diretório raiz do projeto, executar:

```npm run start```

Segue a saída logada no terminal:
```shell
Servidor de microservicos do iCompany iniciado em http://localhost:3001
```
```
Acesse http://localhost:3001/api-docs/ para visualizar ou testar a API
```

## Acessando a aplicação

Agora que o serviço está em execução, acesse: [http://localhost:3001](http://localhost:3001)
<br>
Acesse a interface do swagger, através da qual você poderá testar seus endpoints e ver documentacao sobre os endpoints e os tipos de dados utilizados, em: [http://localhost:3003/api-docs](http://localhost:3001/api-docs)

## Documentacao da API
[API](./swagger.md)