"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

import { projects, categoryLabels } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";
import TiltCard from "@/components/TiltCard";

type FilterOption = "all" | ProjectCategory;

const filterTabs: { key: FilterOption; label: string }[] = [
    { key: "all", label: "All Projects" },
    { key: "saas", label: "SaaS Platforms" },
    { key: "website", label: "Websites" },
];

export default function ProjectsPageClient() {
    const [activeFilter, setActiveFilter] = useState<FilterOption>("all");

    const filtered = (
        activeFilter === "all"
            ? projects
            : projects.filter((p) => p.category === activeFilter)
    ).sort((a, b) => {
        if (a.status === "Live" && b.status !== "Live") return -1;
        if (a.status !== "Live" && b.status === "Live") return 1;
        return 0;
    });

    return (
        <main className="min-h-screen bg-brand-dark text-white">
            {/* Hero */}
            <section className="relative pt-40 pb-20 px-6 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[800px] h-[600px] bg-gradient-to-br from-brand-blue/15 via-brand-navy/10 to-transparent blur-[120px] pointer-events-none rounded-full" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-brand-cyan transition-colors mb-12 group"
                    >
                        <ArrowLeft
                            size={16}
                            className="group-hover:-translate-x-1 transition-transform"
                        />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                            Our{" "}
                            <span className="text-gradient">Work</span>
                        </h1>
                        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl leading-relaxed">
                            A curated collection of SaaS platforms and website portfolios — each
                            built with precision engineering and intentional design.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter Tabs + Grid */}
            <section className="px-6 pb-32">
                <div className="max-w-7xl mx-auto">
                    {/* Filter Tabs */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex items-center gap-2 mb-16 p-1.5 bg-brand-surface/60 backdrop-blur-sm border border-brand-border rounded-full w-max"
                    >
                        {filterTabs.map((tab) => (
                            <button
                                key={tab.key}
                                onClick={() => setActiveFilter(tab.key)}
                                className={`relative px-6 py-2.5 text-sm font-medium rounded-full transition-colors duration-300 ${
                                    activeFilter === tab.key
                                        ? "text-brand-dark"
                                        : "text-neutral-400 hover:text-white"
                                }`}
                            >
                                {activeFilter === tab.key && (
                                    <motion.div
                                        layoutId="activeFilter"
                                        className="absolute inset-0 bg-brand-cyan rounded-full"
                                        transition={{
                                            type: "spring",
                                            stiffness: 400,
                                            damping: 30,
                                        }}
                                    />
                                )}
                                <span className="relative z-10">{tab.label}</span>
                            </button>
                        ))}
                    </motion.div>

                    {/* Project Count */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-neutral-500 text-sm font-medium mb-10 tracking-wide uppercase"
                    >
                        {filtered.length} Project{filtered.length !== 1 ? "s" : ""}
                    </motion.p>

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <AnimatePresence mode="popLayout">
                            {filtered.map((project, index) => {
                                const isLastAndOdd =
                                    index === filtered.length - 1 &&
                                    filtered.length % 2 !== 0;

                                return (
                                    <motion.div
                                        key={project.slug}
                                        layout
                                        initial={{ opacity: 0, y: 24 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.96 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: index * 0.06,
                                        }}
                                        className={`flex flex-col h-full ${
                                            isLastAndOdd
                                                ? "md:col-span-2 md:w-1/2 md:mx-auto w-full"
                                                : ""
                                        }`}
                                    >
                                        <Link
                                            href={project.href || `/projects/${project.slug}`}
                                            target={project.href ? "_blank" : undefined}
                                            rel={project.href ? "noopener noreferrer" : undefined}
                                            className="flex flex-col h-full"
                                        >
                                            <TiltCard className="group relative flex flex-col justify-between p-10 h-full w-full rounded-[2rem] bg-brand-surface border border-brand-border hover:border-brand-blue/40 overflow-hidden transition-colors duration-500">
                                                {/* Accent glow */}
                                                <div
                                                    className={`absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-20 transition-all duration-700 group-hover:opacity-60 group-hover:scale-110 ${project.color}`}
                                                />

                                                <div className="relative z-10">
                                                    {/* Category + Status */}
                                                    <div className="flex items-center gap-3 mb-6">
                                                        <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-surface-2 border border-brand-border text-neutral-400 rounded-full">
                                                            {categoryLabels[project.category]}
                                                        </span>
                                                        <span className="flex items-center gap-1.5 text-xs text-neutral-500">
                                                            <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan/60" />
                                                            {project.status}
                                                        </span>
                                                    </div>

                                                    {/* Title row */}
                                                    <div className="flex items-start justify-between mb-2 gap-4">
                                                        <h3 className="text-2xl md:text-3xl font-semibold tracking-tight flex items-center gap-2">
                                                            {project.name}
                                                            {project.href && <ArrowUpRight size={20} className="text-neutral-500 group-hover:text-brand-cyan transition-colors" />}
                                                        </h3>
                                                        <div className="w-12 h-12 rounded-full bg-brand-surface-2 border border-brand-border flex items-center justify-center text-neutral-400 group-hover:bg-brand-cyan group-hover:text-brand-dark group-hover:border-brand-cyan transition-all duration-500 group-hover:rotate-45 shrink-0 mt-1">
                                                            <ArrowUpRight size={22} />
                                                        </div>
                                                    </div>
                                                    <p className="text-neutral-500 font-medium text-sm mb-5">
                                                        {project.type}
                                                    </p>
                                                    <p className="text-neutral-400 leading-relaxed text-base line-clamp-3">
                                                        {project.description}
                                                    </p>
                                                </div>

                                                {/* Footer */}
                                                <div className="relative z-10 flex items-center justify-between mt-10 pt-6 border-t border-brand-border/60">
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.stack.map((tech) => (
                                                            <span
                                                                key={tech}
                                                                className="px-3 py-1.5 text-xs font-medium bg-brand-surface-2/80 backdrop-blur-sm border border-brand-border text-neutral-400 rounded-full"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <span className="text-xs text-neutral-600 font-mono shrink-0 ml-4">
                                                        {project.year}
                                                    </span>
                                                </div>
                                            </TiltCard>
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                </div>
            </section>
        </main>
    );
}
