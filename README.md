# Rastreamento de consumo e desperdício de energia

# Descrição

Sistema desenvolvido para registrar equipamentos e locais e acompanhar o consumo de energia, ajudando a identificar possíveis desperdícios.

O sistema permite cadastrar, consultar, atualizar e excluir registros de equipamentos.

# Órgãos transversais

- Sustentabilidade
- Tecnologia
- Meio ambiente
- Gestão de energia

# Como testar

1. Instalar as dependências com:

npm install

2. Iniciar o servidor com:

node server.js

3. Acessar:

http://localhost:3000/equipamentos

4. Utilizar o Thunder Client para realizar as requisições.

# Requisições

# GET - Todos os equipamentos

GET http://localhost:3000/equipamentos

# GET - Equipamento por ID

GET http://localhost:3000/equipamentos/1

# POST - Cadastrar equipamento

POST http://localhost:3000/equipamentos

Exemplo:

{
    "local": "Sala de Reuniões",
    "equipamento": "Projetor",
    "consumo_kwh": 75.5,
    "mes_referencia": "2026-09",
    "status": "Consumo normal"
}

# PUT - Atualizar equipamento

PUT http://localhost:3000/equipamentos/1

# DELETE - Excluir equipamento

DELETE http://localhost:3000/equipamentos/6

# Estrutura do projeto

- dados.json
- server.js
- .gitignore
- package.json
- package-lock.json
- client/index.html
- prints/

# Testes

Os testes realizados no Thunder Client estão na pasta prints.# sesi_pbe1_vps01_tema_2026
