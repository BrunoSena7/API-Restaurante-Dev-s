import { Request, Response } from "express";
import { OrderService } from "./order.service";
import { PedidoSchema } from "./order.schema";

const service = new OrderService();

export class OrderController {
  async create(req: Request, res: Response) {
    const parsed = PedidoSchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: parsed.error.flatten() });

    const pedido = await service.create(parsed.data);
    return res.status(201).json({ success: true, data: pedido });
  }

  async getAll(req: Request, res: Response) {
    const pedidos = await service.findAll();
    return res.json({ success: true, data: pedidos });
  }

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const pedido = await service.findById(id);
    return res.json({ success: true, data: pedido });
  }

  async updateStatus(req: Request, res: Response) {
    const id = Number(req.params.id);
    const { status } = req.body;
    const pedido = await service.updateStatus(id, status);
    return res.json({ success: true, data: pedido });
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const result = await service.delete(id);
    return res.json({ success: true, data: result });
  }
}

