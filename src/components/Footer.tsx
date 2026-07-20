import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    const navLinks = [
        { name: "Home", href: "/" },
        { name: "Services", href: "/#services" },
        { name: "Projects", href: "/#projects" },
        { name: "About", href: "/#about" },
        { name: "Contact", href: "/#contact" },
    ];

    const legalLinks = [
        { name: "Privacy", href: "/privacy" },
        { name: "Terms", href: "/terms" },
        { name: "GitHub", href: "https://github.com/miraistack" },
    ];

    return (
        <footer className="pt-20 pb-10 px-6 bg-brand-dark border-t border-brand-border">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="md:col-span-5 lg:col-span-6 flex flex-col items-start">
                        <Link href="/" className="flex items-center gap-3 group mb-6">
                            <div className="h-8 relative flex items-center justify-center rounded-md overflow-hidden border border-brand-cyan/20">
                                <Image
                                    src="/bimi-logo.svg"
                                    alt="Mirai Stack Logo"
                                    width={120}
                                    height={32}
                                    className="h-full w-auto object-contain opacity-90 group-hover:opacity-100 transition-opacity"
                                />
                            </div>
                            <span className="text-xl font-bold tracking-tight text-neutral-200 group-hover:text-white transition-colors">Mirai Stack</span>
                        </Link>
                        <p className="text-neutral-500 text-sm max-w-sm leading-relaxed">
                            Engineering scalable websites, platforms, and automation systems for modern organizations. Built with clean architecture and production-grade delivery.
                        </p>
                    </div>

                    {/* Navigation Column */}
                    <div className="md:col-span-4 lg:col-span-3">
                        <h4 className="text-white font-semibold mb-6 text-sm tracking-widest uppercase">Platform</h4>
                        <ul className="flex flex-col gap-4 text-sm font-medium text-neutral-500">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="hover:text-brand-cyan transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div className="md:col-span-3 lg:col-span-3">
                        <h4 className="text-white font-semibold mb-6 text-sm tracking-widest uppercase">Legal & Social</h4>
                        <ul className="flex flex-col gap-4 text-sm font-medium text-neutral-500">
                            {legalLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} target={link.name === "GitHub" ? "_blank" : undefined} className="hover:text-brand-cyan transition-colors">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-brand-border/50 flex flex-col md:flex-row items-center justify-between gap-4 text-sm font-medium text-neutral-600">
                    <p>© {new Date().getFullYear()} Mirai Stack. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
