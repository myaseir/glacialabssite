import { Metadata } from 'next';
import ProjectIndexClient from './ProjectIndexClient';

export const metadata: Metadata = {
  title: "Project Index | Bespoke Digital Deployments",
  description: "A comprehensive directory of Glacia Labs' recent high-performance Next.js storefronts, corporate infrastructures, and premium digital deployments in Islamabad.",
  keywords: [
    "Next.js Portfolio Islamabad", 
    "Software Engineering Projects", 
    "FastAPI Backend Examples", 
    "Luxury Web Design Islamabad",
    "Glacia Labs Recent Work"
  ],
  openGraph: {
    title: "Project Index | Glacia Labs",
    description: "Architectural software studio crafting curated digital deployments.",
    images: ["/og-projects.jpg"],
  }
};

export default function ProjectPage() {
  return <ProjectIndexClient />;
}