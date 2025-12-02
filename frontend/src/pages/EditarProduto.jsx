import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// Importamos os serviços de Produto E de Categoria
import { buscarProdutoPorId, atualizarProduto } from "../services/productService";
import { listarCategorias } from "../services/categoryService"; 

export default function EditarProduto() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Estados do formulário
  const [nome, setNome] = useState("");
  const [preco, setPreco] = useState("");
  const [categoriaId, setCategoriaId] = useState("");
  
  // Estado para guardar a lista de categorias que vai no dropdown
  const [listaCategorias, setListaCategorias] = useState([]);

  useEffect(() => {
    carregarDados();
  }, [id]);

  async function carregarDados() {
    try {
      // 1. BUSCAR AS CATEGORIAS (Para preencher o dropdown)
      console.log("Buscando categorias...");
      const categoriasDoBanco = await listarCategorias();
      setListaCategorias(categoriasDoBanco || []);

      // 2. BUSCAR O PRODUTO (Para preencher os campos)
      console.log("Buscando produto...");
      const produto = await buscarProdutoPorId(id);
      
      setNome(produto.nome);
      setPreco(produto.preco);
      // Garante que pega o ID, mesmo se vier dentro de um objeto
      setCategoriaId(produto.categoriaId || ""); 

    } catch (error) {
      console.error("Erro ao carregar dados:", error);
      alert("Erro ao carregar informações.");
    }
  }

  async function salvar(e) {
    e.preventDefault();
    try {
      await atualizarProduto(id, {
        nome,
        preco: Number(preco),
        categoriaId: Number(categoriaId) // Envia o ID da categoria escolhida
      });
      alert("Produto atualizado com sucesso!");
      navigate("/produtos");
    } catch (error) {
      console.error("Erro ao salvar:", error);
      alert("Erro ao atualizar produto.");
    }
  }

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <h1>Editar Produto #{id}</h1>

      <form onSubmit={salvar} style={{ marginTop: "25px", display: "flex", flexDirection: "column", gap: "15px", maxWidth: "400px" }}>
        
        {/* Nome */}
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", marginTop: "5px", color: "black" }}
          />
        </div>

        {/* Preço */}
        <div>
          <label>Preço</label>
          <input
            type="number"
            step="0.01"
            value={preco}
            onChange={(e) => setPreco(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", marginTop: "5px", color: "black" }}
          />
        </div>

        {/* Categoria (Dropdown) */}
        <div>
          <label>Categoria</label>
          <select
            value={categoriaId}
            onChange={(e) => setCategoriaId(e.target.value)}
            required
            style={{ width: "100%", padding: "10px", marginTop: "5px", color: "black" }}
          >
            <option value="">Selecione uma categoria...</option>
            
            {/* Aqui fazemos o loop nas categorias que buscamos */}
            {listaCategorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nome}
              </option>
            ))}
          </select>
        </div>

        <button 
          type="submit" 
          style={{ 
            background: "#ff7b00", 
            color: "white", 
            padding: "12px", 
            border: "none", 
            borderRadius: "6px", 
            cursor: "pointer", 
            marginTop: "10px",
            fontSize: "16px"
          }}
        >
          Salvar Alterações
        </button>
      </form>
    </div>
  );
}