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

  const btnNova = {
    background: '#ff7b00',
    color: 'white',
    padding: '10px 16px',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: 'bold'
  };

  return (
    <div style={{ padding: '20px' }}>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Categorias</h1>

        {/* Botão NOVA CATEGORIA */}
        <Link to="/categorias/criar" style={btnNova}>+ Nova Categoria</Link>
      </div>

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
