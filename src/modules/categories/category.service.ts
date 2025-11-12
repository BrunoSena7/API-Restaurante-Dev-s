import { prisma } from "../../config/prisma";
import { CategoryData } from "./category.schema";
import { AppError } from "../../errors/AppError";

export class CategoryService {
  async create(data: CategoryData) {
    const existing = await prisma.categoria.findUnique({ where: { nome: data.nome } });
    if (existing) throw new AppError("Categoria já existe", 409);
    return prisma.categoria.create({ data });
  }

  async findAll() {
    return prisma.categoria.findMany();
  }

  async findById(id: number) {
    const category = await prisma.categoria.findUnique({ where: { id } });
    if (!category) throw new AppError("Categoria não encontrada", 404);
    return category;
  }

  async update(id: number, data: CategoryData) {
    await this.findById(id);
    return prisma.categoria.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.findById(id);
    await prisma.categoria.delete({ where: { id } });
    return { message: "Categoria removida com sucesso" };
  }
}
