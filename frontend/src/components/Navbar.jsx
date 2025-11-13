export default function Navbar() {
  return (
    <div style={{
      height: '65px',
      borderBottom: '1px solid #333',
      display: 'flex',
      alignItems: 'center',
      padding: '0 25px',
      background: '#121212',
      justifyContent: 'space-between'
    }}>
      <h3>Painel Administrativo</h3>

      <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
        <input
          placeholder='Buscar...'
          style={{
            background: '#222',
            border: '1px solid #333',
            padding: '8px 12px',
            borderRadius: '8px',
            color: 'white'
          }}
        />

        <div style={{
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          background: '#444'
        }}></div>
      </div>
    </div>
  );
}
