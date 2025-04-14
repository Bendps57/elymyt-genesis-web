
import React, { useState, useEffect } from "react";
import SectionTitle from "@/components/common/SectionTitle";
import TestimonialVideoCard from "../testimonials/TestimonialVideoCard";
import { testimonials } from "../data/testimonialData";

const TrustSection = () => {
  const [activeVideo, setActiveVideo] = useState(testimonials[0]);
  const [playing, setPlaying] = useState(false);
  const [secondPlaying, setSecondPlaying] = useState(false);

  // Reset playing state when active video changes
  useEffect(() => {
    setPlaying(false);
  }, [activeVideo.id]);

  const handlePlayClick = () => {
    setPlaying(true);
  };

  const handleSecondVideoPlay = () => {
    setSecondPlaying(true);
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Main featured video */}
          <TestimonialVideoCard 
            testimonial={activeVideo}
            isPlaying={playing}
            onPlayClick={handlePlayClick}
          />

          {/* Second featured video */}
          <TestimonialVideoCard 
            testimonial={testimonials[1]}
            isPlaying={secondPlaying}
            onPlayClick={handleSecondVideoPlay}
            callToActionText="Demandez un devis personnalisé"
          />
        </div>
      </div>
    </section>
  );
};

export default TrustSection;
