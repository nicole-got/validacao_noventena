# Api Validação Noventena

Criado utilizando arquitetura em camadas com a tecnologia node.js.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

### 🎲 Rodando o projeto

```bash
# Clone este repositório
$ git clone <git@github.com:nicole-got/validacao_noventena.git>

# Acesse a pasta do projeto no terminal/cmd
$ cd validacao_noventena

# Instale as dependências
$ npm install

# Execute a aplicação
$ node start

# O servidor inciará na porta:3000 - acesse <http://localhost:3000>

### 🛠 Rotas
Para executar avalidação da noventena, execute:
[POST] http://localhost:3000/cliente/valida-contato
        json: { "cpf": "111.111.111-11" }
        
        
Para testar os dados armazenados em cache, execute:

- Salvar um novo dado em cache
[POST] http://localhost:3000/teste/save
        json: { "chave": "11111111110", "valor": "22/03/2021"}
 
- Buscar valor salvo em cache
[POST] http://localhost:3000/teste/get
        json: { "chave": "11111111110"}

- Buscar todas as chacves salvas em cache
[GET] http://localhost:3000/teste/all
        
        

### 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
- [Node.js](https://nodejs.org/en/)

