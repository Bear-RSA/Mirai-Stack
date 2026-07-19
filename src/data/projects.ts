export type ProjectCategory = 'saas' | 'website';

export interface Project {
    name: string;
    slug: string;
    category: ProjectCategory;
    href?: string;
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
    {
        name: "NightSwitch",
        slug: "nightswitch",
        category: "website",
        href: "https://night-switch.vercel.app/",
        type: "Automated Lead-Capture Tool",
        description: "NightSwitch is an automated lead-capture tool that catches, qualifies, and books after-hours enquiries while you sleep.",
        stack: ["React", "TypeScript", "Tailwind CSS"],
        color: "bg-brand-blue/20",
        year: "2024",
        status: "Live",
    },
    {
        name: "Luma Atelier",
        slug: "luma-atelier",
        category: "website",
        href: "https://luma-atelier.vercel.app/",
        type: "Soft Luxury Wellness Studio",
        description: "A soft luxury wellness studio with integrated treatment booking and memberships.",
        stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
        color: "bg-rose-500/20",
        year: "2025",
        status: "Live",
    },
    {
        name: "Ember No. 18",
        slug: "ember-no-18",
        category: "website",
        href: "https://ember-number18.vercel.app/",
        type: "Open-fire Restaurant",
        description: "An open-fire restaurant in Umhlanga specializing in fire-led dining, private events, and direct collections.",
        stack: ["Next.js", "Tailwind CSS", "Sanity"],
        color: "bg-orange-600/20",
        year: "2025",
        status: "Live",
    },
    {
        name: "BoltWork",
        slug: "boltwork",
        category: "website",
        href: "https://bolt-works.vercel.app/",
        type: "Field-Service Platform",
        description: "Durban-based field-service platform providing emergency electrical, plumbing, and solar repairs with instant estimates, dispatch tracking, and clear, upfront pricing.",
        stack: ["React", "Node.js", "PostgreSQL"],
        color: "bg-yellow-500/20",
        year: "2025",
        status: "Live",
    },
    {
        name: "Kanso House",
        slug: "kanso-house",
        category: "website",
        href: "https://kanso-house.vercel.app/",
        type: "Premium Furniture eCommerce",
        description: "Kanso House provides minimalist, premium furniture alongside expert room styling and white-glove delivery across South Africa.",
        stack: ["Next.js", "Shopify", "Tailwind CSS"],
        color: "bg-neutral-500/20",
        year: "2025",
        status: "Live",
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
