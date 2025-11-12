import { Router } from "express";
import { OrderController } from "./order.controller";

const router = Router();
const controller = new OrderController();

/**
 * @swagger
 * tags:
 *   name: Pedidos
 *   description: Gerenciamento de pedidos de clientes
 */

router.get("/", (req, res) => controller.getAll(req, res));

router.get("/:id", (req, res) => controller.getById(req, res));

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Cria um novo pedido
 *     tags: [Pedidos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               clienteId:
 *                 type: integer
 *               produtos:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     produtoId:
 *                       type: integer
 *                     quantidade:
 *                       type: integer
 *     responses:
 *       201:
 *         description: Pedido criado com sucesso
 */
router.post("/", (req, res) => controller.create(req, res));

router.put("/:id", (req, res) => controller.update(req, res));

router.delete("/:id", (req, res) => controller.delete(req, res));

export default router;
