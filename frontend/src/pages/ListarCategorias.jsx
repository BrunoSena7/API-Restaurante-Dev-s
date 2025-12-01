import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listarCategorias, excluirCategoria } from "../services/categoryService";

export default function ListarCategorias() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    carregarCategorias();
  }, []);

  function carregarCategorias() {
    listarCategorias()
      .then((res) => setCategorias(res.data))
      .catch((err) => console.error("Erro ao carregar categorias:", err));
  }

  function handleDelete(id) {
    if (!window.confirm("Deseja realmente excluir essa categoria?")) return;

    excluirCategoria(id)
      .then(() => carregarCategorias())
      .catch((err) => console.error("Erro ao excluir categoria:", err));
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
        <h1 style={{ fontSize: "42px", fontWeight: "700" }}>Categorias</h1>

        <Link
          to="/categorias/criar"
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
          + Nova Categoria
        </Link>
      </div>

      <div
        style={{
          backgroundColor: "#0f0f16",
          border: "1px solid #1d1d29",
          borderRadius: "16px",
          padding: "25px",
          width: "60%",
          minWidth: "450px",
        }}
      >
        <table style={{ width: "100%", color: "white", borderSpacing: 0 }}>
          <thead>
            <tr style={{ color: "#b5b5c1", borderBottom: "1px solid #1d1d29" }}>
              <th>ID</th>
              <th>Nome</th>
              <th>Ações</th>
            </tr>
          </thead>

          <tbody>
            {categorias.length === 0 ? (
              <tr>
                <td colSpan="3" style={{ color: "#777", textAlign: "center" }}>
                  Nenhuma categoria encontrada.
                </td>
              </tr>
            ) : (
              categorias.map((cat) => (
                <tr key={cat.id}>
                  <td>{cat.id}</td>
                  <td>{cat.nome}</td>
                  <td>

                    <Link
                      to={`/categorias/editar/${cat.id}`}
                      style={{ color: "#4fa3ff", marginRight: "15px" }}
                    >
                      Editar
                    </Link>

                    <button
                      onClick={() => handleDelete(cat.id)}
                      style={{
                        background: "transparent",
                        border: "none",
                        color: "#ff4f4f",
                        cursor: "pointer",
                      }}
                    >
                      Excluir
                    </button>

                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
