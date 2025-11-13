import React from "react";

export default function Dashboard() {
  return (
    <div style={container}>
      {/* Cabeçalho */}
      <h1 style={title}>Restaurant</h1>

      {/* Cards superiores */}
      <div style={cardContainer}>
        <div style={card}>
          <h2 style={cardTitle}>150 Pedidos de Hoje</h2>
        </div>
        <div style={card}>
          <h2 style={cardTitle}>23 Produtos Cadastrados</h2>
        </div>
        <div style={cardHighlight}>
          <h2 style={cardTitle}>Pizza Calabresa</h2>
          <p style={cardSubtext}>Mais Vendido</p>
        </div>
        <div style={cardStatus}>
          <h2 style={cardTitle}>Cozinha em Preparação</h2>
        </div>
      </div>

      {/* Tabela de produtos */}
      <h2 style={sectionTitle}>Lista de Produtos</h2>
      <table style={table}>
        <thead>
          <tr>
            <th style={th}>ID</th>
            <th style={th}>Nome</th>
            <th style={th}>Preço</th>
            <th style={th}>Categoria</th>
            <th style={th}>Ações</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td style={td}>{item.id}</td>
              <td style={td}>{item.nome}</td>
              <td style={td}>{item.preco}</td>
              <td style={td}>{item.categoria}</td>
              <td style={td}>
                <button style={editButton}>Editar</button>
                <button style={deleteButton}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Botão de adicionar produto */}
      <button style={addButton}>+ Novo Produto</button>
    </div>
  );
}

/* ----------- Dados fictícios ----------- */
const products = [
  { id: 11, nome: "Hambúrguer", preco: "R$ 10,00", categoria: "Produtos" },
  { id: 22, nome: "Pizza Calabresa", preco: "R$ 12,00", categoria: "Categoria" },
  { id: 33, nome: "Refrigerante", preco: "R$ 1,00", categoria: "Categoria" },
  { id: 14, nome: "Salada Caesar", preco: "R$ 5,00", categoria: "Categoria" },
  { id: 55, nome: "Suco de Laranja", preco: "R$ 12,00", categoria: "Relatório" },
  { id: 66, nome: "Lasanha Bolonhesa", preco: "R$ 14,30", categoria: "Categoria" },
];

/* ----------- ESTILOS ----------- */
const container = {
  padding: "30px",
  color: "#fff",
  backgroundColor: "#0f0f0f",
  minHeight: "100vh",
  fontFamily: "Inter, sans-serif",
};

const title = {
  fontSize: "28px",
  fontWeight: "600",
  marginBottom: "30px",
};

const cardContainer = {
  display: "flex",
  gap: "15px",
  flexWrap: "wrap",
  marginBottom: "40px",
};

const card = {
  background: "#1b1b1b",
  padding: "20px 25px",
  borderRadius: "10px",
  border: "1px solid #2b2b2b",
  flex: "1",
  minWidth: "200px",
};

const cardHighlight = {
  ...card,
  background: "#242424",
  border: "1px solid #ff7b00",
};

const cardStatus = {
  ...card,
  background: "#1a1a1a",
  border: "1px solid #333",
};

const cardTitle = {
  fontSize: "18px",
  fontWeight: "500",
  marginBottom: "5px",
};

const cardSubtext = {
  fontSize: "14px",
  color: "#ff7b00",
};

const sectionTitle = {
  fontSize: "20px",
  fontWeight: "600",
  marginBottom: "10px",
};

const table = {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: "40px",
};

const th = {
  textAlign: "left",
  padding: "12px",
  borderBottom: "1px solid #333",
  color: "#ccc",
};

const td = {
  padding: "12px",
  borderBottom: "1px solid #222",
  color: "#eee",
  fontSize: "15px",
};

const editButton = {
  background: "#ff7b00",
  border: "none",
  color: "#fff",
  padding: "6px 10px",
  borderRadius: "6px",
  marginRight: "8px",
  cursor: "pointer",
};

const deleteButton = {
  background: "#333",
  border: "none",
  color: "#ff7b00",
  padding: "6px 10px",
  borderRadius: "6px",
  cursor: "pointer",
};

const addButton = {
  background: "#ff7b00",
  color: "#fff",
  border: "none",
  padding: "14px 22px",
  fontSize: "16px",
  fontWeight: "600",
  borderRadius: "8px",
  cursor: "pointer",
  display: "block",
  margin: "0 auto",
};

