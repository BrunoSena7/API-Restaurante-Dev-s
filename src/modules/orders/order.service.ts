import { prisma } from "../../config/prisma";
import { PedidoData } from "./order.schema";
import { AppError } from "../../errors/AppError";

export class OrderService {
  async create(data: PedidoData) {
    const cliente = await prisma.cliente.findUnique({
      where: { id: data.clienteId },
    });
    if (!cliente) throw new AppError("Cliente não encontrado", 404);

    let total = 0;
    const itens = [];

    for (const item of data.itens) {
      const produto = await prisma.produto.findUnique({ where: { id: item.produtoId } });
      if (!produto) throw new AppError(`Produto ID ${item.produtoId} não encontrado`, 404);

      const subtotal = Number(produto.preco) * item.quantidade;
      total += subtotal;

      itens.push({
        produtoId: item.produtoId,
        quantidade: item.quantidade,
        subtotal,
      });
    }

    const pedido = await prisma.pedido.create({
      data: {
        clienteId: data.clienteId,
        total,
        status: "PENDENTE",
        itens: { create: itens },
      },
      include: {
        cliente: true,
        itens: { include: { produto: true } },
      },
    });

    return pedido;
  }

  async findAll() {
    return prisma.pedido.findMany({
      include: {
        cliente: true,
        itens: { include: { produto: true } },
      },
      orderBy: { criadoEm: "desc" },
    });
  }

  async findById(id: number) {
    const pedido = await prisma.pedido.findUnique({
      where: { id },
      include: {
        cliente: true,
        itens: { include: { produto: true } },
      },
    });
    if (!pedido) throw new AppError("Pedido não encontrado", 404);
    return pedido;
  }

  async updateStatus(id: number, status: string) {
    await this.findById(id);
    return prisma.pedido.update({
      where: { id },
      data: { status },
      include: {
        cliente: true,
        itens: { include: { produto: true } },
      },
    });
  }

  async delete(id: number) {
    await this.findById(id);
    await prisma.itemPedido.deleteMany({ where: { pedidoId: id } });
    await prisma.pedido.delete({ where: { id } });
    return { message: "Pedido removido com sucesso" };
  }
}
