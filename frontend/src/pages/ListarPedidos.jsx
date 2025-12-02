import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Certifique-se que o orderService.ts existe (criamos ele no passo anterior)
import { listarPedidos, atualizarStatusPedido } from "../services/orderService";

export default function ListarPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pedidoSelecionado, setPedidoSelecionado] = useState(null);

  useEffect(() => {
    carregarPedidos();
  }, []);

  async function carregarPedidos() {
    try {
      const dados = await listarPedidos();
      if (Array.isArray(dados)) {
        setPedidos(dados);
      } else {
        setPedidos([]);
      }
    } catch (error) {
      console.error("Erro ao listar:", error);
    } finally {
      setLoading(false);
    }
  }

  async function mudarStatus(id, novoStatus) {
    try {
      await atualizarStatusPedido(id, novoStatus);
      alert("Status atualizado!");
      carregarPedidos();
      setPedidoSelecionado(null);
    } catch (error) {
      alert("Erro ao atualizar status.");
    }
  }

  const getStatusColor = (status) => {
    if (status === "finalizado") return "green";
    if (status === "em preparo") return "blue";
    return "orange";
  };

  if (loading) return <div style={{ padding: "40px", color: "white" }}>Carregando pedidos...</div>;

  return (
    <div style={{ padding: "40px", color: "white" }}>
      
      {/* CABEÇALHO COM O BOTÃO NOVO */}
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <h1>Pedidos</h1>
        <Link 
          to="/pedidos/criar" 
          style={{ 
            background: "#ff7b00", 
            padding: "10px 20px", 
            textDecoration: "none", 
            color: "white", 
            borderRadius: "6px",
            fontWeight: "bold"
          }}
        >
          + Novo Pedido
        </Link>
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse", background: "#222", borderRadius: "8px" }}>
        <thead>
          <tr style={{ textAlign: "left", borderBottom: "1px solid #444" }}>
            <th style={{ padding: "15px" }}>Nº</th>
            <th style={{ padding: "15px" }}>Cliente</th>
            <th style={{ padding: "15px" }}>Total</th>
            <th style={{ padding: "15px" }}>Status</th>
            <th style={{ padding: "15px" }}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {pedidos.map((pedido) => (
            <tr key={pedido.id} style={{ borderBottom: "1px solid #333" }}>
              <td style={{ padding: "15px" }}>{pedido.id}</td>
              <td style={{ padding: "15px" }}>{pedido.cliente || "Balcão"}</td>
              <td style={{ padding: "15px" }}>R$ {Number(pedido.total).toFixed(2)}</td>
              <td style={{ padding: "15px" }}>
                <span style={{ background: getStatusColor(pedido.status), padding: "5px 10px", borderRadius: "12px", fontSize: "12px", fontWeight: "bold" }}>
                  {pedido.status}
                </span>
              </td>
              <td style={{ padding: "15px" }}>
                <button 
                  onClick={() => setPedidoSelecionado(pedido)} 
                  style={{ background: "#ff7b00", color: "white", border: "none", padding: "8px 16px", borderRadius: "6px", cursor: "pointer" }}
                >
                  Ver detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* MODAL DE DETALHES */}
      {pedidoSelecionado && (
        <div style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, backgroundColor: "rgba(0,0,0,0.8)", display: "flex", justifyContent: "center", alignItems: "center", zIndex: 1000 }}>
          <div style={{ background: "#333", padding: "30px", borderRadius: "10px", width: "500px", maxWidth: "90%" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h2>Detalhes #{pedidoSelecionado.id}</h2>
              <button onClick={() => setPedidoSelecionado(null)} style={{ background: "transparent", border: "none", color: "white", fontSize: "20px", cursor: "pointer" }}>✖</button>
            </div>
            <p><strong>Status:</strong> {pedidoSelecionado.status}</p>
            
            <h3 style={{ marginTop: "20px", borderBottom: "1px solid #555" }}>Itens</h3>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {pedidoSelecionado.itens && pedidoSelecionado.itens.length > 0 ? (
                pedidoSelecionado.itens.map((item, index) => (
                  <li key={index} style={{ padding: "8px 0", borderBottom: "1px solid #444", display: "flex", justifyContent: "space-between" }}>
                    <span>{item.produto?.nome || "Produto"} (x{item.quantidade})</span>
                    <span>R$ {Number(item.preco).toFixed(2)}</span>
                  </li>
                ))
              ) : ( <li style={{ padding: "10px", color: "#aaa" }}>Itens não carregados.</li> )}
            </ul>

            <div style={{ marginTop: "20px", textAlign: "right", fontSize: "18px", fontWeight: "bold" }}>
              Total: R$ {Number(pedidoSelecionado.total).toFixed(2)}
            </div>

            <div style={{ marginTop: "25px", display: "flex", gap: "10px", justifyContent: "flex-end" }}>
              <button onClick={() => mudarStatus(pedidoSelecionado.id, "finalizado")} style={{ background: "green", color: "white", padding: "10px 20px", border: "none", borderRadius: "6px", cursor: "pointer" }}>Finalizar</button>
              <button onClick={() => setPedidoSelecionado(null)} style={{ background: "#555", color: "white", padding: "10px 20px", border: "none", borderRadius: "6px", cursor: "pointer" }}>Fechar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}