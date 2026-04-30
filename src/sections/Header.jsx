const navItems = [
  { label: "Inicio", href: "#" },
  { label: "Sobre Mí", href: "#About" },
  { label: "Proyectos", href: "#Projects" },
  { label: "Experiencia", href: "#Experience" },
  { label: "Estudios", href: "#Study" },
];

const Header = () => {
  return (
    <header className="fixed top-3 z-50 flex w-full justify-center px-3">
      <nav
        className="flex max-w-[calc(100vw-1.5rem)] items-center gap-1 overflow-x-auto rounded-full border border-white/15 bg-gray-950/65 p-1 shadow-2xl shadow-black/30 backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Navegación principal"
      >
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="nav-item whitespace-nowrap">
            {item.label}
          </a>
        ))}
        <a
          href="#Contact"
          className="nav-item whitespace-nowrap bg-white !text-gray-950 shadow-sm shadow-white/10 hover:bg-emerald-200 hover:!text-gray-950"
        >
          Contacto
        </a>
      </nav>
    </header>
  );
};

export default Header;
