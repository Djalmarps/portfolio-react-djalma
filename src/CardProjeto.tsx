import React from "react";

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
