const Header = () => {
  return (
    <div className="flex justify-center items-center fixed top-3 w-full z-50">
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur sm-custom:flex">
        <a href="#" className="nav-item">
          Inicio
        </a>
        <a href="#About" className="nav-item">
          Sobre Mi
        </a>
        <a href="#Projects" className="nav-item">
          Proyectos
        </a>
        <a href="#Experience" className="nav-item">
          Experiencia
        </a>
        <a href="#Study" className="nav-item">
          Estudios
        </a>
        <a
          href="#Contact"
          className="nav-item bg-white !text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Contacto
        </a>
      </nav>
    </div>
  );
};

export default Header;
