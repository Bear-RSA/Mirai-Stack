export type ProjectCategory = 'saas' | 'website';

export interface Project {
    name: string;
    slug: string;
    category: ProjectCategory;
    type: string;
    description: string;
    stack: string[];
    color: string;
    year: string;
    status: 'Live' | 'In Development' | 'Coming Soon';
}

export const projects: Project[] = [
    {
        name: "FitSocial",
        slug: "fitsocial",
        category: "saas",
        type: "Community-Driven Fitness Platform",
        description: "A community-driven digital fitness engagement platform that connects users through shared wellness journeys and gamified challenges.",
        stack: ["React Native", "Node.js", "PostgreSQL"],
        color: "bg-indigo-500/20",
        year: "2025",
        status: "In Development",
    },
    {
        name: "Agora",
        slug: "agora",
        category: "saas",
        type: "Digital Publishing Platform",
        description: "A modern publishing ecosystem enabling writers to create, distribute, and manage long-form content without algorithm-driven feeds.",
        stack: ["Next.js", "Firebase", "Stripe", "Framer Motion"],
        color: "bg-brand-navy/30",
        year: "2025",
        status: "In Development",
    },
    {
        name: "KenganStudy",
        slug: "kenganstudy",
        category: "saas",
        type: "AI-Enhanced Learning Ecosystem",
        description: "An AI-enhanced learning ecosystem built for scale, delivering personalized education experiences and intelligent content delivery.",
        stack: ["Python", "TensorFlow", "React"],
        color: "bg-blue-600/20",
        year: "2025",
        status: "In Development",
    },
    {
        name: "Prosoche",
        slug: "prosoche",
        category: "saas",
        type: "Reflective Intelligence Platform",
        description: "A structured journaling and reflection platform designed to transform daily thoughts into actionable insights through guided prompts and pattern analysis.",
        stack: ["React", "Node.js", "PostgreSQL", "AWS"],
        color: "bg-brand-blue/20",
        year: "2025",
        status: "In Development",
    },
    {
        name: "KenganSocial",
        slug: "kengansocial",
        category: "saas",
        type: "SaaS Social Media Management",
        description: "A centralized SaaS automation platform for social media management, streamlining content scheduling and analytics.",
        stack: ["Next.js", "GraphQL", "MongoDB"],
        color: "bg-orange-500/20",
        year: "2025",
        status: "In Development",
    },
    {
        name: "The Connect",
        slug: "the-connect",
        category: "website",
        type: "Multi-Vendor Marketplace Platform",
        description: "A scalable marketplace infrastructure that enables businesses to create digital storefronts, manage inventory, and sell products through a unified commerce platform.",
        stack: ["TypeScript", "Docker", "PostgreSQL", "Vercel"],
        color: "bg-brand-cyan/10",
        year: "2025",
        status: "In Development",
    },
    {
        name: "Stitches",
        slug: "stitches",
        category: "website",
        type: "Global Fashion Commerce Platform",
        description: "A fashion-focused e-commerce marketplace connecting international clothing suppliers with local customers through a streamlined digital retail experience.",
        stack: ["Next.js", "Shopify", "Tailwind", "PostgreSQL"],
        color: "bg-purple-500/20",
        year: "2025",
        status: "In Development",
    },
];

export function getProjectBySlug(slug: string): Project | undefined {
    return projects.find((p) => p.slug === slug);
}

export function getProjectsByCategory(category: ProjectCategory): Project[] {
    return projects.filter((p) => p.category === category);
}

export const categoryLabels: Record<ProjectCategory, string> = {
    saas: "SaaS Platform",
    website: "Website Portfolio",
};
