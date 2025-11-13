export default function EditarCategoria() {

  function salvar() {
    alert('Categoria atualizada com sucesso!');
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Editar Categoria</h1>

      <div style={{ marginTop: '20px', display: 'flex', flexDirection: 'column', maxWidth: '400px', gap: '15px' }}>
        <input 
          type="text"
          defaultValue="Categoria Exemplo"
          style={{
            background: '#1c1c1c',
            padding: '12px',
            borderRadius: '8px',
            border: '1px solid #333',
            color: 'white',
            fontSize: '15px'
          }}
        />

        <button
          onClick={salvar}
          style={{
            marginTop: '10px',
            padding: '12px',
            borderRadius: '8px',
            background: '#4CAF50',
            fontSize: '16px',
            cursor: 'pointer',
            border: 'none',
            color: 'white',
            fontWeight: 'bold'
          }}
        >
          Salvar Categoria
        </button>

        <a href="/categorias" style={{ marginTop:'10px', color:'#999', fontSize:'14px' }}>
          Voltar
        </a>
      </div>
    </div>
  );
}
