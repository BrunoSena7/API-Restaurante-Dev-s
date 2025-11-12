import { Router } from "express";
import { ProductController } from "./product.controller";

const router = Router();
const controller = new ProductController();

/**
 * @swagger
 * tags:
 *   name: Produtos
 *   description: Gerenciamento de produtos do restaurante
 */

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Lista todos os produtos
 *     tags: [Produtos]
 *     responses:
 *       200:
 *         description: Lista de produtos retornada com sucesso
 */
router.get("/", (req, res) => controller.getAll(req, res));

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Busca um produto pelo ID
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto encontrado
 */
router.get("/:id", (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Cria um novo produto
 *     tags: [Produtos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *               categoriaId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Produto criado com sucesso
 */
router.post("/", (req, res) => controller.create(req, res));

/**
 * @swagger
 * /products/{id}:
 *   put:
 *     summary: Atualiza um produto existente
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               preco:
 *                 type: number
 *     responses:
 *       200:
 *         description: Produto atualizado com sucesso
 */
router.put("/:id", (req, res) => controller.update(req, res));

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Remove um produto
 *     tags: [Produtos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Produto removido com sucesso
 */
router.delete("/:id", (req, res) => controller.delete(req, res));

export default router;
