import API_URL from "./api";

// Buscar todos os produtos (Para a lista)
export async function listarProdutos() {
  const response = await fetch(`${API_URL}/products`);
  if (!response.ok) throw new Error("Erro ao buscar produtos");
  return response.json();
}

// 🆕 NOVA FUNÇÃO: Buscar UM produto pelo ID (Essencial para Edição)
export async function buscarProdutoPorId(id: number) {
  const response = await fetch(`${API_URL}/products/${id}`);
  if (!response.ok) throw new Error("Erro ao buscar produto");
  return response.json();
}

// Criar produto
export async function criarProduto(data: any) {
  const response = await fetch(`${API_URL}/products`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Erro ao criar produto");
  return response.json();
}

// Atualizar produto
export async function atualizarProduto(id: number, data: any) {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Erro ao atualizar produto");
  return response.json();
}

// Excluir produto
export async function excluirProduto(id: number) {
  const response = await fetch(`${API_URL}/products/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("Erro ao excluir produto");
  return true;
}