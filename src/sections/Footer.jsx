import arrowUpIcon from "../assets/icons/arrow-up-right.svg";


const footerLinks = [
    {
        title: 'WhatsApp',
        href: 'https://w.app/V6dlbn',
    },
    {
        title: 'GitHub',
        href: 'https://github.com/AndresDM37',
    },
    {
        title: 'LinkedIn',
        href: 'https://www.linkedin.com/in/andevmarchena/',
    },
]

const Footer = () => {
    return (
        <footer className="relative overflow-x-clip">
            <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-emerald-300/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)]"></div>
            <div className="container mx-auto">
                <div className="border-t border-white/15 py-6 text-sm flex flex-col md:flex-row md:justify-between items-center gap-8">
                    <div className="text-white/40">&copy; 2025. All rights reserved</div>
                    <nav className="flex flex-col md:flex-row items-center gap-8">
                        {footerLinks.map(link => (
                            <a href={link.href} key={link.title} className="inline-flex items-center gap-1.5 z-40" target="_blank" rel="noreferrer">
                                <span className="font-semibold text-white">{link.title}</span>
                                <img src={arrowUpIcon} alt="ArrowIcon" className="size-4"/>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
