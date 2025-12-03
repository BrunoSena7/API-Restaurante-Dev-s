import { OrderItemRepository } from "../orderItem/orderItem.repository";
import { OrderRepository } from "./order.repository";
import { CreateOrderDto } from "./types/createOrder";

export class OrderService {
  private orderRepo = new OrderRepository();
  private orderItemRepo = new OrderItemRepository();
  list() {
    return this.orderRepo.list();
  }

  show(id: number) {
    return this.orderRepo.show(id);
  }

  async create(data: CreateOrderDto) {

    const pedido = await this.orderRepo.create({
      clienteId: data.clienteId,
      total: data.total
    });
    
    await data.produtos.forEach(async(item) => {

      await this.orderItemRepo.create({
        pedidoId: pedido.id,
        produtoId: item.produtoId,
        quantidade: item.quantidade,
        subtotal: 0
      });

    });
    
    return pedido;
  }

  update(id: number, data: any) {
    return this.orderRepo.update(id, data);
  }

  delete(id: number) {
    return this.orderRepo.delete(id);
  }
}
