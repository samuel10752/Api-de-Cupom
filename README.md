<h1 align="left">API de Cupons</h1>

###

<p align="left">Este projeto é uma API para gerenciamento de cupons de desconto, permitindo a criação, listagem e validação de cupons</p>

###

<h2 align="left">🛠️ Funcionalidades</h2>

###

<p align="left">- Criação de Cupons: Permite a criação de novos cupons com detalhes específicos.<br> - Listagem de Cupons: Fornece uma lista de todos os cupons disponíveis.<br>- Validação de Cupons: Verifica a validade e aplicabilidade de um cupom específico.</p>

###

<h2 align="left">📋 Pré-requisitos</h2>

###

<p align="left">- Node.js instalado.<br>- NPM ou Yarn como gerenciador de pacotes.</p>

###

<h2 align="left">🚀 Como executar</h2>

###

<p align="left">1. Clone este repositório para o seu diretório local:<br><br>git clone https://github.com/samuel10752/Api-de-Cupom.git</p>

###

<p align="left">2. Instale as dependências: Navegue até o diretório do projeto e instale as dependências:<br><br>cd Api-de-Cupom<br>npm install<br><br>ou<br><br>yarn install</p>

###

<p align="left">3. Inicie o servidor: Execute o seguinte comando para iniciar o servidor:<br><br>npm start<br><br>ou<br><br>yarn start</p>

###

<p align="left">4. Acesse a API: Após iniciar o servidor, a API estará disponível em:<br><br>http://localhost:3000</p>

###

<h2 align="left">📂 Estrutura do Projeto</h2>

###

<p align="left">- /routes: Define as rotas da API.<br>- /controllers: Contém a lógica de negócios de cada funcionalidade.<br>- /models: Modelos de dados utilizados pela aplicação.<br> - app.js: Arquivo principal que configura o servidor e as rotas.</p>

###

<h2 align="left">📚 Exemplo de Uso</h2>

###

<p align="left">Criar um Cupom<br>- Método: POST<br>- Endpoint: /cupons<br>- Corpo da Requisição:<br>{<br>  "codigo": "DESCONTO10",<br>  "valor": 10,<br>  "validade": "2024-12-31"<br>}<br><br>Resposta:<br><br>{<br>  "mensagem": "Cupom criado com sucesso!"<br>}</p>

###

<p align="left">Listar Cupons<br>- Método: GET<br>- Endpoint: /cupons<br>- Resposta:<br>[<br>  {<br>    "codigo": "DESCONTO10",<br>    "valor": 10,<br>    "validade": "2024-12-31"<br>  },<br>  {<br>    "codigo": "FRETEGRATIS",<br>    "valor": 0,<br>    "validade": "2024-06-30"<br>  }<br>]</p>

###

<p align="left">Validar um Cupom<br>- Método: POST<br>- Endpoint: /cupons/validar<br>- Corpo da Requisição:<br>{<br>  "codigo": "DESCONTO10"<br>}<br><br>Resposta:<br><br>{<br>  "valido": true,<br>  "mensagem": "Cupom válido!"<br>}</p>

###

<h2 align="left">🔮 Melhorias Futuras</h2>

###

<p align="left">- Autenticação e Segurança:<br>- Implementar autenticação para proteger os endpoints.<br>- Banco de Dados:<br>- Migrar para um banco de dados como MongoDB ou PostgreSQL.<br>- Testes Automatizados:<br>- Criar testes unitários e de integração para garantir a qualidade do código.<br>- Documentação Swagger:<br>- Adicionar documentação interativa para a API.</p>

###

<h2 align="left">📝 Licença</h2>

###

<p align="left">Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.</p>

###
