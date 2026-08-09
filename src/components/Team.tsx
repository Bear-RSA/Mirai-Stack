"use client";

import React, { useState, MouseEvent } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Mail, X, ArrowRight } from "lucide-react";

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
}

const team: TeamMember[] = [
    {
        name: "Siyanda Simelane",
        role: "Co-Founder | Director of Operations",
        bio: "Siyanda leads operational strategy and client engagement at Mirai Stack, ensuring that the company’s projects and partnerships are delivered with precision and professionalism. He oversees organizational structure, operational workflows, and stakeholder coordination across the company’s platform initiatives.\n\nBy managing client relationships from initial engagement through delivery, Siyanda ensures that Mirai Stack’s technical capabilities translate into measurable business outcomes. His disciplined approach to operations provides the structure and clarity required to support scalable growth and long-term partnerships.",
        image: "/siyanda.jpg",
    },
    {
        name: "Nhlanhla Ngcobo",
        role: "Co-Founder | Director of Innovation & Product Strategy",
        bio: "Nhlanhla leads product innovation and strategic direction at Mirai Stack, driving the development of new digital platforms and technology initiatives. He focuses on identifying emerging opportunities, shaping product vision, and translating market insights into scalable platform concepts.\n\nWith a forward-thinking and research-driven approach, Nhlanhla guides product ideation, feature architecture, and long-term innovation strategy. His work ensures that Mirai Stack’s platforms are designed to align with evolving market demands while maintaining a clear path toward sustainable growth and technological advancement.",
        image: "/nhlanhla-new.jpg",
    },
    {
        name: "Masibonge S. Mdlalose",
        role: "Co-Founder | Director of Engineering & Systems Architecture",
        bio: "Masibonge leads engineering execution and technical architecture at Mirai Stack. He oversees platform engineering, infrastructure design, performance optimization, and system reliability, ensuring that every product is built on a strong and scalable technical foundation.\n\nWith a focus on clean architecture and long-term system stability, he designs the backend infrastructure and core technologies that power Mirai Stack’s platforms. His approach combines strong technical discipline with product-focused thinking, enabling the company to build digital platforms that are secure, efficient, and built to scale.",
        image: "/masibonge-new.jpeg",
    },
];

const TiltCard = ({ member, onClick }: { member: TeamMember; onClick: () => void }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className="relative flex flex-col bg-brand-surface rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden border border-brand-border shadow-2xl shadow-black/50 group cursor-pointer transition-shadow hover:shadow-brand-cyan/20 w-full"
        >
            <div
                style={{ transform: "translateZ(30px)" }}
                className="relative h-56 sm:h-72 w-full overflow-hidden shrink-0"
            >
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover object-center grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 sm:bottom-6 left-6 sm:left-8 right-6 sm:right-8 z-10 transition-transform duration-300 group-hover:-translate-y-2">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow-md">{member.name}</h3>
                    <p className="text-sm text-neutral-300 font-medium drop-shadow-md">
                        {member.role}
                    </p>
                </div>
            </div>

            <div
                style={{ transform: "translateZ(20px)" }}
                className="flex flex-col flex-grow p-6 sm:p-8 bg-brand-surface"
            >
                <p className="text-neutral-400 leading-relaxed text-[15px] line-clamp-4 mb-4">
                    {member.bio}
                </p>
                <div className="mt-auto text-brand-cyan text-sm font-medium tracking-wide uppercase flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read more <ArrowRight size={14} />
                </div>
            </div>
        </motion.div>
    );
};

export default function Team() {
    const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

    // Close modal on page scroll instead of locking the body
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
            className={`py-20 sm:py-32 px-4 sm:px-6 bg-brand-dark border-t border-brand-border text-white perspective-[1000px] relative transition-all ${selectedMember ? 'z-[60]' : 'z-10'}`}
        >
            <div className="max-w-7xl mx-auto">
                <div className="mb-12 sm:mb-20 flex flex-col items-center text-center max-w-3xl mx-auto">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 sm:mb-6">Leadership</h2>
                    <p className="text-neutral-400 max-w-2xl text-lg md:text-xl">
                        A founding team experienced in building, scaling, and optimizing digital systems.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 perspective-[1000px]">
                    {team.map((member, index) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="flex justify-center"
                            style={{ perspective: 1000 }}
                        >
                            <TiltCard member={member} onClick={() => setSelectedMember(member)} />
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedMember && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedMember(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-brand-dark/40 backdrop-blur-xl overflow-y-auto"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={(e) => e.stopPropagation()}
                            className="flex flex-col md:flex-row max-w-5xl w-full h-auto max-h-[90vh] md:max-h-none md:h-[550px] gap-4 sm:gap-8 md:gap-12 justify-center items-center my-auto"
                        >
                            {/* Left Image Half */}
                            <div className="w-full md:w-[380px] shrink-0 relative h-52 sm:h-72 md:h-full bg-brand-surface rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-2xl border border-brand-border">
                                <Image
                                    src={selectedMember.image}
                                    alt={selectedMember.name}
                                    fill
                                    quality={100}
                                    className="object-cover object-center"
                                />
                            </div>

                            {/* Right Details Half */}
                            <div className="w-full flex-1 max-w-[650px] bg-brand-surface p-6 sm:p-10 md:p-12 rounded-[1.5rem] sm:rounded-[2rem] flex flex-col justify-between h-auto md:h-full border border-brand-border relative shadow-2xl overflow-y-auto">
                                <button
                                    onClick={() => setSelectedMember(null)}
                                    className="absolute top-6 right-6 p-2 rounded-full bg-brand-surface-2 border border-brand-border text-neutral-400 hover:text-white hover:border-brand-cyan transition-colors"
                                >
                                    <X size={20} />
                                </button>

                                <div>
                                    <div className="w-12 h-1 bg-brand-blue mb-8 rounded-full" />
                                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold tracking-tight mb-2 pr-12">{selectedMember.name}</h2>
                                    <p className="text-brand-cyan font-medium tracking-wider text-xs sm:text-sm mb-6 sm:mb-8 uppercase">
                                        {selectedMember.role}
                                    </p>
                                </div>

                                <p className="text-neutral-300 text-sm sm:text-[16px] leading-relaxed mb-6 sm:mb-8 flex-1 overflow-y-auto custom-scrollbar pr-2 sm:pr-4 whitespace-pre-wrap">
                                    {selectedMember.bio}
                                </p>

                                <div className="flex items-center gap-4 mt-auto">
                                    <a
                                        href={`mailto:partnerships@miraistack.co.za`}
                                        className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-neutral-400 hover:text-brand-dark hover:bg-brand-cyan hover:border-brand-cyan transition-all"
                                    >
                                        <Mail size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
