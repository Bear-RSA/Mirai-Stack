import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects, getProjectBySlug, categoryLabels } from "@/data/projects";
import ProjectDetailClient from "./ProjectDetailClient";

interface ProjectPageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        return { title: "Project Not Found" };
    }

    return {
        title: project.name,
        description: project.description,
        openGraph: {
            title: `${project.name} — ${categoryLabels[project.category]} | Mirai Stack`,
            description: project.description,
            url: `https://miraistack.co.za/projects/${project.slug}`,
        },
    };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    return <ProjectDetailClient project={project} />;
}
