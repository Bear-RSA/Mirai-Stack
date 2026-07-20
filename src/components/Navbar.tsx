"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import TiltCard from "./TiltCard";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Services", href: "/#services" },
        { name: "Projects", href: "/#projects" },
        { name: "Process", href: "/#process" },
        { name: "About", href: "/#about" },
    ];

    return (
        <header
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-brand-dark/80 backdrop-blur-md border-b border-brand-border"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <TiltCard className="perspective-[800px] shrink-0 inline-block">
                    <Link href="/" className="text-xl font-bold tracking-tight text-white flex items-center gap-3 group w-full h-full">
                        <div className="h-8 relative flex items-center justify-center rounded-md overflow-hidden border border-brand-cyan/20 shadow-[0_0_15px_rgba(68,207,213,0.3)] group-hover:shadow-[0_0_25px_rgba(68,207,213,0.5)] transition-shadow">
                            <Image
                                src="/bimi-logo.svg"
                                alt="Mirai Stack Logo"
                                width={160}
                                height={40}
                                className="h-full w-auto object-contain"
                                priority
                            />
                        </div>
                        Mirai Stack
                    </Link>
                </TiltCard>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-neutral-400 hover:text-white transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <TiltCard className="perspective-[800px] shrink-0 inline-block">
                        <Link
                            href="/#contact"
                            className="px-6 py-2.5 text-sm font-medium bg-brand-cyan text-brand-dark rounded-full hover:bg-white hover:text-black transition-all shadow-lg hover:shadow-brand-cyan/20 block"
                        >
                            Contact
                        </Link>
                    </TiltCard>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2 -mr-2 text-neutral-400"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="md:hidden bg-brand-surface border-b border-brand-border px-6 py-6 flex flex-col gap-6 shadow-2xl absolute w-full"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-neutral-300 hover:text-white transition-colors"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-2 w-full text-center px-4 py-4 text-base font-medium bg-brand-cyan text-brand-dark rounded-xl hover:bg-white transition-all"
                        >
                            Contact
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
