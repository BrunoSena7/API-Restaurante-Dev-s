import API_URL from "./api";

export async function listar() {
  const response = await fetch(`${API_URL}/clientes`);
  if (!response.ok) throw new Error("Erro ao buscar clientes");
  return response.json();
}

export async function criar(data: any) {
  const response = await fetch(`${API_URL}/clientes`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Erro ao criar cliente");
  return response.json();
}

export async function atualizar(id: number, data: any) {
  const response = await fetch(`${API_URL}/clientes/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) throw new Error("Erro ao atualizar cliente");
  return response.json();
}

export async function excluir(id: number) {
  const response = await fetch(`${API_URL}/clientes/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) throw new Error("Erro ao excluir cliente");
  return true;
}

