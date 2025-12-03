import { CustomerRepository } from "./customer.repository";

export class CustomerService {
  private repo = new CustomerRepository();
  list() {
    return this.repo.list();
  }

  show(id: number) {
    return this.repo.show(id);
  }

  async create(data: any) {

    const pedido = await this.repo.create(data);
    
    return pedido;
    
  }

  update(id: number, data: any) {
    return this.repo.update(id, data);
  }

  delete(id: number) {
    return this.repo.delete(id);
  }
}
