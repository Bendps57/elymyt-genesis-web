
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SectionTitle from "@/components/common/SectionTitle";
import TestimonialVideoCard from "../testimonials/TestimonialVideoCard";
import { testimonials } from "../data/testimonialData";

const TrustSection = () => {
  const [activeVideo, setActiveVideo] = useState(testimonials[0]);
  const [playing, setPlaying] = useState(false);
  const [secondPlaying, setSecondPlaying] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setPlaying(false);
  }, [activeVideo.id]);

  const handlePlayClick = () => {
    setPlaying(true);
  };

  const handleSecondVideoPlay = () => {
    setSecondPlaying(true);
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Store the scroll intention and navigate
    sessionStorage.setItem('scrollToContactForm', 'true');
    navigate('/contact');
  };

  return (
    <section id="trust" className="section-padding bg-muted/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle
          title="Ils nous font"
          highlightedText="confiance"
          subtitle="Découvrez les retours d'expérience de nos clients satisfaits"
          className="mb-12"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 max-w-7xl mx-auto">
          <div className="flex flex-col h-full">
            <TestimonialVideoCard 
              testimonial={activeVideo}
              isPlaying={playing}
              onPlayClick={handlePlayClick}
              onContactClick={handleContactClick}
            />
          </div>

          <div className="flex flex-col h-full">
            <TestimonialVideoCard 
              testimonial={testimonials[1]}
              isPlaying={secondPlaying}
              onPlayClick={handleSecondVideoPlay}
              onContactClick={handleContactClick}
              callToActionText="Demandez un devis personnalisé"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
