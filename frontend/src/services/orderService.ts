import API_URL from "./api";

// Listar todos os pedidos
export async function listarPedidos() {
  const response = await fetch(`${API_URL}/orders`);
  if (!response.ok) throw new Error("Erro ao buscar pedidos");
  return response.json();
}

// Buscar detalhes de um pedido específico (com itens)
export async function buscarPedidoPorId(id: number) {
  const response = await fetch(`${API_URL}/orders/${id}`);
  if (!response.ok) throw new Error("Erro ao buscar detalhes do pedido");
  return response.json();
}

// Atualizar status (Ex: de "pendente" para "em preparo")
export async function atualizarStatusPedido(id: number, status: string) {
  const response = await fetch(`${API_URL}/orders/${id}`, {
    method: "PATCH", 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status }),
  });
  if (!response.ok) throw new Error("Erro ao atualizar status");
  return response.json();
}

// 🆕 NOVA FUNÇÃO: CRIAR PEDIDO (Essencial para o PDV)
export async function criarPedido(dados: any) {
  const response = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(dados),
  });
  if (!response.ok) throw new Error("Erro ao criar pedido");
  return response.json();
}