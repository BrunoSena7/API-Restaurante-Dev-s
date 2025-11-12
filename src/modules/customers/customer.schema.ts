import { z } from "zod";

export const CustomerSchema = z.object({
  nome: z.string().min(3, "Nome obrigatório"),
  email: z.string().email("E-mail inválido"),
  telefone: z.string().min(8, "Telefone obrigatório"),
});

export type CustomerData = z.infer<typeof CustomerSchema>;
