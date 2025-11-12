import { Router } from "express";
import { CustomerController } from "./customer.controller";

const router = Router();
const controller = new CustomerController();

/**
 * @swagger
 * tags:
 *   name: Clientes
 *   description: Gerenciamento de clientes cadastrados
 */

router.get("/", (req, res) => controller.getAll(req, res));

router.get("/:id", (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Cadastra um novo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *               telefone:
 *                 type: string
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 */
router.post("/", (req, res) => controller.create(req, res));

router.put("/:id", (req, res) => controller.update(req, res));

router.delete("/:id", (req, res) => controller.delete(req, res));

export default router;
