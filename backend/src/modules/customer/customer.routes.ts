import { Router } from "express";
import { CustomerController } from "./customer.controller";

const routes = Router();
const controller = new CustomerController();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: CRUD de produtos
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         nome:
 *           type: string
 *         descricao:
 *           type: string
 *         preco:
 *           type: number
 *           format: decimal
 *         estoque:
 *           type: integer
 *         categoriaId:
 *           type: integer
 *
 *     CreateProductDTO:
 *       type: object
 *       required:
 *         - nome
 *         - preco
 *         - categoriaId
 *       properties:
 *         nome:
 *           type: string
 *           example: Pizza Margherita
 *         descricao:
 *           type: string
 *           example: Pizza clássica com molho de tomate e manjericão
 *         preco:
 *           type: number
 *           example: 29.90
 *         estoque:
 *           type: integer
 *           example: 10
 *         categoriaId:
 *           type: integer
 *           example: 1
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Products]
 *     responses:
 *       200:
 *         description: Lista retornada com sucesso
 */
routes.get("/", controller.list.bind(controller));

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Busca um produto pelo ID
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto encontrado
 */
routes.get("/:id", controller.show.bind(controller));

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProductDTO'
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 */
routes.post("/", controller.create.bind(controller));

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Atualiza um produto pelo ID
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CreateProductDTO'
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 */
routes.put("/:id", controller.update.bind(controller));

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Remove um produto
 *     tags: [Products]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Produto removido com sucesso
 */
routes.delete("/:id", controller.delete.bind(controller));

export default routes;
