import { Request, Response } from "express";
import { CategoryService } from "./category.service";
import { CategorySchema } from "./category.schema";

const service = new CategoryService();

export class CategoryController {
  async create(req: Request, res: Response) {
    const parsed = CategorySchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "Erro de validação",
        errors: parsed.error.flatten(),
      });
    }

    const category = await service.create(parsed.data);
    return res.status(201).json({ success: true, data: category });
  }

  async getAll(req: Request, res: Response) {
    const categories = await service.findAll();
    return res.json({ success: true, data: categories });
  }

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const category = await service.findById(id);
    return res.json({ success: true, data: category });
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const parsed = CategorySchema.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "Erro de validação",
        errors: parsed.error.flatten(),
      });
    }

    const category = await service.update(id, parsed.data);
    return res.json({ success: true, data: category });
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const result = await service.delete(id);
    return res.json({ success: true, data: result });
  }
}
