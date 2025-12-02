import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { listarProdutos } from "../services/productService";
import { criarPedido } from "../services/orderService";

export default function CriarPedido() {
  const navigate = useNavigate();
  
  const [produtos, setProdutos] = useState([]);
  const [carrinho, setCarrinho] = useState([]);
  const [cliente, setCliente] = useState("");
  const [loading, setLoading] = useState(true);

  // 1. Carrega os produtos do banco ao abrir a tela
  useEffect(() => {
    async function carregar() {
      try {
        const dados = await listarProdutos();
        setProdutos(dados || []);
      } catch (error) {
        alert("Erro ao carregar produtos. O Backend está ligado?");
      } finally {
        setLoading(false);
      }
    }
    carregar();
  }, []);

  // 2. Adiciona produto ao carrinho (ou aumenta quantidade)
  function adicionarAoCarrinho(produto) {
    const itemExistente = carrinho.find((item) => item.id === produto.id);

    if (itemExistente) {
      const novoCarrinho = carrinho.map((item) =>
        item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
      );
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho([...carrinho, { ...produto, quantidade: 1 }]);
    }
  }

  // 3. Remove item do carrinho
  function removerDoCarrinho(id) {
    const novoCarrinho = carrinho.filter((item) => item.id !== id);
    setCarrinho(novoCarrinho);
  }

  // 4. Calcula o Total automaticamente
  const total = carrinho.reduce((acc, item) => acc + (Number(item.preco) * item.quantidade), 0);

  // 5. Envia o pedido para o Backend
  async function finalizarPedido() {
    if (carrinho.length === 0) return alert("O carrinho está vazio!");
    if (!cliente.trim()) return alert("Digite o nome do cliente.");

    try {
      // Formata os dados como o Prisma espera receber
      const payload = {
        cliente: cliente,
        total: total,
        itens: carrinho.map(item => ({
          produtoId: item.id,
          quantidade: item.quantidade
        }))
      };

      await criarPedido(payload);
      alert("Pedido realizado com sucesso!");
      navigate("/pedidos"); // Volta para a lista
    } catch (error) {
      console.error(error);
      alert("Erro ao finalizar pedido. Verifique o console.");
    }
  }

  if (loading) return <div style={{padding: "40px", color: "white"}}>Carregando produtos...</div>;

  return (
    <div style={{ padding: "20px", color: "white", display: "flex", gap: "20px", height: "90vh" }}>
      
      {/* --- ESQUERDA: CATÁLOGO DE PRODUTOS --- */}
      <div style={{ flex: 2, overflowY: "auto" }}>
        <h1>Escolha os Produtos</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "15px", marginTop: "20px" }}>
          {produtos.map((produto) => (
            <div 
              key={produto.id} 
              onClick={() => adicionarAoCarrinho(produto)}
              style={{ 
                background: "#333", padding: "15px", borderRadius: "8px", 
                cursor: "pointer", border: "1px solid #444", transition: "0.2s"
              }}
              onMouseOver={(e) => e.currentTarget.style.borderColor = "#ff7b00"}
              onMouseOut={(e) => e.currentTarget.style.borderColor = "#444"}
            >
              <h3 style={{ margin: "0 0 10px 0" }}>{produto.nome}</h3>
              <p style={{ color: "#aaa", fontSize: "14px" }}>{produto.categoria?.nome || "Geral"}</p>
              <div style={{ marginTop: "10px", fontSize: "18px", fontWeight: "bold", color: "#ff7b00" }}>
                R$ {Number(produto.preco).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- DIREITA: CARRINHO E FINALIZAÇÃO --- */}
      <div style={{ flex: 1, background: "#222", padding: "20px", borderRadius: "10px", display: "flex", flexDirection: "column" }}>
        <h2>Novo Pedido</h2>
        
        <input 
          type="text" 
          placeholder="Nome do Cliente" 
          value={cliente}
          onChange={(e) => setCliente(e.target.value)}
          style={{ width: "100%", padding: "12px", marginTop: "10px", marginBottom: "20px", borderRadius: "5px", border: "none", fontSize: "16px" }}
        />

        <div style={{ flex: 1, overflowY: "auto", borderTop: "1px solid #444", borderBottom: "1px solid #444", padding: "10px 0" }}>
          {carrinho.length === 0 ? (
            <p style={{ color: "#777", textAlign: "center", marginTop: "20px" }}>Clique nos produtos para adicionar.</p>
          ) : (
            carrinho.map((item) => (
              <div key={item.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px", padding: "10px", background: "#333", borderRadius: "5px" }}>
                <div>
                  <div style={{ fontWeight: "bold" }}>{item.nome}</div>
                  <div style={{ fontSize: "12px", color: "#aaa" }}>{item.quantidade}x R$ {Number(item.preco).toFixed(2)}</div>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <span style={{ fontWeight: "bold" }}>R$ {(item.quantidade * item.preco).toFixed(2)}</span>
                  <button 
                    onClick={() => removerDoCarrinho(item.id)}
                    style={{ background: "red", color: "white", border: "none", width: "25px", height: "25px", borderRadius: "50%", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
                  >X</button>
                </div>
              </div>
            ))
          )}
        </div>

        <div style={{ marginTop: "20px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "20px", fontWeight: "bold", marginBottom: "15px" }}>
            <span>Total:</span>
            <span>R$ {total.toFixed(2)}</span>
          </div>
          <button 
            onClick={finalizarPedido}
            style={{ width: "100%", background: "#28a745", color: "white", padding: "15px", border: "none", borderRadius: "8px", fontSize: "18px", cursor: "pointer", fontWeight: "bold" }}
          >
            FINALIZAR PEDIDO
          </button>
        </div>
      </div>

    </div>
  );
}