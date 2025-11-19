import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { listarProdutos, excluirProduto } from "../services/productService";

export default function ListarProdutos() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    carregarProdutos();
  }, []);

  async function carregarProdutos() {
    try {
      const data = await listarProdutos();
      setProdutos(data || []);
    } catch (err) {
      console.error("Erro ao carregar produtos:", err);
    }
  }

  async function handleDelete(id) {
    if (!window.confirm("Deseja realmente excluir este produto?")) return;
    try {
      await excluirProduto(id);
      carregarProdutos();
    } catch (err) {
      console.error("Erro ao excluir produto:", err);
    }
  }

  function formatPrice(value) {
    const num = Number(value);
    if (Number.isNaN(num)) return value;
    return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
  }

  return (
    <div style={{ padding: "40px", width: "100%", color: "white" }}>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <h1 style={{ fontSize: "42px", fontWeight: "700" }}>Produtos</h1>

        <Link
          to="/produtos/criar"
          style={{
            backgroundColor: "#ffb300",
            color: "black",
            padding: "12px 22px",
            borderRadius: "10px",
            fontWeight: "600",
            boxShadow: "0px 0px 15px rgba(255,179,0,0.4)",
            textDecoration: "none",
          }}
        >
          + Novo Produto
        </Link>
      </div>

      <div
        style={{
          backgroundColor: "#0f0f16",
          border: "1px solid #1d1d29",
          borderRadius: "16px",
          padding: "25px",
          width: "80%",
          minWidth: "600px",
          boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
        }}
      >
        <div style={{
          background: "#121216",
          padding: "18px",
          borderRadius: "12px",
          border: "1px solid rgba(255,255,255,0.03)",
        }}>
          <table style={{ width: "100%", color: "white", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ color: "#b5b5c1", borderBottom: "1px solid #1d1d29" }}>
                <th style={{ padding: "12px 10px", textAlign: "left" }}>ID</th>
                <th style={{ padding: "12px 10px", textAlign: "left" }}>Nome</th>
                <th style={{ padding: "12px 10px", textAlign: "left" }}>Preço</th>
                <th style={{ padding: "12px 10px", textAlign: "left" }}>Categoria</th>
                <th style={{ padding: "12px 10px", textAlign: "left" }}>Ações</th>
              </tr>
            </thead>

            <tbody>
              {produtos.length === 0 ? (
                <tr>
                  <td colSpan="5" style={{ padding: "20px", color: "#777", textAlign: "center" }}>
                    Nenhum produto encontrado.
                  </td>
                </tr>
              ) : (
                produtos.map((p) => (
                  <tr key={p.id} style={{ borderBottom: "1px solid #1d1d29", height: "56px" }}>
                    <td style={{ padding: "10px" }}>{p.id}</td>
                    <td style={{ padding: "10px" }}>{p.nome}</td>
                    <td style={{ padding: "10px" }}>{formatPrice(p.preco)}</td>
                    <td style={{ padding: "10px" }}>{p.categoriaNome || (p.categoria && p.categoria.nome) || "-"}</td>
                    <td style={{ padding: "10px" }}>
                      <Link to={`/produtos/editar/${p.id}`} style={{
                        background: "#2b2b30",
                        color: "#ff6b2d",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        textDecoration: "none",
                        marginRight: "8px",
                        border: "1px solid rgba(255,255,255,0.04)",
                        fontWeight: 600,
                        fontSize: "14px",
                      }}>Editar</Link>

                      <button onClick={() => handleDelete(p.id)} style={{
                        background: "#ff6b2d",
                        color: "white",
                        padding: "8px 12px",
                        borderRadius: "8px",
                        border: "none",
                        cursor: "pointer",
                        fontWeight: 700,
                        fontSize: "14px",
                      }}>Excluir</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
