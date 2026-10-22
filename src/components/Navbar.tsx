"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import TiltCard from "./TiltCard";
import { EASE_OUT } from "@/lib/motion";

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
            className={`fixed top-0 w-full z-50 transition-[background-color,border-color,backdrop-filter] duration-300 ${isScrolled
                ? "bg-brand-dark/80 backdrop-blur-md border-b border-brand-border"
                : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
                <TiltCard className="perspective-[800px] shrink-0 inline-block">
                    <Link href="/" className="text-base sm:text-xl font-bold tracking-tight text-white flex items-center gap-2 sm:gap-3 group w-full h-full min-w-0">
                        <div className="h-7 sm:h-8 relative flex items-center justify-center rounded-md overflow-hidden border border-brand-cyan/20 shadow-[0_0_15px_rgba(68,207,213,0.3)] group-hover:shadow-[0_0_25px_rgba(68,207,213,0.5)] transition-shadow shrink-0">
                            <Image
                                src="/bimi-logo.svg"
                                alt="Mirai Stack Logo"
                                width={160}
                                height={40}
                                className="h-full w-auto object-contain"
                                priority
                            />
                        </div>
                        <span className="truncate">Mirai Stack</span>
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
                            className="px-6 py-2.5 text-sm font-medium bg-brand-cyan text-brand-dark rounded-full hover:bg-white hover:text-black transition-[background-color,color,box-shadow] shadow-lg hover:shadow-brand-cyan/20 block"
                        >
                            Contact
                        </Link>
                    </TiltCard>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2.5 -mr-2 text-neutral-400 hover:text-white transition-colors rounded-xl hover:bg-brand-surface/50 min-w-[44px] min-h-[44px] flex items-center justify-center"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Nav */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, transform: "translateY(-8px)" }}
                        animate={{ opacity: 1, transform: "translateY(0px)" }}
                        exit={{ opacity: 0, transform: "translateY(-8px)", transition: { duration: 0.15, ease: EASE_OUT } }}
                        transition={{ duration: 0.2, ease: EASE_OUT }}
                        style={{ transformOrigin: "top" }}
                        className="md:hidden bg-brand-surface/95 backdrop-blur-xl border-b border-brand-border px-5 py-5 flex flex-col gap-1 shadow-2xl absolute w-full"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-base font-medium text-neutral-300 hover:text-white hover:bg-brand-surface-2/50 transition-colors px-4 py-3 rounded-xl"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/#contact"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-3 w-full text-center px-4 py-3.5 text-base font-semibold bg-brand-cyan text-brand-dark rounded-xl hover:bg-white active:scale-[0.98] transition-[background-color,transform] duration-150"
                        >
                            Contact
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
