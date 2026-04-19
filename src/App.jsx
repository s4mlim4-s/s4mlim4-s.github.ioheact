import { useState, useEffect } from 'react'
import './App.css'

// 1. Definição do Componente de Projetos (dentro do mesmo arquivo)
const SecaoProjetos = () => {
  return (
    <section id="projetos">
      <h1>Meus Projetos</h1>
      <div id="container-projetos">
        
        {/* Projeto 1 */}
        <article className="card-projeto">
          <h2>1. Dashboard de Desempenho Corporativo</h2>
        </article>
        <div className="fotos-proj">
          <img src="/Gemini_Ge.png" alt="Dashboard de Desempenho Corporativo" />
        </div>
        <p>
          O Dashboard de Desempenho Corporativo é uma ferramenta de suporte à decisão de alto nível, ideal para ambientes de escritório dinâmicos. Ele centraliza indicadores-chave de performance (KPIs) em tempo real.
        </p>

        {/* Projeto 2 */}
        <article className="card-projeto">
          <h2>2. App "Connecta" (Conexão e Engajamento)</h2>
        </article>
        <div className="fotos-proj">
          <img src="/Gemini_G.png" alt="Tela inicial" />
        </div>
        <p>
          O aplicativo Connecta foi projetado com foco em uma experiência de usuário (UX) fluida e intuitiva. Sua tela de login oferece diversas formas de acesso rápido, garantindo segurança e praticidade.
        </p>
        
      </div>
    </section>
  );
};

// 2. Componente Principal
function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }, [isDarkMode]);

  return (
    <>
      <header>
        <h1>Samuel Lima</h1>
        <nav>
          <ul>
            <li><a href="#sobre">Sobre Mim</a></li>
            <li><a href="#projetos">Projetos</a></li>
            <li>
              <button id="btn-tema" onClick={toggleTheme}>
                {isDarkMode ? 'Claro' : 'Escuro'}
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="sobre">
          <h1>Sobre Mim</h1>
          <p>
            Estou migrando para programação e quero focar em transformar ideias em realidade visual, 
            demonstrando um interesse claro em design de interface e gestão de dados. 
            Meu perfil reflete uma mente voltada para a inovação digital e a organização estratégica de informações.
          </p>
        </section>

        {/* Chamando a seção de projetos aqui */}
        <SecaoProjetos />
      </main>

      <footer>
        <p>&copy; 2026 - Desenvolvido por Samuel Lima</p>
      </footer>
    </>
  )
}

export default App