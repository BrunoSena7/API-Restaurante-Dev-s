import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { criarCategoria } from "../services/categoryService"; 

export default function CriarCategoria() {
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  async function salvar(e) {
    e.preventDefault();
    try {
      await criarCategoria({ nome: nome, descricao: "" });
      alert("Sucesso!");
      navigate("/categorias");
    } catch (error) {
      console.error(error);
      alert("Erro ao criar.");
    }
  }

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Criando Categoria</h1> {/* Título de prova */}
      <form onSubmit={salvar} style={{ marginTop: "25px" }}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          required
          style={{ padding: "10px", color: "black" }} 
        />
        <button type="submit" style={{ padding: "10px", marginLeft: "10px" }}>Salvar</button>
      </form>
    </div>
  );
}