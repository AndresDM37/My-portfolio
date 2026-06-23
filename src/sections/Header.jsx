import { twMerge } from "tailwind-merge";
import ThemeToggle from "../components/ThemeToggle";
import { useActiveSection } from "../hooks/useActiveSection";

const navItems = [
  { label: "Inicio", href: "#inicio", id: "inicio" },
  { label: "Sobre Mí", href: "#About", id: "About" },
  { label: "Proyectos", href: "#Projects", id: "Projects" },
  { label: "Experiencia", href: "#Experience", id: "Experience" },
  { label: "Estudios", href: "#Study", id: "Study" },
];

const sectionIds = navItems.map((item) => item.id);

const Header = () => {
  const activeId = useActiveSection(sectionIds);

  return (
    <header className="fixed top-3 z-50 flex w-full justify-center px-3">
      <nav
        className="flex max-w-[calc(100vw-1.5rem)] items-center gap-1 overflow-x-auto rounded-full border border-line/15 bg-ground/70 p-1 shadow-2xl shadow-black/30 backdrop-blur-xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Navegación principal"
      >
        {navItems.map((item) => {
          const isActive = activeId === item.id;
          return (
            <a
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={twMerge(
                "nav-item whitespace-nowrap",
                isActive && "bg-surface/10 text-fg"
              )}
            >
              {item.label}
            </a>
          );
        })}
        <a
          href="#Contact"
          className="nav-item whitespace-nowrap bg-accent !text-ground shadow-sm shadow-emerald-500/20 hover:opacity-90 hover:!text-ground"
        >
          Contacto
        </a>
        <span className="mx-1 h-5 w-px flex-none bg-line/15" aria-hidden="true" />
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
