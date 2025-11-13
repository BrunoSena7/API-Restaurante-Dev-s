export default function Dashboard() {
  return (
    <div>
      <h1 style={{ marginBottom: '25px' }}>Dashboard</h1>

      <div style={{
        display: 'flex',
        gap: '20px',
        marginBottom: '30px'
      }}>
        <div style={card}>
          <h2>🍽 Pedidos Hoje</h2>
          <p style={num}>34</p>
        </div>

        <div style={card}>
          <h2>📦 Produtos</h2>
          <p style={num}>12</p>
        </div>

        <div style={card}>
          <h2>💰 Faturamento</h2>
          <p style={num}>R$ 457,00</p>
        </div>
      </div>

    </div>
  );
}

const card = {
  background: '#222',
  padding: '20px',
  borderRadius: '10px',
  width: '240px',
  border: '1px solid #333'
};

const num = {
  fontSize: '32px',
  marginTop: '10px',
  fontWeight: 'bold'
};
