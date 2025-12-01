import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function CriarCategoria() {
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  async function salvar(e) {
    e.preventDefault();

    try {
      await api.post("/categorias", { nome });
      alert("Categoria criada com sucesso!");
      navigate("/categorias");
    } catch (error) {
      console.error("Erro ao salvar categoria", error);
      alert("Erro ao criar categoria");
    }
  }

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Criar Categoria</h1>

      <form onSubmit={salvar} style={{ marginTop: "25px" }}>

        <label>Nome da categoria</label><br />

        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Ex: Bebidas"
          required
          style={{
            padding: "12px",
            width: "280px",
            borderRadius: "6px",
            border: "1px solid #555",
            background: "#222",
            color: "white",
            marginTop: "8px"
          }}
        />

        <br /><br />

        <button
          type="submit"
          style={{
            background: "#ff7b00",
            padding: "10px 20px",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Salvar
        </button>

      </form>
    </div>
  );
}

