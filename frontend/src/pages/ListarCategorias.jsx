import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// Importamos o serviço que já funciona
import { listarCategorias, excluirCategoria } from "../services/categoryService"; 

export default function ListarCategorias() {
  // Começamos com array vazio [] para o .length nunca quebrar
  const [categorias, setCategorias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    carregarDados();
  }, []);

  async function carregarDados() {
    try {
      console.log("Buscando categorias...");
      const dados = await listarCategorias();
      
      // PROTEÇÃO DE OURO:
      // Se 'dados' for uma lista, usa ela. Se for nulo/undefined, usa [].
      if (Array.isArray(dados)) {
        setCategorias(dados);
      } else {
        console.warn("Banco não retornou lista:", dados);
        setCategorias([]); 
      }
    } catch (error) {
      console.error("Erro fatal:", error);
      // Não deixamos a tela preta, apenas logamos o erro
    } finally {
      setLoading(false);
    }
  }

  async function deletar(id) {
    if (!confirm("Tem certeza que deseja excluir?")) return;
    try {
      await excluirCategoria(id);
      alert("Categoria excluída!");
      carregarDados(); // Atualiza a lista
    } catch (error) {
      alert("Erro ao excluir.");
    }
  }

  if (loading) {
    return <div style={{ padding: "40px", color: "white" }}>Carregando dados...</div>;
  }

  return (
    <div style={{ padding: "40px", color: "white" }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px" }}>
        <h1>LISTAGEM OFICIAL</h1> {/* Título de prova */}
        <Link 
          to="/categorias/criar" 
          style={{ 
            background: "#ff7b00", 
            padding: "10px 20px", 
            textDecoration: "none", 
            color: "white", 
            borderRadius: "6px" 
          }}
        >
          + Nova Categoria
        </Link>
      </div>

      {categorias.length === 0 ? (
        <p>Nenhuma categoria encontrada. Clique em "Nova Categoria" para criar.</p>
      ) : (
        <table style={{ width: "100%", borderCollapse: "collapse", background: "#222", borderRadius: "8px" }}>
          <thead>
            <tr style={{ borderBottom: "1px solid #444", textAlign: "left" }}>
              <th style={{ padding: "15px" }}>ID</th>
              <th style={{ padding: "15px" }}>Nome</th>
              <th style={{ padding: "15px" }}>Ações</th>
            </tr>
          </thead>
          <tbody>
            {categorias.map((cat) => (
              <tr key={cat.id || Math.random()} style={{ borderBottom: "1px solid #333" }}>
                <td style={{ padding: "15px" }}>{cat.id}</td>
                <td style={{ padding: "15px" }}>{cat.nome}</td>
                <td style={{ padding: "15px" }}>
                  <button 
                    onClick={() => deletar(cat.id)}
                    style={{ background: "red", color: "white", border: "none", padding: "6px 12px", borderRadius: "4px", cursor: "pointer" }}
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}