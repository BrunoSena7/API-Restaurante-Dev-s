import { Request, Response } from "express";
import { CustomerService } from "./customer.service";
import { CustomerSchema } from "./customer.schema";

const service = new CustomerService();

export class CustomerController {
  async create(req: Request, res: Response) {
    const parsed = CustomerSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

    const cliente = await service.create(parsed.data);
    return res.status(201).json({ success: true, data: cliente });
  }

  async getAll(req: Request, res: Response) {
    const clientes = await service.findAll();
    return res.json({ success: true, data: clientes });
  }

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const cliente = await service.findById(id);
    return res.json({ success: true, data: cliente });
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const parsed = CustomerSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json({ error: parsed.error.flatten() });

    const cliente = await service.update(id, parsed.data);
    return res.json({ success: true, data: cliente });
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const result = await service.delete(id);
    return res.json({ success: true, data: result });
  }
}
