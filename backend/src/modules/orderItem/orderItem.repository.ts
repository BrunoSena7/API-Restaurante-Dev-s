import { prisma } from "../../prisma";

export class OrderItemRepository {
  
  list() {
    return prisma.pedido.findMany({
     
    });
  }

  // BUSCAR UM: Também trazemos a categoria aqui
  show(id: number) {
   
    return prisma.itemPedido.findUnique({
      where: { id },
    });
  }

  create(data: any) {
    return prisma.itemPedido.create({ data });
  }

  update(id: number, data: any) {
    return prisma.itemPedido.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.itemPedido.delete({ where: { id } });
  }
}