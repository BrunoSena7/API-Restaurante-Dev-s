import { useState } from "react";

export default function ListarPedidos() {

  const [statusFiltro, setStatusFiltro] = useState("todos");

  // ---- LISTA FAKE DE PEDIDOS (depois você troca pelo backend)
  const pedidos = [
    { id: 1, cliente: "João Silva", total: 45.50, status: "em_preparo" },
    { id: 2, cliente: "Maria Souza", total: 80.00, status: "finalizado" },
    { id: 3, cliente: "Carlos Lima", total: 22.90, status: "pendente" },
  ];

  const pedidosFiltrados =
    statusFiltro === "todos"
      ? pedidos
      : pedidos.filter(p => p.status === statusFiltro);

  const getStatusBadge = (status) => {
    const cores = {
      pendente: "#ffaa00",
      em_preparo: "#0099ff",
      finalizado: "#00cc66"
    };

    return (
      <span
        style={{
          padding: "6px 12px",
          borderRadius: "8px",
          background: cores[status],
          color: "white",
          fontSize: "14px"
        }}
      >
        {status.replace("_", " ")}
      </span>
    );
  };

  return (
    <div style={{ color: "white" }}>
      <h2>Pedidos</h2>

      {/* FILTRO */}
      <div style={{ marginBottom: 20 }}>
        <select
          value={statusFiltro}
          onChange={e => setStatusFiltro(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: 8,
            background: "#111",
            color: "white",
            border: "1px solid #444"
          }}
        >
          <option value="todos">Todos</option>
          <option value="pendente">Pendente</option>
          <option value="em_preparo">Em preparo</option>
          <option value="finalizado">Finalizado</option>
        </select>
      </div>

      {/* TABELA */}
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #333" }}>
            <th style={{ padding: 12 }}>Nº</th>
            <th style={{ padding: 12 }}>Cliente</th>
            <th style={{ padding: 12 }}>Total</th>
            <th style={{ padding: 12 }}>Status</th>
            <th style={{ padding: 12 }}>Ações</th>
          </tr>
        </thead>

        <tbody>
          {pedidosFiltrados.map(p => (
            <tr key={p.id} style={{ borderBottom: "1px solid #222" }}>
              <td style={{ padding: 12 }}>{p.id}</td>
              <td style={{ padding: 12 }}>{p.cliente}</td>
              <td style={{ padding: 12 }}>R$ {p.total.toFixed(2)}</td>
              <td style={{ padding: 12 }}>
                {getStatusBadge(p.status)}
              </td>
              <td style={{ padding: 12 }}>
                <button
                  style={{
                    padding: "8px 14px",
                    background: "#ff6600",
                    color: "white",
                    border: "none",
                    borderRadius: 8,
                    cursor: "pointer"
                  }}
                >
                  Ver detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
}
