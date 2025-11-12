import { Router } from "express";
import { CategoryController } from "./category.controller";

const router = Router();
const controller = new CategoryController();

/**
 * @swagger
 * tags:
 *   name: Categorias
 *   description: Gerenciamento de categorias de produtos
 */

/**
 * @swagger
 * /categories:
 *   get:
 *     summary: Lista todas as categorias
 *     tags: [Categorias]
 *     responses:
 *       200:
 *         description: Lista de categorias retornada com sucesso
 */
router.get("/", (req, res) => controller.getAll(req, res));

/**
 * @swagger
 * /categories:
 *   post:
 *     summary: Cria uma nova categoria
 *     tags: [Categorias]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *     responses:
 *       201:
 *         description: Categoria criada com sucesso
 */
router.post("/", (req, res) => controller.create(req, res));

router.get("/:id", (req, res) => controller.getById(req, res));
router.put("/:id", (req, res) => controller.update(req, res));
router.delete("/:id", (req, res) => controller.delete(req, res));

export default router;
