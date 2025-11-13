import { Link } from 'react-router-dom';

export default function Sidebar() {
  return (
    <div style={{
      width: '230px',
      background: '#111',
      padding: '25px 20px',
      borderRight: '1px solid #333',
      display: 'flex',
      flexDirection: 'column',
      gap: '25px',
      height: '100vh'
    }}>
      <h2 style={{ fontWeight: 'bold', marginBottom: '20px' }}>🍽 Restaurante</h2>

      <Link style={link} to="/">📊 Dashboard</Link>
      <Link style={link} to="/produtos">📦 Produtos</Link>
      <a style={link}>🧾 Pedidos</a>

      {/* 👉 Aqui estava errado, agora está certo */}
      <Link style={link} to="/categorias">🎯 Categorias</Link>

      <a style={link}>⚙ Configurações</a>
    </div>
  );
}

const link = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '16px',
  padding: '8px 0',
  cursor: 'pointer'
};

