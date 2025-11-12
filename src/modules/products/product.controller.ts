import { Request, Response } from "express";
import { ProductService } from "./product.service";
import { ProductSchema } from "./product.schema";

const service = new ProductService();

export class ProductController {
  async create(req: Request, res: Response) {
    const parsed = ProductSchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: parsed.error.flatten() });

    const product = await service.create(parsed.data);
    return res.status(201).json({ success: true, data: product });
  }

  async getAll(req: Request, res: Response) {
    const products = await service.findAll();
    return res.json({ success: true, data: products });
  }

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const product = await service.findById(id);
    return res.json({ success: true, data: product });
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const parsed = ProductSchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: parsed.error.flatten() });

    const product = await service.update(id, parsed.data);
    return res.json({ success: true, data: product });
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const result = await service.delete(id);
    return res.json({ success: true, data: result });
  }
}
