import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <div style={styles.logoArea}>
        <span style={styles.logoIcon}>🍽</span>
        <h2 style={styles.logoText}>Restaurante</h2>
      </div>

      <div style={styles.navSection}>
        <Link to="/" style={styles.link}>
          <span style={styles.icon}>📊</span> Dashboard
        </Link>

        <Link to="/produtos" style={styles.link}>
          <span style={styles.icon}>📦</span> Produtos
        </Link>

        <Link to="#" style={styles.link}>
          <span style={styles.icon}>🧾</span> Pedidos
        </Link>

        <Link to="#" style={styles.link}>
          <span style={styles.icon}>🎯</span> Categorias
        </Link>

        <Link to="#" style={styles.link}>
          <span style={styles.icon}>⚙</span> Configurações
        </Link>
      </div>
    </div>
  );
}

const styles = {
  sidebar: {
    width: "250px",
    background: "#131316",
    borderRight: "1px solid #22232B",
    height: "100%",
    padding: "28px 20px",
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  },

  logoArea: {
    display: "flex",
    alignItems: "center",
    gap: "12px"
  },

  logoIcon: {
    fontSize: "20px"
  },

  logoText: {
    fontSize: "20px",
    fontWeight: "700",
    margin: 0
  },

  navSection: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    marginTop: "10px"
  },

  link: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    color: "#e3e3e3",
    fontSize: "16px",
    padding: "10px 12px",
    borderRadius: "10px",
    textDecoration: "none",
    fontWeight: "500",
    transition: "0.2s",
    background: "transparent",
  },

  icon: {
    fontSize: "17px"
  }
};
