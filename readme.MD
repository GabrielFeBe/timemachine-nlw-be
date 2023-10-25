# Maquina do tempo - BE

## Configurações do projeto

- Projeto feito no bootcamp da Rocketseat Ignite, para criar uma API REST para gerenciar o tempo de estudo de cada usuário.

- Projeto feito usando Prism para facilitar a criação de APIs REST, com banco de dados sqlite, Jwt como autenticação e autorização, fastify para facilitar a criação de rotas.

## Como rodar o projeto

- Para instalar o projeto, basta clonar o repositório e rodar o comando `npm install` para instalar as dependências.
- Apos isso, basta rodar o comando `npm run dev` para rodar o projeto em modo de desenvolvimento.

## Database

- Esta API usa o banco de dados sqlite, para criar o banco de dados, basta rodar o comando `npm run typeorm migration:run` para criar as tabelas no banco de dados.

### Gerando cliente prisma

```bash
npx prisma generate
```

### Criando migration

```bash
npx prisma migrate dev --name init
```

### Rodando migration

```bash
npx prisma migrate deploy

```

## Env

```env

#Github(WEB)
GITHUB_CLIENT_ID=ID of the auth client
GITHUB_CLIENT_SECRET= Secret

Github(MOBILE)
# GITHUB_CLIENT_ID = ID of the auth client
# GITHUB_CLIENT_SECRET= Secret
```
