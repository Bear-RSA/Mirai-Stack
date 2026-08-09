import type { Metadata } from "next";
import ProjectsPageClient from "./ProjectsPageClient";

export const metadata: Metadata = {
    title: "Projects",
    description:
        "Explore our portfolio of SaaS platforms and website projects — engineered with clean architecture, modern UI, and production-grade delivery.",
    openGraph: {
        title: "Projects | Mirai Stack",
        description:
            "Explore our portfolio of SaaS platforms and website projects — engineered with clean architecture, modern UI, and production-grade delivery.",
        url: "https://miraistack.co.za/projects",
    },
};

export default function ProjectsPage() {
    return <ProjectsPageClient />;
}
