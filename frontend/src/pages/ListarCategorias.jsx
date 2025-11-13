import { Link } from 'react-router-dom';
import api from '../services/api';
import { useEffect, useState } from 'react';

export default function ListarCategorias() {
  const [categorias, setCategorias] = useState([]);

  async function carregar() {
    const r = await api.get('/categorias');
    setCategorias(r.data);
  }

  useEffect(() => { carregar(); }, []);

  const btnEditar = {
    background: '#444',
    color: 'white',
    padding: '6px 12px',
    borderRadius: '6px'
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Categorias</h1>

      <table border="1" cellPadding="10" style={{ marginTop: '20px' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {categorias.map(c => (
            <tr key={c.id}>
              <td>{c.id}</td>
              <td>{c.nome}</td>
              <td>
                <Link to={`/categorias/editar/${c.id}`}>
                  <button style={btnEditar}>Editar</button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
