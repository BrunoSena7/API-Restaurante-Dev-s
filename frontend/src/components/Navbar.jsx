import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();


  return (
    <div style={styles.navbar}>
      {/* ESQUERDA */}
      <div style={styles.left}>
        <span style={styles.title}>Painel Administrativo</span>
      </div>

      {/* DIREITA */}
      <div style={styles.right}>
        {/* search removed per request */}


        <div style={styles.avatar} />
      </div>
    </div>
  );
}

const styles = {
  navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    fontFamily: "Inter, sans-serif",
    color: "#F5F5F5",
    paddingBottom: "12px"
  },

  left: {
    fontSize: "15px",
    fontWeight: 500
  },

  title: {
    opacity: 0.9
  },

  right: {
    display: "flex",
    alignItems: "center",
    gap: "16px"
  },

  logoutButton: {
    background: "#ff6b2d",
    color: "white",
    border: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: "14px",
    transition: "all 0.2s"
  },

  // search styles removed

  avatar: {
    width: "32px",
    height: "32px",
    borderRadius: "999px",
    background:
      "linear-gradient(135deg, #FCAF17 0%, #F97316 45%, #FB923C 100%)",
    boxShadow: "0 0 0 2px #202028"
  }
};
