
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-5xl mx-auto">
          <TestimonialVideoCard 
            testimonial={activeVideo}
            isPlaying={playing}
            onPlayClick={handlePlayClick}
            onContactClick={handleContactClick}
          />

          <TestimonialVideoCard 
            testimonial={testimonials[1]}
            isPlaying={secondPlaying}
            onPlayClick={handleSecondVideoPlay}
            onContactClick={handleContactClick}
            callToActionText="Demandez un devis personnalisé"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
