 import React from "react";
import CardProjeto from "./CardProjeto";

const SecaoProjetos: React.FC = () => {
  // REQUISITO: Array de objetos com seus projetos reais ou exemplos
  const meusProjetos = [
    {
      id: 1,
      titulo: "Site Estático",
      descricao: "portfólio desenvolvido com HTML5 e CSS3 focado em responsividade.",
      link: "#",
    },
    {
      id: 2,
      titulo: "Calculadora JS",
      descricao: "Uma calculadora feita com JavaScript puro.",
      link: "#",
    },
    {
      id: 3,
      titulo: "App React",
      descricao: "Este portfólio que você está vendo agora!",
      link: "#",
    },
  ];

  return (
    <section style={{ padding: "40px 20px" }}>
      <h2>Meus Projetos</h2>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {meusProjetos.map((proj) => (
          <CardProjeto
            key={proj.id}
            titulo={proj.titulo}
            descricao={proj.descricao}
            link={proj.link}
          />
        ))}
      </div>
    </section>
  );
};

export default SecaoProjetos;
