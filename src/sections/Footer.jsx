import arrowUpIcon from "../assets/icons/arrow-up-right.svg";

const footerLinks = [
  {
    title: "GitHub",
    href: "https://github.com/AndresDM37",
  },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/andevmarchena/",
  },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden pb-6 pt-10">
      <div className="absolute bottom-0 left-1/2 h-[420px] w-[1600px] -translate-x-1/2 bg-emerald-300/20 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
      <div className="container relative z-10 mx-auto">
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] px-6 py-6 shadow-2xl shadow-black/20 backdrop-blur md:px-8">
          <div className="flex flex-col items-center justify-between gap-6 text-center text-sm md:flex-row md:text-left">
            <div>
              <p className="font-semibold text-white">Andrés Marchena</p>
              <p className="mt-1 text-white/45">&copy; 2026. Todos los derechos reservados.</p>
            </div>
            <nav className="flex flex-wrap items-center justify-center gap-3" aria-label="Redes sociales">
              {footerLinks.map((link) => (
                <a
                  href={link.href}
                  key={link.title}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-emerald-300/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{link.title}</span>
                  <img src={arrowUpIcon} alt="" className="size-4" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
