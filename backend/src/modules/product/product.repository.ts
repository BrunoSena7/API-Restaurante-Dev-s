import { prisma } from "../../prisma";

export class ProductRepository {
  // LISTAR: Adicionamos o include para trazer os dados da Categoria
  list() {
    return prisma.produto.findMany({
      include: {
        categoria: true, 
      },
    });
  }

  // BUSCAR UM: Também trazemos a categoria aqui
  show(id: number) {
    return prisma.produto.findUnique({
      where: { id },
      include: {
        categoria: true,
      },
    });
  }

  create(data: any) {
    return prisma.produto.create({ data });
  }

  update(id: number, data: any) {
    return prisma.produto.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.produto.delete({ where: { id } });
  }
}