import { Request, Response } from "express";
import { CategoryService } from "./category.service";
import { CategorySchema } from "./category.schema";

export class CategoryController {
  private service = new CategoryService();

  async create(req: Request, res: Response) {
    const parsed = CategorySchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: parsed.error.errors });

    const category = await this.service.create(parsed.data);
    res.status(201).json(category);
  }

  async getAll(req: Request, res: Response) {
    const categories = await this.service.findAll();
    res.json(categories);
  }

  async getById(req: Request, res: Response) {
    const id = Number(req.params.id);
    const category = await this.service.findById(id);
    res.json(category);
  }

  async update(req: Request, res: Response) {
    const id = Number(req.params.id);
    const parsed = CategorySchema.safeParse(req.body);
    if (!parsed.success)
      return res.status(400).json({ error: parsed.error.errors });

    const category = await this.service.update(id, parsed.data);
    res.json(category);
  }

  async delete(req: Request, res: Response) {
    const id = Number(req.params.id);
    const result = await this.service.delete(id);
    res.json(result);
  }
}
