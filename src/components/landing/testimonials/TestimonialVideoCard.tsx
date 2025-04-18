
import React, { useState, useRef, useEffect } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { VideoTestimonial } from "../data/testimonialData";

interface TestimonialVideoCardProps {
  testimonial: VideoTestimonial;
  isPlaying: boolean;
  onPlayClick: () => void;
  onContactClick: (e: React.MouseEvent) => void;
  callToActionText?: string;
}

const TestimonialVideoCard: React.FC<TestimonialVideoCardProps> = ({
  testimonial,
  isPlaying,
  onPlayClick,
  onContactClick,
  callToActionText = "Contactez-nous pour transformer votre projet"
}) => {
  const videoRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (isPlaying && videoRef.current) {
      videoRef.current.src = `${testimonial.videoUrl}?autoplay=1&rel=0&controls=1&showinfo=0&shorts=1`;
    }
  }, [isPlaying, testimonial.videoUrl]);

  return (
    <div className="bg-white dark:bg-card rounded-2xl shadow-lg overflow-hidden card-hover h-full flex flex-col max-w-[300px] mx-auto">
      <div className="relative flex-grow">
        <AspectRatio ratio={1/1} className="bg-muted">
          {isPlaying ? (
            <iframe
              ref={videoRef}
              src={`${testimonial.videoUrl}?rel=0&controls=1&showinfo=0&shorts=1`}
              title={`Témoignage de ${testimonial.clientName}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <>
              <img
                src={testimonial.thumbnailUrl}
                alt={`Témoignage de ${testimonial.clientName}`}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button
                  onClick={onPlayClick}
                  className="bg-white/90 hover:bg-white text-elimyt-blue rounded-full p-4 transition-transform hover:scale-110"
                  aria-label="Lire la vidéo"
                >
                  <Play className="h-8 w-8 fill-elimyt-blue" />
                </button>
              </div>
            </>
          )}
        </AspectRatio>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{testimonial.title}</h3>
        <p className="text-foreground/70 mb-4">
          {testimonial.clientName}
          {testimonial.businessName && `, ${testimonial.businessName}`}
        </p>
        <Button 
          onClick={onContactClick}
          variant="default" 
          className="w-full"
        >
          <span className="flex items-center justify-center">
            {callToActionText}
            <ExternalLink className="ml-2 h-4 w-4" />
          </span>
        </Button>
      </div>
    </div>
  );
};

export default TestimonialVideoCard;

