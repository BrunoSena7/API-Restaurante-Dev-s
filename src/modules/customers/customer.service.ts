import { prisma } from "../../config/prisma";
import { CustomerData } from "./customer.schema";
import { AppError } from "../../errors/AppError";

export class CustomerService {
  async create(data: CustomerData) {
    const existing = await prisma.cliente.findUnique({ where: { email: data.email } });
    if (existing) throw new AppError("E-mail já cadastrado", 409);

    return prisma.cliente.create({ data });
  }

  async findAll() {
    return prisma.cliente.findMany({
      include: { pedidos: true },
      orderBy: { id: "asc" },
    });
  }

  async findById(id: number) {
    const cliente = await prisma.cliente.findUnique({
      where: { id },
      include: { pedidos: true },
    });

    if (!cliente) throw new AppError("Cliente não encontrado", 404);
    return cliente;
  }

  async update(id: number, data: CustomerData) {
    await this.findById(id);
    return prisma.cliente.update({ where: { id }, data });
  }

  async delete(id: number) {
    await this.findById(id);
    await prisma.cliente.delete({ where: { id } });
    return { message: "Cliente removido com sucesso" };
  }
}
