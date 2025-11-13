import { Routes, Route } from 'react-router-dom';
import AdminLayout from './layouts/AdminLayout';

import Dashboard from './pages/Dashboard';

import ListarProdutos from './pages/ListarProdutos';
import CriarProduto from './pages/CriarProduto';
import EditarProduto from './pages/EditarProduto';

import ListarCategorias from './pages/ListarCategorias';
import CriarCategoria from './pages/CriarCategoria';
import EditarCategoria from './pages/EditarCategoria';

export default function AppRoutes() {
  return (
    <Routes>

      <Route path='/' element={<AdminLayout><Dashboard /></AdminLayout>} />

      <Route path='/produtos' element={<AdminLayout><ListarProdutos /></AdminLayout>} />
      <Route path='/produtos/criar' element={<AdminLayout><CriarProduto /></AdminLayout>} />
      <Route path='/produtos/editar/:id' element={<AdminLayout><EditarProduto /></AdminLayout>} />

      <Route path='/categorias' element={<AdminLayout><ListarCategorias /></AdminLayout>} />
      <Route path='/categorias/criar' element={<AdminLayout><CriarCategoria /></AdminLayout>} />
      <Route path='/categorias/editar/:id' element={<AdminLayout><EditarCategoria /></AdminLayout>} />

    </Routes>
  );
}
