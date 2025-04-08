
import { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CallToAction from "../components/CallToAction";
import { projects } from "@/data/portfolioProjects";
import ProjectCard from "@/components/portfolio/ProjectCard";
import ProjectDetails from "@/components/portfolio/ProjectDetails";
import PortfolioHeader from "@/components/portfolio/PortfolioHeader";
import type { Project } from "@/data/portfolioProjects";

const PortfolioPage = () => {
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (headerRef.current) {
      observer.observe(headerRef.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    // Gestion des ancres et défilement automatique vers le haut
    const handleAnchorAndScrollTop = () => {
      // Si on vient d'arriver sur la page, faire défiler vers le haut
      window.scrollTo(0, 0);
      
      // Rechercher un projet spécifique si un hash est présent dans l'URL
      const hash = window.location.hash.substring(1);
      if (hash) {
        const project = projects.find(p => p.id === hash);
        if (project) {
          setSelectedProject(project);
        }
      }
    };
    
    handleAnchorAndScrollTop();
  }, []);
  
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4 md:px-6">
          <div ref={headerRef}>
            <PortfolioHeader isVisible={isVisible} />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                index={index}
                onViewDetails={setSelectedProject}
              />
            ))}
          </div>
        </div>
      </section>
      
      {selectedProject && (
        <ProjectDetails 
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
