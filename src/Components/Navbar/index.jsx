import "./styles.scss";

export const Navbar = () => {
  return (
    <header>
      <h1 className="logo-tipo">Logo</h1>
      <nav>
        <div className="nav-links">
          <ul>
            <li>
              <a href="/">Inicio</a>
            </li>
            <li>
              <a href="/">Serviços</a>
            </li>
            <li>
              <a href="/">Sobre</a>
            </li>
            <li>
              <a href="/">Contato</a>
            </li>
          </ul>
          <button>Já tem conta?</button>
        </div>
      </nav>
    </header>
  );
};
