# RifaOnline

* Desenvolver a landing page de acordo com o layout proposto no Figma, com tipografia, cores e estrutura seguindo o mais próximo possível do documento.
* O frontend deverá ser desacoplado do backend.
* Desenvolver uma API para persistir os números no banco de dados e o frontend consuma esses dados para exibir os números indisponíveis na tela.
* A API terá como única função armazenar os dados em banco de dados e retornar os dados quando solicitado.

Tecnologias Utilizadas

* Linguagem: JavaScript
* Bibliotecas: React (MUI)
* Framework: Next.js

----------------------------------------------------------------

Pré-requisitos

Node.js (Latest LTS Version: 20.10.0 - includes npm 10.2.3)
npm (gerenciador de pacotes do Node.js)
Postman (utilizado para testar rotas)
SQLite (banco de dados)

----------------------------------------------------------------

Instale as dependências do projeto:
npm install

----------------------------------------------------------------

Banco de Dados
Execute as migrações para criar o banco de dados:
npm run migrate

----------------------------------------------------------------

Executando o Projeto
Inicie o servidor de desenvolvimento:
npm run dev

O projeto estará disponível em http://localhost:3000. 

----------------------------------------------------------------

Testando as Rotas
Importe a coleção de requisições do Postman localizada no arquivo postman_collection.json.
Execute as requisições para testar as diferentes rotas da aplicação.
