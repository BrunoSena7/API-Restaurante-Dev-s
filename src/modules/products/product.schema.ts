import { z } from "zod";

export const ProductSchema = z.object({
  nome: z.string().min(2, "Nome obrigatório"),
  descricao: z.string().optional(),
  preco: z.number().positive("Preço deve ser positivo"),
  estoque: z.number().int().min(0, "Estoque inválido"),
  categoriaId: z.number().int().positive("categoriaId obrigatório"),
});

export type ProductData = z.infer<typeof ProductSchema>;
