import { ItemPedido, Pedido, Produto } from "@prisma/client";

export type CreateOrderDto = {

    clienteId:number
    produtos:OrderProduct[]
    total:number
};

export type OrderProduct = {

    produtoId:number
    quantidade:number
} 