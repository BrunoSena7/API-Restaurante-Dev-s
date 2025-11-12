import { Router } from "express";
import { OrderController } from "./order.controller";

const router = Router();
const controller = new OrderController();

router.post("/", (req, res) => controller.create(req, res));
router.get("/", (req, res) => controller.getAll(req, res));
router.get("/:id", (req, res) => controller.getById(req, res));
router.patch("/:id/status", (req, res) => controller.updateStatus(req, res));
router.delete("/:id", (req, res) => controller.delete(req, res));

export default router;
