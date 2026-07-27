import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { CaseStudyPageContent } from '../../components/StudioPages';
import { projectsMeta } from '../../i18n/projects-meta';
import { SITE_URL } from '../../i18n/site';

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projectsMeta.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectsMeta.find((item) => item.id === slug);
  if (!project) return {};

  return {
    title: `${project.title} Case Study | Plex`,
    description: `${project.title} is an honestly labelled Plex concept case study demonstrating product thinking, interface design and software workflows.`,
    alternates: { canonical: `${SITE_URL}/work/${project.id}` },
    openGraph: {
      title: `${project.title} Case Study | Plex`,
      description: `Explore the context, product challenge, approach and demonstrated capabilities behind ${project.title}.`,
      url: `${SITE_URL}/work/${project.id}`,
      images: project.image && !project.image.endsWith('.svg')
        ? [{ url: project.image, alt: `${project.title} interface preview` }]
        : [{ url: '/og-image.png', alt: 'Plex independent digital product studio' }],
    },
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  if (!projectsMeta.some((project) => project.id === slug)) notFound();
  return <CaseStudyPageContent slug={slug} />;
}
