import { z } from "zod";

export const CategorySchema = z.object({
  nome: z.string().min(2, "Nome da categoria é obrigatório."),
  descricao: z.string().optional(),
});

export type CategoryData = z.infer<typeof CategorySchema>;
