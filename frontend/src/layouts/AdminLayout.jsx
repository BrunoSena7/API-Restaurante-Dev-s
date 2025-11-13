import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';

export default function AdminLayout({ children }) {
  return (
    <div style={{ display: 'flex', width: '100%', height: '100vh', background: '#1c1c1c', color: 'white' }}>
      <Sidebar />

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Navbar />

        <div style={{ padding: '30px' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
