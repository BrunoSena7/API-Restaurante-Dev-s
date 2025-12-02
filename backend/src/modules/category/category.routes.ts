import { Router } from "express";
import { CategoryController } from "./category.controller";

const routes = Router();
const controller = new CategoryController();

/**
 * @swagger
 * tags:
 * name: Categories
 * description: CRUD de categorias
 */

/**
 * @swagger
 * components:
 * schemas:
 * Category:
 * type: object
 * properties:
 * id:
 * type: integer
 * nome:
 * type: string
 * descricao:
 * type: string
 * CreateCategoryDTO:
 * type: object
 * required:
 * - nome
 * properties:
 * nome:
 * type: string
 * example: Bebidas
 * descricao:
 * type: string
 * example: Refrigerantes, sucos e afins
 */

/**
 * @swagger
 * /categories:
 * get:
 * summary: Lista todas as categorias
 * tags: [Categories]
 * responses:
 * 200:
 * description: Lista de categorias retornada com sucesso
 */
routes.get("/", controller.list.bind(controller));

/**
 * @swagger
 * /categories/{id}:
 * get:
 * summary: Busca uma categoria pelo ID
 * tags: [Categories]
 * parameters:
 * - in: path
 * name: id
 * required: true
 * schema:
 * type: integer
 * responses:
 * 200:
 * description: Categoria encontrada
 */
routes.get("/:id", controller.show.bind(controller));

/**
 * @swagger
 * /categories:
 * post:
 * summary: Cria uma nova categoria
 * tags: [Categories]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/CreateCategoryDTO'
 * responses:
 * 201:
 * description: Categoria criada com sucesso
 */
routes.post("/", controller.create.bind(controller));

/**
 * @swagger
 * /categories/{id}:
 * put:
 * summary: Atualiza uma categoria
 * tags: [Categories]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * $ref: '#/components/schemas/CreateCategoryDTO'
 * responses:
 * 200:
 * description: Categoria atualizada com sucesso
 */
routes.put("/:id", controller.update.bind(controller));

/**
 * @swagger
 * /categories/{id}:
 * delete:
 * summary: Remove uma categoria
 * tags: [Categories]
 * parameters:
 * - in: path
 * name: id
 * schema:
 * type: integer
 * required: true
 * responses:
 * 204:
 * description: Categoria excluída com sucesso
 */
routes.delete("/:id", controller.delete.bind(controller));

export default routes;