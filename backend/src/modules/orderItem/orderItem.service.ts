import { OrderItemRepository } from "./orderItem.repository";

export class OrderItemService {
  private OrderItemRepo = new OrderItemRepository();
  
  list() {
    return this.OrderItemRepo.list();
  }

  show(id: number) {
    return this.OrderItemRepo.show(id);
  }

  create(data: any) {

    return this.OrderItemRepo.create(data);
  }

  update(id: number, data: any) {
    return this.OrderItemRepo.update(id, data);
  }

  delete(id: number) {
    return this.OrderItemRepo.delete(id);
  }
}
