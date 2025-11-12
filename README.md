🍽️ API Restaurante Devs

Bem‑vindo à API Restaurante Devs, a espinha dorsal do nosso projeto de Tópicos Especiais em TI – Fullstack/TypeScript. Desenvolvida com Node.js e TypeScript, esta API organiza o mundo de um restaurante digital: categorias, produtos, pedidos e clientes. Pensada para a vida real, ela se integra a um banco PostgreSQL via Prisma ORM, expõe endpoints REST padronizados e oferece documentação Swagger pronta para consumo. É a ferramenta ideal para quem precisa de um back‑end robusto e escalável, sem perder a leveza.

🌟 Visão Geral

Aqui você está lidando com uma solução corporativa de ponta, desenhada para facilitar o gerenciamento de operações gastronômicas. A API implementa princípios de arquitetura limpos e modernos, usa Express para roteamento e Zod para validação de dados, e é orquestrada em contêineres Docker para que o ambiente de desenvolvimento e produção sejam idênticos. Como um verdadeiro full stack, você terá nas mãos um pipeline de dev completo: desde a inicialização até a exportação de documentação via Swagger.

🛠️ Tecnologias Utilizadas

As principais ferramentas que compõem este ecossistema são:

Node.js 18+ & npm – motor JavaScript/TypeScript para o back‑end.

TypeScript – tipagem estática para evitar surpresas em runtime.

Express – framework minimalista para APIs REST.

Prisma ORM – acesso ao banco com migrations e geração de tipos.

PostgreSQL (via Docker) – banco de dados relacional robusto.

Docker & Docker Compose – contêineres para garantir replicabilidade.

Swagger – documentação automática e interativa da API.

Zod – validação de entrada e contratos de dados.

dotenv – gerenciamento de variáveis de ambiente.

🧪 Pré‑requisitos

Antes de pôr a mão na massa, certifique‑se de que sua máquina tem tudo que a receita pede:

Node.js 18+ e npm – baixe do site oficial ou via gerenciador de pacotes. Verifique com node -v e npm -v.

Docker e Docker Compose – responsáveis por levantar o PostgreSQL sem sofrimento. Verifique com docker -v e docker compose version.

Git – para clonar o repositório. Verifique com git --version.

🚀 Como Rodar a API Localmente

Siga os passos abaixo para preparar e executar a API em sua máquina. A ordem é importante para evitar gargalos no pipeline.

1. Clonar o Repositório

Abra um terminal e faça o clone:

git clone <URL_DO_REPOSITORIO>
cd API-Restaurante-Dev-s

2. Configurar Variáveis de Ambiente

Na raiz do projeto, crie um arquivo .env (ou copie de .env.example se existir) com o seguinte conteúdo:

PORT=3000
DATABASE_URL="postgresql://devs_user:devs_password@localhost:5433/devs_db?schema=public"


💡 Observação: o serviço do banco roda no contêiner na porta interna 5432 e é mapeado para 5433 no host. Ajuste se houver conflito na sua máquina.

3. Subir o PostgreSQL com Docker

Levante o contêiner do banco de dados:

docker compose up -d


Verifique se o contêiner está de pé usando docker ps – ele deve listar um serviço chamado devs_postgres. Para acompanhar os logs do banco, rode docker logs -f devs_postgres.

4. Instalar Dependências

Instale as bibliotecas do projeto via npm:

npm install

5. Preparar o Prisma

Gere o client do Prisma e sincronize o schema com o banco de dados:

npx prisma generate
npx prisma db push


Se quiser, pode abrir o painel visual com npx prisma studio para inspecionar dados de forma interativa.

6. Rodar a API em Desenvolvimento

Execute o servidor e veja a mágica acontecer:

npm run dev


Se tudo estiver correto, você verá algo parecido com:

Servidor rodando na porta 3000
Swagger disponível em: http://localhost:3000/api/docs
Arquivo swagger.json exportado para: <caminho>/swagger.json

7. Testar a API

Com o servidor no ar, você pode explorar os endpoints:

Base URL: http://localhost:3000/api

Swagger UI: http://localhost:3000/api/docs – interface amigável para testar requisições.

Swagger JSON: http://localhost:3000/swagger.json – arquivo JSON exportável da documentação.

Exemplos de uso com curl:

Listar categorias (se o módulo de categorias estiver ativo):

curl http://localhost:3000/api/categories


Criar uma nova categoria:

curl -X POST http://localhost:3000/api/categories \
  -H "Content-Type: application/json" \
  -d '{"nome": "Bebidas"}'

📁 Estrutura do Projeto

O repositório está organizado de forma modular para facilitar a manutenção e a escalabilidade:

src/
  app.ts              # inicialização do Express e middlewares
  server.ts           # ponto de entrada que sobe o servidor
  config/
    env.ts            # carregamento de variáveis de ambiente
    prisma.ts         # configuração e instância do Prisma Client
    swagger.ts        # setup da documentação Swagger
  errors/
    AppError.ts       # classe base de erros customizados
  middlewares/
    error.middleware.ts  # tratamento de erros global
  prisma/
    schema.prisma     # definição do esquema de banco
  routes/
    index.ts          # roteador principal que monta os módulos
  modules/
    categories/
      category.controller.ts
      category.service.ts
      category.schema.ts
      category.routes.ts
    products/
    orders/
    customers/
.env.example          # modelo de variáveis de ambiente
docker-compose.yml    # configuração de serviços Docker
package.json          # dependências e scripts
swagger.json          # documentação exportável
README.md             # este documento


Cada módulo segue uma convenção controller → service → routes → schema, facilitando a leitura e a colaboração em equipe.

📚 Endpoints e Documentação

A API expõe recursos RESTful sob a rota /api. A documentação gerada via Swagger está disponível em tempo real para consulta e testes. Os principais módulos e suas rotas base são:

Módulo	Rota Base	Descrição
Categorias	/api/categories	CRUD de categorias
Produtos	/api/products	CRUD de produtos
Pedidos	/api/orders	CRUD de pedidos
Clientes	/api/customers	CRUD de clientes

Abra a interface interativa em http://localhost:3000/api/docs e explore cada endpoint com exemplos de payloads e respostas.

🔧 Scripts Úteis

No package.json você encontrará comandos que simplificam a vida do dev:

npm run dev – inicia o servidor em modo desenvolvimento com hot reload.

npx prisma generate – (re)gera o client do Prisma conforme o schema.

npx prisma db push – sincroniza o esquema com o banco sem criar migrations.

npx prisma migrate dev --name <nome> – cria e aplica uma nova migration.

npx prisma studio – abre o Prisma Studio para navegação visual do banco.

docker compose down -v – derruba os contêineres e remove volumes (⚠️ apaga dados persistidos).

🛠️ Problemas Comuns e Soluções
a) @prisma/client did not initialize yet. Please run "prisma generate"...

Causa: o client do Prisma não foi gerado após instalar dependências ou modificar o schema.prisma.

Solução:

npx prisma generate
npm run dev

b) Cannot find module '.prisma/client/default'

Causas comuns: build parcial do Prisma, cache quebrado ou atualização de dependências sem regenerar o client.

Solução:

# garantir dependências
npm install
# regenerar client
npx prisma generate

# se persistir, limpar tudo e reinstalar
rm -rf node_modules package-lock.json   # no macOS/Linux
# No Windows PowerShell:
# Remove-Item -Recurse -Force node_modules; Remove-Item -Force package-lock.json

npm install
npx prisma generate
npm run dev

c) SyntaxError: Identifier 'router' has already been declared

Causa: duplicidade de declaração do router no mesmo arquivo de rotas (cópia duplicada de código).

Solução: mantenha um único bloco:

import { Router } from "express";
const router = Router();
// ...definição de rotas
export default router;

d) TypeError: Cannot read properties of undefined (reading 'listen') em server.ts

Causa: importação incorreta do app ou referência errada ao arquivo.

Solução: certifique‑se de que app é exportado de src/app.ts e importado corretamente em src/server.ts:

// src/app.ts
import express from "express";
import routes from "./routes";
import { setupSwagger } from "./config/swagger";

const app = express();
app.use(express.json());
app.use("/api", routes);
setupSwagger(app);

export { app };

// src/server.ts
import { app } from "./app";

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

e) Porta em uso (Postgres)

Se a porta 5433 já estiver ocupada no host, edite o docker-compose.yml para mapear outra porta:

ports:
  - "5434:5432"


E ajuste a variável DATABASE_URL no .env para usar localhost:5434.

f) Comandos no PowerShell vs. Bash

Em Windows PowerShell, alguns comandos de remoção são diferentes. Por exemplo, para apagar a pasta node_modules e o package-lock.json:

Remove-Item -Recurse -Force node_modules
Remove-Item -Force package-lock.json


No macOS/Linux, use:

rm -rf node_modules package-lock.json

🏁 Fluxo Recomendado para Começar do Zero

Para quem quer zerar tudo e recomeçar sem sustos, siga esta sequência:

git clone <URL_DO_REPOSITORIO>
cd API-Restaurante-Dev-s
cp .env.example .env   # se existir o exemplo; caso contrário, crie conforme instruções acima
docker compose up -d
npm install
npx prisma generate
npx prisma db push
npm run dev

# Acesse a documentação:
http://localhost:3000/api/docs
http://localhost:3000/swagger.json

🎯 Conclusão

Esta API foi concebida para ser didática, funcional e escalável. Ela serve tanto como um laboratório de aprendizado quanto como um núcleo reutilizável para aplicações reais no segmento gastronômico. Ao seguir este guia, você terá um ambiente de desenvolvimento replicável em qualquer sistema operacional.