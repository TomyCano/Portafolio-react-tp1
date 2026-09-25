const Footer = ({ persona }) => {
  const anioActual = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <a className="brand footer-brand" href="#inicio" aria-label={`Volver al inicio de ${persona.nombre}`}>
          <span className="brand-mark footer-logo">TC</span>
          <span>
            <strong>{persona.nombre}</strong>
            <small>Estudiante de Programacion · UTN Tucuman</small>
          </span>
        </a>
        <nav className="footer-links" aria-label="Enlaces del pie de página">
          <a href="#sobre-mi">Sobre mi</a>
          <a href="#proyectos">Proyectos</a>
          <a href="mailto:tomascano119@gmail.com">Email</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <p>© {anioActual} {persona.nombre}. Hecho con React y ganas de aprender.</p>
        <a className="to-top" href="#inicio" aria-label="Volver al inicio">↑</a>
      </div>
    </footer>
  );
};

export default Footer;
