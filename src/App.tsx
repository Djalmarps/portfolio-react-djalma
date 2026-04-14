[18:29, 14/04/2026] Deus no comando 🙏🏼:  import SecaoProjetos from "./SecaoProjetos";
import "./styles.css";

export default function App() {
  return (
    <div
      className="App"
      style={{ fontFamily: "sans-serif", textAlign: "center" }}
    >
      <header
        style={{ backgroundColor: "#222", color: "white", padding: "50px 0" }}
      >
        <h1>Portfólio de [Seu Nome]</h1>
        <p>Desenvolvedor React em formação</p>
      </header>

      <main>
        {/* Chamando o componente que contém a lista dinâmica */}
        <SecaoProjetos />
      </main>

      <footer style={{ padding: "20px", borderTop: "1px solid #eee" }}>
        <p>© 2026 - Feito no CodeSandbox</p>
      </footer>
    </div>
  );
}
[18:30, 14/04/2026] Deus no comando 🙏🏼: cardprojetotsx  import React from "react";

// Definindo o que cada card de projeto deve receber
interface ProjetoProps {
  titulo: string;
  descricao: string;
  link: string;
}

const CardProjeto: React.FC<ProjetoProps> = ({ titulo, descricao, link }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        margin: "15px",
        width: "250px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      <h3 style={{ color: "#0070f3" }}>{titulo}</h3>
      <p>{descricao}</p>
      <a
        href={link}
        target="_blank"
        rel="noreferrer"
        style={{
          textDecoration: "none",
          fontWeight: "bold",
          color: "#ff0080",
        }}
      >
        Ver Projeto →
      </a>
    </div>
  );
};

export default CardProjeto;
