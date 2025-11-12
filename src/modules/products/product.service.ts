import { prisma } from "../../config/prisma";
import { ProductData } from "./product.schema";
import { AppError } from "../../errors/AppError";

export class ProductService {
  async create(data: ProductData) {
    const category = await prisma.categoria.findUnique({
      where: { id: data.categoriaId },
    });
    if (!category) throw new AppError("Categoria não encontrada", 404);

    return prisma.produto.create({ data });
  }

  async findAll() {
    return prisma.produto.findMany({
      include: { categoria: true },
    });
  }

  async findById(id: number) {
    const product = await prisma.produto.findUnique({
      where: { id },
      include: { categoria: true },
    });
    if (!product) throw new AppError("Produto não encontrado", 404);
    return product;
  }

  async update(id: number, data: ProductData) {
    await this.findById(id);
    return prisma.produto.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.findById(id);
    await prisma.produto.delete({ where: { id } });
    return { message: "Produto removido com sucesso" };
  }
}
