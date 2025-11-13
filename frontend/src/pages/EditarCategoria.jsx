import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../services/api";

export default function EditarCategoria() {
  const { id } = useParams();
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  // Carregar categoria pelo ID
  async function carregar() {
    const r = await api.get(`/categorias/${id}`);
    setNome(r.data.nome);
  }

  useEffect(() => {
    carregar();
  }, []);

  async function salvar(e) {
    e.preventDefault();
    await api.put(`/categorias/${id}`, { nome });
    navigate("/categorias");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Editar Categoria</h1>

      <form onSubmit={salvar} style={{ marginTop: "20px" }}>
        <label style={{ display: "block", marginBottom: "10px" }}>
          Nome da Categoria:
        </label>

        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          style={{
            padding: "10px",
            width: "280px",
            borderRadius: "6px",
            border: "1px solid #555",
            background: "#222",
            color: "white",
          }}
        />

        <br /><br />

        <button
          type="submit"
          style={{
            background: "#ff7b00",
            color: "white",
            padding: "10px 18px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}
