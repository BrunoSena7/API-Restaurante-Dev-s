import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import path from "path";
import { Express } from "express";

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Restaurante Devs",
      version: "1.0.0",
      description:
        "Documentação oficial da API de gestão de restaurante desenvolvida pela equipe Devs. Inclui módulos de categorias, produtos, pedidos, clientes e autenticação.",
    },
    servers: [
      {
        url: "http://localhost:3000/api",
        description: "Servidor local",
      },
    ],
  },
  apis: ["./src/modules/**/*.routes.ts"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

//  Gera o arquivo swagger.json automaticamente na raiz do projeto
const outputFile = path.resolve(__dirname, "../../swagger.json");
fs.writeFileSync(outputFile, JSON.stringify(swaggerSpec, null, 2));

export const setupSwagger = (app: Express) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.get("/swagger.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });

  console.log(" Swagger disponível em: http://localhost:3000/api/docs");
  console.log(" Arquivo swagger.json exportado para:", outputFile);
};
