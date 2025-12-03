import { prisma } from "../../prisma";

export class CustomerRepository {
  
  list() {
    return prisma.cliente.findMany({
     
    });
  }

  // BUSCAR UM: Também trazemos a categoria aqui
  show(id: number) {
   
    return prisma.cliente.findUnique({
      where: { id },
      include: {
       
      },
    });
  }

  create(data: any) {
    return prisma.cliente.create({ data });
  }

  update(id: number, data: any) {
    return prisma.cliente.update({ where: { id }, data });
  }

  delete(id: number) {
    return prisma.cliente.delete({ where: { id } });
  }
}