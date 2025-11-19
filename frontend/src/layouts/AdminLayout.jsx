import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

export default function AdminLayout({ children }) {
  return (
    <div style={styles.root}>
      {/* LADO ESQUERDO - SIDEBAR */}
      <Sidebar />

      {/* LADO DIREITO - CONTEÚDO */}
      <div style={styles.main}>
        <div style={styles.navWrapper}>
          <Navbar />
        </div>

        <div style={styles.contentArea}>{children}</div>
      </div>
    </div>
  );
}

const styles = {
  // CONTAINER PRINCIPAL - TELA TODA
  root: {
    display: "flex",
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    background: "#050506" // fundo geral por trás de tudo
  },

  // COLUNA PRINCIPAL (NAV + CONTEÚDO)
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    background: "#111119"
  },

  // NAVBAR NO TOPO
  navWrapper: {
    padding: "14px 26px 10px 26px",
    borderBottom: "1px solid #22232B",
    background:
      "linear-gradient(to bottom, rgba(18,18,24,0.98), rgba(18,18,24,0.90))",
    boxSizing: "border-box"
  },

  // ÁREA ONDE FICAM AS PÁGINAS (DASHBOARD, PRODUTOS, ETC)
  contentArea: {
    flex: 1,
    overflowY: "auto",
    padding: "24px 32px 32px 32px",
    boxSizing: "border-box",
    background: "linear-gradient(180deg, #181920, #14151c)"
  }
};
