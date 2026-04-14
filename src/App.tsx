import SecaoProjetos from "./SecaoProjetos";
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
        <h1>Portfólio de Djalma rodrigues</h1>
        <p>Desenvolvedor web em formação focado em React</p>
      </header>
<section>
  <h2>Sobre mim</h2>
  <p>
    Sou estudante de programação focado em desenvolvimento web.
    Estou aprendendo React e criando projetos práticos.
  </p>
</section>
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
