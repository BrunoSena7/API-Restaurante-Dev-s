export default function CriarProduto() {

  function salvar() {
    alert('Produto criado com sucesso!');
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Criar Produto</h1>

      <div style={{ marginBottom: '15px' }}>
        <label>Nome:</label><br />
        <input type='text' style={{ padding: '8px', width: '280px' }} />
      </div>

      <div style={{ marginBottom: '15px' }}>
        <label>Preço:</label><br />
        <input type='number' style={{ padding: '8px', width: '280px' }} />
      </div>

      <button 
        onClick={salvar} 
        style={{
          background:'#4caf50',
          color:'white',
          padding:'10px 20px',
          borderRadius:'6px',
          cursor:'pointer'
        }}
      >
        Salvar
      </button>
    </div>
  );
}
