// src/prisma/client.ts
// Este arquivo cria e exporta uma única instância do PrismaClient.
// Ter uma instância única evita múltiplas conexões ao banco durante o desenvolvimento,
// especialmente quando o TypeScript recompila e reinicia o processo.

import { PrismaClient } from "@prisma/client";

// Aqui criamos uma variável global no objeto globalThis para armazenar a instância.
// Isso é útil em ambientes de desenvolvimento (hot-reload) para prevenir múltiplas
// conexões abertas pelo Prisma quando o ts-node-dev reinicia o processo.
//
// Em produção, isto não é necessário, mas a estratégia é segura para ambos os casos.
declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

// Se já existir, reutiliza; caso contrário, cria uma nova instância.
// Assim evitamos o problema de "Exceeded maximum number of clients" em dev.
const prismaClient: PrismaClient =
  global.prisma ??
  new PrismaClient({
    // opcional: habilite logs para debug durante desenvolvimento
    log: ["query", "info", "warn", "error"],
  });

if (process.env.NODE_ENV !== "production") {
  // Salva a instância no global para reutilizar em hot-reload
  global.prisma = prismaClient;
}

// Exporta a instância para uso em repositórios/services/controllers
export default prismaClient;
