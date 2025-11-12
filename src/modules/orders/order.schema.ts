import { z } from "zod";

export const ItemPedidoSchema = z.object({
  produtoId: z.number().int().positive("ID do produto inválido"),
  quantidade: z.number().int().min(1, "Quantidade mínima é 1"),
});

export const PedidoSchema = z.object({
  clienteId: z.number().int().positive("ID do cliente inválido"),
  itens: z.array(ItemPedidoSchema).min(1, "O pedido deve ter pelo menos um item"),
});

export type PedidoData = z.infer<typeof PedidoSchema>;
