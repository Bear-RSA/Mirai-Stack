"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { projects, categoryLabels } from "@/data/projects";
import TiltCard from "./TiltCard";

const featuredProjects = projects.filter((p) => p.status === "Live").slice(0, 2);

export default function Projects() {
    return (
        <section id="projects" className="py-32 px-6 bg-brand-dark border-t border-brand-border text-white relative perspective-[1000px]">
            <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-brand-blue/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col items-center text-center justify-between mb-20 gap-8">
                    <div className="max-w-3xl flex flex-col items-center">
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Selected Projects</h2>
                        <p className="text-neutral-400 text-lg md:text-xl">
                            A collection of digital platforms we&apos;ve built, focusing on performance, design, and reliable infrastructure.
                        </p>
                    </div>
                    <Link
                        href="/projects"
                        className="text-base font-medium text-brand-cyan hover:text-white transition-colors flex items-center gap-2 pb-2 border-b border-brand-cyan hover:border-white w-max"
                    >
                        View all work <ArrowUpRight size={18} />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 perspective-[1000px]">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            style={{ perspective: 1000 }}
                            className="flex flex-col h-full"
                        >
                            <Link 
                                href={project.href || `/projects/${project.slug}`} 
                                target={project.href ? "_blank" : undefined}
                                rel={project.href ? "noopener noreferrer" : undefined}
                                className="flex flex-col h-full"
                            >
                                <TiltCard
                                    className="group relative flex flex-col justify-between p-10 h-full w-full rounded-[2.5rem] bg-brand-surface border border-brand-border hover:border-brand-blue/50 overflow-hidden shadow-2xl shadow-black/60 hover:shadow-brand-blue/20 transition-colors"
                                >
                                    <div className={`absolute top-0 right-0 w-96 h-96 rounded-full blur-[90px] -translate-y-1/2 translate-x-1/2 opacity-30 transition-all duration-700 group-hover:opacity-80 group-hover:scale-125 ${project.color}`} />

                                    <div className="relative z-10">
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-brand-surface-2 border border-brand-border text-neutral-400 rounded-full">
                                                {categoryLabels[project.category]}
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between mb-2 flex-wrap gap-4">
                                            <h3 className="text-3xl font-semibold tracking-tight flex items-center gap-2">
                                                {project.name}
                                                {project.href && <ArrowUpRight size={20} className="text-neutral-500 group-hover:text-brand-cyan transition-colors" />}
                                            </h3>
                                            <div
                                                className="w-14 h-14 rounded-full bg-brand-surface-2 border border-brand-border flex items-center justify-center text-neutral-400 group-hover:bg-brand-cyan group-hover:text-brand-dark group-hover:border-brand-cyan transition-all duration-500 group-hover:rotate-45 shadow-sm shrink-0"
                                            >
                                                <ArrowUpRight size={26} />
                                            </div>
                                        </div>
                                        <p className="text-neutral-500 font-medium mb-6">{project.type}</p>
                                        <p className="text-neutral-400 leading-relaxed max-w-md text-lg min-h-[100px]">
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="relative z-10 flex flex-wrap gap-3 mt-12">
                                        {project.stack.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 text-sm font-medium bg-brand-surface-2/90 backdrop-blur-md border border-brand-border text-neutral-300 rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </TiltCard>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
