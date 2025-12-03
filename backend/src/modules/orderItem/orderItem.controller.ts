import { Request, Response } from "express";
import { OrderItemService } from "./orderItem.service";

export class OrderItemController {
  private service = new OrderItemService();

  async list(req: Request, res: Response) {
    const produtos = await this.service.list();
    return res.json(produtos);
  }

  async show(req: Request, res: Response) {
    const produto = await this.service.show(Number(req.params.id));
    return res.json(produto);
  }

  async create(req: Request, res: Response) {
    const produto = await this.service.create(req.body);
    return res.status(201).json(produto);
  }

  async update(req: Request, res: Response) {
    const produto = await this.service.update(Number(req.params.id), req.body);
    return res.json(produto);
  }

  async delete(req: Request, res: Response) {
    await this.service.delete(Number(req.params.id));
    return res.status(204).send();
  }
}
