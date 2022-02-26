import './styles.scss';

export const Navbar = () => {
  return (
    <navbar>
      <div className="container-navbar">
        <div className="logo-tipo">Logo</div>
        <div className="nav-links">
          <a href="/">Inicio</a>
          <a href="/">Serviços</a>
          <a href="/">Sobre</a>
          <a href="/">Contato</a>
          <div className="button-login">
            <a href="/">Já tem conta?</a>
          </div>
        </div>
      </div>
    </navbar>
  );
};
