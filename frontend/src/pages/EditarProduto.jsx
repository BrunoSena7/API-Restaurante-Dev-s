import { useState } from 'react';

export default function EditarProduto() {
  const [nome, setNome] = useState('Produto Exemplo');
  const [preco, setPreco] = useState('29.90');
  const [categoria, setCategoria] = useState('Lanches');

  function salvar() {
    alert('Alterações salvas com sucesso!');
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Editar Produto</h1>

      <div style={{
        marginTop: '20px',
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '400px',
        gap: '15px'
      }}>

        <input 
          type='text'
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder='Nome'
          style={input}
        />

        <input 
          type='number'
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          placeholder='Preço'
          style={input}
        />

        <input 
          type='text'
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
          placeholder='Categoria'
          style={input}
        />

        <button onClick={salvar} style={btnSalvar}>
          Salvar Alterações
        </button>

        <a href='/produtos' style={{ color:'#aaa', marginTop:'10px' }}>
          Voltar
        </a>
      </div>
    </div>
  );
}

const input = {
  padding: '12px',
  background: '#1c1c1c',
  border: '1px solid #333',
  borderRadius: '8px',
  color: 'white'
};

const btnSalvar = {
  padding: '12px',
  marginTop: '10px',
  background: '#4CAF50',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  color: 'white',
  fontWeight: 'bold'
};
