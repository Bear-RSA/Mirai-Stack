"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, X, ArrowRight } from "lucide-react";

import { EASE_OUT } from "@/lib/motion";
import TiltCard from "./TiltCard";
import Reveal, { RevealGroup, RevealItem } from "./Reveal";

interface TeamMember {
    name: string;
    role: string;
    bio: string;
}

const team: TeamMember[] = [
    {
        name: "Siyanda Simelane",
        role: "Co-Founder | Director of Operations",
        bio: "Siyanda leads operational strategy and client engagement at Mirai Stack, ensuring that the company’s projects and partnerships are delivered with precision and professionalism. He oversees organizational structure, operational workflows, and stakeholder coordination across the company’s platform initiatives.\n\nBy managing client relationships from initial engagement through delivery, Siyanda ensures that Mirai Stack’s technical capabilities translate into measurable business outcomes. His disciplined approach to operations provides the structure and clarity required to support scalable growth and long-term partnerships.",
    },
    {
        name: "Nhlanhla Ngcobo",
        role: "Co-Founder | Director of Innovation & Product Strategy",
        bio: "Nhlanhla leads product innovation and strategic direction at Mirai Stack, driving the development of new digital platforms and technology initiatives. He focuses on identifying emerging opportunities, shaping product vision, and translating market insights into scalable platform concepts.\n\nWith a forward-thinking and research-driven approach, Nhlanhla guides product ideation, feature architecture, and long-term innovation strategy. His work ensures that Mirai Stack’s platforms are designed to align with evolving market demands while maintaining a clear path toward sustainable growth and technological advancement.",
    },
    {
        name: "Masibonge S. Mdlalose",
        role: "Co-Founder | Director of Engineering & Systems Architecture",
        bio: "Masibonge leads engineering execution and technical architecture at Mirai Stack. He oversees platform engineering, infrastructure design, performance optimization, and system reliability, ensuring that every product is built on a strong and scalable technical foundation.\n\nWith a focus on clean architecture and long-term system stability, he designs the backend infrastructure and core technologies that power Mirai Stack’s platforms. His approach combines strong technical discipline with product-focused thinking, enabling the company to build digital platforms that are secure, efficient, and built to scale.",
    },
];

const MemberCard = ({ member, onClick }: { member: TeamMember; onClick: () => void }) => (
    <TiltCard
        onClick={onClick}
        className="relative flex flex-col bg-brand-surface rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-brand-border shadow-xl shadow-black/20 group cursor-pointer transition-[border-color,box-shadow] hover:border-brand-cyan/50 hover:shadow-brand-cyan/10 w-full h-full p-6 sm:p-8 md:p-10"
    >
        <div className="mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 group-hover:text-brand-cyan transition-colors">{member.name}</h3>
            <p className="text-neutral-400 text-sm md:text-sm font-semibold tracking-widest uppercase">
                {member.role}
            </p>
        </div>

        <div className="flex flex-col flex-grow">
            <p className="text-neutral-300 leading-relaxed text-[15px] line-clamp-4 mb-8">
                {member.bio}
            </p>
            <div className="mt-auto text-brand-cyan text-sm font-medium tracking-wide uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                Read full profile <ArrowRight size={14} />
            </div>
        </div>
    </TiltCard>
);

export default function Team() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    React.useEffect(() => {
        const handleScroll = () => {
            if (selectedMember) {
                setSelectedMember(null);
            }
        };

        if (selectedMember) {
            window.addEventListener("scroll", handleScroll, { passive: true });
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [selectedMember]);

    return (
        <section
            id="team"
            className={`py-20 sm:py-32 px-4 sm:px-6 bg-brand-dark border-t border-brand-border text-white perspective-[1000px] relative ${selectedMember ? 'z-[60]' : 'z-10'}`}
        >
            <div className="max-w-7xl mx-auto">
                <Reveal className="mb-12 sm:mb-24 flex flex-col items-center text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">Leadership</h2>
                    <p className="text-neutral-400 max-w-2xl text-lg md:text-xl">
                        A founding team experienced in building, scaling, and optimizing digital systems.
                    </p>
                </Reveal>

                <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 perspective-[1000px]">
                    {team.map((member) => (
                        <RevealItem
                            key={member.name}
                            className="flex justify-center h-full"
                            style={{ perspective: 1000 }}
                        >
                            <MemberCard member={member} onClick={() => setSelectedMember(member)} />
                        </RevealItem>
                    ))}
                </RevealGroup>
            </div>

            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.15, ease: EASE_OUT } }}
                        transition={{ duration: 0.2, ease: EASE_OUT }}
                        onClick={() => setSelectedMember(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-brand-dark/60 backdrop-blur-md overflow-y-auto"
                    >
                        <motion.div
                            initial={{ opacity: 0, transform: "translateY(12px) scale(0.96)" }}
                            animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
                            exit={{ opacity: 0, transform: "translateY(12px) scale(0.96)", transition: { duration: 0.15, ease: EASE_OUT } }}
                            transition={{ duration: 0.25, ease: EASE_OUT }}
                            role="dialog"
                            aria-modal="true"
                            aria-label={selectedMember.name}
                            onClick={(e) => e.stopPropagation()}
                            className="flex flex-col max-w-3xl w-full max-h-[85vh] bg-brand-surface p-6 sm:p-8 md:p-14 rounded-[1.5rem] sm:rounded-[2rem] border border-brand-border relative shadow-2xl overflow-hidden"
                        >
                            <button
                                onClick={() => setSelectedMember(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-brand-surface-2 border border-brand-border text-neutral-400 hover:text-white hover:border-brand-cyan transition-colors z-10"
                            >
                                <X size={20} />
                            </button>

                            <div className="flex flex-col h-full overflow-y-auto custom-scrollbar pr-2 md:pr-4">
                                <div className="mb-10 mt-4">
                                    <div className="w-12 h-1 bg-brand-blue mb-8 rounded-full" />
                                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-4 pr-8 text-white">{selectedMember.name}</h2>
                                    <p className="text-brand-cyan font-medium tracking-widest text-xs sm:text-sm uppercase">
                                        {selectedMember.role}
                                    </p>
                                </div>

                                <div className="flex-1 pb-8">
                                    <p className="text-neutral-300 text-sm sm:text-[16px] md:text-lg leading-relaxed whitespace-pre-wrap">
                                        {selectedMember.bio}
                                    </p>
                                </div>

                                <div className="flex items-center gap-4 pt-8 border-t border-brand-border/50 mt-auto shrink-0">
                                    <a
                                        href={`mailto:partnerships@miraistack.co.za`}
                                        className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-neutral-400 hover:text-brand-dark hover:bg-brand-cyan hover:border-brand-cyan transition-colors"
                                    >
                                        <Mail size={20} />
                                    </a>
                                    <span className="text-sm text-neutral-500 font-medium">Get in touch</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
